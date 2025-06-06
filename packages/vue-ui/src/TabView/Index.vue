<template>
  <div :id="id" :class="['tabbed-panel', position]">
    <div :aria-orientation="ariaOrientation" role="tablist">
      <button
        v-for="(item, index) in filteredTabs"
        :id="item.key"
        :key="index"
        :aria-label="item.label"
        :aria-selected="isActive(item.key)"
        :class="{ active: isActive(item.key) }"
        role="tab"
        tabindex="0"
        @click="onClickTab(item.key)"
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
      <template v-else>
        <component
          :is="slotComponent"
          v-for="(slotComponent, index) in validSlots"
          v-show="slotComponent === activeTabComponent"
          :key="`slot-component-${index}`"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabView",
};
</script>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useSlots, watch } from "vue";

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
  interceptTabChange: Boolean,
  interceptTabClose: Boolean,
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
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const emit = defineEmits([
  "beforeTabChange",
  "beforeTabClose",
  "update:activeKey",
  "update:visibleTabs",
]);

const slots = useSlots();

const activeTab = ref(props.activeKey);
const initialized = ref(false);
const visibleTabs = ref(
  props.visibleTabs?.length
    ? props.visibleTabs
    : props.tabs.map((tab) => tab.key),
);

const activeTabComponent = computed(() => {
  return (
    filteredTabs.value.find((tab) => tab.key === activeTab.value)?.children ||
    validSlots.value.find(
      (slot) =>
        typeof slot === "object" &&
        slot !== null &&
        "props" in slot &&
        slot.props?.key === activeTab.value,
    )
  );
});

const ariaOrientation = computed(() => getOrientation(props.position));

const filteredTabs = computed(() =>
  visibleTabs.value
    .map((key) => props.tabs.find((tab) => tab.key === key))
    .filter((tab): tab is Tab => tab !== undefined),
);

const storage = computed(() => getStorage(props.persistStateStorage));

const validSlots = computed(() => {
  const filteredSlots = slots?.default?.() ?? [];

  return filteredSlots.flatMap((slot) => {
    if (Array.isArray(slot?.children) && !slot?.props?.key) {
      return slot.children.filter(
        (child) =>
          typeof child === "object" &&
          child !== null &&
          "props" in child &&
          child.props?.key,
      );
    }

    if (slot?.props?.key) {
      return [slot];
    }

    return [];
  });
});

onMounted(() => {
  if (props.persistState && props.id) {
    const storedState = storage.value.getItem(props.id);
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      activeTab.value = parsedState.activeTab || props.activeKey;

      if (parsedState.visibleTabs) {
        visibleTabs.value = parsedState.visibleTabs;
      }
    }
  }

  setHashTab();
  window.addEventListener("hashchange", setHashTab);
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
      setActiveTab(newVal);
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

const closeTab = (key: string) => {
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

const handleTabClose = (key: string) => {
  if (!props.interceptTabClose) {
    closeTab(key);

    return;
  }

  emit("beforeTabClose", key);
};

const onClickTab = (key: string) => {
  if (isActive(key)) {
    return;
  }

  if (!props.interceptTabChange) {
    setActiveTab(key);

    return;
  }

  emit("beforeTabChange", key);
};

const setActiveTab = (key: string) => {
  activeTab.value = key;

  if (initialized.value) {
    history.replaceState(null, "", `#${activeTab.value}`);
  }

  emit("update:activeKey", key);
};

const setHashTab = () => {
  const hash = window.location.hash?.split("#").pop();

  if (!hash || hash?.includes("/")) {
    return;
  }

  if (!initialized.value) {
    const element = document.getElementById(hash);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  nextTick(() => {
    const shouldUpdateTab =
      hash && hash !== activeTab.value && visibleTabs.value.includes(hash);

    if (shouldUpdateTab) {
      setActiveTab(hash);
    }
  });
};

defineExpose({
  closeTab,
  setActiveTab,
});
</script>

<style lang="css">
@import "../assets/css/tab-view.css";
</style>
