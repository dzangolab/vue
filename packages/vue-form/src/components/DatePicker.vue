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
        :auto-apply="autoApply"
        :class="[
          'field',
          {
            invalid: meta.touched && !meta.valid,
            valid: meta.dirty && meta.valid && Object.keys(props.schema).length,
          },
        ]"
        :disabled="disabled"
        :enable-time-picker="enableTimePicker"
        :format="format"
        :model-value="modelValue"
        :placeholder="placeholder"
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
  autoApply: {
    default: true,
    type: Boolean,
  },
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
    default: undefined,
    type: [Array, Date, Number, Object, String] as PropType<
      | Date
      | Date[]
      | MonthPickerValue
      | null
      | number
      | number[]
      | string
      | string[]
      | undefined
    >,
  },
  name: {
    default: "date",
    required: false,
    type: String as PropType<string>,
  },
  placeholder: {
    default: undefined,
    type: String,
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
@import "../assets/css/datePicker.css";
</style>
