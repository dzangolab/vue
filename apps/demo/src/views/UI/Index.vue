<template>
  <Page :title="$t('ui.title')">
    <ul>
      <li>
        <router-link :to="{ name: 'password' }">
          {{ $t("ui.pages.password") }}
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
