<template>
  <Message
    v-if="errorMessage"
    :message="t(`user.profile.errors.${errorMessage}`)"
    enable-close
    severity="danger"
    @close="errorMessage = undefined"
  />

  <Form
    ref="prefabsTechVueUpdateProfile"
    class="profile-form"
    @submit="onSubmit"
  >
    <Input
      v-model="formValues.givenName"
      :label="t('user.profile.form.firstName.label')"
      :placeholder="t('user.profile.form.firstName.placeholder')"
      name="givenName"
      type="text"
    />

    <Input
      v-model="formValues.surname"
      :label="t('user.profile.form.lastName.label')"
      :placeholder="t('user.profile.form.lastName.placeholder')"
      name="surname"
      type="text"
    />

    <FormActions
      :loading="loading || !isDirty"
      :submit-label="t('user.profile.form.actions.update')"
      alignment="left"
      @cancel="onCancel"
    />
  </Form>
</template>

<script lang="ts">
export default {
  name: "ProfileForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { Input, Form, FormActions } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message } from "@prefabs.tech/vue3-ui";
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";

import { updateUserProfile } from "../../api/user";
import { emitter, useTranslations } from "../../index";
import useUserStore from "../../store";

import type { UpdateProfileInputType } from "../../types";

const config = useConfig();

const messages = useTranslations();
const { t } = useI18n({ messages });

const userStore = useUserStore();
const setUser = userStore.setUser;
const { user } = storeToRefs(userStore);

const formValues = reactive({
  givenName: user.value?.givenName || "",
  surname: user.value?.surname || "",
});

const prefabsTechVueUpdateProfile = ref();
const errorMessage = ref<string>();
const loading = ref<boolean>(false);

const isDirty = computed(() => {
  return (
    formValues.givenName !== user.value?.givenName ||
    formValues.surname !== user.value?.surname
  );
});

const onCancel = () => {
  prefabsTechVueUpdateProfile.value.resetForm();

  errorMessage.value = undefined;
};

const onSubmit = async (data: UpdateProfileInputType) => {
  loading.value = true;

  updateUserProfile(data, config.apiBaseUrl)
    .then((response) => {
      if ("data" in response) {
        emitter.emit("notify", {
          text: t("user.profile.form.messages.success"),
          type: "success",
        });

        setUser(response.data);
      } else {
        emitter.emit("notify", {
          text: t("user.profile.form.messages.error"),
          type: "error",
        });
      }
    })
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style lang="css">
@import "../../assets/css/profile/profile-form.css";
</style>
