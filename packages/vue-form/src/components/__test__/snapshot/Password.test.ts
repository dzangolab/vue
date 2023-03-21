import i18nPlugin, { useLocaleStore } from "@dzangolab/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Password from "../../Password.vue";
import appConfig from "../config";

describe("Password", () => {
  const { setLocale } = useLocaleStore(appConfig.slug);

  setLocale("en");

  it("matches snapshot", () => {
    const wrapper = mount(Password, {
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
        label: "Password",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
