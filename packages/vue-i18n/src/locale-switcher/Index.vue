<template>
  <nav
    ref="dzangolabVueI18nLocaleSwitcher"
    class="locale-switcher"
    :class="{ expanded: expanded }"
  >
    <div class="locale-trigger" @click="toggle">
      <div class="locale truncated">
        {{ current.name }}
      </div>
      <span class="truncated">
        <slot name="icon">
          <img src="../assets/svg/chevron-down.svg" alt="locale" />
        </slot>
      </span>
    </div>
    <ul class="dropdown">
      <li
        v-for="l in availableLocales"
        :key="l"
        :class="{ current: l === current.locale }"
        class="truncated"
        @click="changeLocale(l)"
      >
        <LocaleOption :locale="l" :name="translateLocale(l)" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "LocaleSwitcher",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { onClickOutside } from "@vueuse/core";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import LocaleOption from "./LocaleOption.vue";
import useLocaleStore from "../store";

import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { Locale } from "vue-i18n";

const { availableLocales, locale, t } = useI18n();

const config = useConfig() as AppConfig;

const expanded = ref(false);

const changeLocale = (newLocale: Locale) => {
  locale.value = newLocale;
  expanded.value = false;

  const { setLocale } = useLocaleStore(config.slug);

  setLocale(newLocale);
};

const current = computed(() => {
  return {
    locale: locale.value,
    name: translateLocale(locale.value),
  };
});

const toggle = () => {
  expanded.value = !expanded.value;
};

const translateLocale = (locale: Locale) => {
  return t(`locales.${locale}`);
};

const dzangolabVueI18nLocaleSwitcher = ref(null);

onClickOutside(dzangolabVueI18nLocaleSwitcher, (event) => {
  expanded.value = false;
});
</script>

<style scoped>
nav.locale-switcher {
  --_hover-bg: var(--nav-item-hover-bg, #f0f2f7ad);
  --_hover-color: var(--nav-item-hover-color, #2c2c2c);

  border-radius: 0.325rem;
  cursor: pointer;
  padding: 0;
  position: relative;
  width: var(--locale-switcher-width, 9rem);
}

nav.locale-switcher.expanded,
nav.locale-switcher:hover {
  background: var(--_hover-bg);
  color: var(--_hover-color);
}

nav.locale-switcher > .locale-trigger {
  align-items: center;
  display: flex;
  gap: 0;
  justify-content: space-between;
  padding: var(--locale-switcher-padding-v, 0.625rem)
    var(--locale-switcher-padding-h, 1rem);
}

.locale {
  flex: 1;
}

nav > .locale-trigger > span {
  align-self: start;
  font-size: 1.5rem;
  line-height: 1.25rem;
  text-align: center;
  width: 1.25rem;
}

nav > ul.dropdown {
  background-color: var(--locale-switcher-bg-color, #fff);
  border: var(--locale-switcher-border, 1px solid #e5e5e5);
  border-radius: var(--locale-switcher-border-radius, 5px);
  box-shadow: 0 2px 5px #0000001a;
  display: none;
  list-style: none;
  min-width: var(--locale-switcher-min-width, 160px);
  padding-inline-start: 0;
  padding: 0.15rem 0;
  position: absolute;
  right: 0;
  top: 120%;
  z-index: var(--locale-switcher-z-index, 9999);
}

nav.expanded ul {
  display: block;
}

nav > .dropdown > li {
  --_hover-bg: var(--nav-item-hover-bg, #f0f2f7ad);
  --_hover-color: var(--nav-item-hover-color, #2c2c2c);

  cursor: pointer;
  list-style: none;
  padding: 0.7rem 1.25rem;
}

nav li.current {
  display: none;
}

nav.expanded li:hover {
  background: var(--_hover-bg);
  color: var(--_hover-color);
}

.truncated {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

nav .truncated > img {
  transition: transform 0.3s ease;
}

nav.expanded .truncated > img {
  transform: rotate(180deg);
}
</style>
