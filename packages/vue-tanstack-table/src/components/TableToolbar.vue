<template>
  <div class="toolbar">
    <ButtonElement
      v-if="showResetButton"
      :label="resetButtonLabel"
      variant="outlined"
      severity="secondary"
      @click="$emit('on:reset')"
    />

    <Popup v-if="showColumnAction">
      <ButtonElement
        :label="columnActionButtonLabel"
        variant="outlined"
        severity="secondary"
      />

      <template #content>
        <SortableList :list="items" @on-drag="onDrag" />
      </template>
    </Popup>

    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "TableToolbar",
};
</script>

<script setup lang="ts">
import { Checkbox } from "@dzangolab/vue3-form";
import { ButtonElement, Popup, SortableList } from "@dzangolab/vue3-ui";
import { computed, h } from "vue";

import type { Table } from "@tanstack/vue-table";
import type { VNode } from "vue";

type List = {
  id: number | string;
  data: string;
  render?: (data: unknown) => VNode;
};

const props = defineProps({
  columnActionButtonLabel: {
    default: "Columns",
    type: String,
  },
  hasActionsRow: Boolean,
  hasSelectionRow: Boolean,
  resetButtonLabel: {
    default: "Reset all",
    type: String,
  },
  showColumnAction: Boolean,
  showResetButton: Boolean,
  table: {
    required: true,
    type: Object as () => Table<unknown>,
  },
});

defineEmits(["on:reset"]);

const items = computed(() =>
  props.table
    .getAllLeafColumns()
    .filter((column) => column.id !== "select" && column.id !== "actions")
    .map((column, index) => ({
      id: index,
      data: column,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (data: any) => {
        let header = data.columnDef.header;

        if (typeof data.columnDef.header === "function") {
          header = data.columnDef.header();
        }

        return h(Checkbox, {
          label: header,
          modelValue: data.getIsVisible(),
          "onUpdate:modelValue": () => data.toggleVisibility(),
        });
      },
    })),
);

const onDrag = (sorted: List[]) => {
  props.table.setColumnOrder([
    ...(props.hasSelectionRow ? ["select"] : []),
    ...sorted.map((item: List) => String(item?.id)),
    ...(props.hasActionsRow ? ["actions"] : []),
  ]);
};
</script>
