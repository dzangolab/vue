<template>
  <div v-if="!isMobile" class="toolbar">
    <button
      v-for="button in buttons"
      :key="button.label"
      :class="button.class"
      @click="button.command"
    >
      {{ button.label }}
    </button>
  </div>
  <div v-else class="speed-dial">
    <SpeedDial
      :model="buttons"
      :radius="120"
      :type="props.speedDialType"
      :direction="props.speedDialDirection"
      :style="{ bottom: 0, right: 0 }"
    />
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import SpeedDial from "primevue/speeddial";
import { computed } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  speedDialBreakPoint: {
    default: 576,
    required: false,
    type: Number as PropType<number>,
  },
  speedDialDirection: {
    default: "up-left",
    required: false,
    type: String as PropType<
      | "left"
      | "right"
      | "up"
      | "down"
      | "up-left"
      | "up-right"
      | "down-left"
      | "down-right"
    >,
  },
  speedDialType: {
    default: "linear",
    required: false,
    type: String as PropType<"linear" | "circle" | "quarter-circle">,
  },
});

const emit = defineEmits(["add", "delete"]);

const { width } = useWindowSize();

const isMobile = computed(() => {
  if (width.value <= props.speedDialBreakPoint) {
    return true;
  }

  return false;
});

const add = () => {
  emit("add");
};

const back = () => {
  window.history.back();
};

const reload = () => {
  window.location.reload();
};

const remove = () => {
  emit("delete");
};

const buttons = [
  {
    class: "back",
    command: back,
    icon: "pi pi-arrow-left",
    label: "back",
  },
  {
    class: "reload",
    command: reload,
    icon: "pi pi-refresh",
    label: "reload",
  },
  {
    class: "add",
    command: add,
    icon: "pi pi-plus",
    label: "add",
  },
  {
    class: "delete",
    command: remove,
    icon: "pi pi-trash",
    label: "delete",
  },
];
</script>
