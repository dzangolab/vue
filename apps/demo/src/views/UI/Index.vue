<template>
  <Page :title="$t('ui.title')">
    <ul role="list">
      <li>
        <router-link :to="{ name: 'typography' }">
          {{ $t("ui.typography.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'accordion' }">
          {{ $t("ui.accordion.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'subpane' }">
          {{ $t("ui.subPane.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'tabbedPanel' }">
          {{ $t("ui.tabbed-panel.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'table' }">
          {{ $t("ui.tanstack-table.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'toolBar' }">
          {{ $t("ui.tool-bar.title") }}
        </router-link>
      </li>
    </ul>
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script setup lang="ts"></script>
