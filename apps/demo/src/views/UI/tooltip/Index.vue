<template>
  <UiPage :title="$t('ui.tooltip.title')" class="demo">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <h2>{{ $t("ui.tooltip.usage.basic") }}</h2>

      <div class="section-content">
        <Tooltip>
          <ButtonElement
            :label="$t('ui.tooltip.label.button')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip&gt;
              &lt;ButtonElement
                :label="Tooltip"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.top") }}</h2>

      <div class="section-content">
        <Tooltip position="top">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.top") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="top"&gt;
              &lt;div class="trigger"&gt;
                Top
              &lt;/div&gt;
              /&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
            .trigger {
              border: 1px solid #000;
              border-radius: 0.25rem;
              padding: 0.5rem;
              text-align: center;
              width: 12rem
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.bottom") }}</h2>

      <div class="section-content">
        <Tooltip position="bottom">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.bottom") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="bottom"&gt;
              &lt;div class="trigger"&gt;
                Bottom
              &lt;/div&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.left") }}</h2>

      <div class="section-content">
        <Tooltip position="left">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.left") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="left"&gt;
              &lt;div class="trigger"&gt;
                Left
              &lt;/div&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.right") }}</h2>

      <div class="section-content">
        <Tooltip position="right">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.right") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="right"&gt;
              &lt;div class="trigger"&gt;
                Right
              &lt;/div&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.clickable") }}</h2>

      <div class="section-content">
        <Tooltip clickable>
          <div class="trigger">
            {{ $t("ui.tooltip.label.button") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip clickable&gt;
              &lt;div class="trigger"&gt;
                Clickable
              &lt;/div&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.delay") }}</h2>

      <div class="section-content">
        <Tooltip :delay="1000">
          <div class="trigger">
            {{ $t("ui.tooltip.label.delay") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip :delay="1000"&gt;
              &lt;div class="trigger"&gt;
                Delay
              &lt;/div&gt;
              &lt;template #content&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";
</script>

<style lang="css">
.custom-style-tooltip .tooltip-box {
  --_bg-color: var(--dz-success-color);
  --_text-color: var(--dz-secondary-color);
}

.tooltip-container .trigger {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  text-align: center;
  width: 12rem;
}
</style>
