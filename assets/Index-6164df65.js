import{m as g,a as d,Z as c}from"./DzangolabVue3Form.es-4febcfcc.js";import{d as I,a3 as F,l as V,j as b,E as f,o as D,c as E,w as o,J as n,C as l,Z as r,f as t,N as e}from"./index-66214709-683f8f7e.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-a24a8f86.js";import"./index-dd0a7bd8.js";const N={class:"section-content"},_={class:"section-content"},H={class:"section-content"},B={class:"section-content"},P={class:"section-content"},z={class:"section-content"},G={class:"section-content"},R={name:"SelectInputField"},W=I({...R,setup(U){const{t:v}=F(),h=g.string({invalid_type_error:v("form.errors.multiSelect.invalid")}).array().min(1,{message:v("form.errors.multiSelect.invalid")});let u=V({disabled:b("DE"),disabledMultiSelect:b(["BE","DE"]),input:b(),inputWithValidation:b(),multiSelect:b(),noLabelInput:b()});const p=b([{value:"FR",label:"French"},{value:"DE",label:"German"},{value:"BE",label:"Dutch"},{value:"NP",label:"Nepali"},{value:"HI",label:"Hindi"}]);return(a,i)=>{const S=f("router-link"),m=f("SshPre");return D(),E($,{title:a.$t("form.label.select"),class:"demo"},{toolbar:o(()=>[n(S,{to:{name:"form"},class:"back"},{default:o(()=>[l(r(a.$t("common.back")),1)]),_:1})]),default:o(()=>[l(),t("section",null,[t("h2",null,r(a.$t("form.label.basicInput")),1),l(),t("div",N,[n(m,{language:"html-vue"},{default:o(()=>[l(`
          <Form>
            <SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a value"
            />
          </Form>

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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=s=>e(u).noLabelInput=s),options:p.value,placeholder:a.$t("form.placeholder.select")},null,8,["modelValue","options","placeholder"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(a.$t("form.label.labelInput")),1),l(),t("div",_,[n(m,{language:"html-vue"},{default:o(()=>[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Select"
              placeholder="Select a value"
            />
          </Form>

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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).input,"onUpdate:modelValue":i[1]||(i[1]=s=>e(u).input=s),label:a.$t("form.label.select"),options:p.value,placeholder:a.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(a.$t("form.label.disabled")),1),l(),t("div",H,[n(m,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).disabled,"onUpdate:modelValue":i[2]||(i[2]=s=>e(u).disabled=s),label:a.$t("form.label.disabled"),options:p.value,disabled:""},null,8,["modelValue","label","options"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(a.$t("form.label.withI18n")),1),l(),t("div",B,[n(m,{language:"html-vue"},{default:o(()=>[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.select')"
              :placeholder="t('form.placeholder.select')"
            />
          </Form>

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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).input,"onUpdate:modelValue":i[3]||(i[3]=s=>e(u).input=s),label:a.$t("form.label.select"),options:p.value,placeholder:a.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(a.$t("form.label.multiSelect")),1),l(),t("div",P,[n(m,{language:"html-vue"},{default:o(()=>[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Select"
              multiple
              placeholder="Select multiple value"
            />
          </Form>

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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).multiSelect,"onUpdate:modelValue":i[4]||(i[4]=s=>e(u).multiSelect=s),label:a.$t("form.label.select"),options:p.value,placeholder:a.$t("form.placeholder.multiSelect"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(a.$t("form.label.disabledMultiSelect")),1),l(),t("div",z,[n(m,{language:"html-vue"},{default:o(()=>[l(`
          <Form>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Disabled"
              multiple
            />
          </Form>

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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).disabledMultiSelect,"onUpdate:modelValue":i[5]||(i[5]=s=>e(u).disabledMultiSelect=s),label:a.$t("form.label.disabled"),options:p.value,disabled:"",multiple:""},null,8,["modelValue","label","options"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(a.$t("form.label.inputWithValidation")),1),l(),t("div",G,[n(m,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),n(e(c),null,{default:o(()=>[n(e(d),{modelValue:e(u).inputWithValidation,"onUpdate:modelValue":i[6]||(i[6]=s=>e(u).inputWithValidation=s),label:a.$t("form.label.select"),options:p.value,placeholder:a.$t("form.placeholder.multiSelect"),schema:e(h),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{W as default};