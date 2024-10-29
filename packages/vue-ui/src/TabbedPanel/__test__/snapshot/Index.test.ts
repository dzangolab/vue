import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SubPane from "../../../components/SubPane.vue";
import TabbedPanel from "../../Index.vue";

describe("TabbedPanel", () => {
  const wrapper = mount(TabbedPanel, {
    global: {
      components: { SubPane },
    },
    props: {
      position: "bottom",
    },
    slots: {
      default: `
        <SubPane title="Subpane 1" icon="home.svg">
          <p>Tabbed Panel 1 content</p>
        </SubPane>
        <SubPane title="Subpane 2">
          <p>Tabbed Panel 2 content</p>
        </SubPane>
      `,
    },
  });
  it("matches snapshot when there is no active tab", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("matches snapshot when there is an active tab", async () => {
    const firstTab = wrapper.find(
      ".tabbed-panel ul[role='tablist'] li:first-child button",
    );
    await firstTab.trigger("click");

    expect(wrapper.element).toMatchSnapshot();
  });
});
