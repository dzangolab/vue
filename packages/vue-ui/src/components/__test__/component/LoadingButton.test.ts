import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingButton from "../../LoadingButton.vue";

describe("LoadingButton", () => {
  const options = [true, false];

  for (const loading of options) {
    const wrapper = mount(LoadingButton, {
      props: {
        label: "Login",
        loading,
      },
    });

    it(`should show loading component based on Loading props: ${loading}`, () => {
      expect(wrapper.find(".loading-button > .loading").exists()).toBe(loading);
    });

    it(`should be disabled based on loading props: ${loading}`, async () => {
      expect(wrapper.find(".loading-button").attributes().disabled).toBe(
        loading ? "" : undefined,
      );
    });
  }
});
