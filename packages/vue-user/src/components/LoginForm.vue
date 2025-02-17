<template>
  <Form @submit="onSubmit">
    <Email
      v-model="credentials.email"
      :error-messages="{
        invalid: t('user.login.form.email.errors.invalid'),
        required: t('user.login.form.email.errors.required'),
      }"
      :label="t('user.login.form.email.label')"
      :placeholder="t('user.login.form.email.placeholder')"
    />

    <div class="field username">
      <label for="username"> Username </label>
      <Field
        v-slot="{ field, meta }"
        :model-value="credentials.username"
        :name="'username'"
      >
        <input
          v-bind="field"
          :class="{
            invalid: meta.touched && !meta.valid,
            valid: meta.dirty && meta.valid,
          }"
          :disabled="false"
          :placeholder="'Username'"
          tabindex="0"
          type="text"
        />
        <ErrorMessage :name="'username'" />
      </Field>
    </div>

    <Password
      v-model="credentials.password"
      :error-messages="{
        required: t('user.login.form.password.errors.required'),
        weak: t('user.login.form.password.errors.invalid'),
      }"
      :label="t('user.login.form.password.label')"
      :options="{ minLength: 6 }"
    />

    <div class="actions">
      <LoadingButton
        :label="t('user.login.form.actions.submit')"
        :loading="loading"
        tabindex="0"
      />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "LoginForm",
};
</script>

<script setup lang="ts">
// import { AppConfig, useConfig } from "@dzangolab/vue3-config";
import { Email, Password } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingButton } from "@dzangolab/vue3-ui";
import { ErrorMessage, Field, Form } from "vee-validate";

import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";

// const config = useConfig() as AppConfig;

const messages = useTranslations();

const { t } = useI18n({ messages });

let credentials = {
  email: undefined,
  password: undefined,
  username: undefined,
} as Partial<LoginCredentials>;

const emit = defineEmits(["submit"]);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};

// const onUsernameInput = (event: Event) => {
//   const value = (event.target as HTMLInputElement).value;

//   emit("update:modelValue", value);
// };

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
