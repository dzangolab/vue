<template>
  <div class="field password">
    <label v-if="label" for="password">
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
        type="password"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "Password",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import { passwordSchema } from "../schemas";

import type { PasswordErrorMessages, StrongPasswordOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  errorMessages: {
    default: () => {
      return {
        required: "A password is required",
        weak: "This password is too weak",
      };
    },
    required: false,
    type: Object as PropType<PasswordErrorMessages>,
  },
  label: {
    default: null,
    required: false,
    type: String as PropType<string | null | undefined>,
  },
  modelValue: {
    default: null,
    required: false,
    type: String as PropType<string | null | undefined>,
  },
  name: {
    default: "password",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<StrongPasswordOptions>,
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
    : passwordSchema(
        props.errorMessages,
        props.options as StrongPasswordOptions & {
          returnScore: false | undefined;
        },
      ),
);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  emit("update:modelValue", value);
};
</script>
