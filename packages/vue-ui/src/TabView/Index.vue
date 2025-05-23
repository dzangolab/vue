<template>
  <div :class="['tabbed-panel', position]">
    <div :aria-orientation="ariaOrientation" role="tablist">
      <button
        v-for="(item, index) in filteredTabs"
        :key="index"
        :aria-label="item.label"
        :aria-selected="isActive(item.key)"
        :class="{ active: isActive(item.key) }"
        role="tab"
        tabindex="0"
        @click="setActiveTab(item.key)"
      >
        <img v-if="item?.icon" :src="item?.icon" class="icon" />
        <span :title="item.label">{{ item.label }}</span>
        <svg
          v-if="item.closable"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          @click.stop="handleTabClose(item.key)"
        >
          <path
            d="m13.06 12l4.42-4.42a.75.75 0 1 0-1.06-1.06L12 10.94L7.58 6.52a.75.75 0 0 0-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0L12 13.06l4.42 4.42a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div role="tabpanel">
      <template v-if="typeof activeTabComponent === 'string'">
        {{ activeTabComponent }}
      </template>
      <component :is="activeTabComponent" v-else />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabView",
};
</script>

<script setup lang="ts">
import { computed, ref, watch, onMounted, useSlots } from "vue";

import { getOrientation } from "./utils";
import { getStorage } from "../utils";

import type { Tab } from "./types";
import type { PropType } from "vue";

const props = defineProps({
  activeKey: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: "",
  },
  persistState: {
    type: Boolean,
    default: true,
  },
  persistStateStorage: {
    type: String as PropType<"localStorage" | "sessionStorage">,
    default: "localStorage",
  },
  position: {
    type: String as PropType<"top" | "bottom" | "left" | "right">,
    default: "top",
    validator: (value: string) =>
      ["top", "bottom", "left", "right"].includes(value),
  },
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
  visibleTabs: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const emit = defineEmits(["update:activeKey", "update:visibleTabs"]);

const slots = useSlots();

const activeTab = ref(props.activeKey);
const initialized = ref(false);
const visibleTabs = ref([...props.visibleTabs]);

const activeTabComponent = computed(() => {
  const filteredSlots = slots?.default
    ? slots.default().filter((slot) => {
        return slot?.props?.key;
      })
    : [];

  return (
    filteredTabs.value.find((tab) => tab.key === activeTab.value)?.children ||
    filteredSlots.find((slot) => slot?.props?.key === activeTab.value)
  );
});

const ariaOrientation = computed(() => getOrientation(props.position));

const filteredTabs = computed(() =>
  visibleTabs.value
    .map((key) => props.tabs.find((tab) => tab.key === key))
    .filter((tab): tab is Tab => tab !== undefined),
);

const storage = computed(() => getStorage(props.persistStateStorage));

onMounted(() => {
  if (props.persistState && props.id) {
    const storedState = storage.value.getItem(props.id);
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      activeTab.value = parsedState.activeTab || props.activeKey;
      visibleTabs.value = parsedState.visibleTabs || props.visibleTabs;
    }
  }
  initialized.value = true;
});

watch(
  () => props.visibleTabs,
  (newVal) => {
    if (initialized.value) {
      visibleTabs.value = [...newVal];
    }
  },
);

watch(
  () => props.activeKey,
  (newVal) => {
    if (initialized.value) {
      activeTab.value = newVal;
    }
  },
);

watch([visibleTabs, activeTab], () => {
  if (props.id && props.persistState) {
    storage.value.setItem(
      props.id,
      JSON.stringify({
        activeTab: activeTab.value,
        visibleTabs: visibleTabs.value,
      }),
    );
  }
});

const isActive = (key: string) => activeTab.value === key;

const handleTabClose = (key: string) => {
  const tabIndex = visibleTabs.value.findIndex((tab) => tab === key);
  const newVisibleTabs = visibleTabs.value.filter((tab) => tab !== key);

  let newActiveTab = "";
  if (tabIndex > 0) {
    newActiveTab = newVisibleTabs[tabIndex - 1];
  } else {
    newActiveTab = newVisibleTabs[0];
  }

  if (!newVisibleTabs.includes(activeTab.value)) {
    setActiveTab(newActiveTab);
  }

  visibleTabs.value = newVisibleTabs;
  emit("update:visibleTabs", newVisibleTabs);
};

const setActiveTab = (key: string) => {
  activeTab.value = key;
  emit("update:activeKey", key);
};
</script>

<style lang="css">
@import "../assets/css/tab-view.css";
</style>
