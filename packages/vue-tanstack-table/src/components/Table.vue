<template>
  <div class="table-container">
    <span v-if="titleInfo" :data-align="titleInfo.align || 'center'">
      {{ titleInfo.text }}
    </span>

    <TableToolbar
      v-if="showColumnAction || showResetButton || $slots.toolbar"
      :column-action-button-label="columnActionButtonLabel"
      :has-actions-column="Boolean(dataActionMenu.length)"
      :has-selection-column="enableRowSelection"
      :reset-button-label="resetButtonLabel"
      :show-column-action="showColumnAction"
      :show-reset-button="showResetButton"
      :table="table"
      @on:reset="onReset"
      @on:drag="columnOrder = $event"
    >
      <slot name="toolbar" />
    </TableToolbar>
    <div class="table-wrapper">
      <table :style="`width: ${table.getCenterTotalSize()}`">
        <TableHeader
          :input-debounce-time="inputDebounceTime"
          :is-filter-row-visible="isFilterRowVisible"
          :table="table"
        />
        <TableBody :empty-table-message="emptyTableMessage" :table="table" />
        <tfoot v-if="$slots.footer">
          <slot name="footer" />
        </tfoot>
      </table>

      <template v-if="(isServerTable || paginated) && totalItems > 0">
        <slot name="pagination">
          <Pagination
            v-bind="paginationOptions"
            :current-page="pagination.pageIndex"
            :default-items-per-page="pagination.pageSize"
            :items-per-page-options="rowPerPageOptions"
            :total-items="totalItems"
            @update:current-page="table.setPageIndex"
            @update:items-per-page="table.setPageSize"
          />
        </slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DataTable",
};
</script>

<script setup lang="ts">
import { Checkbox } from "@dzangolab/vue3-form";
import { Icon } from "@iconify/vue";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import { computed, h, ref } from "vue";

import Pagination from "./Pagination.vue";
import TableBody from "./TableBody.vue";
import TableDataActions from "./TableDataActions.vue";
import TableHeader from "./TableHeader.vue";
import TableToolbar from "./TableToolbar.vue";
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_PER_OPTIONS,
  DEFAULT_PAGE_SIZE,
} from "../constants";
import { getRequestJSON } from "../utils";

import type { DataActionsMenuItem } from "../types";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/vue-table";
import type { PropType } from "vue";

