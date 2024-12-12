<template>
  <div v-show="show" class="modal">
    <div class="overlay">
      <div ref="dzangolabVueModal" class="dialog">
        <div class="header">
          <slot name="header">
            <span v-if="title" role="heading">{{ title }}</span>
          </slot>

          <svg
            aria-label="close modal"
            height="1.5rem"
            tabindex="0"
            width="1.5rem"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            @click="handleClose()"
          >
            <path
              fill="currentColor"
              d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
            />
          </svg>
        </div>

        <div v-if="slots.default" class="content">
          <slot></slot>
        </div>

        <div v-if="slots.footer" class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Modal",
};
</script>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, useSlots } from "vue";

const dzangolabVueModal = ref();

const emits = defineEmits(["on:close"]);

defineProps({
  show: {
    default: false,
    type: Boolean,
  },
  title: {
    default: "",
    type: String,
  },
});

const slots = useSlots();

onClickOutside(dzangolabVueModal, (event) => {
  handleClose();
});

const handleClose = () => {
  emits("on:close");
};
</script>

<style lang="css">
@import "../assets/css/modal.css";
</style>
