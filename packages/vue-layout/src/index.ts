import "./assets/css/index.css";

import { prependMessages } from "@dzangolab/vue3-i18n";
import { inject } from "vue";

import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import Copyright from "./components/Copyright.vue";
import Logo from "./components/Logo.vue";
import MainMenu from "./components/MainMenu.vue";
import Layout from "./Layout.vue";
import BasicLayout from "./layouts/BasicLayout.vue";
import NullLayout from "./layouts/NullLayout.vue";
import messages from "./locales/messages.json";

import type {
  DzangolabVue3LayoutConfig,
  DzangolabVue3LayoutPluginOptions,
  LayoutType,
} from "./types";
import type { App } from "vue";

declare module "@dzangolab/vue3-config" {
  interface AppConfig {
    layout?: DzangolabVue3LayoutConfig;
  }
}

declare module "vue-router" {
  interface RouteMeta {
    layout?: LayoutType;
  }
}

const __dzangolabVueLayoutTranslations = Symbol.for(
  "dzangolab.vue-layout.translations",
);

const useTranslations = () => {
  return inject(__dzangolabVueLayoutTranslations, messages);
};

const plugin = {
  install: (app: App, options: DzangolabVue3LayoutPluginOptions): void => {
    app.component("Layout", Layout);

    const translations = options?.translations
      ? prependMessages(messages, options.translations)
      : messages;

    app.provide(__dzangolabVueLayoutTranslations, translations);
  },
};

export default plugin;

export {
  AppFooter,
  AppHeader,
  BasicLayout,
  Copyright,
  Layout,
  Logo,
  MainMenu,
  NullLayout,
  useTranslations,
};

export type {
  DzangolabVue3LayoutConfig,
  DzangolabVue3LayoutPluginOptions,
  LayoutType,
  MenuItem,
} from "./types";
