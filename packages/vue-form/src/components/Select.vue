<template>
  <div
    ref="dzangolabVueFormSelect"
    :class="{ 'multiple-mode': multiple }"
    class="multiselect"
    tabindex="0"
    @keydown="onKeyDown"
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
        {{ selectedLabels }}
      </span>
      <span class="action-items">
        <svg
          v-if="hasRemoveOption"
          fill="none"
          tabindex="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click.stop="onUnselect"
          @keydown.enter.stop="onUnselect"
          @keydown.space.stop.prevent="onUnselect"
        >
          <path
            d="M6 6L18 18M18 6L6 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="Complete">
            <g id="F-Chevron">
              <polyline
                id="down"
                fill="none"
                points="5 8.5 12 15.5 19 8.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </g>
        </svg>
      </span>
    </div>
    <ul
      v-if="showDropdownMenu && !disabled"
      role="list"
      @mouseenter="enableOptionNavigation = false"
      @keydown.tab.stop.prevent="toggleDropdown"
    >
      <DebouncedInput
        v-if="enableSearch"
        v-model="searchInput"
        :placeholder="searchPlaceholder"
      />

      <li
        v-if="multiple && !searchInput"
        ref="dzangolabVueSelectAll"
        :class="[
          {
            focused:
              focusedOptionIndex === selectAllIndex && enableOptionNavigation,
          },
          'multiselect-option',
        ]"
        @click="onSelectAll()"
      >
        <Checkbox
          :model-value="isAllSelected(options)"
          @update:model-value="onMultiSelect()"
        />
        <span>Select all</span>
      </li>
      <li
        v-for="(option, index) in sortedOptions"
        :key="option.label"
        :ref="setOptionReference(index)"
        :class="[
          {
            focused: focusedOptionIndex === index && enableOptionNavigation,
            selected: isSelected(option) && !multiple,
          },
          'multiselect-option',
        ]"
        :disabled="option.disabled"
        @click="!option.disabled ? onSelect($event, option) : ''"
      >
        <Checkbox
          v-if="multiple"
          :model-value="isSelected(option)"
          :disabled="option.disabled"
          @update:model-value="onMultiSelect()"
        />
        <slot :name="option.value">
          <span>{{ option.label }}</span>
        </slot>
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
import { DebouncedInput } from "@dzangolab/vue3-ui";
import { onClickOutside } from "@vueuse/core";
import { computed, nextTick, onMounted, ref, toRaw, toRefs, watch } from "vue";

import Checkbox from "./Checkbox.vue";

import type { SelectOption } from "../types";
import type { ComponentPublicInstance, PropType, Ref } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  enableSearch: Boolean,
  hasSortedOptions: {
    default: true,
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
    type: [Boolean, Number, String, Array] as PropType<
      boolean | number | string | (number | string)[]
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
    default: undefined,
    type: String,
  },
  showRemoveSelection: {
    default: true,
    type: Boolean,
  },
  searchPlaceholder: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { options, multiple, placeholder } = toRefs(props);
const dzangolabVueFormSelect = ref(null);
const dzangolabVueSelectAll = ref();
const dzangolabVueFormSelectOptions = ref<(HTMLElement | null)[]>([]);
const enableOptionNavigation = ref(false);
const focusedOptionIndex = ref(0);
const searchInput: Ref<string | undefined> = ref();
const selectAllIndex = -1;
const selectedOptions: Ref<SelectOption[]> = ref([]);
const showDropdownMenu: Ref<boolean> = ref(false);

onClickOutside(dzangolabVueFormSelect, (event) => {
  showDropdownMenu.value = false;
});

watch(
  () => props.modelValue,
  () => {
    prepareComponent();
  },
);

const activeOptions = computed(() =>
  props.options.filter((option) => !option.disabled),
);

const filteredOptions = computed(() => {
  if (!searchInput.value) {
    return props.options;
  }

  return props.options.filter((option) =>
    option.label
      .toLowerCase()
      .includes(String(searchInput.value).toLowerCase()),
  );
});

const hasRemoveOption = computed(
  () =>
    props.showRemoveSelection &&
    !props.disabled &&
    selectedOptions.value.length,
);

const selectedLabels = computed(() =>
  selectedOptions.value.map((option) => option.label).join(", "),
);

