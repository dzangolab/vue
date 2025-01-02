<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page :sub-title="subTitle" :title="title">
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
  name: "FormPage",
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
    name: t("form.label.getStarted"),
    routeName: "",
  },
  {
    name: t("form.label.dateTime"),
    children: [
      {
        name: t("form.label.datePicker"),
        routeName: "datePicker",
      },
      {
        name: t("form.label.daysInput"),
        routeName: "daysInput",
      },
    ],
  },
  {
    name: t("form.label.input"),
    children: [
      {
        name: t("form.label.email"),
        routeName: "emailInput",
      },
      {
        name: t("form.label.input"),
        routeName: "input",
      },
      {
        name: t("form.label.number"),
        routeName: "numberInput",
      },
      {
        name: t("form.label.password"),
        routeName: "passwordInput",
      },
      {
        name: t("form.label.textInput"),
        routeName: "textInput",
      },
      {
        name: t("form.label.textarea"),
        routeName: "textareaInput",
      },
    ],
  },
  {
    name: t("form.label.selection"),
    children: [
      {
        name: t("form.label.radio"),
        routeName: "radioInput",
      },
      {
        name: t("form.label.select"),
        routeName: "selectInput",
      },
      {
        name: t("form.label.switch"),
        routeName: "switchInput",
      },
    ],
  },
  {
    name: t("form.label.misc"),
    children: [
      {
        name: t("form.label.editableContent"),
        routeName: "editableContent",
      },
      {
        name: t("form.label.typeahead"),
        routeName: "typeahead",
      },
    ],
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>
