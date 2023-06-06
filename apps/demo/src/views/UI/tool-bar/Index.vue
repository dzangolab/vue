<template>
  <Page title="Toolbar">
    <template #toolbar>
      <ToolBar speed-dial-type="quarter-circle" @add="onAdd" @delete="onDelete">
      </ToolBar>
    </template>
  </Page>
</template>

<script lang="ts">
export default {
  name: "ToolBarPage",
};
</script>

<script setup lang="ts">
import { Page, ToolBar } from "@dzangolab/vue3-ui";

const onAdd = () => {
  alert("Add");
};

const onDelete = () => {
  alert("Delete");
};
</script>
