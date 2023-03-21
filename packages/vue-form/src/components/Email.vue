<template>
  <div class="field email">
    <label v-if="label" for="email">
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
import { useI18n } from "@dzangolab/vue3-i18n";
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";

import messages from "../locales/message.json";
import { emailSchema } from "../schemas";

import type { EmailErrorMessages, IsEmailOptions } from "../types";
import type { PropType } from "vue";

const { t } = useI18n({ messages });

const props = defineProps({
  errorMessages: {
    default: () => {
      return {
        invalid: "",
        required: "",
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
});

defineEmits(["update:modelValue"]);

const translatedErrorMessages = {
  invalid: props.errorMessages.invalid
    ? props.errorMessages.invalid
    : t("validation.errors.email.invalid"),
  required: props.errorMessages.required
    ? props.errorMessages.required
    : t("validation.errors.email.required"),
};

const fieldSchema = toFieldValidator(
  emailSchema(translatedErrorMessages, props.options)
);
</script>
