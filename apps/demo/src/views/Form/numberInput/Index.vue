<template>
  <Page :title="$t('form.label.number')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;NumberInput 
              v-model="input"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.noLabelInput"
            :placeholder="$t('form.placeholder.number')"
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
            &lt;NumberInput 
              v-model="input"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.input"
            :label="$t('form.label.number')"
            :placeholder="$t('form.placeholder.number')"
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
            &lt;NumberInput 
              v-model="input"
              label="Number"
              disabled
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.disabled"
            :label="$t('form.label.number')"
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
            &lt;NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.input"
            :label="$t('form.label.number')"
            :placeholder="$t('form.placeholder.number')"
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
            &lt;NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, NumberInput } from "@dzangolab/vue3-form";
          
          import type { IsIntOptions } from "@dzangolab/vue3-form";
  
          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.number')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.number')"
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
            &lt;NumberInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, NumberInput } from "@dzangolab/vue3-form";

          import type { NumberErrorMessages, IsIntOptions } from "@dzangolab/vue3-form";

          const validationMessages = {
            invalid: "Please provide a number between 1 to 100",
            required: "The field is required",
          } as NumberErrorMessages;

          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.textInput"
            :label="$t('form.label.number')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.number')"
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
            &lt;NumberInput 
              v-model="input"
              :schema="inputSchema"
              label="Number"
              placeholder="Enter a number"
              name="number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, NumberInput } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const invalidNumberError = "Please provide a number between 1 to 100";

          const inputSchema =  z.coerce
            .number({invalid_type_error: invalidNumberError})
            .gte(1, invalidNumberError)
            .lte(100, invalidNumberError);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <NumberInput
            v-model="formData.customValidationInput"
            :label="$t('form.label.number')"
            :placeholder="$t('form.placeholder.number')"
            :schema="inputSchema"
            name="number"
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
            &lt;NumberInput 
              v-model="input"
              class="custom-style-input"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;

          &lt;style&gt;
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

        <Form>
          <NumberInput
            v-model="formData.customStyleInput"
            :label="$t('form.label.number')"
            :placeholder="$t('form.placeholder.number')"
            class="custom-style-input"
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "NumberInputField",
};
</script>

<script setup lang="ts">
import { Form, NumberInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import type { NumberErrorMessages, IsIntOptions } from "@dzangolab/vue3-form";

const { t } = useI18n();

const inputSchema = z.coerce
  .number({ invalid_type_error: t("form.errors.number.invalid") })
  .gte(1, t("form.errors.number.invalid"))
  .lte(100, t("form.errors.number.invalid"));

const validationMessages = {
  invalid: t("form.errors.number.invalid"),
  required: t("form.errors.number.required"),
} as NumberErrorMessages;

const validationOptions = {
  min: 1,
  max: 100,
  allow_leading_zeroes: false,
} as IsIntOptions;

let formData = reactive({
  customStyleInput: ref(),
  customValidationInput: ref(),
  disabled: ref(100),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  textInput: ref(),
});
</script>

<style lang="css">
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
