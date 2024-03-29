import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Index from "../../Index.vue";

describe("Accordion", () => {
  it("renders correctly with slot", () => {
    const wrapper = mount(Index, {
      slots: {
        default: `
          <div title="Subpane 1">
            <p>Subpane 1 content</p>
          </div>
          <div title="Subpane 2">
            <p>Subpane 2 content</p>
          </div>
          <div title="Subpane 3">
            <p>Subpane 3 content</p>
          </div>
        `,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const wrapper = mount(Index, {
      props: {
        defaultIndex: 1,
        direction: "horizontal",
      },
      slots: {
        default: `
          <div title="Subpane 1">
            <p>Subpane 1 content</p>
          </div>
          <div title="Subpane 2">
            <p>Subpane 2 content</p>
          </div>
          <div title="Subpane 3">
            <p>Subpane 3 content</p>
          </div>
        `,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
