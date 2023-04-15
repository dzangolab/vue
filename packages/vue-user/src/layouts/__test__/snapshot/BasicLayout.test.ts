import configPlugin from "@dzangolab/vue3-config";
import i18nPlugin from "@dzangolab/vue3-i18n";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import BasicLayout from "../../BasicLayout.vue";
import appConfig from "../config";

import type { VueWrapper } from "@vue/test-utils";

describe("BasicLayout", () => {
  it("matches snapshot", () => {
    const pinia = createPinia();

    const wrapper: VueWrapper = shallowMount(BasicLayout, {
      global: {
        plugins: [
          pinia,
          [
            configPlugin,
            {
              config: appConfig,
            },
          ],
          [
            i18nPlugin,
            {
              config: appConfig,
            },
          ],
        ],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
