<template>
  <div
    v-if="filteredSlots.length"
    class="tabbed-panel"
    :data-position="props.position"
  >
    <nav>
      <ul role="tablist">
        <li
          v-for="(slot, index) in filteredSlots"
          :key="index"
          :data-selected="index === active"
        >
          <button
            :aria-expanded="index === active"
            tabindex="0"
            type="button"
            @click="handleClick(index)"
          >
            <slot name="icon" v-bind="slot">
              <img
                v-if="slot?.props?.icon"
                :src="slot?.props?.icon"
                class="icon"
              />
            </slot>
            <span>{{ slot.props?.title }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <Transition appear name="expand">
      <div class="tabbed-pane" role="region">
        <component :is="activeSlot" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabbedPanel",
};
</script>

<script lang="ts" setup>
import { computed, onMounted, ref, useSlots } from "vue";

import type { PropType } from "vue";

const slots = useSlots();

const props = defineProps({
  defaultIndex: {
    default: 0,
    required: false,
    type: Number,
  },
  position: {
    default: "top",
    required: false,
    type: String as PropType<"bottom" | "left" | "right" | "top">,
  },
  storageKey: {
    default: "",
    required: false,
    type: String,
  },
});

const active = ref(props.defaultIndex);

const key = "dzangolab_vue_ui_settings";

onMounted(() => {
  const storeValue = localStorage.getItem(key);
  if (storeValue !== null) {
    const parsedData = JSON.parse(storeValue);
    if (props.storageKey in parsedData) {
      active.value = parsedData[props.storageKey];
    }
  }
});

const handleClick = (index: number) => {
  active.value = index;
  const storeData = localStorage.getItem(key);
  const dataToStore = storeData ? JSON.parse(storeData) : {};
  dataToStore[props.storageKey] = index;
  localStorage.setItem(key, JSON.stringify(dataToStore));
};

const filteredSlots = slots?.default
  ? slots.default().filter((slot) => {
      return slot?.props?.title;
    })
  : [];

const activeSlot = computed(() => {
  return filteredSlots[active.value];
});
</script>
