<template>
  <div class="date-picker">
    <label v-if="label" for="date-picker">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
    >
      <VueDatePicker
        v-bind="{ ...filteredAttributes, ...field }"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid && Object.keys(props.schema).length,
        }"
        :disabled="disabled"
        :enable-time-picker="enableTimePicker"
        :format="format"
        :model-value="modelValue"
        tabindex="0"
        @update:model-value="onUpdate"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "DatePicker",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ErrorMessage, Field } from "vee-validate";
import { computed, useAttrs } from "vue";
import { z } from "zod";

import type { MonthPickerValue } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  enableTimePicker: {
    default: false,
    type: Boolean,
  },
  format: {
    default: null,
    required: false,
    type: String,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: () => new Date().toDateString(),
    type: [String, Date, Array, Object] as PropType<
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | MonthPickerValue
      | null
      | undefined
    >,
  },
  name: {
    default: "date",
    required: false,
    type: String as PropType<string>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | Date | object>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const attributes = useAttrs();

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const filteredAttributes = computed(() => {
  const { class: _, ...rest } = attributes;

  return rest;
});

const onUpdate = (
  date:
    | string
    | string[]
    | number
    | number[]
    | Date
    | Date[]
    | MonthPickerValue,
) => {
  emit("update:modelValue", date);
};
</script>

<style lang="css">
.date-picker {
  --_form-field-gap: var(--form-field-gap, 0.25em);

  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: var(--_form-field-gap);
  justify-content: flex-start;
}

.date-picker label {
  --_label-color: var(--label-color, #000);

  color: var(--_label-color);
}

.dp--clear-btn {
  --dp-icon-color: var(--icon-color, #555);
}

.dp__disabled,
.dp__input:hover:is(.dp__disabled) {
  --_disabled-color: var(--disabled-color, #ccc);
  --_text-color: var(--text-color, #555);

  border-color: var(--_disabled-color);
  color: var(--_text-color);
}

.dp__input {
  --dp-background-color: var(--bg-color, #fff);
  --dp-border-radius: var(--border-radius, 0.2rem);
  --dp-border-color: var(--border-color, #555);
  --dp-font-size: var(--font-size, 1rem);
  --dp-text-color: var(--text-color, #000);
}

.dp__input_icon {
  --dp-icon-color: var(--icon-color, #555);
}

.invalid .dp__input {
  --dp-border-color: var(--danger-color, #dc3545);

  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right calc(3.5 * var(--form-input-padding-h, 0.5em))
    center;
  background-size: 1em;
}

.invalid .dp__input:focus-visible,
.invalid .dp__input:hover {
  box-shadow: 0 0 0 0.25rem rgb(220 53 69 / 25%);
}

.valid .dp__input {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>") !important;
  background-repeat: no-repeat;
  background-position: right calc(3.5 * var(--form-input-padding-h, 0.5em))
    center;
  background-size: 1em;
  border-color: var(--success-color, #198754);
}

.valid .dp__input:focus-visible {
  box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 25%);
}
</style>
