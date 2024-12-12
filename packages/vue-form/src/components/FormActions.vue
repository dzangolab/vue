<template>
  <div
    :class="`align-${alignment} direction-${flowDirection}`"
    class="form-actions"
  >
    <slot>
      <slot name="cancelButton">
        <button
          :disabled="loading"
          class="cancel-button"
          type="button"
          @click="onCancel"
        >
          {{ cancelLabel }}
        </button>
      </slot>
      <slot name="submitButton">
        <button
          :disabled="loading"
          class="submit-button"
          type="submit"
          @click="onSubmit"
        >
          {{ submitLabel }}
        </button>
      </slot>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormActions",
};
</script>

<script setup lang="ts">
defineProps({
  alignment: {
    default: "right",
    type: String,
  },
  cancelLabel: {
    default: "Cancel",
    type: String,
  },
  flowDirection: {
    default: "horizontal",
    type: String,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  submitLabel: {
    default: "Submit",
    type: String,
  },
});

const emit = defineEmits(["cancel", "submit"]);

const onCancel = () => emit("cancel");

const onSubmit = () => emit("submit");
</script>

<style lang="css" scoped>
.form-actions {
  display: flex;
  gap: var(--form-field-gap);
  margin-bottom: 2rem;
  width: 100%;
}

.form-actions.align-center {
  justify-content: center;
}

.form-actions.align-left {
  justify-content: left;
}

.form-actions.align-right {
  justify-content: right;
}

.form-actions.align-filled {
  justify-content: space-between;
}

.form-actions.direction-horizontal {
  flex-direction: row;
}

.form-actions.direction-vertical {
  flex-direction: column;
}

button {
  border-radius: 0.5rem;
  cursor: pointer;
  float: right;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  width: max-content;
}

.form-actions .submit-button {
  background: var(--dz-primary-color);
  border: none;
  color: #fff;
}

.form-actions .cancel-button {
  border: 1px solid var(--button-border-color, #000);
}
</style>
