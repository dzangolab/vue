<template>
  <div :class="`field ${name}`">
    <label v-if="label" :for="name">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      :model-value="modelValue"
      :name="name"
      :rules="fieldSchema"
      @input="onInput"
    >
      <textarea
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        :cols="cols"
        :disabled="disabled"
        :placeholder="placeholder"
        :rows="rows"
        tabindex="0"
        type="textarea"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "TextareaInput",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import { textSchema } from "../schemas";

import type { TextErrorMessages, IsTextOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  cols: {
    default: undefined,
    required: false,
    type: Number as PropType<number | undefined>,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  errorMessages: {
    default: () => {
      return {
        invalid: "Please provide a valid input data",
        required: "The field is required",
      };
    },
    required: false,
    type: Object as PropType<TextErrorMessages>,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: "",
    type: String as PropType<string | number | string[] | undefined>,
  },
  name: {
    default: "text",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<IsTextOptions>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  rows: {
    default: undefined,
    required: false,
    type: Number as PropType<number | undefined>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = toFieldValidator(
  Object.keys(props.schema).length
    ? props.schema
    : textSchema(props.errorMessages, props.options),
);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  emit("update:modelValue", value);
};
</script>

<style lang="css">
.field textarea {
  --_input-field-textarea-height: var(--textarea-height, unset);
  --_input-field-textarea-resize: var(--textarea-resize, none);
  --_input-field-textarea-width: var(--textarea-width, 100%);

  height: var(--_input-field-textarea-height);
  max-width: 100%;
  resize: var(--_input-field-textarea-resize);
  width: var(--_input-field-textarea-width);
}
</style>
