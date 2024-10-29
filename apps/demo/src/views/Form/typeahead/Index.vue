<template>
  <Page :title="$t('form.label.typeahead')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              placeholder="Enter Input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Typeahead } from "@dzangolab/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.noLabelInput"
            :placeholder="$t('form.placeholder.input')"
            :suggestions="suggestionItems"
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
            &lt;Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Typeahead"
              placeholder="Enter Input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Typeahead } from "@dzangolab/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.input"
            :label="$t('form.label.typeahead')"
            :placeholder="$t('form.placeholder.input')"
            :suggestions="suggestionItems"
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
            &lt;Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Disabled"
              type="text"
              disabled
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Typeahead } from "@dzangolab/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.disabled"
            :label="$t('form.label.disabled')"
            :suggestions="suggestionItems"
            type="text"
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
            &lt;Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              :label="t('form.label.typeahead')"
              :placeholder="t('form.placeholder.input')"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Typeahead } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.input"
            :label="$t('form.label.typeahead')"
            :placeholder="$t('form.placeholder.input')"
            :suggestions="suggestionItems"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.debouncedTypeahead") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Typeahead
              v-model="input"
              :debounce-time="1000"
              :suggestions="suggestionItems"
              label="Typeahead"
              placeholder="Enter Input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Typeahead } from "@dzangolab/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.input"
            :debounce-time="1000"
            :label="$t('form.label.typeahead')"
            :placeholder="$t('form.placeholder.input')"
            :suggestions="suggestionItems"
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
            &lt;Typeahead
              v-model="inputWithValidation"
              :schema="inputSchema"
              :suggestions="suggestionItems"
              label="Input"
              name="typeahead"
              placeholder="Enter input"
              type="text"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Typeahead } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];

          const inputSchema = z.string()
            .min(3, { message: "Input must be at least 3 character(s)" });        
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.inputWithValidation"
            :label="$t('form.label.typeahead')"
            :name="$t('form.label.typeahead')"
            :placeholder="$t('form.placeholder.input')"
            :schema="inputSchema"
            :suggestions="suggestionItems"
            type="text"
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
            &lt;Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              class="custom-style-typeahead"
              label="Typeahead"
              placeholder="Enter Input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Typeahead } from "@dzangolab/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          &lt;/script&gt;

          &lt;style lang="css"&gt;
            .custom-style-typeahead {
              flex-direction: row;
              align-items: center;
            }

            .custom-style-typeahead input {
              --_input-field-border-color: #007aff;
              --_input-field-border-radius: 1em;
              --_input-field-padding-h: 0.5em;
              --_input-field-padding-v: 0.5em;
            }

            .custom-style-typeahead input:focus {
              box-shadow: 0 0 0 .25rem #004da08e;
            }

            .custom-style-typeahead li.suggestion:hover {
              --_typeahead-suggestion-hover-color: var(--dz-success-color);
            }

            .custom-style-typeahead ul.suggestion-list  {
              --_typeahead-suggestions-border-radius: 0.75rem;
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <Typeahead
            v-model="formData.input"
            :label="$t('form.label.typeahead')"
            :placeholder="$t('form.placeholder.input')"
            :suggestions="suggestionItems"
            class="custom-style-typeahead"
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "InputField",
};
</script>

<script setup lang="ts">
import { Form, Typeahead } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z
  .string()
  .min(3, { message: t("form.errors.input.min", { length: 3 }) });

const suggestionItems = [
  {
    value: "Roslabel",
    label: "Roslabel - A fragrant flower often associated with romance",
  },
  {
    value: "Tulip",
    label: "Tulip - A bright, cup-shaped flower popular in spring",
  },
  {
    value: "Daisy",
    label: "Daisy - A simple, white flower with a yellow center",
  },
  {
    value: "Sunflower",
    label: "Sunflower - A tall plant with a large, yellow flower head",
  },
  {
    value: "Lily",
    label: "Lily - An elegant flower often used in bouquets",
  },
  {
    value: "Orchid",
    label: "Orchid - An exotic flower with a unique shape",
  },
  {
    value: "Marigold",
    label: "Marigold - A vibrant, orange or yellow flower",
  },
  {
    value: "Lavender",
    label: "Lavender - A fragrant flower known for its calming scent",
  },
  {
    value: "Peony",
    label: "Peony - A lush, full flower often used in weddings",
  },
  {
    value: "Chrysanthemum",
    label: "Chrysanthemum - A hardy flower with a variety of colors",
  },
  {
    value: "Daffodil",
    label: "Daffodil - A bright, yellow flower that blooms in spring",
  },
  {
    value: "Hydrangea",
    label: "Hydrangea - A large, cluster-like flower that changes color",
  },
];

let formData = reactive({
  disabled: ref("Lily"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
});
</script>

<style lang="css">
.custom-style-typeahead {
  flex-direction: row;
  align-items: center;
}

.custom-style-typeahead input {
  --_input-field-border-color: #007aff;
  --_input-field-border-radius: 1em;
  --_input-field-padding-h: 0.5em;
  --_input-field-padding-v: 0.5em;
}

.custom-style-typeahead input:focus {
  box-shadow: 0 0 0 0.25rem #004da08e;
}

.custom-style-typeahead li.suggestion:hover {
  --_typeahead-suggestion-hover-color: var(--dz-success-color);
}

.custom-style-typeahead ul.suggestion-list {
  --_typeahead-suggestions-border-radius: 0.75rem;
}
</style>
