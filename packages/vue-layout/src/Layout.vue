<template>
  <component :is="layoutComponent">
    <slot></slot>
  </component>
</template>

<script lang="ts">
/* eslint-disable-next-line import/order */
import {
  defineAsyncComponent,
  computed,
  markRaw,
  shallowRef,
  watch,
} from "vue";

const NullLayout = defineAsyncComponent({
  loader: () => import("./layouts/NullLayout.vue"),
  timeout: 3000,
});

export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import { useRoute } from "vue-router";

import type { LayoutType } from "./types";

const props = defineProps({
  defaultLayout: {
    default: NullLayout,
    type: Object,
  },
});

const route = useRoute();

let layout = shallowRef(props.defaultLayout);

const layoutComponent = computed(() => markRaw(layout.value as object));

watch(
  () => route.meta,
  async (meta) => {
    if (meta?.layout) {
      try {
        layout.value = meta.layout as LayoutType;
      } catch (error) {
        layout.value = props.defaultLayout;
      }
    } else {
      layout.value = props.defaultLayout;
    }
  },
);
</script>
