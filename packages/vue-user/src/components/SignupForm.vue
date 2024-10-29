<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit">
    <Email
      v-model="credentials.email"
      :label="t('user.signup.form.email.label')"
      :placeholder="t('user.signup.form.email.placeholder')"
    />

    <Password
      v-model="credentials.password"
      :label="t('user.signup.form.password.label')"
      name="password"
    />

    <Password
      :label="t('user.signup.form.confirmation.label')"
      name="confirmation"
    />

    <div class="actions">
      <LoadingButton :label="t('user.signup.form.actions.submit')" />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "SignupForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import {
  Email,
  emailSchema,
  Password,
  passwordSchema,
} from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingButton } from "@dzangolab/vue3-ui";
import { toFormValidator } from "@vee-validate/zod";
import { Form } from "vee-validate";
import { z } from "zod";

import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";

const config = useConfig();

const messages = useTranslations();

const { t } = useI18n({ messages });

let credentials = {
  email: undefined,
  password: undefined,
} as Partial<LoginCredentials>;

const validationSchema = toFormValidator(
  z
    .object({
      email: emailSchema(
        {
          invalid: t("user.signup.form.email.errors.invalid"),
          required: t("user.signup.form.email.errors.required"),
        },
        config?.user?.options?.email,
      ),
      password: passwordSchema(
        {
          required: t("user.signup.form.password.errors.required"),
          weak: t("user.signup.form.password.errors.weak"),
        },
        config?.user?.options?.password,
      ),
      confirmation: passwordSchema(
        {
          required: t("user.signup.form.password.errors.required"),
          weak: t("user.signup.form.password.errors.weak"),
        },
        { minLength: 0 },
      ),
    })
    .refine(
      (data) => {
        return data.password === data.confirmation;
      },
      {
        message: t("user.signup.form.confirmation.errors.match"),
        path: ["confirmation"],
      },
    ),
);

const emit = defineEmits(["submit"]);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};
</script>
