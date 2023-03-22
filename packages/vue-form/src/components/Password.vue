<template>
  <div class="field password">
    <label v-if="label" for="password">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="modelValue"
      :name="name"
      :rules="fieldSchema"
    >
      <input
        v-bind="field"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        tabindex="0"
        type="password"
      />
      <button>
        <Eye :active="true" />
      </button>
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

import Eye from "./Eye.vue";
import { passwordSchema } from "../schemas";

import type { PasswordErrorMessages, StrongPasswordOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
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
});

defineEmits(["update:modelValue"]);

const fieldSchema = toFieldValidator(
  passwordSchema(
    props.errorMessages,
    props.options as StrongPasswordOptions & { returnScore: false | undefined }
  )
);
</script>
