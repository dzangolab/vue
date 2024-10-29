<template>
  <Page :title="$t('ui.tooltip.title')" class="demo">
    <section>
      <h2>{{ $t("ui.tooltip.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip&gt;
              &lt;ButtonElement
                :label="Tooltip"
                severity="success"
              /&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip>
          <ButtonElement
            :label="$t('ui.tooltip.label.button')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.top") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="top"&gt;
              &lt;div class="trigger"&gt;
                Top
              &lt;/div&gt;
              /&gt;
              &lt;template #tooltip&gt;
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

        <Tooltip position="top">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.top") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.bottom") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="bottom"&gt;
              &lt;div class="trigger"&gt;
                Bottom
              &lt;/div&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip position="bottom">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.bottom") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.left") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="left"&gt;
              &lt;div class="trigger"&gt;
                Left
              &lt;/div&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip position="left">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.left") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.right") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip position="right"&gt;
              &lt;div class="trigger"&gt;
                Right
              &lt;/div&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip position="right">
          <div class="trigger">
            {{ $t("ui.tooltip.usage.right") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.clickable") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip clickable&gt;
              &lt;div class="trigger"&gt;
                Clickable
              &lt;/div&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip clickable>
          <div class="trigger">
            {{ $t("ui.tooltip.label.button") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.delay") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip :delay="1000"&gt;
              &lt;div class="trigger"&gt;
                Delay
              &lt;/div&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
              &lt;/template&gt;
            &lt;/Tooltip&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip :delay="1000">
          <div class="trigger">
            {{ $t("ui.tooltip.label.delay") }}
          </div>
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
</script>

<style lang="css">
.custom-style-tooltip .tooltip-box {
  --_bg-color: var(--dz-success-color);
  --_text-color: var(--dz-secondary-color);
}

.demo .trigger {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  text-align: center;
  width: 12rem;
}
</style>
