<template>
  <Page :title="$t('form.label.email')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Email 
              v-model="input"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { Email } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.noLabelInput"
            :placeholder="$t('form.placeholder.email')"
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
            &lt;Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.input"
            :label="$t('form.label.email')"
            :placeholder="$t('form.placeholder.email')"
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
            &lt;Email 
              v-model="input"
              label="Email"
              disabled
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@dzangolab.com");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.disabled"
            :label="$t('form.label.email')"
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
            &lt;Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.input"
            :label="t('form.label.email')"
            :placeholder="t('form.placeholder.email')"
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
            &lt;Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@dzangolab/vue3-form";
          
          import type { IsEmailOptions } from "@dzangolab/vue3-form";

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.inputWithValidation"
            :label="$t('form.label.email')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.email')"
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
            &lt;Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@dzangolab/vue3-form";
          
          import type { EmailErrorMessages, IsEmailOptions } from "@dzangolab/vue3-form";

          const validationMessages = {
            required: "The field should not be empty",
            invalid: "Please provide a valid email (dzangolab.com, dzango.com, gmail.com)"
          } as EmailErrorMessages;

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.textInput"
            :label="$t('form.label.email')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.email')"
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
            &lt;Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .email({ message: "Please provide a valid email" });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Email
            v-model="formData.customValidationInput"
            :label="$t('form.label.email')"
            :placeholder="$t('form.placeholder.email')"
            :schema="inputSchema"
            name="custom_input"
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
            &lt;Email 
              v-model="input"
              class="custom-style-input"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@dzangolab/vue3-form";
          &lt;/script&gt;

          &lt;style&gt;
          .custom-style-input input {
            --_input-field-border-color: #007aff;
            --_input-field-border-radius: 0.5em;
            --_input-field-label-color: #007aff;
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
          <Email
            v-model="formData.customStyleInput"
            :label="$t('form.label.email')"
            :placeholder="$t('form.placeholder.email')"
            class="custom-style-input"
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "EmailInputField",
};
</script>

<script setup lang="ts">
import { Form, Email } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import type { EmailErrorMessages, IsEmailOptions } from "@dzangolab/vue3-form";

const { t } = useI18n();

const inputSchema = z
  .string()
  .email({ message: t("form.errors.email.invalid") });

const validationMessages = {
  required: t("form.errors.input.required"),
  invalid: t("form.errors.email.invalid", {
    list: "(dzangolab.com, dzango.com, gmail.com)",
  }),
} as EmailErrorMessages;

const validationOptions = {
  allow_display_name: false,
  allow_utf8_local_part: true,
  host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
  require_display_name: false,
} as IsEmailOptions;

let formData = reactive({
  customStyleInput: ref(),
  customValidationInput: ref(),
  disabled: ref("monorepo@dzangolab.com"),
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

.custom-style-input label {
  --_input-field-label-color: var(--dz-primary-color);
}
</style>
