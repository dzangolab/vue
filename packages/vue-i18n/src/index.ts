import { createI18n as baseCreateI18n, useI18n } from "vue-i18n";

import LocaleSwitcher from "./locale-switcher/Index.vue";
import useLocaleStore from "./store";
import { getLocaleNames, getPreferredLocale, prependMessages } from "./utils";

import type { AppConfig } from "@dzangolab/vue3-config";
import type { App, Plugin } from "vue";
import type { I18nOptions, LocaleMessages, VueMessageType } from "vue-i18n";

const createI18n = (options: DzangolabVueI18nPluginOptions): Plugin => {
  const i18nOptions = options.config.i18n;
  const slug = options.config.slug;

  const { getLocale, setLocale } = useLocaleStore(slug);

  const locale = getLocale();

  if (!locale) {
    const preferred = getPreferredLocale(
      navigator.languages,
      i18nOptions.supportedLocales,
    );

    setLocale(preferred);
  }

  const messages = prependMessages(
    getLocaleNames(i18nOptions.supportedLocales),
    i18nOptions?.messages,
  );

  const i18n = baseCreateI18n({
    ...i18nOptions,
    globalInjection: true,
    legacy: false,
    locale,
    messages,
  });

  return i18n;
};

const plugin = {
  install: (app: App, options: { config: AppConfig }): void => {
    const i18n = createI18n(options);

    app.use(i18n);
  },
};

type DzangolabI18nOptions = I18nOptions & {
  supportedLocales: string[];
};

interface DzangolabVueI18nPluginOptions {
  config: AppConfig;
}

declare module "@dzangolab/vue3-config" {
  export interface AppConfig {
    i18n: DzangolabI18nOptions;
  }
}

export default plugin;

export {
  createI18n,
  getPreferredLocale,
  LocaleSwitcher,
  prependMessages,
  useI18n,
  useLocaleStore,
};

export type {
  DzangolabI18nOptions,
  DzangolabVueI18nPluginOptions,
  LocaleMessages,
  VueMessageType,
};
