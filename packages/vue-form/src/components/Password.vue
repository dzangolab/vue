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
import { useI18n } from "@dzangolab/vue3-i18n";
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";

import messages from "../locales/message.json";
import { passwordSchema } from "../schemas";

import type { PasswordErrorMessages, StrongPasswordOptions } from "../types";
import type { PropType } from "vue";

const { t } = useI18n({ messages });

const props = defineProps({
  errorMessages: {
    default: () => {
      return {
        required: "",
        weak: "",
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

const translatedErrorMessages = {
  required: props.errorMessages.required
    ? props.errorMessages.required
    : t("validation.errors.password.required"),
  weak: props.errorMessages.weak
    ? props.errorMessages.weak
    : t("validation.errors.password.weak"),
};

const fieldSchema = toFieldValidator(
  passwordSchema(
    translatedErrorMessages,
    props.options as StrongPasswordOptions & { returnScore: false | undefined }
  )
);
</script>
