<template>
  <div :class="modalClassName">
    <div class="modal-wrapper" @click="handleClose()">
      <div class="modal-container">
        <div :class="['modal-header', { 'disabled-header': disableHeader }]">
          <slot v-if="!disableHeader" name="header">
            <span>Confirmation required</span>
          </slot>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            @click="handleClose()"
          >
            <path
              fill="currentColor"
              d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
            />
          </svg>
        </div>

        <div v-if="!disableBody" class="modal-body">
          <slot name="body">
            <p>Are you sure you want to proceed?</p>
          </slot>
        </div>

        <div v-if="!disableFooter" class="modal-footer">
          <slot name="footer">
            <ButtonElement
              size="small"
              label="Cancel"
              severity="secondary"
              @click="handleClose()"
            />

            <ButtonElement
              size="small"
              label="Confirm"
              severity="primary"
              @click="handleConfirm()"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ConfirmationModal",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import ButtonElement from "../Button/Index.vue";

const emits = defineEmits(["on:confirm", "on:close"]);

const props = defineProps({
  divider: {
    default: false,
    type: Boolean,
  },
  disableBody: {
    default: false,
    type: Boolean,
  },
  disableHeader: {
    default: false,
    type: Boolean,
  },
  disableFooter: {
    default: false,
    type: Boolean,
  },
});

const modalClassName = computed(() => {
  return ["modal", props.divider && "divided-modal"].filter(Boolean).join(" ");
});

function handleConfirm() {
  emits("on:confirm");
}

function handleClose() {
  emits("on:close");
}
</script>