const sortedOptions = computed(() => {
  if (props.hasSortedOptions) {
    return filteredOptions.value
      ?.slice()
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  return filteredOptions.value;
});

const getSelectedOption = (value: number | string | boolean) =>
  options.value?.find((option) => option.value === value);

const isAllSelected = (options: SelectOption[]): boolean => {
  if (selectedOptions.value.length != activeOptions.value.length) {
    return false;
  }

  return selectedOptions.value.every((selectedOption) =>
    options.includes(toRaw(selectedOption)),
  );
};

const isSelected = (option: SelectOption): boolean =>
  selectedOptions.value.some(
    (selectedOption) => selectedOption.value === option.value,
  );

const nextIndex = (startIndex: number): number => {
  const total = sortedOptions.value.length;
  let index = (startIndex + 1) % total;

  while (sortedOptions.value[index]?.disabled && index !== startIndex) {
    index = (index + 1) % total;
  }

  return index;
};

const onArrowDown = (event: KeyboardEvent) => {
  event.preventDefault();

  const firstActiveIndex = sortedOptions.value.findIndex(
    (option) => !option.disabled,
  );

  if (
    props.multiple &&
    nextIndex(focusedOptionIndex.value) === firstActiveIndex &&
    focusedOptionIndex.value !== selectAllIndex
  ) {
    focusedOptionIndex.value = selectAllIndex;
  } else {
    focusedOptionIndex.value =
      focusedOptionIndex.value === selectAllIndex
        ? firstActiveIndex
        : nextIndex(focusedOptionIndex.value);
  }

  enableOptionNavigation.value = true;
};

const onArrowUp = (event: KeyboardEvent) => {
  event.preventDefault();

  const reversedIndex = sortedOptions.value
    .slice()
    .reverse()
    .findIndex((option) => !option.disabled);
  const total = sortedOptions.value.length;
  const lastActiveIndex = total - 1 - reversedIndex;

  if (
    props.multiple &&
    previousIndex(focusedOptionIndex.value) === lastActiveIndex &&
    focusedOptionIndex.value !== selectAllIndex
  ) {
    focusedOptionIndex.value = selectAllIndex;
  } else {
    focusedOptionIndex.value =
      focusedOptionIndex.value === selectAllIndex
        ? lastActiveIndex
        : previousIndex(focusedOptionIndex.value);
  }

  enableOptionNavigation.value = true;
};

const onKeyDown = (event: KeyboardEvent) => {
  if (props.disabled) {
    return;
  }

  const toggleKeys = ["Enter", " "];

  if (!showDropdownMenu.value) {
    toggleKeys.push("ArrowUp", "ArrowDown");
  } else {
    if (event.key === "ArrowDown") {
      onArrowDown(event);
    } else if (event.key === "ArrowUp") {
      onArrowUp(event);
    }

    nextTick(() => {
      let element =
        focusedOptionIndex.value === selectAllIndex
          ? dzangolabVueSelectAll.value
          : dzangolabVueFormSelectOptions.value[focusedOptionIndex.value];

      element?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }

  if (toggleKeys.includes(event.key)) {
    onToggleKeyDown(event);
  }
};

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

    onMultiSelect();
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
    selectedOptions.value = activeOptions.value;
  }

  onMultiSelect();
};

const onToggleKeyDown = (event: KeyboardEvent) => {
  event.preventDefault();

  if (!(showDropdownMenu.value && props.multiple)) {
    toggleDropdown();
  }

  const highlightedOption = sortedOptions.value[focusedOptionIndex.value];

  if (enableOptionNavigation.value) {
    if (highlightedOption && !highlightedOption.disabled) {
      onSelect(event, highlightedOption);
      enableOptionNavigation.value = false;
    } else if (focusedOptionIndex.value === selectAllIndex) {
      onSelectAll();
      toggleDropdown();
    }

    enableOptionNavigation.value = false;
  }
};

const onMultiSelect = () => {
  const selectedValues = selectedOptions.value?.map(
    (selectedOption) => selectedOption.value,
  );

  emit("update:modelValue", selectedValues);
};

const onUnselect = (event: Event, option?: SelectOption) => {
  if (multiple.value && option) {
    const index = selectedOptions.value.findIndex(
      (i) => i.value === option.value,
    );

    if (index > -1) {
      selectedOptions.value.splice(index, 1);
    }
  } else {
    selectedOptions.value = [];
    showDropdownMenu.value = false;
  }

  searchInput.value = undefined;

  onMultiSelect();
};

const prepareComponent = () => {
  if (multiple.value && Array.isArray(props.modelValue)) {
    selectedOptions.value = props.modelValue.map((value) => {
      return getSelectedOption(value as string | number);
    }) as SelectOption[];
  } else if (props.modelValue && !Array.isArray(props.modelValue)) {
    selectedOptions.value = [
      getSelectedOption(props.modelValue),
    ] as SelectOption[];
  } else if (props.modelValue === undefined) {
    selectedOptions.value = [];
  }
};

const previousIndex = (startIndex: number): number => {
  const total = sortedOptions.value.length;
  let index = (startIndex - 1 + total) % total;

  while (sortedOptions.value[index]?.disabled && index !== startIndex) {
    index = (index - 1 + total) % total;
  }

  return index;
};

const setOptionReference =
  (index: number) => (element: Element | ComponentPublicInstance | null) => {
    dzangolabVueFormSelectOptions.value[index] = element as HTMLElement | null;
  };

const toggleDropdown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};

onMounted(() => {
  prepareComponent();
});
</script>

<style lang="css">
@import "../assets/css/select.css";
</style>
