<template>
  <UiPage
    :sub-title="$t('ui.loading.subtitle')"
    :title="$t('ui.loading.title')"
    class="demo-loading"
  >
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
      <h2>{{ $t("ui.loading.usage.basic") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.loading.buttonLabel.clickMe')"
            @click="startLoading"
          />

          <LoadingPage :loading="loading" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement label="Click me" @click="startLoading" /&gt;

            &lt;LoadingPage :loading="loading" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'LoadingPageProperties' })
      "
    />
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const loading = ref(false);

const propsData = [
  {
    default: "false",
    description: "Controls the visibility of the loading overlay.",
    prop: "loading",
    type: "Boolean",
  },
];

const startLoading = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 5000);
};
</script>