const props = defineProps({
  dataActionMenu: {
    default: () => [],
    type: Array as PropType<DataActionsMenuItem[]>,
  },
  columnActionButtonLabel: {
    default: undefined,
    type: String,
  },
  columnsData: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<ColumnDef<any>[]>,
    default: () => [],
  },
  enableRowSelection: {
    default: false,
    type: Boolean,
  },
  data: {
    type: Array,
    default: () => [],
  },
  displayActions: {
    default: true,
    type: [Boolean, Function] as PropType<
      boolean | ((data: object) => boolean)
    >,
  },
  emptyTableMessage: {
    default: undefined,
    type: String,
  },
  initialFilters: {
    default: () => [],
    type: Array as PropType<ColumnFiltersState>,
  },
  initialSorting: {
    default: () => [],
    type: Array as PropType<SortingState>,
  },
  inputDebounceTime: {
    default: undefined,
    type: Number,
  },
  isServerTable: Boolean,
  paginated: {
    default: true,
    type: Boolean,
  },
  paginationOptions: {
    default: () => ({}),
    type: Object,
  },
  resetButtonLabel: {
    default: undefined,
    type: String,
  },
  rowPerPage: {
    default: DEFAULT_PAGE_SIZE,
    type: Number,
  },
  rowPerPageOptions: {
    default: () => DEFAULT_PAGE_PER_OPTIONS,
    type: Array as () => number[],
  },
  showColumnAction: Boolean,
  showResetButton: Boolean,
  singleActionMode: {
    default: "button",
    type: String,
    validator: (value: string) => ["button", "menu"].includes(value),
  },
  titleInfo: {
    default: undefined,
    type: Object as () => { text: string; align?: string },
  },
  totalRecords: {
    default: 0,
    type: Number,
  },
  visibleColumns: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const emit = defineEmits([
  "action:click",
  "action:select",
  "change:rowSelection",
  "update:request",
]);

const columnOrder = ref([]);

const columns: ColumnDef<unknown, unknown>[] = [];

const columnFilters = ref<ColumnFiltersState>(props.initialFilters);

const pagination = ref({
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: !props.paginated ? props.data.length : props.rowPerPage,
});

const rowSelection = ref({});

const sorting = ref<SortingState>(props.initialSorting);

const isFilterRowVisible = computed(() => {
  return props.columnsData.some((column) => column.enableColumnFilter);
});

const totalItems = computed((): number =>
  props.isServerTable
    ? props.totalRecords
    : table.value.getFilteredRowModel().rows?.length,
);

const selectedRows = computed(() =>
  table.value.getSelectedRowModel().rows.map((row) => row.original),
);

const table = computed(() =>
  useVueTable({
    columns,
    state: {
      columnFilters: columnFilters.value,
      columnOrder: columnOrder.value?.length
        ? columnOrder.value
        : props.visibleColumns,
      pagination: pagination.value,
      rowSelection: rowSelection.value,
      get sorting() {
        return sorting.value;
      },
    },
    onColumnFiltersChange: (updaterOrValue) => {
      columnFilters.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(columnFilters.value)
          : updaterOrValue;

      if (!Array.isArray(columnFilters.value)) {
        columnFilters.value = [];
      }

      pagination.value.pageIndex = DEFAULT_PAGE_INDEX;

      if (props.isServerTable) {
        fetchData();
      }
    },
    onPaginationChange: (updaterOrValue) => {
      pagination.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(pagination.value)
          : updaterOrValue;

      if (props.isServerTable) {
        fetchData();
      }
    },
    onRowSelectionChange: (updaterOrValue) => {
      rowSelection.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(rowSelection.value)
          : updaterOrValue;

      emit("change:rowSelection", selectedRows.value);
    },
    onSortingChange: (updaterOrValue) => {
      sorting.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(sorting.value)
          : updaterOrValue;

      if (props.isServerTable) {
        fetchData();
      }
    },
    columnResizeMode: "onChange",
    data: props.data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualFiltering: props.isServerTable,
    manualSorting: props.isServerTable,
    manualPagination: props.isServerTable,
  }),
);

const fetchData = () => {
  const requestJSON = getRequestJSON(
    sorting.value,
    columnFilters.value,
    pagination.value,
  );

  emit("update:request", requestJSON);
};

const onReset = () => {
  columnFilters.value = props.initialFilters;
  columnOrder.value = [];
  pagination.value = {
    pageIndex: DEFAULT_PAGE_INDEX,
    pageSize: !props.paginated ? props.data.length : props.rowPerPage,
  };
  sorting.value = props.initialSorting;
};

const prepareComponent = () => {
  if (props.enableRowSelection) {
    columns.push({
      accessorKey: "select",
      header: ({ table }) =>
        h(Checkbox, {
          "aria-label": "Select all",
          modelValue: table.getIsAllPageRowsSelected(),
          "onUpdate:modelValue": () =>
            table.toggleAllPageRowsSelected(!table.getIsAllPageRowsSelected()),
        }),
      cell: ({ row }) =>
        h(Checkbox, {
          "aria-label": "Select row",
          modelValue: row.getIsSelected(),
          "onUpdate:modelValue": () => row.toggleSelected(!row.getIsSelected()),
        }),
      align: "center",
      enableColumnFilter: false,
      enableSorting: false,
    });
  }

  props.columnsData.forEach((column) => {
    if (
      props.visibleColumns.length &&
      !props.visibleColumns.includes(String(column.accessorKey))
    ) {
      return;
    }

    if (column.meta?.filterVariant === "multiselect") {
      column.filterFn = (row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) {
          return row;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return filterValue.some((value: any) =>
          row.getValue<unknown[]>(columnId)?.includes(value),
        );
      };
    }

    columns.push({
      ...column,
      enableColumnFilter: column.enableColumnFilter ?? false,
      enableSorting: column.enableSorting ?? false,
    } as ColumnDef<unknown, unknown>);
  });

  if (props.dataActionMenu.length) {
    columns.push({
      accessorKey: "actions",
      align: "center",
      enableColumnFilter: false,
      enableSorting: false,
      header: () =>
        h(Icon, {
          icon: "prime:cog",
          width: "24",
        }),
      cell: ({ row }) =>
        h(TableDataActions, {
          actions: props.dataActionMenu,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data: row.original as Record<string, any>,
          displayActions: props.displayActions,
          singleActionMode: props.singleActionMode,
          "onAction:click": () => emit("action:click", row.original),
          "onAction:select": (action: DataActionsMenuItem) =>
            emit("action:select", {
              action: action?.key || action?.label,
              data: row.original,
            }),
        }),
    });
  }
};

prepareComponent();
</script>

<style lang="css">
@import "../assets/css/index.css";
</style>
