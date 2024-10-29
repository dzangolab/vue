import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingPage from "../../Index.vue";

describe("LoadingPage", () => {
  it("matches snapshot", () => {
    const wrapper = mount(LoadingPage, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
