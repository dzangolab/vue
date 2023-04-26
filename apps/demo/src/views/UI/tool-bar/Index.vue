<template>
  <Page title="Toolbar">
    <template #toolbar>
      <ToolBar :quarter-circle="true" @add="onAdd"> </ToolBar>
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
</script>
