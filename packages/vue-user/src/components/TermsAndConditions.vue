<template>
  <div v-if="hasCheckbox" :class="`field ${name}`">
    <div class="input-field-checkbox">
      <input :id="name" :name="name" type="checkbox" @change="onChange" />
      <slot>
        <label :for="name">{{ label }}</label>
      </slot>
    </div>
  </div>
  <p v-else :class="name" :aria-label="name">
    <slot>
      {{ label }}
    </slot>
  </p>
</template>

<script lang="ts">
export default {
  name: "TermsAndConditions",
};
</script>

<script setup lang="ts">
defineProps({
  hasCheckbox: {
    default: true,
    type: Boolean,
  },
  label: {
    default: undefined,
    required: false,
    type: String,
  },
  name: {
    default: "terms-and-conditions",
    type: String,
  },
});

const emit = defineEmits(["update:check"]);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:check", Boolean(value));
};
</script>
<style lang="css">
.input-field-checkbox {
  align-items: center;
  font-size: 12px;
  color: #525252;
  display: flex;
  gap: 0.5rem;
  line-height: 1.35;
}

.input-field-checkbox input {
  width: fit-content;
}
</style>
