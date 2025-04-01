import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Card from "../../Index.vue";

describe("Card", () => {
  const propsData = {
    title: "Test card title"
  };

  const getWrapper = (props = {}, slots = {}) => {
    return mount(Card, {
      props,
      slots,
    });
  };

  it("should render the card title correctly", () => {
    const wrapper = getWrapper(propsData);

    expect(wrapper.find(".card-title").text()).toEqual(propsData.title);
  });

  it("should render slot content when passed", () => {
    const slotData = {
      default: "This is test card content.",
      header: `<h3 class="header">Test header</h3>`,
      footer: "Footer content"
    };

    const wrapper = getWrapper({}, slotData);
    
    expect(wrapper.find(".card>header").html()).toContain(slotData.header);
    expect(wrapper.find(".card>.card-body").html()).toContain(slotData.default);
    expect(wrapper.find(".card>footer").html()).toContain(slotData.footer);
  });

  it("should not render title from props if header slot passed", () => {
    const slotData = {
      header: `<h3 class="header">Test header</h3>`,
    };

    const wrapper = getWrapper(propsData, slotData);
    
    expect(wrapper.find(".card>header>h3.card-title").exists()).toBeFalsy;
    expect(wrapper.find(".card>header").html()).toContain(slotData.header);
  });

  it("should not render header if title and header slot are missing", () => {
    const cardWrapper = getWrapper();
    
    expect(cardWrapper.find("header").exists()).toBeFalsy;
  });

  it("should not render footer if footer slot are missing", () => {
    const cardWrapper = getWrapper();
    
    expect(cardWrapper.find("footer").exists()).toBeFalsy;
  });
});
