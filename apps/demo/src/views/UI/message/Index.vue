<template>
  <Page :title="$t('ui.message.title')" class="demo-message">
    <section>
      <h2>{{ $t("ui.message.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message message="Season sale: Up to 50% off selected items!" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message :message="$t('ui.message.contents.content1')" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.icons.icon") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message
          :message="$t('ui.message.contents.content2')"
          icon="pi pi-android"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.icons.iconSlot") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              message="New Year, New You: Start fresh with our services!"
            &gt;
              &lt;template #icon&gt;
                &lt;i class="fa-regular fa-bell" /&gt;
              &lt;/template&gt;
            &lt;/Message&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message :message="$t('ui.message.contents.content3')">
          <template #icon>
            <i class="fa-regular fa-bell" />
          </template>
        </Message>
      </div>
    </section>

    <section v-if="showEnableCloseSection">
      <h2>{{ $t("ui.message.usage.enableClose") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template v-if="showEnableCloseSection"&gt;
            &lt;Message
              icon="pi pi-comments"
              message="We value your feedback: take our quick survey!"
              enable-close
              @close="showEnableCloseSection = false"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showEnableCloseSection = ref(true);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message
          :message="$t('ui.message.contents.content4')"
          icon="pi pi-comments"
          enable-close
          @close="showEnableCloseSection = false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message :message="t('ui.message.description')" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message :message="$t('ui.message.contents.content1')" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Message } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const showEnableCloseSection = ref(true);
</script>

<style lang="css">
.custom-message {
  --_background-color: #faedc4;
  --_border-color: #816204;
  --_message-color: #816204;
}

.demo-message .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-message section {
  margin-bottom: 2.5em;
}

.demo-message .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>
