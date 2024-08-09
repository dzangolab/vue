<template>
  <Page :title="$t('form.label.textInput')">
    <section class="demo-section">
      <h3>{{ $t("form.label.basicInput") }}</h3>

      <!-- eslint-disable -->
       <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TextInput 
            v-model="input"
            placeholder="Enter Input"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { TextInput } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TextInput
        v-model="formData.noLabelInput"
        :placeholder="$t('form.placeholder.input')"
        class="form-field"
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.labelInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TextInput 
            v-model="input"
            label="Input"
            placeholder="Enter Input"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { TextInput } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TextInput
        v-model="formData.input"
        :label="$t('form.label.textInput')"
        :placeholder="$t('form.placeholder.textInput')"
        class="form-field"
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.disabled") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TextInput 
            v-model="input"
            label="Disabled"
            disabled
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TextInput
        v-model="formData.disabled"
        :label="$t('form.label.disabled')"
        class="form-field"
        disabled
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.inputWithValidation") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, TextInput } from "@dzangolab/vue3-form";
        
        const validationOptions = {
          ignore_whitespace: true,
          required: true
        };
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Form>
        <TextInput
          v-model="formData.inputWithValidation"
          :label="$t('form.label.input')"
          :options="validationOptions"
          :placeholder="$t('form.placeholder.input')"
          class="form-field"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customErrorMessageInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, TextInput } from "@dzangolab/vue3-form";
        
        const validationMessages = {
          required: "The field should not be empty"
        };

        const validationOptions = {
          ignore_whitespace: true,
          required: true
        };
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Form>
        <TextInput
          v-model="formData.textInput"
          :label="$t('form.label.input')"
          :error-messages="validationMessages"
          :options="validationOptions"
          :placeholder="$t('form.placeholder.input')"
          class="form-field"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customValidationInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              name="input"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, Input } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string()
          .length(5, { message: "Input must be exactly 5 characters long") });
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Form>
        <TextInput
          v-model="formData.customValidationInput"
          :label="$t('form.label.input')"
          :placeholder="$t('form.placeholder.input')"
          :schema="inputSchema"
          class="form-field"
          name="custom_input"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customStyleInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TextInput 
            v-model="input"
            class="custom-style-input"
            label="Input"
            placeholder="Enter input"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;

        &lt;style&gt;
        .custom-style-input {
          flex-direction: row;
          align-items: center;
        }

        .custom-style-input input {
          --_input-field-border-color: #007aff;
          --_input-field-border-radius: 0.5em;
          --_input-field-padding-h: 0.5em;
          --_input-field-padding-v: 0.5em;

          color: #007aff;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 0.25rem #03449e9a;
        }
        &lt;/style&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TextInput
        v-model="formData.customStyleInput"
        :label="$t('form.label.input')"
        :placeholder="$t('form.placeholder.input')"
        class="form-field custom-style-input"
      />
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "InputField",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Form, TextInput } from "@dzangolab/vue3-form";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z
  .string()
  .length(5, { message: t("form.errors.input.length", { length: 5 }) });

const validationMessages = {
  required: t("form.errors.input.required"),
};

const validationOptions = {
  ignore_whitespace: true,
  required: true,
};

let formData = reactive({
  customStyleInput: ref(),
  customValidationInput: ref(),
  disabled: ref("dzangolab"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  textInput: ref(),
});
</script>

<style lang="css">
.custom-style-input {
  flex-direction: column;
  align-items: left;
}

.custom-style-input input {
  --_input-field-border-color: var(--dz-primary-color);
  --_input-field-border-radius: 0.5em;
  --_input-field-padding-h: 0.5em;
  --_input-field-padding-v: 0.5em;

  color: var(--dz-primary-color);
}

.custom-style-input input:focus {
  box-shadow: 0 0 0 0.25rem #03449e9a;
}
</style>
