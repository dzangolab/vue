import i18nPlugin, { useLocaleStore } from "@dzangolab/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Email from "../../Email.vue";
import appConfig from "../config";

describe("Email", () => {
  const { setLocale } = useLocaleStore(appConfig.slug);

  setLocale("en");

  it("matches snapshot", () => {
    const wrapper = mount(Email, {
      global: {
        plugins: [
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
      props: {
        label: "Email",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
