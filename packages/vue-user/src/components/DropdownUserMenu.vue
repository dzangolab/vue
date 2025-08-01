<template>
  <nav
    ref="dzangolabVueUserUserMenu"
    class="user-menu-dropdown"
    :class="{ expanded: expanded }"
    @click="toggle"
  >
    <div class="trigger">
      <slot name="userMenuTrigger">
        <span class="email">
          {{ user?.email }}
        </span>
      </slot>
      <span class="toggle">
        <svg
          aria-label="open user menu"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>
    <ul class="dropdown">
      <li v-if="!isSocialLoggedIn">
        <router-link class="user-menu-link" :to="{ name: 'changePassword' }">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10.25h-.25V8a4.75 4.75 0 0 0-9.5 0v2.25H7A2.75 2.75 0 0 0 4.25 13v5A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18v-5A2.75 2.75 0 0 0 17 10.25M8.75 8a3.25 3.25 0 0 1 6.5 0v2.25h-6.5Zm9.5 10A1.25 1.25 0 0 1 17 19.25H7A1.25 1.25 0 0 1 5.75 18v-5A1.25 1.25 0 0 1 7 11.75h10A1.25 1.25 0 0 1 18.25 13Z"
              fill="currentColor"
            />
          </svg>
          {{ $t("app.header.menu.changePassword") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'profile' }">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75"
              fill="currentColor"
            />
          </svg>
          {{ $t("app.header.menu.profile") }}
        </router-link>
      </li>
      <li class="option" @click="$emit('logout')">
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21A9 9 0 0 1 5.64 5.64a.74.74 0 0 1 1.06 0a.75.75 0 0 1 0 1.06a7.5 7.5 0 1 0 10.6 10.6a7.48 7.48 0 0 0 0-10.6a.75.75 0 0 1 0-1.06a.74.74 0 0 1 1.06 0A9 9 0 0 1 12 21"
            fill="currentColor"
          />
          <path
            d="M12 12.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v8a.76.76 0 0 1-.75.75"
            fill="currentColor"
          />
        </svg>
        {{ $t("app.header.menu.logout") }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "DropdownUserMenu",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { onClickOutside } from "@vueuse/core";
import { computed, ref } from "vue";

import type { UserType } from "../types";
import type { PropType } from "vue";

const expanded = ref(false);

defineEmits(["logout"]);

const props = defineProps({
  user: {
    required: true,
    type: Object as PropType<UserType>,
  },
});

const config = useConfig();

const isSocialLoggedIn = computed(
  () =>
    props.user?.thirdParty &&
    config?.user?.socialLogins?.includes(props.user?.thirdParty?.id),
);

const toggle = () => {
  expanded.value = !expanded.value;
};

const dzangolabVueUserUserMenu = ref(null);

onClickOutside(dzangolabVueUserUserMenu, (event) => {
  expanded.value = false;
});
</script>

<style lang="css">
nav.user-menu-dropdown {
  --_hover-bg: var(--nav-item-hover-bg, #f0f2f7ad);
  --_hover-color: var(--nav-item-hover-color, #2c2c2c);

  border-radius: 0.325rem;
  cursor: pointer;
  min-width: var(--dropdown-width, 6rem);
  padding: 0;
  position: relative;
}

nav.user-menu-dropdown .email {
  cursor: pointer;
  max-width: 13rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

nav.user-menu-dropdown > .trigger {
  --_padding-h: var(--layout-nav-item-padding-h, 1rem);
  --_padding-v: var(--layout-nav-item-padding-v, 0.625rem);

  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: space-between;
  padding: var(--_padding-v) var(--_padding-h);
  z-index: 99;
}

nav.user-menu-dropdown span.toggle {
  align-self: center;
  display: block;
  font-size: 1.5rem;
  line-height: 1.25rem;
  margin-left: 0.5rem;
  text-align: center;
  width: 1.25rem;
}

nav.user-menu-dropdown.expanded,
nav.user-menu-dropdown:hover {
  background: var(--_hover-bg);
  color: var(--_hover-color);
}

nav.user-menu-dropdown.expanded span.toggle > svg {
  transform: rotate(0);
}

nav.user-menu-dropdown span.toggle > svg {
  transform: rotate(-180deg);
  transition: transform 0.5s ease;
}

nav.user-menu-dropdown > ul.dropdown {
  border-radius: var(--dropdown-border-radius, 5px);
  inset: 0px auto auto 0px;
  list-style: none;
  max-height: 0;
  min-width: 160px;
  position: absolute;
  transform: translate3d(0, 48.5px, 0px);
  transition: max-height 0.3s ease-out;
  width: max-content;
  z-index: var(--dropdown-z-index, 2);
}

nav.user-menu-dropdown.expanded > ul.dropdown {
  background-color: var(--dropdown-bg-color, #fff);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: auto;
  max-height: 10rem;
  padding: 0.15rem 0;
  padding-inline-start: 0;
}

nav.user-menu-dropdown > ul.dropdown > li {
  --_active-bg: var(--nav-item-active-bg, #eff6ff);
  --_active-color: var(--nav-item-active-color, #2c2c2c);
  --_hover-bg: var(--nav-item-hover-bg, #f0f2f7ad);
  --_hover-color: var(--nav-item-hover-color, #2c2c2c);

  cursor: pointer;
  transition: all var(--transition-duration) ease 0s;
}

nav.user-menu-dropdown > .dropdown > li:hover {
  background: var(--_hover-bg);
  color: var(--_hover-color);
}

nav.user-menu > ul > li:has(.router-link-exact-active) {
  background: var(--_active-bg);
  color: var(--_active-color);
}

nav.user-menu-dropdown > ul.dropdown > li > a,
nav.user-menu-dropdown > ul.dropdown > li:not(:has(a)) {
  color: inherit;
  display: flex;
  padding: 0.7rem 1.25rem;
  text-decoration: none;
  width: 100%;
}

nav.user-menu-dropdown > ul.dropdown > li svg {
  margin-right: 0.5rem;
}

@media screen and (min-width: 576px) {
  nav.user-menu-dropdown > .trigger {
    --_padding-h: 1rem;
    --_padding-v: 0.625rem;
  }
}
</style>
