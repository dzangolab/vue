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
      <DebouncedInput
        v-if="(!selectedOptions.length || showDropdownMenu) && !disabled"
        ref="dzangolabVueSearchInput"
        v-model="searchInput"
        :placeholder="placeholder"
        class="multiselect-search"
        @update:model-value="$emit('update:searchInput', $event)"
      />
      <template v-else>
        <span v-if="!selectedOptions.length" class="multiselect-placeholder">
          {{ placeholder }}
        </span>
        <template v-else>
          <component
            v-bind="enableTooltip ? tooltipOptions : {}"
            :is="enableTooltip ? Tooltip : 'div'"
            class="selected-options"
          >
            <slot name="selection">
              {{ selectedLabels }}
            </slot>

            <template v-if="enableTooltip" #content>
              {{ selectedLabels }}
            </template>
          </component>
        </template>
      </template>
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
    <div v-if="showDropdownMenu && !disabled" class="multiselect-options">
      <div
        :class="[
          'selected-options-wrapper',
          { visible: selectedOptions.length },
        ]"
      >
        <component
          v-bind="enableTooltip ? tooltipOptions : {}"
          :is="enableTooltip ? Tooltip : 'div'"
          class="selected-options"
        >
          <slot name="selection">
            {{ selectedLabels }}
          </slot>

          <template v-if="enableTooltip" #content>
            {{ selectedLabels }}
          </template>
        </component>
        <Divider />
      </div>

      <ul
        role="list"
        @mouseenter="enableOptionNavigation = false"
        @keydown.tab.stop.prevent="toggleDropdown"
      >
        <li
          v-if="multiple && !searchInput"
          ref="dzangolabVueSelectAll"
          :class="[
            {
              focused:
                focusedOptionIndex === selectAllIndex && enableOptionNavigation,
            },
            'multiselect-option select-all-option',
          ]"
          @click="onSelectAll()"
        >
          <Checkbox
            :model-value="isAllSelected"
            @update:model-value="onMultiSelect()"
          />
          <span>Select all</span>
        </li>

        <template v-for="(option, index) in sortedOptions" :key="option.label">
          <li
            v-if="option.groupLabel && shouldRenderGroupHeader(option, index)"
            class="multiselect-group-label"
          >
            <slot :name="option.groupLabel">
              {{ option.groupLabel }}
            </slot>
          </li>

          <li
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
            <slot :name="option.label">
              <span>{{ option.label }}</span>
            </slot>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MultiSelect",
};
</script>

<script setup lang="ts">
import { DebouncedInput, Divider, Tooltip } from "@dzangolab/vue3-ui";
import { onClickOutside } from "@vueuse/core";
import { computed, nextTick, onMounted, ref, toRefs, watch } from "vue";

import Checkbox from "./Checkbox.vue";

import type { GroupedOption, SelectOption } from "../types";
import type { ComponentPublicInstance, PropType, Ref } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  enableCustomSearch: Boolean,
  enableTooltip: Boolean,
  hasSortedOptions: {
    default: true,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  labelKey: {
    default: undefined,
    type: String,
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
    type: Array as PropType<SelectOption[] | GroupedOption[]>,
  },
  placeholder: {
    default: undefined,
    type: String,
  },
  showRemoveSelection: {
    default: true,
    type: Boolean,
  },
  tooltipOptions: {
    default: () => ({}),
    type: Object as PropType<Record<string, unknown>>,
  },
  valueKey: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue", "update:searchInput"]);

const { multiple, placeholder } = toRefs(props);
const dzangolabVueFormSelect = ref(null);
const dzangolabVueSearchInput = ref();
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
  searchInput.value = undefined;
});

const activeOptions = computed(() =>
  normalizedOptions.value?.filter((option) => !option.disabled),
);

const filteredOptions = computed(() => {
  if (!searchInput.value || props.enableCustomSearch) {
    return normalizedOptions.value;
  }

  return normalizedOptions.value?.filter((option) =>
    String(option.label)
      .toLowerCase()
      .includes(String(searchInput.value).toLowerCase()),
  );
});

