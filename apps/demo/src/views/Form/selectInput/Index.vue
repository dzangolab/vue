<template>
  <Page :title="$t('form.label.select')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a value"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.noLabelInput"
            :options="options"
            :placeholder="$t('form.placeholder.select')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Select"
              placeholder="Select a value"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.input"
            :label="$t('form.label.select')"
            :options="options"
            :placeholder="$t('form.placeholder.select')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Disabled"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("DE");

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.disabled"
            :label="$t('form.label.disabled')"
            :options="options"
            disabled
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.select')"
              :placeholder="t('form.placeholder.select')"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.input"
            :label="$t('form.label.select')"
            :options="options"
            :placeholder="$t('form.placeholder.select')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiSelect") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Select"
              multiple
              placeholder="Select multiple value"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.multiSelect"
            :label="$t('form.label.select')"
            :options="options"
            :placeholder="$t('form.placeholder.multiSelect')"
            multiple
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabledMultiSelect") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Disabled"
              multiple
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["BE", "DE"]);

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.disabledMultiSelect"
            :label="$t('form.label.disabled')"
            :options="options"
            disabled
            multiple
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Select"
              multiple
              placeholder="Select multiple value"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const inputSchema = z
            .string({invalid_type_error: "Please select at least one valid option"})
            .array()
            .min(1, { message: "Please select at least one valid option" });

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.select')"
            :options="options"
            :placeholder="$t('form.placeholder.multiSelect')"
            :schema="inputSchema"
            multiple
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customStyleInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              class="custom-style-select"
              label="Select"
              multiple
              placeholder="Select multiple value"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .custom-style-select .multiple-mode .selected-option {
            --_multiselect-tag-border-radius: 1rem;
            --_multiselect-tag-color: #007aff;
            color: #fff;
          }

          .custom-style-select .multiselect-input {
            --_multiselect-border-color: #007aff;
          }

          .custom-style-select .multiselect-option.selected {
            --_multiselect-selected-bg-color: #22c55e;
            --_multiselect-selected-color: #fff;
          }
        &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SelectInput
            v-model="formData.multiSelect"
            :label="$t('form.label.select')"
            :options="options"
            :placeholder="$t('form.placeholder.multiSelect')"
            class="custom-style-select"
            multiple
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "SelectInputField",
};
</script>

<script setup lang="ts">
import { Form, SelectInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z
  .string({ invalid_type_error: t("form.errors.multiSelect.invalid") })
  .array()
  .min(1, { message: t("form.errors.multiSelect.invalid") });

let formData = reactive({
  customStyleInput: ref(),
  disabled: ref("DE"),
  disabledMultiSelect: ref(["BE", "DE"]),
  input: ref(),
  inputWithValidation: ref(),
  multiSelect: ref(),
  noLabelInput: ref(),
});

const options = ref([
  { value: "FR", label: "French" },
  { value: "DE", label: "German" },
  { value: "BE", label: "Dutch" },
  { value: "NP", label: "Nepali" },
  { value: "HI", label: "Hindi" },
]);
</script>

<style lang="css">
.custom-style-select .multiple-mode .selected-option {
  --_multiselect-tag-border-radius: 1rem;
  --_multiselect-tag-color: var(--dz-primary-color);

  color: #fff;
}

.custom-style-select .multiselect-input {
  --_multiselect-border-color: var(--dz-primary-color);
}

.custom-style-select .multiselect-option.selected {
  --_multiselect-selected-bg-color: var(--dz-success-color);
  --_multiselect-selected-color: #fff;
}
</style>
