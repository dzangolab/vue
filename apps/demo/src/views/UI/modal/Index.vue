<template>
  <UiPage :title="$t('ui.modal.title')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.modal.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Open"
              @click="showModal = true"
            /&gt;

            &lt;Modal :show="showModal" @on:close="showModal = false" &gt;
              Lorem ipsum...
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('ui.modal.label.open')"
          @click="showModal = true"
        />

        <Modal :show="showModal" @on:close="showModal = false">
          {{ $t("ui.modal.content") }}
        </Modal>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.modal.usage.withTitle") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Show"
              @click="showModal = true"
            /&gt;

            &lt;Modal
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            &gt;
              Lorem ipsum...
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('ui.modal.label.show')"
          @click="showTitleModal = true"
        />

        <Modal
          :show="showTitleModal"
          :title="$t('ui.modal.usage.productDetail')"
          @on:close="showTitleModal = false"
        >
          {{ $t("ui.modal.content") }}
        </Modal>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              :label="t('ui.modal.label.show')"
              @click="showModal = true"
            /&gt;

            &lt;Modal
              :show="showModal"
              :title="t('ui.modal.usage.productDetail')"
              @on:close="showModal = false"
            &gt;
              &lbrace;&lbrace; t("ui.modal.content") &rbrace;&rbrace;
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const { t } = useI18n();

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('ui.modal.label.show')"
          @click="showI18nModal = true"
        />

        <Modal
          :show="showI18nModal"
          :title="$t('ui.modal.usage.productDetail')"
          @on:close="showI18nModal = false"
        >
          {{ $t("ui.modal.content") }}
        </Modal>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.slots") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              icon-left="pi pi-user"
              label="Login"
              @click="showModal = true"
            /&gt;

            &lt;Modal :show="showModal" @on:close="showModal = false" &gt;
              &lt;template #header&gt;
                &lt;span role="heading">Login&lt;/span&gt;
              &lt;/template&gt;

              &lt;Form&gt;
                &lt;Email
                  v-model="formData.email"
                  label="Email"
                  placeholder="Enter a email"
                /&gt;

                &lt;Password
                  v-model="formData.password"
                  label="Password"
                  placeholder="Enter a password"
                /&gt;

                &lt;FormActions
                  alignment="filled"
                  class="login-actions"
                  submit-label="Login"
                  @cancel="showSlotModal = false"
                  @submit="showSlotModal = false"
                /&gt;
              &lt;/Form&gt;

              &lt;template #footer&gt;
                &lt;router-link to="/form/password-input"&gt;
                  Forgot password?
                &lt;/router-link&gt;
              &lt;/template&gt;
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Email, Form, FormActions, Password } from "@dzangolab/vue3-form";
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { reactive, ref } from "vue";

          const formData = reactive({
            email: ref(),
            password: ref(),
          });

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('ui.modal.label.login')"
          icon-left="pi pi-user"
          @click="showSlotModal = true"
        />

        <Modal :show="showSlotModal" @on:close="showSlotModal = false">
          <template #header>
            <span role="heading">{{ $t("ui.modal.label.login") }}</span>
          </template>

          <Form>
            <Email
              v-model="formData.email"
              :label="$t('form.label.email')"
              :placeholder="$t('form.placeholder.email')"
            />

            <Password
              v-model="formData.password"
              :label="$t('form.label.password')"
              :placeholder="$t('form.placeholder.password')"
            />

            <FormActions
              :submit-label="$t('ui.modal.label.login')"
              alignment="filled"
              class="login-actions"
              @cancel="showSlotModal = false"
              @submit="showSlotModal = false"
            />
          </Form>

          <template #footer>
            <router-link to="/form/password-input">
              {{ $t("ui.modal.label.forgotPassword") }}
            </router-link>
          </template>
        </Modal>
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { Email, Form, FormActions, Password } from "@dzangolab/vue3-form";
import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
import { reactive, ref } from "vue";

import UiPage from "../UiPage.vue";

const formData = reactive({
  email: ref(),
  password: ref(),
});

const showI18nModal = ref(false);
const showModal = ref(false);
const showSlotModal = ref(false);
const showTitleModal = ref(false);
</script>

<style lang="css">
.demo .login-actions {
  margin-bottom: 0;
}
</style>
