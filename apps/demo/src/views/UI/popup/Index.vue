<template>
  <Page :title="$t('ui.popup.title')" class="demo">
    <section>
      <h2>{{ $t("ui.popup.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup&gt;
              &lt;ButtonElement
                :label="Click me"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                &lt;h3 class="popup-title"&gt;Popup&lt;/h3&gt;
                &lt;div class="popup-body"&gt;This is a popup&lt;/div&gt;
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup>
          <ButtonElement
            :label="$t('ui.popup.label.button')"
            severity="success"
          />
          <template #content>
            <h3 class="popup-title">{{ $t("ui.popup.title") }}</h3>
            <div class="popup-body">{{ $t("ui.popup.content") }}</div>
          </template>
        </Popup>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.popup.usage.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup&gt;
              &lt;ButtonElement
                :label="t('ui.popup.label.button')"
                severity="success"
              /&gt;
              &lt;template #content&gt;
              &lbrace;&lbrace; t("ui.popup.content") &rbrace;&rbrace;
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup>
          <ButtonElement
            :label="$t('ui.popup.label.button')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.popup.content") }}
          </template>
        </Popup>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.top") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup position="top"&gt;
              &lt;ButtonElement
                :label="Top"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                This is a popup
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup position="top">
          <ButtonElement :label="$t('ui.popup.usage.top')" severity="success" />
          <template #content>
            {{ $t("ui.popup.content") }}
          </template>
        </Popup>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.bottom") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup position="bottom"&gt;
              &lt;ButtonElement
                :label="Bottom"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                This is a popup
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup position="bottom">
          <ButtonElement
            :label="$t('ui.popup.usage.bottom')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.popup.content") }}
          </template>
        </Popup>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.left") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup position="left"&gt;
              &lt;ButtonElement
                :label="Left"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                This is a popup
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup position="left">
          <ButtonElement
            :label="$t('ui.popup.usage.left')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.popup.content") }}
          </template>
        </Popup>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tooltip.usage.right") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup position="right"&gt;
              &lt;ButtonElement
                :label="Right"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                This is a popup
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup position="right">
          <ButtonElement
            :label="$t('ui.popup.usage.right')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.popup.content") }}
          </template>
        </Popup>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
</script>
