<template>
  <OriginalBasicLayout
    :aria-expanded="appHeader?.expanded"
    :no-locale-switcher="noLocaleSwitcher"
  >
    <template #header>
      <AppHeader ref="appHeader" no-toggle>
        <template #logo>
          <Logo :route="home" />
        </template>
        <template #addon>
          <slot name="addon" />
        </template>
        <template #menu>
          <MainMenu class="main-menu" :routes="routes" />
        </template>
        <template #userMenu>
          <UserMenu v-if="showUserMenu">
            <template v-if="$slots.userMenuTrigger" #userMenuTrigger>
              <slot name="userMenuTrigger"></slot>
            </template>
          </UserMenu>
        </template>
      </AppHeader>
    </template>

    <slot></slot>
  </OriginalBasicLayout>
</template>

<script lang="ts">
export default {
  name: "BasicLayout",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import {
  AppHeader,
  BasicLayout as OriginalBasicLayout,
  Logo,
  MainMenu,
} from "@prefabs.tech/vue3-layout";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import UserMenu from "../components/UserMenu.vue";
import useUserStore from "../store";

import type { MenuItem } from "@prefabs.tech/vue3-layout";

defineProps({
  noLocaleSwitcher: Boolean,
  showUserMenu: {
    default: true,
    required: false,
    type: Boolean,
  },
});

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { layout: layoutConfig, user: userConfig } = useConfig();

const appHeader = ref();

const home = computed(() => {
  return user.value
    ? userConfig && userConfig?.routes?.home
      ? userConfig.routes.home
      : "profile"
    : layoutConfig && layoutConfig?.homeRoute
      ? layoutConfig.homeRoute
      : undefined;
});

const router = useRouter();

const allRoutes = router.getRoutes();

const routes = computed(() => {
  if (!user.value) {
    return layoutConfig?.mainMenu?.filter((item) => {
      const route = allRoutes.find((r) => r.name === item.route);

      return route && !route.meta?.authenticated;
    }) as MenuItem[];
  }

  return layoutConfig?.mainMenu as MenuItem[];
});
</script>

<style>
.layout.basic nav.user-menu-dropdown > ul.dropdown {
  border: var(--dropdown-border, 1px solid transparent);
  overflow-y: hidden;
}

.layout.basic nav.user-menu-dropdown.expanded > ul.dropdown {
  border-color: grey;
}
</style>
