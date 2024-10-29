<template>
  <div class="switch">
    <label v-if="label" for="switch">
      {{ label }}
    </label>
    <input
      :checked="modelValue"
      :disabled="disabled"
      class="switch-input"
      type="checkbox"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "ToggleSwitch",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<style lang="css">
.switch input[type="checkbox"] {
  --_switch-unchecked-bg-color: var(--switch-unchecked-bg-color, #ccc);

  appearance: none;
  background-color: var(--_switch-unchecked-bg-color);
  border-radius: 1.25rem;
  cursor: pointer;
  height: 2.18rem;
  position: relative;
  width: 3.75rem;
}

.switch input:before {
  background-color: #fff;
  border-radius: 50%;
  bottom: 0.25rem;
  content: "";
  height: 1.6rem;
  left: 0.25rem;
  position: absolute;
  transition:
    transform 0.3s,
    background-color 0.3s;
  width: 1.6rem;
}

.switch input:checked:before {
  transform: translate(24px);
}

.switch input:checked {
  --_switch-checked-bg-color: var(--switch-checked-bg-color, #007aff);

  background-color: var(--_switch-checked-bg-color);
}

.switch input:disabled {
  opacity: 40%;
}
</style>
