<template>
  <UiPage :title="$t('ui.stepper.title')" class="demo">
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
      <h2>{{ $t("ui.stepper.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <Stepper :steps="steps" @complete="onFinish" />

        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps" @complete="onFinish" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@dzangolab/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            {
              content: "Please enter contact details",
              label: "Contact",
              step: 2,
            },
            {
              content: "Please enter payment details",
              label: "Payment",
              step: 3,
            },
            {
              content: "Do you wish to continue?",
              label: "Confirmation",
              step: 4,
            },
          ];

          const onFinish = () => {
            router.push("/ui");
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.buttonProperties") }}</h2>

      <div class="section-content">
        <Stepper
          :next-button-properties="nextButtonProperties"
          :previous-button-properties="previousButtonProperties"
          :steps="steps"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties" 
              :steps="steps"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@dzangolab/vue3-ui";

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            {
              content: "Please enter contact details",
              label: "Contact",
              step: 2,
            },
            {
              content: "Please enter payment details",
              label: "Payment",
              step: 3,
            },
            {
              content: "Do you wish to continue?",
              label: "Confirmation",
              step: 4,
            },
          ];

          const nextButtonProperties = {
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          };

          const previousButtonProperties = {
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.withSlot") }}</h2>

      <div class="section-content">
        <Stepper :steps="steps">
          <template #1>
            <TextInput
              v-model="formData.name"
              :label="$t('ui.stepper.label.name')"
              :placeholder="$t('ui.stepper.placeholder.name')"
              name="name"
            />
          </template>
          <template #2>
            <NumberInput
              v-model="formData.phone"
              :label="$t('ui.stepper.label.phone')"
              :placeholder="$t('ui.stepper.placeholder.phone')"
              name="phone"
            />
          </template>
          <template #3>
            <TextInput
              v-model="formData.price"
              :label="$t('ui.stepper.label.price')"
              disabled
              name="price"
            />
          </template>
          <template #4>
            {{ $t("ui.stepper.usage.complete") }}
          </template>
        </Stepper>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps"&gt;
            &lt;!-- Slot for rendering custom content with step in the `steps` prop --&gt;
            &lt;template #1&gt;
              &lt;TextInput
                v-model="formData.name"
                :label="$t('ui.stepper.label.name')"
                :placeholder="$t('ui.stepper.placeholder.name')"
                name="name"
              /&gt;
            &lt;/template&gt;
            &lt;template #2&gt;
              &lt;NumberInput
                v-model="formData.phone"
                :label="$t('ui.stepper.label.phone')"
                :placeholder="$t('ui.stepper.placeholder.phone')"
                name="phone"
              /&gt;
            &lt;/template&gt;
            &lt;template #3&gt;
              &lt;TextInput
                v-model="formData.price"
                disabled
                :label="$t('ui.stepper.label.price')"
                name="price"
              /&gt;
            &lt;/template&gt;
            &lt;template #4&gt;
              {&lbrace;&lbrace; t('ui.stepper.usage.complete') &rbrace;&rbrace;
            &lt;/template&gt;
            &lt;/Stepper&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { TextInput, NumberInput } from "@dzangolab/vue3-form";
          import { Stepper } from "@dzangolab/vue3-ui";

          import { reactive } from "vue";

          const { t } = useI18n();

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ];

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { TextInput, NumberInput } from "@dzangolab/vue3-form";
import { ButtonElement, Stepper } from "@dzangolab/vue3-ui";
import { reactive } from "vue";
import { useRouter } from "vue-router";

import UiPage from "../UiPage.vue";

const router = useRouter();

const formData = reactive({
  name: null,
  phone: null,
  price: "$50",
});

const nextButtonProperties = {
  iconRight: "pi pi-chevron-right",
  label: "Next",
  severity: "primary",
  variant: "filled",
};

const previousButtonProperties = {
  iconLeft: "pi pi-chevron-left",
  label: "Back",
  severity: "secondary",
  variant: "filled",
};

const steps = [
  {
    content: "Please enter personal details",
    label: "Personal",
    step: 1,
  },
  {
    content: "Please enter contact details",
    label: "Contact",
    step: 2,
  },
  {
    content: "Please enter payment details",
    label: "Payment",
    step: 3,
  },
  {
    content: "Do you wish to continue?",
    label: "Confirmation",
    step: 4,
  },
];

const onFinish = () => {
  router.push("/ui");
};
</script>
