<template>
  <LayoutPage
    :title="$t('layout.label.stickyCollapsibleFooter')"
    class="demo sticky-collapsible-footer"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/layout')"
      />
    </template>

    <section>
      <h2>{{ $t("layout.label.footerFixed") }}</h2>

      <div class="section-content">
        <StickyCollapsibleFooter>
          <Input
            v-model="input"
            :placeholder="$t('layout.placeholder.input')"
          />

          <ButtonElement
            :label="$t('layout.label.submit')"
            size="small"
            @click="showAlert(input)"
          />
          <ButtonElement
            :label="$t('layout.label.cancel')"
            severity="secondary"
            size="small"
            variant="outlined"
            @click="showAlert($t('layout.label.cancelled'))"
          />
        </StickyCollapsibleFooter>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;StickyCollapsibleFooter&gt;
              &lt;Input
                v-model="input"
                :placeholder="$t('layout.placeholder.input')"
              /&gt;

              &lt;ButtonElement
                :label="$t('layout.label.submit')"
                size="small"
                @click="showAlert(input)"
              /&gt;
              &lt;ButtonElement
                :label="$t('layout.label.cancel')"
                severity="secondary"
                size="small"
                variant="outlined"
                @click="showAlert($t('layout.label.cancelled'))"
              /&gt;
            &lt;/StickyCollapsibleFooter&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@prefabs.tech/vue3-form";
          import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const input = ref();

          const showAlert = (message: string) => {
            if (message) {
              alert(message);
            }
          };
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .sticky-collapsible .content {
            display: flex;
            gap: 0.5rem;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("layout.label.footerAbsolute") }}</h2>

      <div class="section-content">
        <Card>
          {{ $t("layout.label.bodyContent") }}

          <StickyCollapsibleFooter :fixed="false">
            {{ $t("layout.label.stickyFooterContent") }}
          </StickyCollapsibleFooter>
        </Card>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card&gt;
              Body content

              &lt;StickyCollapsibleFooter :fixed="false"&gt;
                This is sticky footer content.
              &lt;/StickyCollapsibleFooter&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
          import { Card } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .card {
            position: relative;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </LayoutPage>
</template>

<script lang="ts">
export default {
  name: "StickyCollapsibleFooter",
};
</script>

<script setup lang="ts">
import { Input } from "@prefabs.tech/vue3-form";
import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
import { ButtonElement, Card } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import LayoutPage from "../LayoutPage.vue";

const input = ref();

const showAlert = (message: string) => {
  if (message) {
    alert(message);
  }
};
</script>

<style lang="css">
.demo .section-content .sticky-collapsible .content {
  display: flex;
  gap: 0.5rem;
}

.sticky-collapsible-footer .card {
  position: relative;
  min-height: 15rem;
}
</style>
