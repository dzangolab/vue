<template>
  <div :class="`field checkbox ${name}`">
    <label v-if="label" :for="name">{{ label }}</label>
    <Field
      v-slot="{ field, meta }"
      :name="name"
      :model-value="hasOptions ? modelValue : checked"
      :rules="fieldSchema"
      @change="handleChange"
    >
      <div v-if="hasOptions" :class="`checkbox-group direction-${direction}`">
        <span
          v-for="(option, index) in options"
          :key="`${index}-${option.value}`"
        >
          <Checkbox
            v-bind="field"
            :id="`input-field-${name}-${index}`"
            :class="{ invalid: meta.touched && !meta.valid }"
            :disabled="disabled"
            :label="option.label"
            :model-value="isOptionChecked(option.value)"
            :name="`${name}-${option.label}`"
            :value="option.value"
            tabindex="0"
          />
        </span>
      </div>
      <div v-else class="single-checkbox">
        <Checkbox
          v-bind="field"
          :id="`input-field-${name}`"
          :class="{ invalid: meta.touched && !meta.valid }"
          :disabled="disabled"
          :label="inputLabel"
          :model-value="checked"
          :name="name"
          tabindex="0"
        />
      </div>
    </Field>

    <ErrorMessage :name="name" />
  </div>
</template>

<script lang="ts" setup>
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import Checkbox from "./Checkbox.vue";

import type { InputOption } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  direction: {
    default: undefined,
    type: String,
    validator: (value: string) => ["vertical", "horizontal"].includes(value),
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  checked: {
    default: false,
    type: Boolean,
  },
  modelValue: {
    default: () => [] as string[] | number[],
    type: Array as PropType<string[] | number[]>,
  },
  name: {
    default: "checkbox",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => [] as string[] | number[],
    type: Array as PropType<InputOption[]>,
  },
  inputLabel: {
    default: undefined,
    type: String as PropType<string>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | boolean>>,
  },
});

const emit = defineEmits(["update:checked", "update:modelValue"]);

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const hasOptions = Array.isArray(props.options) && props.options.length > 0;

const isOptionChecked = (value: string | number) => {
  return (
    Array.isArray(props.modelValue) &&
    (props.modelValue as (string | number)[]).includes(value)
  );
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;
  const value = target.value;
  let updatedValues = [...(props.modelValue as (string | number)[])];

  if (hasOptions) {
    if (isChecked) {
      updatedValues.push(value);
    } else {
      updatedValues = updatedValues.filter((item) => item !== value);
    }

    emit("update:modelValue", updatedValues);
  } else {
    emit("update:checked", isChecked);
  }
};
</script>

<style lang="css">
.field.checkbox > label {
  font-size: var(--form-label-font-size, 1em);
  margin-bottom: 0.75rem;
}

.field.checkbox > .checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field.checkbox > .checkbox-group.direction-horizontal {
  flex-direction: row;
  gap: 1.5rem;
}
</style>
