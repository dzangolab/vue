import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ConfirmationModal from "../../Index.vue";

describe("ConfirmationModal", () => {
  it("matches snapshot", () => {
    const wrapper = mount(ConfirmationModal, {
      props: {
        divider: true,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
