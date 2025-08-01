<template>
  <Layout
    :collapsible="collapsible"
    :menu="menu"
    :no-locale-switcher="noLocaleSwitcher"
    :user-menu-location="userMenuLocation"
    no-sidebar-header
  >
    <template #header>
      <slot name="header"></slot>
    </template>

    <template #locales>
      <slot name="locales"></slot>
    </template>

    <template #userMenu>
      <UserMenu v-if="showUserMenu">
        <template v-if="$slots.userMenuTrigger" #userMenuTrigger>
          <slot name="userMenuTrigger"></slot>
        </template>
      </UserMenu>
    </template>

    <template #afterNavLinks>
      <slot name="afterNavLinks"></slot>
    </template>

    <template #afterSidebarMenu>
      <slot name="afterSidebarMenu"></slot>
    </template>

    <template #footer>
      <slot name="footer"></slot>
    </template>

    <slot></slot>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "SidebarHeaderLayout",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { SidebarHeaderLayout as Layout } from "@prefabs.tech/vue3-layout";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

import UserMenu from "../components/UserMenu.vue";
import useUserStore from "../store";

import type { MenuItem, SidebarMenu } from "@prefabs.tech/vue3-layout";

defineProps({
  collapsible: {
    default: true,
    type: Boolean,
  },
  noLocaleSwitcher: Boolean,
  showUserMenu: {
    default: true,
    required: false,
    type: Boolean,
  },
  userMenuLocation: {
    default: "sidebar",
    type: String,
    validator: (value: string) => ["header", "sidebar"].includes(value),
  },
});

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { layout: layoutConfig } = useConfig();

const router = useRouter();

const allRoutes = router.getRoutes();

const menu = computed(() => {
  let menuItems = layoutConfig?.mainMenu || [];

  if (!user.value) {
    menuItems = menuItems?.filter((item: MenuItem) => {
      const route = allRoutes.find((r) => {
        if (r.name === item.route && !r.meta?.authenticated) {
          return true;
        }

        if (item.children?.length) {
          return (item.children as MenuItem[]).some((child: MenuItem) => {
            return allRoutes.some(
              (cr) => cr.name === child.route && !cr.meta?.authenticated,
            );
          });
        }

        return false;
      });

      return !!route;
    }) as MenuItem[];
  }

  return menuItems.map((item: MenuItem) => {
    return {
      hide: item?.hide,
      icon: item?.icon,
      name: item.name,
      routeName: item.route,
      shortName: item?.shortName,
      children: item?.children?.map((childItem: MenuItem) => {
        return {
          hide: childItem?.hide,
          icon: childItem?.icon,
          name: childItem.name,
          routeName: childItem.route,
          shortName: childItem?.shortName,
        };
      }),
    };
  }) as SidebarMenu[];
});
</script>

<style lang="css">
.sidebar-header-layout > .sidebar .user-menu > ul {
  flex-direction: column;
}

.sidebar-header-layout > .sidebar .user-menu > ul > li,
.sidebar-header-layout > .sidebar .user-menu-dropdown {
  --_font-size: var(--font-size-min, 0.8rem);
  --_font-weight: var(--font-weight, 450);
  --_layout-sidebar-separator-color: var(
    --layout-sidebar-separator-color,
    #dbdbdb
  );

  font-size: var(--_font-size);
  font-weight: var(--_font-weight);
  width: 100%;
}

.sidebar-header-layout
  > .sidebar
  .user-menu
  > ul
  > li:has(.router-link-exact-active) {
  background-color: var(--nav-item-active-bg, #eff6ff);
  color: var(--nav-item-active-color, #2c2c2c);
}

.sidebar-header- > .sidebar .user-menu:not(.user-menu-dropdown) > ul > li > a,
.sidebar-header-layout > .sidebar .user-menu-dropdown,
.sidebar-header-layout > .sidebar .user-menu-dropdown > ul.dropdown > li {
  align-items: center;
  display: flex;
  width: 100%;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown {
  border-top: 1px solid var(--_layout-sidebar-separator-color);
  padding-block: 0.5rem;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown,
.sidebar-header-layout > .sidebar .user-menu-dropdown:hover {
  background-color: #fff;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown > .trigger {
  background-color: var(--sidebar-bg-color, #fff);
  width: 100%;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown > .trigger:hover {
  background-color: #f0f2f7ad;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown.expanded > ul > li:hover {
  --dropdown-bg-color-hover: #f0f2f7ad;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown.expanded .toggle > svg {
  transform: rotate(-180deg);
}

.sidebar-header-layout > .sidebar .user-menu-dropdown .toggle > svg {
  transform: rotate(0);
}

.sidebar-header-layout > .sidebar .user-menu-dropdown > .dropdown {
  transform: translate3d(0, -80px, 0);
  transition:
    transform 0.2s ease,
    visibility 0.1s ease;
  visibility: hidden;
  width: 100%;
}

.sidebar-header-layout > .sidebar .user-menu-dropdown.expanded > .dropdown {
  --dropdown-bg-color: #fff;

  box-shadow: 0 -2px 12px #0000001a;
  transform: translate3d(0, -161.5px, 0);
  visibility: visible;
  width: 100%;
}
</style>
