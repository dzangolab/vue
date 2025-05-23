<template>
  <Page
    :loading="loading"
    :title="t('user.emailVerification.verifyEmail')"
    centered
    class="email-verification"
  >
    <p>{{ message }}</p>
  </Page>
</template>

<script lang="ts">
export default {
  name: "VerifyEmail",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Page } from "@dzangolab/vue3-ui";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { EMAIL_VERIFICATION } from "../constant";
import { useTranslations, emitter } from "../index";
import useUserStore from "../store";

const route = useRoute();

const messages = useTranslations();

const { t } = useI18n({ messages });

const { user, verifyEmail } = useUserStore();

const loading = ref<boolean>(false);
const status = ref<string>();

const message = computed(() => {
  if (loading.value) {
    return t("user.emailVerification.messages.verifyingEmail");
  }

  let message = "";

  switch (status.value) {
    case EMAIL_VERIFICATION.OK:
      message = t("user.emailVerification.messages.verify.success");
      break;
    case EMAIL_VERIFICATION.EMAIL_VERIFICATION_INVALID_TOKEN_ERROR:
      message = t("user.emailVerification.messages.verify.invalidToken");
      break;
    default:
      message = t("user.emailVerification.messages.resend.error");
  }

  return message;
});

onMounted(() => {
  if (user) {
    loading.value = true;

    const token =
      typeof route.query.token === "string"
        ? route.query.token
        : typeof route.params.token === "string"
          ? route.params.token
          : undefined;

    verifyEmail(token)
      .then((response) => {
        status.value = response.status;

        if (status.value === EMAIL_VERIFICATION.OK) {
          emitter.emit("notify", {
            text: t("user.emailVerification.messages.verify.success"),
            type: "success",
          });
        } else {
          emitter.emit("notify", {
            text: t("user.emailVerification.messages.verify.invalidToken"),
            type: "error",
          });
        }
      })
      .catch(() => {
        emitter.emit("notify", {
          text: t("user.emailVerification.messages.resend.error"),
          type: "error",
        });
      })
      .finally(() => {
        loading.value = false;
      });
  }
});
</script>

<style lang="css">
@import "../assets/css/verify-email.css";
</style>
