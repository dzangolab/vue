import configPlugin from "@dzangolab/vue3-config";
import i18nPlugin, { useLocaleStore } from "@dzangolab/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, it, expect } from "vitest";

import SignInUpMenu from "../../SignInUpMenu.vue";
import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

describe("SignInUpMenu", () => {
  const pinia = createPinia();

  const { setLocale } = useLocaleStore(appConfig.slug);

  const locales = ["en", "fr"];

  const config = {
    ...appConfig,
    user: {
      routes: {
        signup: {
          disabled: true,
        },
      },
    },
  };

  for (const locale of locales) {
    setLocale(locale);

    const wrapper: VueWrapper = mount(SignInUpMenu, {
      global: {
        plugins: [
          pinia,
          [
            configPlugin,
            {
              config: config,
            },
          ],
          [
            i18nPlugin,
            {
              config: config,
            },
          ],
        ],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    it("matches snapshot in " + locale, () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
