<template>
  <div v-if="!isInactive" class="sidebar">
    <div v-if="!noHeader" class="header">
      <div class="logo">
        <Logo />
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="toggle" @click="sidebarActive = !sidebarActive">
        <transition name="sidebar-toggle">
          <img
            v-if="sidebarActive"
            alt="minimize sidebar"
            src="../assets/svg/left-chevron.svg"
          />
          <img
            v-else
            class="extend"
            alt="extend sidebar"
            src="../assets/svg/right-chevron.svg"
          />
        </transition>
      </div>
    </div>
    <div class="sidebar-menu-wrapper">
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <NavMenu :menu="menu" :sidebar-active="sidebarActive" />
        </slot>
        <slot name="afterNavLinks"></slot>
      </ul>
      <slot name="afterSidebarMenu"></slot>
    </div>
    <div v-if="slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
  <div v-else class="no-sidebar" @click="sidebarActive = true">
    <img
      v-if="!sidebarActive"
      alt="show sidebar"
      src="../assets/svg/right-chevron.svg"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
};
</script>

<script setup lang="ts">
import { computed, ref, onUnmounted, useSlots } from "vue";

import Logo from "./Logo.vue";
import NavMenu from "./NavMenu.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noHeader: {
    default: false,
    type: Boolean,
  },
});

const isInactive = computed(() => {
  if (!sidebarActive.value) {
    return !props.menu?.filter((item) => !!item.shortName)?.length;
  }

  return false;
});

const slots = useSlots();

const sidebarActive = ref<boolean>(true);

const handleResize = () => {
  if (window.innerWidth >= 1025) {
    sidebarActive.value = true;
  } else if (!props.noHeader) {
    sidebarActive.value = false;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.addEventListener("resize", handleResize);

handleResize();

defineExpose({
  sidebarActive,
});
</script>

<style lang="css">
@import "@/assets/css/components/sidebar.css";
</style>
