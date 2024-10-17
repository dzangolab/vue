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
        <router-link :to="{ name: 'button' }">
          {{ $t("ui.button.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'badge' }">
          {{ $t("ui.badge.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'confirmationModal' }">
          {{ $t("ui.confirmationModal.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'tooltip' }">
          {{ $t("ui.tooltip.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'card' }">
          {{ $t("ui.card.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'message' }">
          {{ $t("ui.message.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'loadingPage' }">
          {{ $t("ui.loading.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'popup' }">
          {{ $t("ui.popup.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'dropdown' }">
          {{ $t("ui.dropdown.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sortableList' }">
          {{ $t("ui.sortableList.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'stepper' }">
          {{ $t("ui.stepper.title") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'youtubeFacade' }">
          {{ $t("ui.youtubeFacade.title") }}
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
