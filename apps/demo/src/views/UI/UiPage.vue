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
  name: "UiPage",
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
    name: t("ui.getStarted"),
    routeName: "",
  },
  {
    name: t("ui.buttons"),
    children: [
      {
        name: t("ui.button.title"),
        routeName: "button",
      },
    ],
  },
  {
    name: t("ui.menu"),
    children: [
      {
        name: t("ui.dropdown.title"),
        routeName: "dropdown",
      },
    ],
  },
  {
    name: t("ui.messages"),
    children: [
      {
        name: t("ui.message.title"),
        routeName: "message",
      },
    ],
  },
  {
    name: t("ui.overlay"),
    children: [
      {
        name: t("ui.confirmationModal.title"),
        routeName: "confirmationModal",
      },
      {
        name: t("ui.modal.title"),
        routeName: "modal",
      },
      {
        name: t("ui.popup.title"),
        routeName: "popup",
      },
      {
        name: t("ui.tooltip.title"),
        routeName: "tooltip",
      },
    ],
  },
  {
    name: t("ui.panel"),
    children: [
      {
        name: t("ui.accordion.title"),
        routeName: "accordion",
      },
      {
        name: t("ui.card.title"),
        routeName: "card",
      },
      {
        name: t("ui.stepper.title"),
        routeName: "stepper",
      },
      {
        name: t("ui.tabbed-panel.title"),
        routeName: "tabbedPanel",
      },
    ],
  },
  {
    name: t("ui.misc"),
    children: [
      {
        name: t("ui.badge.title"),
        routeName: "badge",
      },
      {
        name: t("ui.divider.title"),
        routeName: "divider",
      },
      {
        name: t("ui.gridContainer.title"),
        routeName: "gridContainer",
      },
      {
        name: t("ui.loading.title"),
        routeName: "loadingPage",
      },
      {
        name: t("ui.sortableList.title"),
        routeName: "sortableList",
      },
      {
        name: t("ui.typography.title"),
        routeName: "typography",
      },
      {
        name: t("ui.youtubeFacade.title"),
        routeName: "youtubeFacade",
      },
    ],
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>
