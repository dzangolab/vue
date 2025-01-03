<template>
  <Form @submit="onSubmit">
    <Email label="new Email" name="email" />

    <FormActions :loading="loading" />
  </Form>
</template>

<script lang="ts">
export default {
  name: "UpdateEmailForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { Email, Form, FormActions } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { ref } from "vue";

import { getMe } from "../../api/user";
import { emitter, useTranslations } from "../../index";
import useUserStore from "../../store";
import { changeEmail } from "../../supertokens";

type UpdateEmailFormData = {
  email: string;
};

const config = useConfig();
const messages = useTranslations();
const { setUser, user } = useUserStore();
const { t } = useI18n({ messages });

const loading = ref<boolean>(false);

const onSubmit = async (data: UpdateEmailFormData) => {
  loading.value = true;

  try {
    const response = await changeEmail(data.email, config.apiBaseUrl);
    switch (response?.status) {
      case "OK": {
        const userInfo = await getMe(config.apiBaseUrl);
        const isSameEmail = userInfo.data.email === user?.email;

        if (config.user?.features?.signUp?.emailVerification && isSameEmail) {
          emitter.emit("notify", {
            text: "A verification link has been sent to your email.",
            type: "success",
          });
        } else {
          setUser(userInfo.data);
          emitter.emit("notify", {
            text: t("profile.accountInfo.messages.success"),
            type: "success",
          });
        }

        break;
      }
      case "EMAIL_ALREADY_EXISTS_ERROR": {
        emitter.emit("notify", {
          text: t("profile.accountInfo.messages.alreadyExist"),
          type: "danger",
        });
        break;
      }
      case "EMAIL_SAME_AS_CURRENT_ERROR": {
        emitter.emit("notify", {
          text: t("profile.accountInfo.messages.duplicate"),
          type: "danger",
        });
        break;
      }
      case "EMAIL_INVALID_ERROR": {
        emitter.emit("notify", {
          text: t("profile.accountInfo.messages.invalid"),
          type: "danger",
        });
        break;
      }
      case "EMAIL_FEATURE_DISABLED_ERROR": {
        emitter.emit("notify", {
          text: t("profile.accountInfo.messages.disabled"),
          type: "danger",
        });
        break;
      }
      default: {
        emitter.emit("notify", {
          text: t("profile.accountInfo.messages.error"),
          type: "danger",
        });
        break;
      }
    }

    loading.value = false;
  } catch (error) {
    emitter.emit("notify", {
      text: t("profile.accountInfo.messages.error"),
      type: "danger",
    });

    loading.value = false;
  }
};
</script>
