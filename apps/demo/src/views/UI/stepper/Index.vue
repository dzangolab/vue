<template>
  <Page :title="$t('ui.stepper.title')" class="demo">
    <section>
      <h2>{{ $t("ui.stepper.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@dzangolab/vue3-ui";

          const steps = ref([
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
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Stepper :steps="steps" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.buttonProperties") }}</h2>

      <div class="section-content">
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

          const steps = ref([
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
          ]);

          const nextButtonProperties = ref({
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          });

          const previousButtonProperties = ref({
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Stepper
          :next-button-properties="nextButtonProperties"
          :previous-button-properties="previousButtonProperties"
          :steps="steps"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.withSlot") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps"&gt;
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

          import { reactive, ref } from "vue";

          const { t } = useI18n();

          const steps = ref([
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ]);

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

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
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Stepper } from "@dzangolab/vue3-ui";
import { TextInput, NumberInput } from "@dzangolab/vue3-form";

import { reactive, ref } from "vue";

const formData = reactive({
  name: null,
  phone: null,
  price: "$50",
});

const nextButtonProperties = ref({
  iconRight: "pi pi-chevron-right",
  label: "Next",
  severity: "primary",
  variant: "filled",
});

const previousButtonProperties = ref({
  iconLeft: "pi pi-chevron-left",
  label: "Back",
  severity: "secondary",
  variant: "filled",
});

const steps = ref([
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
]);
</script>
