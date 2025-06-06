<template>
  <UiPage :title="$t('ui.tabView.title')" class="tab-view">
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
      <h2>{{ $t("ui.tabView.usage.basic") }}</h2>

      <div class="section-content">
        <TabView id="tab-view" :tabs="tabs" active-key="1" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView id="tab-view" :tabs="tabs" active-key="1" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.disableTabState.title") }}</h2>

      <div class="section-content">
        <p>{{ $t("ui.tabView.usage.disableTabState.subtitle") }}</p>
        <TabView
          :persist-state="false"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              :persist-state="false"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.positionBottom") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-bottom"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
          position="bottom"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-bottom"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="bottom"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.positionLeft") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-left"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
          position="left"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-left"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="left"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.positionRight") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-right"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
          position="right"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-right"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="right"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.closableTab") }}</h2>

      <div class="section-content">
        <div class="tab-button-group">
          <ButtonElement label="Add specifications tab" @click="addTab('3')" />
          <ButtonElement label="Add reviews tab" @click="addTab('2')" />
          <ButtonElement label="Add pricing tab" @click="addTab('4')" />
        </div>
        <TabView
          id="tab-view-closable"
          v-model:active-key="activeKey"
          v-model:visible-tabs="visibleTabs"
          :tabs="tabs"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div class="tab-button-group"&gt;
              &lt;ButtonElement label="Add specifications tab" @click="addTab('3')" /&gt;
              &lt;ButtonElement label="Add reviews tab" @click="addTab('2')" /&gt;
              &lt;ButtonElement label="Add pricing tab" @click="addTab('4')" /&gt;
            &lt;/div&gt;
            &lt;TabView
              id="tab-view-closable"
              v-model:active-key="activeKey"
              v-model:visible-tabs="VisibleTabs"
              :tabs="tabs"    
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const activeKey = ref&lt;string&gt;("1");
          const visibleTabs = ref&lt;string[]&gt;(["1"]);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const addTab = (key: string) => {
            if (!visibleTabs.value.includes(key)) {
              visibleTabs.value = [...visibleTabs.value, key];
            }

            activeKey.value = key;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.withSlot") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-slot"
          :tabs="tabList"
          :visible-tabs="['description', 'installation', 'certifications']"
          active-key="description"
        >
          <p v-for="tab in tabList" :key="tab.key">{{ tab.label }}</p>
        </TabView>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-slot"
              :tabs="tabList"    
              :visible-tabs="['description', 'installation', 'certifications']"
              active-key="['description']"
            &gt;
              &lt;p v-for="tab in tabList" :key="tab.key"&gt;&lbrace;&lbrace; tab.label &rbrace;&rbrace;&lt;/p&gt;
            &lt;/TabView&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@dzangolab/vue3-ui";

          const tabList = [
            { key: "description", label: "Description" },
            { key: "review", label: "Reviews" },
            { key: "specifications", label: "Specifications" },
            { key: "pricing", label: "Pricing" },
            { key: "installation", label: "Installation" },
            { key: "certifications", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.interceptTabChange") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-interception"
          v-model:active-key="interceptionActiveKey"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          intercept-tab-change
          @before-tab-change="beforeTabChange"
        />

        <ConfirmationModal
          v-if="showConfirmation"
          @on:close="showConfirmation = false"
          @on:confirm="onConfirmChange"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-interception"
              v-model:active-key="activeKey"
              :tabs="tabs"
              :visible-tabs="['1', '5', '6']"
              intercept-tab-change
              @before-tab-change="beforeTabChange"
            /&gt;

            &lt;ConfirmationModal
              v-if="showConfirmation"
              @on:close="showConfirmation = false"
              @on:confirm="onConfirmChange"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ConfirmationModal, TabView } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const activeKey = ref&lt;string&gt;("1");
          const nextTabKey = ref&lt;string&gt;();
          const showConfirmation = ref&lt;boolean&gt;(false);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const beforeTabChange = (key: string) => {
            showConfirmation.value = true;
            nextTabKey.value = key;
          };

          const onConfirmChange = () => {
            activeKey.value = nextTabKey.value || activeKey.value;
            showConfirmation.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.interceptTabClose") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-interception-close"
          ref="dzangolabVueTabView"
          :tabs="tabs"
          active-key="1"
          intercept-tab-close
          @before-tab-close="beforeTabClose"
        />

        <ConfirmationModal
          v-if="showCloseConfirmation"
          @on:close="showCloseConfirmation = false"
          @on:confirm="onConfirmClose"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-interception-close"
              ref="dzangolabVueTabView"
              :tabs="tabs"
              active-key="1"
              intercept-tab-close
              @before-tab-change="beforeTabClose"
            /&gt;

            &lt;ConfirmationModal
              v-if="showConfirmation"
              @on:close="showConfirmation = false"
              @on:confirm="onConfirmChange"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ConfirmationModal, TabView } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const closingKey = ref&lt;string&gt;();
          const dzangolabVueTabView = ref();
          const showConfirmation = ref&lt;boolean&gt;(false);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const beforeTabClose = (key: string) => {
            showConfirmation.value = true;
            closingKey.value = key;
          };

          const onConfirm = () => {
            dzangolabVueTabView.value?.closeTab(closingKey.value);
            showConfirmation.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("common.properties", { value: "TabViewProperties" }) }}</h2>
      <div class="section-content">
        <Table
          :columns-data="propsColumns"
          :data="propsData"
          :paginated="false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("common.slots") }}</h2>
      <div class="section-content">
        <Table
          :columns-data="slotColumns"
          :data="[
            {
              description:
                'Content for the tab, matched using the key attribute on each element',
              id: 1,
              name: 'default',
            },
          ]"
          :paginated="false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("common.events") }}</h2>
      <div class="section-content">
        <Table
          :columns-data="eventColumns"
          :data="eventData"
          :paginated="false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
          <SshPre language="html-vue">
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          </SshPre>
          <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { Table } from "@dzangolab/vue3-tanstack-table";
