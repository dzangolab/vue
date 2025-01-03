<template>
  <UiPage :title="$t('ui.data.title')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.data.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data label="Name" value="John Doe" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Data :label="$t('ui.data.label.name')" :value="userData.name" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.data.usage.displayObject") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data
              :value="userData"
              data-key="email"
              label="Email"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data } from "@dzangolab/vue3-ui";

          const userData = {
            email: "john.doe@example.com",
            name: "John Doe",
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Data
          :label="$t('ui.data.label.email')"
          :value="userData"
          data-key="email"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.data.usage.structuredData") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;GridContainer&gt;
              &lt;Data v-for="(data, index) in data" :key="index" v-bind="data" /&gt;
            &lt;/GridContainer&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data, GridContainer } from "@dzangolab/vue3-ui";

          const data = [
            {
              label: "Name",
              value: "John Doe",
            },
            {
              label: "Age",
              value: 30,
            },
            {
              label: "Email",
              value: {
                email: "john.doe@example.com",
                user: "John Doe",
              },
              dataKey: "email",
            },
            {
              label: "Address",
              value: "123 Main St, Springfield, USA",
            },
            {
              label: "Status",
              value: "Active",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <GridContainer>
          <Data
            v-for="(data, index) in structuredData"
            :key="index"
            v-bind="data"
          />
        </GridContainer>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.data.usage.separatorSlot") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data
              v-for="(data, index) in data"
              :key="index"
              v-bind="data"
              direction="horizontal"
            &gt;
              &lt;template #separator&gt;:&lt;/template&gt;
            &lt;/Data&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data } from "@dzangolab/vue3-ui";

          const data = [
            {
              label: "Name",
              value: "John Doe",
            },
            {
              label: "Age",
              value: 30,
            },
            {
              label: "Email",
              value: {
                email: "john.doe@example.com",
                user: "John Doe",
              },
              dataKey: "email",
            },
            {
              label: "Address",
              value: "123 Main St, Springfield, USA",
            },
            {
              label: "Status",
              value: "Active",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Data
          v-for="(data, index) in structuredData"
          :key="index"
          v-bind="data"
          direction="horizontal"
        >
          <template #separator>:</template>
        </Data>
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { Data, GridContainer } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

const structuredData = [
  {
    label: "Name",
    value: "John Doe",
  },
  {
    label: "Age",
    value: 30,
  },
  {
    label: "Email",
    value: {
      email: "john.doe@example.com",
      user: "John Doe",
    },
    dataKey: "email",
  },
  {
    label: "Address",
    value: "123 Main St, Springfield, USA",
  },
  {
    label: "Status",
    value: "Active",
  },
];

const userData = {
  email: "john.doe@example.com",
  name: "John Doe",
};
</script>
