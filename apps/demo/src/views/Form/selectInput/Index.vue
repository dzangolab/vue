<template>
  <FormPage :title="$t('form.label.select')" class="demo">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/form')"
      />
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.noLabelInput"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.input"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              placeholder="Select a language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabled"
          :label="$t('form.label.language')"
          :options="options"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("de");

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withSearch") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.selectWithSearch"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
          :search-placeholder="$t('form.placeholder.search')"
          enable-search
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              enable-search
              label="Language"
              placeholder="Select a language"
              search-placeholder="Search..."
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disableSort") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabledSortInput"
          :has-sorted-options="false"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Language"
              placeholder="Select a language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.i18nSelect"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: t("form.label.french"), value: "fr"},
            { label: t("form.label.german"), value: "de"},
            { disabled: true, label: t("form.label.dutch"), value: "be", },
            { label: t("form.label.nepali"), value: "np",  },
            { label: t("form.label.hindi"), value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiselect"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.languages')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              multiple
              placeholder="Select languages"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabledMultiselect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabledMultiselect"
          :label="$t('form.label.language')"
          :options="options"
          disabled
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
              multiple
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["be", "de"]);

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselectSearch") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiselectSearch"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.languages')"
          :search-placeholder="$t('form.placeholder.search')"
          enable-search
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              enable-search
              label="Language"
              multiple
              placeholder="Select languages"
              search-placeholder="Search..."
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customLabel") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.customLabelSelect"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
          multiple
        >
          <template
            v-for="(option, index) in options"
            :key="`${index}-${option.label}`"
            #[option.value]
          >
            <span>
              <i class="pi pi-user" />
              {{ option.label }}
            </span>
          </template>
        </SelectInput>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
              multiple
            &gt;
              &lt;template
                v-for="(option, index) in options"
                #[option.value]
              &gt;
                &lt;span&gt;
                  &lt;i class="pi pi-user" /&gt;
                  &lbrace;&lbrace; option.label &rbrace;&rbrace;
                &lt;/span&gt;
              &lt;/template&gt;
            &lt;/SelectInput&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.minMaxValidation") }}</h2>

      <div class="section-content">
        <Form>
          <SelectInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.language')"
            :max-selection="3"
            :min-selection="2"
            :options="options"
            :placeholder="$t('form.placeholder.languages')"
            multiple
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :max-selection="3"
              :min-selection="2"
              :options="options"
              label="Language"
              multiple
              placeholder="Select languages"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, SelectInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <SelectInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.language')"
            :options="options"
            :placeholder="$t('form.placeholder.languages')"
            :schema="inputSchema"
            multiple
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Language"
              multiple
              placeholder="Select languages"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const inputSchema = z
            .string({invalid_type_error: "Please select at least one valid option"})
            .array()
            .min(1, { message: "Please select at least one valid option" });

            const options = ref([
              { label: "French", value: "fr"},
              { label: "German", value: "de"},
              { disabled: true, label: "Dutch", value: "be", },
              { label: "Nepali", value: "np",  },
              { label: "Hindi", value: "hi" },
            ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "SelectInputField",
};
</script>

<script setup lang="ts">
import { Form, SelectInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string({ invalid_type_error: t("form.errors.multiselect.invalid") })
  .array()
  .min(1, { message: t("form.errors.multiselect.invalid") });

let formData = reactive({
  customLabelSelect: ref(),
  disabled: ref("de"),
  disabledMultiselect: ref(["be", "de"]),
  disabledSortInput: ref(),
  i18nSelect: ref(),
  input: ref(),
  inputWithValidation: ref([]),
  multiselect: ref(),
  multiselectSearch: ref(),
  noLabelInput: ref(),
  selectWithSearch: ref(),
});

const options = ref([
  { label: t("form.label.french"), value: "fr" },
  { label: t("form.label.german"), value: "de" },
  { disabled: true, label: t("form.label.dutch"), value: "be" },
  { label: t("form.label.nepali"), value: "np" },
  { label: t("form.label.hindi"), value: "hi" },
]);
</script>
