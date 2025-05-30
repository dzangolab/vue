<template>
  <div :class="`field ${name}`">
    <label v-if="label" :for="name">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
    >
      <MultiSelect
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid && fieldSchema,
        }"
        :disabled="disabled"
        :enable-search="enableSearch"
        :has-sorted-options="hasSortedOptions"
        :model-value="modelValue"
        :multiple="multiple"
        :options="options"
        :placeholder="placeholder"
        :show-remove-selection="showRemoveSelection"
        tabindex="0"
        @update:model-value="onSelect"
      >
        <template
          v-for="(option, index) in options"
          :key="`${index}-${option.label}`"
          #[option.value]
        >
          <slot :name="option.value"></slot>
        </template>
      </MultiSelect>
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "SelectInput",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { computed } from "vue";
import { z } from "zod";

import MultiSelect from "./Select.vue";

import type { SelectOption } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  enableSearch: Boolean,
  hasSortedOptions: {
    default: true,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  maxSelection: {
    default: undefined,
    type: Number as PropType<number | undefined>,
  },
  minSelection: {
    default: undefined,
    type: Number as PropType<number | undefined>,
  },
  modelValue: {
    default: () => null,
    required: false,
    type: [Boolean, Number, String, Array] as PropType<
      boolean | number | string | (number | string)[]
    >,
  },
  multiple: {
    default: false,
    type: Boolean,
  },
  name: {
    default: "select",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    required: true,
    type: Array as PropType<SelectOption[]>,
  },
  placeholder: {
    default: undefined,
    type: String,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  searchPlaceholder: {
    default: undefined,
    type: String,
  },
  showRemoveSelection: {
    default: true,
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

let fieldSchema: object;

const activeOptions = computed(() =>
  props.options.filter((option) => !option.disabled),
);

if (Object.keys(props.schema).length) {
  fieldSchema = toFieldValidator(props.schema);
} else if ((props.maxSelection || props.minSelection) && props.multiple) {
  const max = props.maxSelection ?? 0;
  const min = props.minSelection ?? 0;
  const currentLength = activeOptions.value.length;

  const minValue =
    min > currentLength
      ? currentLength
      : props.maxSelection && max < min
        ? max
        : min;
  const maxValue = props.maxSelection ? Math.max(min, max) : undefined;

  const arraySchema = z.array(z.string()).refine(
    (value) => {
      return (
        (!maxValue || value.length <= maxValue) &&
        (!minValue || value.length >= minValue)
      );
    },
    {
      message: `Please select ${
        minValue !== maxValue
          ? `between ${minValue} and ${maxValue ?? "available"}`
          : minValue
      } options`,
    },
  );

  fieldSchema = toFieldValidator(arraySchema);
}

const onSelect = (value: string | number | []) => {
  emit("update:modelValue", value);
};
</script>
