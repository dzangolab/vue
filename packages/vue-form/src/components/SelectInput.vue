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
        :show-remove-option="showRemoveOption"
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
  modelValue: {
    default: () => null,
    required: false,
    type: [Number, String, Array] as PropType<
      number | string | (number | string)[]
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
  showRemoveOption: {
    default: true,
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const onSelect = (value: string | number | []) => {
  emit("update:modelValue", value);
};
</script>
