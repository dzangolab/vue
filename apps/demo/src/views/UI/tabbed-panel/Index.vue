<template>
  <Page :title="t('ui.tabbed-panel.title')">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back" type="button">
        {{ t("common.back") }}
      </router-link>
    </template>

    <TabbedPanel class="colorized shadow">
      <BasicUsage :title="t('ui.tabbed-panel.basic-usage')" />
      <Colorized :title="t('ui.tabbed-panel.with-color')" />
      <ColorizedWithShadow
        :title="t('ui.tabbed-panel.with-color-and-shadow')"
      />
      <CustomIcons :title="t('ui.tabbed-panel.with-custom-icons')" />
    </TabbedPanel>
  </Page>
</template>

<script lang="ts">
export default {
  name: "TabbedPanelPage",
};
</script>

<script lang="ts" setup>
import { useI18n } from "@dzangolab/vue3-i18n";
import { TabbedPanel } from "@dzangolab/vue3-ui";

import BasicUsage from "./BasicUsage.vue";
import Colorized from "./Colorized.vue";
import ColorizedWithShadow from "./ColorizedWithShadow.vue";
import CustomIcons from "./CustomIcons.vue";

const { t } = useI18n();
</script>

<style scoped>
section {
  margin: var(--accordion-sections, 1rem 0);
}
.sub-pane {
  padding: var(--accordion-subpane, 1rem);
  border: 1px solid var(--tabbedpanel-subpane-border-color, black);
}
</style>