const hasRemoveOption = computed(() => {
  return (
    props.showRemoveSelection && !props.disabled && selectedOptions.value.length
  );
});

const isAllSelected = computed((): boolean => {
  if (selectedOptions.value.length != activeOptions.value.length) {
    return false;
  }

  return selectedOptions.value.every((selectedOption) =>
    normalizedOptions.value.some(
      (option) => option.value === selectedOption.value,
    ),
  );
});

const normalizedOptions = computed(() => {
  const options = props.options ?? [];

  if (!options.length) {
    return [];
  }

  const isGrouped = (
    providedOptions: (SelectOption | GroupedOption)[],
  ): providedOptions is GroupedOption[] => "options" in providedOptions[0];

  const normalize = (option: SelectOption, groupLabel?: string) => ({
    ...option,
    groupLabel,
    label: (props.labelKey
      ? option[props.labelKey as keyof SelectOption]
      : option.label
    )?.toString(),
    value: (props.valueKey
      ? option[props.valueKey as keyof SelectOption]
      : option.value) as string | number,
  });

  if (isGrouped(options)) {
    return options.flatMap((group) =>
      group.options.map((option) => normalize(option, group.label)),
    );
  }

  return options.map((option) => normalize(option));
});

const selectedLabels = computed(() =>
  selectedOptions.value.map((option) => option.label).join(", "),
);

const sortedOptions = computed(() => {
  const options = filteredOptions.value;

  if (!props.hasSortedOptions || !options) {
    return options;
  }

  const hasGroups = options.some((option) => "groupLabel" in option);

  const compareLabels = (optionA: SelectOption, optionB: SelectOption) =>
    String(optionA.label).localeCompare(String(optionB.label));

  const compareGrouped = (optionA: SelectOption, optionB: SelectOption) =>
    String(optionA.groupLabel).localeCompare(String(optionB.groupLabel)) ||
    compareLabels(optionA, optionB);

  return options.slice().sort(hasGroups ? compareGrouped : compareLabels);
});

watch(
  () => props.modelValue,
  () => {
    prepareComponent();
  },
);

const focusSearchInput = async () => {
  await nextTick();
  (
    dzangolabVueSearchInput.value?.$el?.querySelector(
      "input",
    ) as HTMLInputElement | null
  )?.focus();
};

const getSelectedOption = (value: number | string | boolean) => {
  return (
    normalizedOptions.value?.find((option) => option.value === value) ||
    selectedOptions.value.find((option) => option.value === value)
  );
};

const isSelected = (option: SelectOption): boolean => {
  return selectedOptions.value.some(
    (selectedOption) => selectedOption.value === option.value,
  );
};

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
    !searchInput.value &&
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
    !searchInput.value &&
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

  let toggleKeys = ["Enter", " "];

  if (searchInput.value) {
    toggleKeys = toggleKeys.filter((key) => key.trim());
  }

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
    searchInput.value = undefined;

    emit("update:modelValue", option.value);
  }
};

const onSelectAll = () => {
  const allSelected = isAllSelected.value;

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

  if (showDropdownMenu.value) {
    focusSearchInput();
  }

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
  }

  searchInput.value = undefined;
  emit("update:searchInput", searchInput.value);

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
  } else if (props.modelValue === undefined || props.modelValue === null) {
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

const shouldRenderGroupHeader = (
  option: SelectOption,
  index: number,
): boolean => {
  return !!(
    option.groupLabel &&
    (index === 0 ||
      sortedOptions.value[index - 1]?.groupLabel !== option.groupLabel)
  );
};

const toggleDropdown = () => {
  if (props.disabled) {
    return;
  }

  showDropdownMenu.value = !showDropdownMenu.value;

  if (showDropdownMenu.value) {
    focusSearchInput();
  }
};

onMounted(() => {
  prepareComponent();
});

defineExpose({
  normalizedOptions,
});
</script>

<style lang="css">
@import "../assets/css/select.css";
</style>
