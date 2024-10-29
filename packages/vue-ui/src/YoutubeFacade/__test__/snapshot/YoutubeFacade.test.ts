import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import YoutubeFacade from "../../Index.vue";

describe("YoutubeFacade", () => {
  it("matches snapshot", () => {
    const wrapper = mount(YoutubeFacade, {
      props: {
        videoLink: "https://www.youtube.com/watch?v=YrxBCBibVo0",
        videoToken: "YrxBCBibVo0",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
