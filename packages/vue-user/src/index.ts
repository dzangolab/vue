import { prependMessages } from "@dzangolab/vue3-i18n";
import { inject } from "vue";

import Logo from "./components/Logo.vue";
import SignInUpMenu from "./components/SignInUpMenu.vue";
import UserMenu from "./components/UserMenu.vue";
import BasicLayout from "./layouts/BasicLayout.vue";
import messages from "./locales/messages.json";
import updateRouter from "./router";
import initSupertokens from "./supertokens";

import type { DzangolabVueUserPluginOptions } from "./types";
import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";
import type { App, Plugin } from "vue";

const __dzangolabVueUserTranslations = Symbol.for(
  "dzangolab.vue-user.translations"
);

const plugin: Plugin = {
  install: (app: App, options: DzangolabVueUserPluginOptions): void => {
    updateRouter(options.router, options.config?.user?.routes);

    initSupertokens(options.config);

    const translations = options?.translations
      ? prependMessages(messages, options.translations)
      : messages;

    app.provide(__dzangolabVueUserTranslations, translations);
  },
};

const useTranslations = () => {
  return inject<LocaleMessages<VueMessageType>>(
    __dzangolabVueUserTranslations,
    messages
  );
};

export default plugin;

export { BasicLayout, Logo, SignInUpMenu, UserMenu, useTranslations };

export type {
  AuthTokens,
  DzangolabVueUserConfig,
  DzangolabVueUserPluginOptions,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  RouteOverride,
  RouteOverrides,
  User,
} from "./types";
