<template>
  <div
    ref="dzangolabVueFormSelect"
    :class="{ 'multiple-mode': multiple }"
    class="multiselect"
  >
    <label v-if="label" for="multiselect">
      {{ label }}
    </label>
    <div
      :class="{ disabled: disabled }"
      class="multiselect-input"
      @click="toggleDropdown"
    >
      <span v-if="!selectedOptions.length" class="multiselect-placeholder">
        {{ placeholder }}
      </span>
      <span v-else class="selected-options">
        <span
          v-for="selectedOption in selectedOptions"
          :key="selectedOption.label"
          class="selected-option"
          @click="disabled ? '' : onSelect($event, selectedOption)"
        >
          {{ selectedOption.label }}

          <img
            v-if="multiple"
            src="./../assets/svg/x-mark.svg"
            class="remove-option"
          />
        </span>
      </span>
    </div>
    <ul v-if="showDropdownMenu && !disabled" class="multiselect-dropdown">
      <li v-if="multiple" class="multiselect-option" @click="onSelectAll()">
        <input type="checkbox" :checked="isAllSelected(options)" />
        Select all
      </li>
      <li
        v-for="option in options"
        :key="option.label"
        class="multiselect-option"
        :class="{ selected: isSelected(option) && !multiple }"
        @click="onSelect($event, option)"
      >
        <input v-if="multiple" type="checkbox" :checked="isSelected(option)" />
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "MultiSelect",
};
</script>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { onMounted, ref, toRefs } from "vue";

import type { SelectOption } from "../types";
import type { PropType, Ref } from "vue";

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
    default: () => [],
    required: false,
    type: [Number, String, Array] as PropType<
      number | string | (number | string)[]
    >,
  },
  multiple: {
    default: false,
    type: Boolean,
  },
  options: {
    required: true,
    type: Array as PropType<SelectOption[]>,
  },
  placeholder: {
    default: "Select value",
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { options, multiple, placeholder } = toRefs(props);
const dzangolabVueFormSelect = ref(null);
const selectedOptions: Ref<SelectOption[]> = ref([]);
const showDropdownMenu: Ref<boolean> = ref(false);

onClickOutside(dzangolabVueFormSelect, (event) => {
  showDropdownMenu.value = false;
});

const getSelectedOption = (value: number | string) =>
  options.value?.find((option) => option.value === value);

const isAllSelected = (options: SelectOption[]): boolean => {
  if (selectedOptions.value.length != options.length) {
    return false;
  }

  return selectedOptions.value.every((selectedOption) =>
    options.includes(selectedOption),
  );
};

const isSelected = (option: SelectOption): boolean =>
  selectedOptions.value.some(
    (selectedOption) => selectedOption.value === option.value,
  );

const onSelect = (event: Event, option: SelectOption) => {
  event.stopPropagation();

  const index = selectedOptions.value.findIndex(
    (i) => i.value === option.value,
  );

  if (multiple.value) {
    if (index > -1) {
      selectedOptions.value.splice(index, 1);
    } else {
      selectedOptions.value.push(option);
    }

    const selectedValues = selectedOptions.value?.map(
      (selectedOption) => selectedOption.value,
    );

    emit("update:modelValue", selectedValues);
  } else {
    selectedOptions.value = [option];
    showDropdownMenu.value = false;

    emit("update:modelValue", option.value);
  }
};

const onSelectAll = () => {
  const allSelected = isAllSelected(props.options);

  if (allSelected) {
    selectedOptions.value = [];
  } else {
    selectedOptions.value = [...props.options];
  }
};

const toggleDropdown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};

onMounted(() => {
  if (multiple.value && Array.isArray(props.modelValue)) {
    selectedOptions.value = props.modelValue.map((value) => {
      return getSelectedOption(value as string | number);
    }) as SelectOption[];
  } else if (props.modelValue && !Array.isArray(props.modelValue)) {
    selectedOptions.value = [
      getSelectedOption(props.modelValue),
    ] as SelectOption[];
  }
});
</script>

<style lang="css">
.multiple-mode.multiselect .selected-option {
  --_multiselect-tag-border-radius: var(--multiselect-tag-border-radius, 2rem);
  --_multiselect-tag-color: var(--multiselect-tag-color, rgb(215, 194, 253));

  align-items: center;
  background-color: var(--_multiselect-tag-color);
  border-radius: var(--_multiselect-tag-border-radius);
  display: flex;
  gap: 0.5em;
  margin-right: 0.25rem;
  padding: 0.25rem 0.6rem;
  width: max-content;
}

.multiselect {
  display: inline-block;
  position: relative;
  width: 100%;
}

.multiselect-dropdown {
  background-color: #fff;
  border-top: none;
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 0;
  max-height: 10rem;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
}

.multiselect-input {
  --_multiselect-border-color: var(--form-input-border-color, #555);

  align-content: center;
  border: 1px solid var(--_multiselect-border-color);
  cursor: pointer;
  min-height: 3rem;
  padding: 10px;
  user-select: none;
}

.multiselect-input.disabled {
  background: var(--form-input-bg-color-disabled);
  border-color: var(--form-input-border-color-disabled);
  color: var(--form-input-color-disabled);
  cursor: default;
}

.multiselect-input:focus {
  box-shadow: 0 0 0 0.25rem #32323240;
}

.multiselect.invalid .multiselect-input {
  border-color: var(--color-alert-danger, #dc3545);
}

.multiselect-option {
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  padding: 10px;
}

.multiselect-option input {
  width: auto;
}

.multiselect-option.selected {
  --_multiselect-selected-bg-color: var(
    --multiselect-selected-bg-color,
    #007bff
  );
  --_multiselect-selected-color: var(--multiselect-selected-color, #fff);

  background-color: var(--_multiselect-selected-bg-color);
  color: var(--_multiselect-selected-color);
}

.multiselect-placeholder {
  --_multiselect-placeholder-color: var(--form-input-placeholder-color, #555);

  color: var(--_multiselect-placeholder-color);
}

.multiselect.valid .multiselect-input {
  border-color: var(--color-alert-success, #198754);
}

.selected-option .remove-option {
  height: 1rem;
}

.selected-options {
  display: flex;
}
</style>
