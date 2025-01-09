import{j as d,$ as v}from"./DzangolabVue3Form.es-509b5a30.js";import{d as g,a7 as I,p as V,j as c,K as f,o as D,c as $,w as s,L as a,C as e,M as p,f as n,E as l}from"./index-8e1c3ab6-8617714e.js";import{m as E}from"./index-2cd4e8f8.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-0602a146.js";const N={class:"section-content"},H={class:"section-content"},B={class:"section-content"},P={class:"section-content"},_={class:"section-content"},z={class:"section-content"},G={class:"section-content"},R={class:"section-content"},U={name:"SelectInputField"},W=g({...U,setup(k){const{t:b}=I(),h=E.string({invalid_type_error:b("form.errors.multiSelect.invalid")}).array().min(1,{message:b("form.errors.multiSelect.invalid")});let o=V({disabled:c("DE"),disabledMultiSelect:c(["BE","DE"]),input:c(),inputWithValidation:c(),multiSelect:c(),noLabelInput:c()});const r=c([{value:"FR",label:"French"},{value:"DE",label:"German"},{value:"BE",label:"Dutch"},{value:"NP",label:"Nepali"},{value:"HI",label:"Hindi"}]);return(t,i)=>{const S=f("router-link"),m=f("SshPre");return D(),$(F,{title:t.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[a(S,{to:{name:"form"},class:"back"},{default:s(()=>[e(p(t.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),n("section",null,[n("h2",null,p(t.$t("form.label.basicInput")),1),e(),n("div",N,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a value"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e(),a(l(d),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=u=>l(o).noLabelInput=u),options:r.value,placeholder:t.$t("form.placeholder.select")},null,8,["modelValue","options","placeholder"])])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.labelInput")),1),e(),n("div",H,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Select"
              placeholder="Select a value"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e(),a(l(d),{modelValue:l(o).input,"onUpdate:modelValue":i[1]||(i[1]=u=>l(o).input=u),label:t.$t("form.label.select"),options:r.value,placeholder:t.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.disabled")),1),e(),n("div",B,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <Form>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Disabled"
            />
          </Form>

          <script setup lang="ts">
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
          <\/script>
        `)]),_:1}),e(),a(l(v),null,{default:s(()=>[a(l(d),{modelValue:l(o).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>l(o).disabled=u),label:t.$t("form.label.disabled"),options:r.value,disabled:""},null,8,["modelValue","label","options"])]),_:1})])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.disableSort")),1),e(),n("div",P,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Select"
              placeholder="Select a value"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e(),a(l(d),{modelValue:l(o).input,"onUpdate:modelValue":i[3]||(i[3]=u=>l(o).input=u),"has-sorted-options":!1,label:t.$t("form.label.select"),options:r.value,placeholder:t.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.withI18n")),1),e(),n("div",_,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.select')"
              :placeholder="t('form.placeholder.select')"
            />
          </template>

          <script setup lang="ts">
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
          <\/script>
        `)]),_:1}),e(),a(l(d),{modelValue:l(o).input,"onUpdate:modelValue":i[4]||(i[4]=u=>l(o).input=u),label:t.$t("form.label.select"),options:r.value,placeholder:t.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.multiSelect")),1),e(),n("div",z,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Select"
              multiple
              placeholder="Select multiple value"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "FR", label: "French" },
            { value: "DE", label: "German" },
            { value: "BE", label: "Dutch" },
            { value: "NP", label: "Nepali" },
            { value: "HI", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e(),a(l(d),{modelValue:l(o).multiSelect,"onUpdate:modelValue":i[5]||(i[5]=u=>l(o).multiSelect=u),label:t.$t("form.label.select"),options:r.value,placeholder:t.$t("form.placeholder.multiSelect"),multiple:""},null,8,["modelValue","label","options","placeholder"])])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.disabledMultiSelect")),1),e(),n("div",G,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Disabled"
              multiple
            />
          </template>

          <script setup lang="ts">
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
          <\/script>
        `)]),_:1}),e(),a(l(d),{modelValue:l(o).disabledMultiSelect,"onUpdate:modelValue":i[6]||(i[6]=u=>l(o).disabledMultiSelect=u),label:t.$t("form.label.disabled"),options:r.value,disabled:"",multiple:""},null,8,["modelValue","label","options"])])]),e(),n("section",null,[n("h2",null,p(t.$t("form.label.inputWithValidation")),1),e(),n("div",R,[a(m,{language:"html-vue"},{default:s(()=>[e(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Select"
              multiple
              placeholder="Select multiple value"
            />
          </Form>

          <script setup lang="ts">
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
          <\/script>
        `)]),_:1}),e(),a(l(v),null,{default:s(()=>[a(l(d),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":i[7]||(i[7]=u=>l(o).inputWithValidation=u),label:t.$t("form.label.select"),options:r.value,placeholder:t.$t("form.placeholder.multiSelect"),schema:l(h),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{W as default};
