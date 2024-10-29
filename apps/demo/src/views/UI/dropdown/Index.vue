<template>
  <Page :title="$t('ui.dropdown.title')" class="demo">
    <section>
      <h2>{{ $t("ui.dropdown.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              :menu="menu"
              label="User"
              @select="onSelect"
            /&gt;

            &lt;template v-if="showProfile"&gt;
              &lt;div class="email"&gt;
                &lt;span class="label"&gt;
                  Email
                &lt;/span&gt;
                &lt;span class="value"&gt;
                  : monorepo@dzangolab.com
                &lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="name"&gt;
                &lt;span class="label"&gt;
                  Name
                &lt;/span&gt;
                &lt;span class="value"&gt;
                  : Monorepo
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/template&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Dropdown } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const menu = ref([
            { disabled: true, label: "Change password", value: "password"  },
            { label: "Profile", value: "profile" },
          ]);

          const showProfile = ref&lt;boolean&gt;(false);

          const onSelect = (value: string | number) => {
            if (value === menu.value[1].value) {
              showProfile.value = true;
            }
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Dropdown
          :label="$t('ui.dropdown.label.user')"
          :menu="menu"
          @select="onSelect"
        />

        <template v-if="showProfile">
          <div class="email">
            <span class="label">
              {{ $t("ui.dropdown.label.email") }}
            </span>
            <span class="value">
              {{ ": " + $t("ui.dropdown.usage.email") }}
            </span>
          </div>
          <div class="name">
            <span class="label">
              {{ $t("ui.dropdown.label.name") }}
            </span>
            <span class="value">
              {{ ": " + $t("ui.dropdown.usage.name") }}
            </span>
          </div>
        </template>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.dropdown.usage.withSlot") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              :menu="menu"
            &gt;
              &lt;div class="trigger"&gt;...&lt;/div&gt;
            &lt;/Dropdown&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Dropdown } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const menu = ref([
            { disabled: true, label: "Change password", value: "password"  },
            { label: "Profile", value: "profile" },
          ]);
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .trigger {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Dropdown :menu="menu">
          <div class="trigger">...</div>
        </Dropdown>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Dropdown } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const menu = ref([
  { disabled: true, label: "Change password", value: "password" },
  { label: "Profile", value: "profile" },
]);

const showProfile = ref<boolean>(false);

const onSelect = (value: string | number) => {
  if (value === menu.value[1].value) {
    showProfile.value = true;
  }
};
</script>

<style lang="css">
.label {
  font-weight: 600;
  margin-right: 1rem;
}

.trigger {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}
</style>
