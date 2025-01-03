<template>
  <FormPage :title="$t('form.label.checkbox')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'form' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CheckboxInput
              v-model:checked="input"
              :input-label="Accept"
              name="input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <CheckboxInput
          v-model:checked="formData.noLabelInput"
          :input-label="$t('form.label.accept')"
          name="basic"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiCheckbox") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              label="Vehicle"
              name="checkbox"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <CheckboxInput
          v-model="formData.multiCheckbox"
          :label="$t('form.label.vehicle')"
          :options="vehicleOptions"
          name="multi-checkbox"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              direction="horizontal"
              disabled
              label="Vehicle"
              name="checkbox"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref(["car"]);
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <CheckboxInput
          v-model="formData.disabled"
          :label="$t('form.label.vehicle')"
          :options="vehicleOptions"
          direction="horizontal"
          disabled
          name="disabled-checkbox"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Form&gt;
              &lt;CheckboxInput
                v-model="input"
                :label="t('form.label.dailySynchro')"
                :options="dailySynchroOptions"
                :schema="inputSchema"
                name="checkbox"
              /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, CheckboxInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { ref } from "vue";

          const { t } = useI18n();

          const inputSchema = z
            .string()
            .array()
            .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

          const input = ref();
          const dailySynchroOptions = [
            {
              label: t("form.label.title"),
              value: 1,
            },
            {
              label: t("form.label.solutions"),
              value: 2,
            },
            {
              label: t("form.label.deliverableList"),
              value: 3,
            },
            {
              label: t("form.label.workInProgress"),
              value: 4,
            },
            {
              label: t("form.label.summary"),
              value: 5,
            },
            {
              label: t("form.label.next"),
              value: 6,
            },
            {
              label: t("form.label.assumptions"),
              value: 7,
            },
            {
              label: t("form.label.generalQuestions"),
              value: 8,
            },
            {
              label: t("form.label.consequences"),
              value: 9,
            },
            {
              label: t("form.label.other"),
              value: 10,
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <CheckboxInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.dailySynchro')"
            :options="dailySynchroOptions"
            :schema="inputSchema"
            name="daily-synchro"
          />
        </Form>
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "CheckboxInput",
};
</script>

<script setup lang="ts">
import { Form, CheckboxInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string()
  .array()
  .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

let formData = reactive({
  disabled: ref(["car"]),
  inputWithValidation: ref(),
  multiCheckbox: ref<string[]>([]),
  noLabelInput: ref(),
});

const dailySynchroOptions = [
  {
    label: t("form.label.title"),
    value: 1,
  },
  {
    label: t("form.label.solutions"),
    value: 2,
  },
  {
    label: t("form.label.deliverableList"),
    value: 3,
  },
  {
    label: t("form.label.workInProgress"),
    value: 4,
  },
  {
    label: t("form.label.summary"),
    value: 5,
  },
  {
    label: t("form.label.next"),
    value: 6,
  },
  {
    label: t("form.label.assumptions"),
    value: 7,
  },
  {
    label: t("form.label.generalQuestions"),
    value: 8,
  },
  {
    label: t("form.label.consequences"),
    value: 9,
  },
  {
    label: t("form.label.other"),
    value: 10,
  },
];

const vehicleOptions = [
  {
    label: t("form.label.bike"),
    value: "bike",
  },
  {
    label: t("form.label.car"),
    value: "car",
  },
  {
    label: t("form.label.truck"),
    value: "truck",
  },
];
</script>
