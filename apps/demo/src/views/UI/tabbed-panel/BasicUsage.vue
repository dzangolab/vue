<template>
  <section>
    <h2>{{ t("ui.tabbed-panel.basic-usage") }}</h2>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.top") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TabbedPanel&gt;
            &lt;div title="Praesent" icon="mdi-light:home"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
              ...
            &lt;/div&gt;
          &lt;/TabbedPanel&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TabbedPanel>
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.bottom") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TabbedPanel position="bottom"&gt;
            &lt;div title="Praesent" icon="mdi-light:home"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
              ...
            &lt;/div&gt;
          &lt;/TabbedPanel&gt;
        &lt;/template&gt;
        
        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TabbedPanel position="bottom">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.left") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TabbedPanel position="left"&gt;
            &lt;div title="Praesent" icon="mdi-light:home"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
              ...
            &lt;/div&gt;
          &lt;/TabbedPanel&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TabbedPanel position="left">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ $t("ui.tabbed-panel.position.right") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TabbedPanel position="right"&gt;
            &lt;div title="Praesent" icon="mdi-light:home"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
              ...
            &lt;/div&gt;
          &lt;/TabbedPanel&gt;
        &lt;/template&gt;
        
        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TabbedPanel position="right">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ $t("ui.tabbed-panel.no-title") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TabbedPanel position="right"&gt;
            &lt;div title="Praesent" icon="mdi-light:home"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
              ...
            &lt;/div&gt;
            &lt;div&gt;
              no title - element will be ignored
            &lt;/div&gt;
          &lt;/TabbedPanel&gt;
        &lt;/template&gt;
        
        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TabbedPanel>
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
        <Pane2 />
      </TabbedPanel>
    </section>
  </section>
</template>

<script lang="ts">
export default {
  name: "BasicUsage",
};
</script>

<script setup lang="ts">
import { TabbedPanel } from "@dzangolab/vue3-ui";
import { useI18n } from "@dzangolab/vue3-i18n";
import { Icon } from "@iconify/vue";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
</script>
