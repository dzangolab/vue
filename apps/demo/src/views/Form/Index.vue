<template>
  <Page :title="$t('form.title')">
    <ul role="list">
      <li>
        <router-link :to="{ name: 'input' }">
          {{ $t("form.label.input") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'textInput' }">
          {{ $t("form.label.textInput") }}
        </router-link>
      </li>
    </ul>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Form",
};
</script>

<script setup lang="ts"></script>
