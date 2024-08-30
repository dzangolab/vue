import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import DatePicker from "../../DatePicker.vue";

describe("DatePicker", () => {
  it("matches snapshot", () => {
    const wrapper = mount(DatePicker, {
      global: {
        stubs: {
          VueDatePicker: true,
        },
      },
      props: {
        label: "Input",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});