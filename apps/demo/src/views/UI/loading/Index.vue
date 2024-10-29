<template>
  <Page :title="$t('ui.loading.title')" class="demo-loading">
    <section>
      <h2>{{ $t("ui.loading.usage.basic") }}</h2>

      <div class="section-content">
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

        <div class="container">
          <ButtonElement
            :label="$t('ui.loading.buttonLabel.clickMe')"
            @click="startLoading"
          />

          <LoadingPage :loading="loading" />
        </div>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const loading = ref(false);

const startLoading = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 5000);
};
</script>

<style lang="css">
.demo-loading section {
  margin-bottom: 2.5em;
}

.demo-loading .section-content {
  display: grid;
  gap: 2.5rem;
}
</style>
