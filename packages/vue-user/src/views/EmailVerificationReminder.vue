<template>
  <Page
    :title="t('user.emailVerification.title')"
    centered
    class="email-verification-reminder"
  >
    <p>{{ t("user.emailVerification.messages.verifyEmail") }}</p>

    <p class="resend-email">
      {{ t("user.emailVerification.messages.resendEmailInfo") }}
      <RouterLink to="#" @click="handleResend">
        {{ t("user.emailVerification.button.label") }}
      </RouterLink>
    </p>
  </Page>
</template>

<script lang="ts">
export default {
  name: "EmailVerificationReminder",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Page } from "@dzangolab/vue3-ui";

import { EMAIL_VERIFICATION } from "../constant";
import { useTranslations, emitter } from "../index";
import useUserStore from "../store";

const messages = useTranslations();

const { t } = useI18n({ messages });

const userStore = useUserStore();
const { sendVerificationEmail } = userStore;

const handleResend = () => {
  sendVerificationEmail()
    .then((status) => {
      if (status === EMAIL_VERIFICATION.OK) {
        emitter.emit("notify", {
          text: t("user.emailVerification.messages.resend.success"),
          type: "success",
        });
      } else if (status === EMAIL_VERIFICATION.EMAIL_ALREADY_VERIFIED_ERROR) {
        emitter.emit("notify", {
          text: t("user.emailVerification.messages.resend.alreadyVerified"),
          type: "info",
        });
      }
    })
    .catch(() => {
      emitter.emit("notify", {
        text: t("user.emailVerification.messages.resend.error"),
        type: "error",
      });
    });
};
</script>

<style lang="css">
@import "../assets/css/verify-email.css";
</style>
