<template>
  <div :aria-expanded="appHeader?.expanded" class="layout basic">
    <slot name="header">
      <AppHeader
        ref="appHeader"
        :no-locale-switcher="noLocaleSwitcher"
        no-toggle
      >
        <template #logo>
          <slot name="logo" />
        </template>
        <template #addon>
          <slot name="addon" />
        </template>
        <template #menu>
          <slot name="menu" />
        </template>
        <template #userMenu>
          <slot name="userMenu" />
        </template>
        <template #locales>
          <slot name="locales" />
        </template>
      </AppHeader>
    </slot>

    <main>
      <slot name="default"></slot>
    </main>

    <slot name="footer">
      <AppFooter>
        <template #copyright>
          <slot name="copyright" />
        </template>
        <template #social>
          <slot name="social" />
        </template>
        <template #version>
          <slot name="version" />
        </template>
      </AppFooter>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "BasicLayout",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";

defineProps({
  noLocaleSwitcher: Boolean,
});

const appHeader = ref();
</script>
