<template>
  <div class="locale"><Badge :locale="locale" /> {{ name }}</div>
</template>

<script lang="ts">
export default {
  name: "LocaleOption",
};
</script>

<script setup lang="ts">
import Badge from "./Badge.vue";

import type { PropType } from "vue";

defineProps({
  locale: {
    required: true,
    type: String as PropType<string>,
  },
  name: {
    required: true,
    type: String as PropType<string>,
  },
});
</script>

<style lang="css" scoped>
.locale {
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
}
</style>
