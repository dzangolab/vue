<template>
  <div :class="`field switch-toggle ${name}`">
    <label v-if="label">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      :name="name"
      :rules="fieldSchema"
      type="checkbox"
      @change="onChange"
    >
      <input
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
        }"
        :checked="modelValue"
        :disabled="disabled"
        type="checkbox"
        tabindex="0"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "SwitchInput",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import type { PropType } from "vue";

const props = defineProps({
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
  name: {
    default: "switch",
    required: false,
    type: String as PropType<string>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<style scoped>
.field {
  align-items: center;
  display: flex;
  flex-direction: var(--switch-field-direction, row);
  gap: var(--form-field-gap, 0.75rem);
  width: max-content;
}

.switch-toggle input[type="checkbox"] {
  appearance: none;
  background-color: #ccc;
  border-radius: 1.25rem;
  cursor: pointer;
  height: 2.18rem;
  position: relative;
  width: 3.75rem;
}

.switch-toggle input:before {
  background-color: #fff;
  border-radius: 50%;
  bottom: 0.25rem;
  content: "";
  height: 1.6rem;
  left: 0.25rem;
  position: absolute;
  transition: transform 0.3s, background-color 0.3s;
  width: 1.6rem;
}

.switch-toggle input:checked:before {
  transform: translate(24px);
}

.switch-toggle input:checked {
  background-color: #007aff;
}
</style>