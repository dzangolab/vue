import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TabbedPanel from "../../Index.vue";

describe("TabbedPanel", () => {
  const contents = {
    first: {
      content: "This is the first tab",
      title: "Tab 1",
    },
    second: {
      content: "This is the second tab",
      title: "Tab 2",
    },
  };

  const wrapper = mount(TabbedPanel, {
    props: {
      position: "bottom",
    },
    slots: {
      default: `
        <div title="${contents.first.title}" icon="home.svg">
          <p>${contents.first.content}</p>
        </div>
        <div title="${contents.second.title}">
          <p>${contents.second.content}</p>
        </div>
      `,
    },
  });

  it("should have the correct position", () => {
    expect(wrapper.find(".tabbed-panel").attributes("data-position")).toBe(
      "bottom",
    );
  });

  it("should show correct tab on click", async () => {
    const firstTab = wrapper.find(
      ".tabbed-panel ul[role='tablist'] li:first-child button",
    );
    await firstTab.trigger("click");

    expect(wrapper.find(".tabbed-panel .tabbed-pane p").text()).toBe(
      contents.first.content,
    );
  });

  it("should show correct tab on multiple tab click", async () => {
    const firstTab = wrapper.find(
      ".tabbed-panel ul[role='tablist'] li:first-child button",
    );
    const secondTab = wrapper.find(
      ".tabbed-panel ul[role='tablist'] li:last-child button",
    );
    await firstTab.trigger("click");
    await secondTab.trigger("click");

    expect(wrapper.find(".tabbed-panel .tabbed-pane p").text()).toBe(
      contents.second.content,
    );
  });
});
