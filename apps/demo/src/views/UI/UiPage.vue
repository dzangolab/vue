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

const menu = [
  {
    name: "Get started",
    routeName: "ui",
  },
  {
    name: "Accordion",
    routeName: "accordion",
  },
  {
    name: "Badge",
    routeName: "badge",
  },
  {
    name: "Button",
    routeName: "button",
  },
  {
    name: "Card",
    routeName: "card",
  },
  {
    name: "Confirmation modal",
    routeName: "confirmationModal",
  },
  {
    name: "Dropdown",
    routeName: "dropdown",
  },
  {
    name: "Loading page",
    routeName: "loadingPage",
  },
  {
    name: "Message",
    routeName: "message",
  },
  {
    name: "Modal",
    routeName: "modal",
  },
  {
    name: "Popup",
    routeName: "popup",
  },
  {
    name: "Sortable list",
    routeName: "sortableList",
  },
  {
    name: "Stepper",
    routeName: "stepper",
  },
  {
    name: "Tabbed panel",
    routeName: "tabbedPanel",
  },
  {
    name: "Tooltip",
    routeName: "tooltip",
  },
  {
    name: "Typography",
    routeName: "typography",
  },
  {
    name: "Youtube facade",
    routeName: "youtubeFacade",
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>
