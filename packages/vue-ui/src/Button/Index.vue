<template>
  <component
    :is="to ? 'a' : 'button'"
    :aria-label="ariaLabel"
    :class="buttonClassName"
    :disabled="!to && isDisabled"
    :href="to && !isDisabled ? to : null"
    :role="buttonRole"
    :title="title"
    @click="!to && handleClick()"
  >
    <span v-if="iconLeft || !!slots.iconLeft" class="icon-left">
      <slot name="iconLeft">
        <i :class="iconLeft" />
      </slot>
    </span>

    <div v-if="$slots.label || label" class="label">
      <slot name="label">
        <span>{{ label }}</span>
      </slot>
    </div>

    <span v-if="iconRight || !!slots.iconRight" class="icon-right">
      <slot name="iconRight">
        <i :class="iconRight" />
      </slot>
    </span>

    <LoadingIcon v-if="loading" class="loading-button" />
  </component>
</template>

<script lang="ts">
export default {
  name: "ButtonElement",
};
</script>

<script setup lang="ts">
import { computed, useSlots } from "vue";

import LoadingIcon from "../components/LoadingIcon.vue";

const emits = defineEmits(["click"]);

const props = defineProps({
  ariaLabel: {
    default: "button",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  iconLeft: {
    default: null,
    type: [String, Boolean],
  },
  iconRight: {
    default: null,
    type: [String, Boolean],
  },
  label: {
    default: null,
    type: String,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  rounded: {
    default: false,
    type: Boolean,
  },
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
  size: {
    default: "medium",
    type: String,
    validator: (value: string) => ["small", "medium", "large"].includes(value),
  },
  to: {
    default: null,
    type: String,
  },
  title: {
    default: null,
    type: String,
  },
  variant: {
    default: "filled",
    type: String,
    validator: (value: string) =>
      ["outlined", "filled", "textOnly"].includes(value),
  },
});

const slots = useSlots();

const buttonClassName = computed(() => {
  return [
    "button",
    props.severity,
    props.size,
    props.variant === "textOnly" ? "text-only" : props.variant,
    !(props.label || !!slots.label) && "icon-only",
    props.loading && "loading",
    props.rounded && "rounded",
    isDisabled.value && "disabled",
  ]
    .filter(Boolean)
    .join(" ");
});

const buttonRole = computed(() => (props.to ? "link" : "button"));

const isDisabled = computed(() => props.disabled || props.loading);

function handleClick() {
  emits("click");
}
</script>

<style lang="css">
.button .loading-button {
  font-size: 4px;
  position: absolute;
  z-index: 999;
}
</style>
