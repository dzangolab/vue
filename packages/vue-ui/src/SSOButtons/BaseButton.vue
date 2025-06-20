<template>
  <button
    :disabled="disabled || loading"
    :class="['sso-button', variant, borderType, { center: alignCenter }]"
    @click="$emit('click')"
  >
    <img :src="imageSource" :alt="alternativeText" />
    <span>{{ title }}</span>
  </button>
</template>

<script lang="ts">
export default {
  name: "SSOButton",
};
</script>

<script lang="ts" setup>
defineEmits(["click"]);

defineProps({
  alignCenter: Boolean,
  alternativeText: {
    default: undefined,
    type: String,
  },
  borderType: {
    default: "rectangular",
    type: String,
    validator: (value: string) => ["rectangular", "pill"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  imageSource: {
    required: true,
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  variant: {
    default: "light",
    type: String,
    validator: (value: string) => ["dark", "light"].includes(value),
  },
});
</script>

<style lang="css">
@import "../assets/css/sso-button.css";
</style>
