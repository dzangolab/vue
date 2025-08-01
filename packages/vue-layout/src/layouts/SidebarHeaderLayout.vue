<template>
  <div class="layout sidebar-header-layout">
    <slot name="header">
      <AppHeader
        ref="appHeader"
        :no-locale-switcher="noLocaleSwitcher"
        no-logo
        no-main-menu
      >
        <template v-if="userMenuLocation === 'header'" #userMenu>
          <slot name="userMenu"></slot>
        </template>
        <template #locales>
          <slot name="locales" />
        </template>
      </AppHeader>
    </slot>
    <Sidebar
      ref="sidebar"
      :menu="menu"
      :no-header="noSidebarHeader"
      class="layout-sidebar"
    >
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <slot v-if="userMenuLocation === 'sidebar'" name="userMenu"></slot>
        <template v-if="sidebarLocaleSwitcher">
          <slot name="locales">
            <LocaleSwitcher v-if="!noLocaleSwitcher" class="locales">
              <template #icon>
                <img src="../assets/svg/up-chevron.svg" alt="toggle icon" />
              </template>
            </LocaleSwitcher>
          </slot>
        </template>
      </template>

      <template #footer>
        <slot name="footer">
          <AppFooter />
        </slot>
      </template>
    </Sidebar>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { LocaleSwitcher } from "@prefabs.tech/vue3-i18n";
import { ref, watch, onUnmounted } from "vue";

import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import Sidebar from "../components/Sidebar.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const appHeader = ref();
const sidebar = ref();
const sidebarLocaleSwitcher = ref<boolean>(false);

defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noLocaleSwitcher: Boolean,
  noSidebarHeader: {
    default: false,
    type: Boolean,
  },
  userMenuLocation: {
    default: "sidebar",
    type: String,
    validator: (value: string) => ["header", "sidebar"].includes(value),
  },
});

watch(
  () => appHeader.value?.expanded,
  (newValue) => {
    if (newValue) {
      sidebar.value.sidebarActive = true;
    }
  },
);

watch(
  () => sidebar.value?.sidebarActive,
  (newValue) => {
    if (!newValue) {
      appHeader.value.expanded = false;
    }
  },
);

const handleResize = () => {
  if (window.innerWidth >= 576) {
    sidebarLocaleSwitcher.value = false;
  } else {
    sidebarLocaleSwitcher.value = true;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.addEventListener("resize", handleResize);

handleResize();
</script>

<style lang="css">
@import "../assets/css/layouts/sidebarHeader.css";
</style>
