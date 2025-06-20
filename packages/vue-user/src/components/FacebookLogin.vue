<template>
  <FacebookSignInButton
    :title="t('user.login.social.facebook')"
    :loading="loading"
    :base-button-options="{
      variant: 'dark',
    }"
    @click="onFacebookSignIn"
  />
</template>

<script lang="ts">
export default {
  name: "FacebookLogin",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { useI18n } from "@dzangolab/vue3-i18n";
import { FacebookSignInButton } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import { useTranslations } from "../index";
import useUserStore from "../store";

const config = useConfig();
const messages = useTranslations();
const { socialSignIn } = useUserStore();

const { t } = useI18n({ messages });

const loading = ref(false);

const emit = defineEmits(["error"]);

const onFacebookSignIn = async () => {
  loading.value = true;

  try {
    await socialSignIn(
      "facebook",
      `${config.websiteDomain}/auth/callback/facebook`,
    );
    loading.value = false;
  } catch (error) {
    emit("error", error);
    loading.value = false;
  }
};
</script>
