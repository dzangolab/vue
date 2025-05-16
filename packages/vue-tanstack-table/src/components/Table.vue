<template>
  <div :id="id" class="table-container">
    <div v-if="isLoading" class="loading-overlay">
      <LoadingIcon class="loading-icon" />
    </div>

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
        <TableBody
          :custom-formatters="customFormatters"
          :empty-table-message="emptyTableMessage"
          :table="table"
        />
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
import { getStorage, LoadingIcon } from "@dzangolab/vue3-ui";
import { Icon } from "@iconify/vue";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import { computed, h, ref, watch } from "vue";

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
import { getRequestJSON, getSavedTableState, saveTableState } from "../utils";

import type { DataActionsMenuItem, PersistentTableState } from "../types";
import type { StorageType } from "@dzangolab/vue3-ui";
import type {
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  SortingState,
  VisibilityState,
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
  customFormatters: {
    default: () => ({}),
    type: Object as () => Record<string, (value: unknown) => unknown>,
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
  id: {
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
  isLoading: Boolean,
  isServerTable: Boolean,
  paginated: {
    default: true,
    type: Boolean,
  },
  paginationOptions: {
    default: () => ({}),
    type: Object,
  },
  persistState: Boolean,
  persistStateStorage: {
    default: "localStorage",
    type: String,
    validator: (value: string) =>
      ["localStorage", "sessionStorage"].includes(value),
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
  tableOptions: {
    default: () => ({}),
    type: Object,
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

const columns: ColumnDef<unknown, unknown>[] = [];

const columnFilters = ref<ColumnFiltersState>(props.initialFilters);

const columnOrder = ref<ColumnOrderState>([]);

const columnVisibility = ref<VisibilityState>({});

const pagination = ref({
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: !props.paginated ? props.data.length : props.rowPerPage,
});

const rowSelection = ref({});

const sorting = ref<SortingState>(props.initialSorting);

const isFilterRowVisible = computed(() => {
  return props.columnsData.some((column) => column.enableColumnFilter);
});

const persistentState = computed((): PersistentTableState => {
  return {
    columnFilters: columnFilters.value,
    columnOrder: columnOrder.value,
    columnVisibility: columnVisibility.value,
    pagination: pagination.value,
    sorting: sorting.value,
  };
});

const storage = computed(() =>
  getStorage(props.persistStateStorage as StorageType),
);

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
      columnVisibility: columnVisibility.value,
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
        columnFilters.value = props.columnsData
          .filter((column) => column.enableColumnFilter)
          .map((column) => ({
            id: column.accessorKey,
            value: columnFilters.value.find(
              (filter) => filter.id === column.accessorKey,
            )?.value,
            filterFn: column?.meta?.serverFilterFn,
          })) as ColumnFiltersState;

        fetchData();
      }
    },
    onColumnVisibilityChange: (updaterOrValue) => {
      columnVisibility.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(columnVisibility.value)
          : updaterOrValue;
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
    ...props.tableOptions,
  }),
);

watch(
  [columnFilters, columnOrder, columnVisibility, pagination, sorting],
  () => {
    if (props.persistState && props.id) {
      saveTableState(props.id as string, persistentState.value, storage.value);
    }
  },
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
  columnVisibility.value = {};
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
      !props.visibleColumns.includes(String(column.accessorKey ?? column.id))
    ) {
      return;
    }

    if (column.meta?.filterVariant === "multiselect" && !column.filterFn) {
      column.filterFn = (row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) {
          return row;
        }

        return filterValue.some((value: string | boolean) => {
          if (typeof value === "boolean") {
            return row.getValue(columnId) === value;
          } else {
            return row.getValue<unknown[]>(columnId)?.includes(value);
          }
        });
      };
    } else if (column.meta?.filterVariant === "dateRange" && !column.filterFn) {
      column.filterFn = (row, columnId, filterValue) => {
        if (filterValue?.length) {
          const endDate = new Date(filterValue[1]).setHours(23, 59, 59, 999);
          const rowData = new Date(row.getValue<string | Date>(columnId));
          const startDate = new Date(filterValue[0]).setHours(0, 0, 0, 0);

          return rowData.getTime() >= startDate && rowData.getTime() <= endDate;
        }

        return true;
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

  if (props.persistState && !props.id) {
    throw new Error('Id is required when prop "persistState" is true');
  }

  setPersistState();

  if (props.isServerTable) {
    fetchData();
  }
};

const setPersistState = () => {
  if (!props.persistState || !props.id) {
    return;
  }

  const savedState = getSavedTableState(props.id, storage.value);

  if (savedState) {
    columnFilters.value = savedState.columnFilters;
    columnOrder.value = savedState.columnOrder as ColumnOrderState;
    columnVisibility.value = savedState.columnVisibility as VisibilityState;
    sorting.value = savedState.sorting;

    if (props.rowPerPageOptions.includes(savedState.pagination.pageSize)) {
      pagination.value = savedState.pagination;
    }
  }

  saveTableState(props.id as string, persistentState.value, storage.value);
};

prepareComponent();
</script>

<style lang="css">
@import "../assets/css/index.css";
</style>
