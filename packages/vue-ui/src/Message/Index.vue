<template>
  <div v-show="showMessage" class="message">
    <span v-if="icon || !!slots.icon" class="icon">
      <slot name="icon">
        <i :class="icon" />
      </slot>
    </span>

    <span class="message-content">{{ message }}</span>

    <img
      v-if="enableClose"
      src="./../assets/svg/x-mark.svg"
      class="close-message"
      @click="onClose()"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Message",
};
</script>

<script setup lang="ts">
import { ref, useSlots } from "vue";

const emits = defineEmits(["close"]);

defineProps({
  enableClose: {
    default: false,
    type: Boolean,
  },
  icon: {
    default: null,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

const slots = useSlots();

const showMessage = ref<boolean>(true);

const onClose = () => {
  showMessage.value = false;

  emits("close");
};
</script>
