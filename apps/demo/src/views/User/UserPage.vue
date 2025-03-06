<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page :title="title" :sub-title="subTitle">
        <template #toolbar>
          <slot name="toolbar"></slot>
        </template>
        <slot></slot>
      </Page>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UserPage",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Sidebar } from "@dzangolab/vue3-layout";

import type { PropType } from "vue";

defineProps({
  subTitle: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
  title: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
});

const { t } = useI18n();

const menu = [
  {
    name: "Get started",
    routeName: "",
  },
  {
    name: t("user.label.invitationForm"),
    routeName: "invitationForm",
  },
  {
    name: t("user.label.invitationModal"),
    routeName: "invitationModal",
  },
  {
    name: t("user.label.invitationTable"),
    routeName: "invitationTable",
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>
