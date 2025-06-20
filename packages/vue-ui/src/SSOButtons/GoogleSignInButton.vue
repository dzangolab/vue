<template>
  <BaseButton
    v-bind="baseButtonOptions"
    :disabled="disabled"
    :image-source="GoogleLogo"
    :loading="loading"
    :title="title"
    class="google"
    @click="$emit('click')"
  />
</template>

<script lang="ts">
export default {
  name: "GoogleSignInButton",
};
</script>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import GoogleLogo from "../assets/svg/google.svg";

defineEmits(["click"]);

defineProps({
  baseButtonOptions: {
    default: () => ({}),
    type: Object as () => Record<string, unknown>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="css">
@import "../assets/css/social-button.css";
</style>