import { ButtonElement, ConfirmationModal, TabView } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import UiPage from "../UiPage.vue";

const activeKey = ref<string>("1");
const closingKey = ref<string>();
const dzangolabVueTabView = ref();
const interceptionActiveKey = ref<string>("1");
const nextTabKey = ref<string>();
const showCloseConfirmation = ref<boolean>(false);
const showConfirmation = ref<boolean>(false);
const visibleTabs = ref<string[]>(["1"]);

const eventColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const eventData = [
  {
    description: "Triggers before tab actually change",
    id: 1,
    name: "beforeTabChange",
  },
  {
    description: "Triggers before tab actually close",
    id: 2,
    name: "beforeTabClose",
  },
  {
    description: "Triggers on active key change",
    id: 3,
    name: "update:activeKey",
  },
  {
    description: "Triggers on visible tabs change",
    id: 4,
    name: "update:visibleTabs",
  },
];

const propsColumns = [
  {
    accessorKey: "prop",
    header: "Property",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "default",
    header: "Default",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const propsData = [
  {
    default: "-",
    description: "Active key of TabView.",
    id: 1,
    prop: "activeKey",
    type: "string",
  },
  {
    default: "-",
    description:
      "Id of tab to save the state. Should provide 'id' in case of tab state persistence.",
    id: 2,
    prop: "id",
    type: "string",
  },
  {
    default: "false",
    description: "Enable event emitting before tab actually change.",
    id: 3,
    prop: "interceptTabChange",
    type: "boolean",
  },
  {
    default: "false",
    description: "Enable event emitting before tab actually change.",
    id: 4,
    prop: "interceptTabClose",
    type: "boolean",
  },
  {
    default: "true",
    description:
      "If true, tab state is saved either in localStorage or sessionStorage.",
    id: 5,
    prop: "persistState",
    type: "boolean",
  },
  {
    default: "localStorage",
    description: "Storage to save tab state.",
    id: 6,
    prop: "persistStateStorage",
    type: '"localStorage" | "sessionStorage"',
  },
  {
    default: "top",
    description: "Position of the tab panel header relative to its content.",
    id: 7,
    prop: "position",
    type: '"top" | "left" | "bottom" | "right"',
  },
  {
    default: "-",
    description: "Array of tab object.",
    id: 8,
    prop: "tabs",
    type: "Tab[]",
  },
  {
    default: "-",
    description: "Array of visible tabs.",
    id: 9,
    prop: "visibleTabs",
    type: "string[]",
  },
];

const slotColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const tabList = [
  { key: "description", label: "Description" },
  { key: "review", label: "Reviews" },
  { key: "specifications", label: "Specifications" },
  { key: "pricing", label: "Pricing" },
  { key: "installation", label: "Installation" },
  { key: "certifications", label: "Certifications" },
];

const tabs = [
  { children: "Description", key: "1", label: "Description" },
  { children: "Reviews", closable: true, key: "2", label: "Reviews" },
  {
    children: "Specifications",
    closable: true,
    key: "3",
    label: "Specifications",
  },
  { children: "Pricing", closable: true, key: "4", label: "Pricing" },
  { children: "Installation Instructions", key: "5", label: "Installation" },
  { children: "Certifications", key: "6", label: "Certifications" },
];

const addTab = (key: string) => {
  if (!visibleTabs.value.includes(key)) {
    visibleTabs.value = [...visibleTabs.value, key];
  }

  activeKey.value = key;
};

const beforeTabChange = (key: string) => {
  showConfirmation.value = true;
  nextTabKey.value = key;
};

const beforeTabClose = (key: string) => {
  showCloseConfirmation.value = true;
  closingKey.value = key;
};

const onConfirmChange = () => {
  interceptionActiveKey.value = nextTabKey.value || interceptionActiveKey.value;
  showConfirmation.value = false;
};

const onConfirmClose = () => {
  dzangolabVueTabView.value?.closeTab(closingKey.value);
  showCloseConfirmation.value = false;
};
</script>

<style lang="css">
@import "../../../assets/css/ui/tab-view.css";
</style>
