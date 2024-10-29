<template>
  <div class="table-wrapper">
    <table :style="`width: ${table.getCenterTotalSize()}`">
      <div v-if="props.enableToggle" class="toggle-wrap">
        <button class="table-toggle" @click="toggleHeader">
          <Icon icon="mingcute:menu-fill" class="toggle-icon" />
        </button>
      </div>
      <colgroup>
        <col
          v-for="column in props.columnsData"
          :key="column.accessorKey"
          :style="`width: ${column.size}px`"
        />
      </colgroup>
      <thead :class="{ expand: expand }">
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
            @click="
              header.column.getCanSort()
                ? header.column.getToggleSortingHandler()?.($event)
                : null
            "
          >
            <div v-if="!header.isPlaceholder">
              <FlexRender
                :props="header.getContext()"
                :render="header.column.columnDef.header"
              />
              <Icon
                v-if="
                  !header.column.getIsSorted() && header.column.getCanSort()
                "
                icon="ri:arrow-up-down-line"
                class="sort-icon"
              />
              <Icon
                v-if="header.column.getIsSorted() && header.column.getCanSort()"
                :icon="
                  header.column.getIsSorted() === 'asc'
                    ? 'mdi:arrow-up'
                    : 'mdi:arrow-down'
                "
                class="sort-icon"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            :data-label="cell.column.id"
          >
            <FlexRender
              :props="cell.getContext()"
              :render="cell.column.columnDef.cell"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="page-navigation-container">
      <div class="page-indicators-selection-container">
        <span class="page-number-indicators"
          >{{ table.getState().pagination.pageIndex + 1 }} of
          {{ table.getPageCount() }}</span
        >
        <span class="go-to-page-container">
          <span class="go-to-page-text"> Go to page: </span>
          <input
            class="page-input"
            type="number"
            :value="table.getState().pagination.pageIndex + 1"
            :max="table.getPageCount()"
            @input="onPageChange($event)"
        /></span>
        <select
          :value="table.getState().pagination.pageSize"
          @change="setPageSize($event)"
        >
          <option
            v-for="pageSize in [10, 20, 30, 40, 50]"
            :key="pageSize"
            :value="pageSize"
          >
            Show {{ pageSize }}
          </option>
        </select>
      </div>
      <div class="page-navigation-buttons-container">
        <button
          class="page-navigation-button"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <Icon
            icon="material-symbols:keyboard-double-arrow-left-rounded"
            class="navigation-button-icon"
          />
        </button>
        <button
          class="page-navigation-button"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            class="navigation-button-icon"
          />
        </button>
        <button
          class="page-navigation-button"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="navigation-button-icon"
          />
        </button>
        <button
          class="page-navigation-button"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <Icon
            icon="material-symbols:keyboard-double-arrow-right-rounded"
            class="navigation-button-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TanstackTable",
};
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useVueTable,
} from "@tanstack/vue-table";
import { PropType, ref } from "vue";

import type {
  AccessorFn,
  ColumnDef,
  DisplayColumnDef,
} from "@tanstack/vue-table";

type ColumnProperty = {
  accessorKey: string;
  header: string;
  size?: number;
  sort?: boolean;
};

const props = defineProps({
  columnsData: {
    type: Array as PropType<ColumnProperty[]>,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
  enableToggle: {
    type: Boolean,
    default: () => false,
  },
});

const columnHelper = createColumnHelper();

const columns: ColumnDef<unknown, unknown>[] = [];

props.columnsData.forEach((column) => {
  const columnDef = columnHelper.accessor(
    column.accessorKey as string as unknown as AccessorFn<unknown>,
    {
      header: () => column.header,
      footer: (props: { column: { id: string | number } }) => props.column.id,
      enableSorting: column.sort !== undefined ? column.sort : false,
    } as object as unknown as DisplayColumnDef<unknown>,
  ) as ColumnDef<unknown, unknown>;
  columns.push(columnDef);
});

const sorting = ref<SortingState>([]);

const table = useVueTable({
  columns,
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  columnResizeMode: "onChange",
  data: props.rows,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
});

const expand = ref(false);

const toggleHeader = () => {
  expand.value = !expand.value;
};

const onPageChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const page = input.value ? Number(input.value) - 1 : 0;
  table.setPageIndex(page);
};

const setPageSize = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const pageSize = input.value ? Number(input.value) : 10;
  table.setPageSize(pageSize);
};
</script>
