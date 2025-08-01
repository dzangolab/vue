<template>
  <nav class="menu">
    <ul>
      <li
        v-for="(route, index) in routes"
        :key="index"
        :class="{ active: activeRoute === route.route }"
        @click="$emit('change-route', route.route)"
      >
        <router-link :to="{ name: route.route }">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "ResponsiveMenu",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

defineEmits<{
  (e: "change-route", route: string): void;
}>();

defineProps({
  routes: {
    required: true,
    type: Array as PropType<{ name: string; route: string }[]>,
  },
  activeRoute: {
    default: "",
    required: false,
    type: String,
  },
});
</script>

<style lang="css">
nav.menu > ul {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: var(--menu-gap, 0);
  justify-content: flex-start;
  list-style: none;
  padding: 0;
}

nav.menu li {
  --_active-bg: var(--nav-item-active-bg, #eff6ff);
  --_active-color: var(--nav-item-active-color, #2c2c2c);
  --_hover-bg: var(--nav-item-hover-bg, #f0f2f7ad);
  --_hover-color: var(--nav-item-hover-color, #2c2c2c);
}

nav.menu li > a {
  --_padding-h: var(--nav-item-padding-h, 1rem);
  --_padding-v: var(--nav-item-padding-v, 0.5rem);

  padding: var(--_padding-v) var(--_padding-h);
}

nav.menu li.active {
  background-color: var(--_active-bg);
  color: var(--_active-color);
}

nav.menu li:not(.active):hover {
  background: var(--_hover-bg);
  color: var(--_hover-color);
}

nav.menu a {
  color: inherit;
  display: block;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  nav.menu > ul {
    align-items: center;
    flex-direction: row;
    gap: var(--menu-gap, 0.25rem);
  }

  nav.menu li {
    border-radius: 0.325rem;
  }
}
</style>
