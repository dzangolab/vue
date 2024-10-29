<template>
  <Page :title="$t('form.label.switch')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SwitchInput
              v-model="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SwitchInput v-model="formData.noLabelInput" />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SwitchInput 
              v-model="input"
              label="Switch"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SwitchInput
            v-model="formData.input"
            :label="$t('form.label.switch')"
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
            &lt;SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SwitchInput
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
            &lt;SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SwitchInput
            v-model="formData.input"
            :label="$t('form.label.switch')"
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
            &lt;SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@dzangolab/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: t("form.errors.switch.invalid"),
            });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SwitchInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.switch')"
            :schema="inputSchema"
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
            &lt;SwitchInput 
              v-model="input"
              class="custom-style-input"
              label="Switch"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
            .custom-style-input {
              --_switch-field-direction: row;
              --_switch-field-gap: 1rem;

              align-items: center;
            }

            .custom-style-input .switch input[type="checkbox"] {
              --_switch-unchecked-bg-color: var(--dz-danger-color);
            }
  
            .custom-style-input .switch input:checked {
              --_switch-checked-bg-color: var(--dz-success-color);
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <SwitchInput
            v-model="formData.input"
            :label="$t('form.label.switch')"
            class="custom-style-input"
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "SwitchInput",
};
</script>

<script setup lang="ts">
import { Form, SwitchInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z.coerce.boolean().refine((value) => value === true, {
  message: t("form.errors.switch.invalid"),
});

let formData = reactive({
  customStyleInput: ref(),
  disabled: ref(true),
  input: ref(),
  inputWithValidation: ref(false),
  noLabelInput: ref(),
});
</script>

<style lang="css">
.custom-style-input {
  --_switch-field-direction: row;
  --_switch-field-gap: 1rem;

  align-items: center;
}

.custom-style-input .switch input[type="checkbox"] {
  --_switch-unchecked-bg-color: var(--dz-danger-color);
}

.custom-style-input .switch input:checked {
  --_switch-checked-bg-color: var(--dz-success-color);
}
</style>
