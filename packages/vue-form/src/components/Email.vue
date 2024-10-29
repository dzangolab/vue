<template>
  <div class="field email">
    <label v-if="label" for="email">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      :model-value="modelValue"
      :name="name"
      :rules="fieldSchema"
      @input="onInput"
    >
      <input
        v-bind="field"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        tabindex="0"
        type="email"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "Email",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import { emailSchema } from "../schemas";

import type { EmailErrorMessages, IsEmailOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  errorMessages: {
    default: () => {
      return {
        invalid: "Please provide a valid email address",
        required: "Email address is required",
      };
    },
    required: false,
    type: Object as PropType<EmailErrorMessages>,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: "",
    type: String as PropType<string | null | undefined>,
  },
  name: {
    default: "email",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<IsEmailOptions>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | object>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = toFieldValidator(
  Object.keys(props.schema).length
    ? props.schema
    : emailSchema(props.errorMessages, props.options),
);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  emit("update:modelValue", value);
};
</script>
