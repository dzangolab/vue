<template>
  <UiPage :title="$t('ui.accordion.title')" class="demo">
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
      <h2>{{ $t("ui.accordion.basic") }}</h2>
      <DemoAccordion />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.separate") }}</h2>
      <DemoAccordion class="separate" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.defaultIndex") }}</h2>
      <DemoAccordion :default-index="1" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.can-self-collapse") }}</h2>
      <DemoAccordion :can-self-collapse="true" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.toggle") }}</h2>
      <DemoAccordion class="show-toggle-icon" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.horizontal.basic") }}</h2>
      <DemoAccordion direction="horizontal" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.horizontal.separate") }}</h2>
      <DemoAccordion direction="horizontal" class="separate" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.css") }}</h2>
      <DemoAccordion class="with-icons" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.slot") }}</h2>
      <DemoAccordionWithIcons />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.css") }}</h2>
      <DemoAccordionWithIcons class="horizontal" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.slot") }}</h2>
      <DemoAccordionWithIcons class="horizontal show-toggle-icon" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.toggle") }}</h2>
      <DemoAccordion class="show-toggle-icon custom-toggle-icons" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.slot-without-title") }}</h2>
      <DemoAccordion>
        <template #extra-pane>
          <div>
            <p>
              Adipiscing condimentum elit a cum ullamcorper nisi rutrum aptent
              lacinia vestibulum adipiscing a a vestibulum quis malesuada
              ullamcorper praesent netus netus mus.
            </p>
          </div>
        </template>
      </DemoAccordion>
    </section>
  </UiPage>
</template>

<script lang="ts">
export default {
  name: "AccordionPage",
};
</script>

<script lang="ts" setup>
import { ButtonElement } from "@prefabs.tech/vue3-ui";

import DemoAccordion from "./DemoAccordion.vue";
import DemoAccordionWithIcons from "./DemoAccordionWithIcons.vue";
import UiPage from "../UiPage.vue";

import "@/assets/css/ui/accordion.css";
</script>
