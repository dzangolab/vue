import { prependMessages } from "@dzangolab/vue3-i18n";
import mitt from "mitt";
import { inject } from "vue";

import messages from "./locales/messages.json";
import updateRouter from "./router";
import userStore from "./store";
import initSupertokens from "./supertokens";

import type { DzangolabVueUserPluginOptions } from "./types";
import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";
import type { App, Plugin } from "vue";

const __dzangolabVueUserTranslations = Symbol.for(
  "dzangolab.vue-user.translations",
);

const emitter = mitt();

const plugin: Plugin = {
  install: (app: App, options: DzangolabVueUserPluginOptions): void => {
    updateRouter(options.router, options.config?.user?.routes);

    initSupertokens(options.config);

    const translations = options?.translations
      ? prependMessages(messages, options.translations)
      : messages;

    app.provide(__dzangolabVueUserTranslations, translations);

    if (options && options.notification) {
      emitter.on("notify", (message: object | string | unknown) => {
        options.notification?.(message);
      });
    }
  },
};

const useTranslations = () => {
  return inject<LocaleMessages<VueMessageType>>(
    __dzangolabVueUserTranslations,
    messages,
  );
};

export default plugin;

export { userStore, useTranslations, emitter };

export * from "./components";

export * from "./layouts";

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
