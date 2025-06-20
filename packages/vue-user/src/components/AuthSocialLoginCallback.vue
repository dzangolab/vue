<template>
  <LoadingPage :loading="loading" />
</template>

<script lang="ts">
export default {
  name: "AuthSocialLoginCallback",
};
</script>

<script lang="ts" setup>
import { useConfig } from "@dzangolab/vue3-config";
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingPage } from "@dzangolab/vue3-ui";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { emitter, useTranslations } from "../index";
import useUserStore from "../store";
import { verifySessionRoles } from "../supertokens";

import type { UserType } from "../types";
import type { AppConfig } from "@dzangolab/vue3-config";

const config = useConfig() as AppConfig;

const messages = useTranslations();
const { t } = useI18n({ messages });

const loading = ref(false);
const router = useRouter();

const { setUser } = useUserStore();

onMounted(async () => {
  loading.value = true;

  const response = await ThirdPartyEmailPassword.thirdPartySignInAndUp({});

  if (response.status !== "OK") {
    emitter.emit("notify", {
      text: t("user.login.errors.SOMETHING_WRONG"),
      type: "error",
    });

    router.push({ name: "login" });

    return;
  }

  if (response?.user) {
    const supportedRoles = config?.user?.supportedRoles;

    if (
      (supportedRoles && (await verifySessionRoles(supportedRoles))) ||
      !supportedRoles?.length
    ) {
      setUser(response.user as UserType);

      emitter.emit("notify", {
        text: t("user.login.messages.success"),
        type: "success",
      });

      router.push({ name: "home" });
    } else {
      emitter.emit("notify", {
        text: t("user.login.messages.error"),
        type: "error",
      });

      router.push({ name: "login" });
    }
  }

  loading.value = false;
});
</script>
