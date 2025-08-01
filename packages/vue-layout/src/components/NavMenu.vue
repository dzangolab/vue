<template>
  <nav class="nav-menu">
    <div v-if="sideBarMenuToShow?.length > 0" class="menu">
      <NavMenuItem
        v-for="(menuItem, index) in sideBarMenuToShow"
        :key="menuItem.name + '-' + index"
        :item="menuItem"
        :sidebar-active="sidebarActive"
      />
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavMenu",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import NavMenuItem from "./NavMenuItem.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  sidebarActive: {
    default: true,
    required: true,
    type: Boolean,
  },
});

const sideBarMenuToShow = computed(() => {
  return props.menu
    ?.map((menu) => {
      if (menu.hide) {
        return null;
      }

      const filteredChildren =
        menu.children?.filter((childMenu) => !childMenu.hide) || [];

      if (menu.children?.length && !filteredChildren.length) {
        return null;
      }

      return {
        ...menu,
        children: filteredChildren.length ? filteredChildren : undefined,
      };
    })
    .filter(Boolean) as SidebarMenu[];
});
</script>

<style lang="css">
.nav-menu > .menu {
  --_border-color: var(--border-color, #dee2e6);
  --_padding-h: var(--padding-h, 0);
  --_padding-v: var(--padding-v, 1rem);

  border-bottom: 1px solid var(--_border-color);
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-block: var(--_padding-v);
  padding-left: var(--_padding-h);
}
</style>
