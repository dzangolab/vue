import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Eye from "../../Eye.vue";
import Password from "../../Password.vue";

describe("Password", () => {
  const wrapper = mount(Password, {
    global: {
      components: { Eye },
    },
    slots: {
      "active-icon": "<div data-testid='active-icon'>Active Icon</div>",
      "inactive-icon": "<div data-testid='inactive-icon'>Inactive Icon</div>",
    },
  });

  it("should change icon on click", async () => {
    const eye = wrapper.findComponent(Eye);

    expect(eye.find("[data-testid='inactive-icon']").exists()).toBe(true);
    await eye.trigger("click");

    expect(eye.find("[data-testid='active-icon']").exists()).toBe(true);
  });
});
