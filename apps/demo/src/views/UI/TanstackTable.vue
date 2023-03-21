<template>
  <Page :title="$t('ui.pages.table')">
    <TanstackTable :columns="columns" :rows="rows" />
  </Page>
</template>

<script setup lang="ts">
import { TanstackTable } from "@dzangolab/vue3-tanstack-table";

const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
];

const rows = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
  },
  {
    id: 3,
    name: "Bob",
    age: 45,
  },
];
</script>
