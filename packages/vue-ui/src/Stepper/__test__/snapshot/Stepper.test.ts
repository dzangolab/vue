import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Stepper from "../../Index.vue";

describe("Stepper", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Stepper, {
      props: {
        steps: [
          {
            content: "This is first step.",
            label: "Step 1",
            step: "1",
          },
          {
            content: "This is second step.",
            label: "Step 2",
            step: "2",
          },
          {
            content: "This is third step.",
            label: "Step 3",
            step: "3",
          },
        ],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
