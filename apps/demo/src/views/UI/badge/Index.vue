<template>
  <UiPage :title="$t('ui.badge.title')" class="demo-badge">
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
      <h2>{{ $t("ui.badge.usage.basic") }}</h2>

      <div class="section-content">
        <BadgeComponent :label="$t('ui.badge.label.basic')" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent label="Basic" /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.withI18n") }}</h2>

      <div class="section-content">
        <BadgeComponent :label="$t('ui.badge.label.addedIn')" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent :label="t('ui.badge.label.addedIn')" /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.rounded") }}</h2>

      <div class="section-content">
        <BadgeComponent :label="$t('ui.badge.label.rounded')" rounded />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent label="Rounded" rounded /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.severity") }}</h2>

      <div class="section-content">
        <div class="container">
          <BadgeComponent
            :label="$t('ui.badge.label.primary')"
            severity="primary"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.secondary')"
            severity="secondary"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.alternate')"
            severity="alternate"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.success')"
            severity="success"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.danger')"
            severity="danger"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.warning')"
            severity="warning"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent label="Primary" severity="primary" /&gt;
            &lt;BadgeComponent label="Secondary" severity="secondary" /&gt;
            &lt;BadgeComponent label="Alternate" severity="alternate" /&gt;
            &lt;BadgeComponent label="Success" severity="success" /&gt;
            &lt;BadgeComponent label="Danger" severity="danger" /&gt;
            &lt;BadgeComponent label="Warning" severity="warning" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.icon") }}</h2>

      <div class="section-content">
        <div class="container">
          <BadgeComponent icon-left="pi pi-thumbs-up" />
          <BadgeComponent icon-right="pi pi-thumbs-down" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent icon-left="pi pi-thumbs-up" /&gt;
            &lt;BadgeComponent icon-right="pi pi-thumbs-down" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.iconPackage") }}</h2>

      <div class="section-content">
        <div class="container">
          <BadgeComponent
            :label="$t('ui.badge.label.locked')"
            icon-left="pi pi-lock"
          />

          <BadgeComponent
            :label="$t('ui.badge.label.unLocked')"
            icon-right="fa-solid fa-lock-open"
            severity="success"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent label="Locked" icon-left="pi pi-lock" /&gt;
            &lt;BadgeComponent label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.iconAndLabel") }}</h2>

      <div class="section-content">
        <div class="container">
          <BadgeComponent
            :label="$t('ui.badge.label.locked')"
            icon-left="pi pi-lock"
          />

          <BadgeComponent
            :label="$t('ui.badge.label.unLocked')"
            icon-right="pi pi-lock-open"
            severity="success"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent label="Locked" icon-left="pi pi-lock" /&gt;
            &lt;BadgeComponent label="Unlocked" icon-right="pi pi-lock-open" severity="success /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.iconElement") }}</h2>

      <div class="section-content">
        <div class="container">
          <BadgeComponent :label="$t('ui.badge.label.correct')">
            <template #iconLeft>
              <i class="pi pi-check" />
            </template>
          </BadgeComponent>

          <BadgeComponent :label="$t('ui.badge.label.wrong')" severity="danger">
            <template #iconRight>
              <i class="pi pi-times" />
            </template>
          </BadgeComponent>
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;BadgeComponent label="Correct"&gt;
              &lt;template #iconLeft&gt;
                &lt;i class="pi pi-check" &gt;
              &lt;/template&gt;
            &lt;/BadgeComponent&gt;

            &lt;BadgeComponent label="Wrong" severity="danger"&gt;
              &lt;template #iconRight&gt;
                &lt;i class="pi pi-times" &gt;
              &lt;/template&gt;
            &lt;/BadgeComponent&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { BadgeComponent } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { BadgeComponent, ButtonElement } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";
</script>

<style lang="css" scoped>
.demo-badge .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-badge section {
  margin-bottom: 2.5em;
}

.demo-badge .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>
