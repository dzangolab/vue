<template>
  <Page :title="$t('form.label.textarea')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.noLabelInput"
            :placeholder="$t('form.placeholder.input')"
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
            &lt;TextareaInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.input"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.textarea')"
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
            &lt;TextareaInput 
              v-model="input"
              label="Disabled"
              disabled
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.disabled"
            :label="$t('form.label.disabled')"
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
            &lt;TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.input"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.textarea')"
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
            &lt;TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@dzangolab/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.textarea')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customErrorMessageInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@dzangolab/vue3-form";

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
          <TextareaInput
            v-model="formData.textInput"
            :label="$t('form.label.textarea')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea""
              placeholder="Enter course title"
              name="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)"") });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.customValidationInput"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.input')"
            :schema="inputSchema"
            name="custom_input"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customColsRowsInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100",
              label="Textarea"
              placeholder="Enter input"
              rows="10"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@dzangolab/vue3-form";
          &lt;/script&gt;

          &lt;style&gt;
          .textarea-field textarea {
            --_input-field-textarea-height: unset;
            --_input-field-textarea-width: unset;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.customRowsColsInput"
            :cols="100"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.input')"
            :rows="10"
            class="textarea-field"
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
            &lt;TextareaInput 
              v-model="input"
              class="custom-style-input"
              label="Textarea"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

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
            --_input-field-textarea-height: 8rem;
            --_input-field-textarea-resize: both;
            --_input-field-textarea-width: 100%;

            color: #007aff;
          }

          .custom-style-input input:focus {
            box-shadow: 0 0 0 0.25rem #03449e9a;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <TextareaInput
            v-model="formData.customStyleInput"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.input')"
            class="custom-style-input"
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "TextareaInputField",
};
</script>

<script setup lang="ts">
import { Form, TextareaInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z
  .string()
  .min(15, { message: t("form.errors.input.min", { length: 15 }) });

const validationMessages = {
  required: t("form.errors.input.required"),
};

const validationOptions = {
  ignore_whitespace: true,
  required: true,
};

let formData = reactive({
  customRowsColsInput: ref(),
  customStyleInput: ref(),
  customValidationInput: ref(),
  disabled: ref("Disabled textarea input"),
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

.custom-style-input textarea {
  --_input-field-border-color: var(--dz-primary-color);
  --_input-field-border-radius: 0.5em;
  --_input-field-padding-h: 0.5em;
  --_input-field-padding-v: 0.5em;
  --_input-field-textarea-height: 8rem;
  --_input-field-textarea-resize: both;
  --_input-field-textarea-width: 100%;

  color: var(--dz-primary-color);
}

.custom-style-input textarea:focus {
  box-shadow: 0 0 0 0.25rem #03449e9a;
}

.textarea-field textarea {
  --_input-field-textarea-height: unset;
  --_input-field-textarea-width: unset;
}
</style>
