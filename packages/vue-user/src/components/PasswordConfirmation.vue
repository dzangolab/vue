<template>
  <Form>
    <Field name="password">
      <Password
        :label="label.password"
        :error-messages="{
          required: t('user.signup.form.password.errors.required'),
          weak: t('user.signup.form.password.errors.weak'),
        }"
        :options="config?.user?.options?.password"
        name="password"
      />
    </Field>
    <Field name="confirmation">
      <Password :label="label.confirmation" name="confirmation" />
    </Field>
  </Form>
</template>

<script lang="ts">
export default {
  name: "PasswordConfirmation",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { Password } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { Field, Form } from "vee-validate";

import { useTranslations } from "../index";

const messages = useTranslations();

const config = useConfig();

const { t } = useI18n({ messages });

defineProps({
  label: {
    default: () => {
      return {
        password: "Password",
        confirmation: "Confirmation",
      };
    },
    type: Object,
    required: true,
  },
});
</script>
