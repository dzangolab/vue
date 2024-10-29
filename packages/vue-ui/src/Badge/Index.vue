<template>
  <span :class="badgeClassName">
    <span v-if="iconLeft || !!slots.iconLeft" class="icon-left">
      <slot name="iconLeft">
        <i :class="iconLeft" />
      </slot>
    </span>

    <div v-if="label" class="label">
      {{ label }}
    </div>

    <span v-if="iconRight || !!slots.iconRight" class="icon-right">
      <slot name="iconRight">
        <i :class="iconRight" />
      </slot>
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: "BadgeComponent",
};
</script>

<script setup lang="ts">
import { computed, useSlots } from "vue";

const props = defineProps({
  className: {
    default: "",
    type: String,
  },
  color: {
    default: "default",
    type: String,
  },
  iconLeft: {
    default: null,
    type: String,
  },
  iconRight: {
    default: null,
    type: String,
  },
  label: {
    default: null,
    type: String,
  },
  rounded: Boolean,
  severity: {
    default: "primary",
    type: String,
    validator: (value: string) =>
      [
        "primary",
        "secondary",
        "alternate",
        "success",
        "danger",
        "warning",
      ].includes(value),
  },
});

const slots = useSlots();

const badgeClassName = computed(() => {
  return ["badge", props.className, props.rounded && "rounded", props.severity]
    .filter(Boolean)
    .join(" ");
});
</script>
