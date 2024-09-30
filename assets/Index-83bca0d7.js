import{m as g,e as m,U as d}from"./DzangolabVue3Form.es-871b694a.js";import{d as I,u as F,b as V,e as c,o as D,c as _,w as o,a as n,t as b,f as l,g as t,h as e,r as f}from"./index-ca7167fa.js";const E={class:"section-content"},$={class:"section-content"},N={class:"section-content"},H={class:"section-content"},y={class:"section-content"},P={class:"section-content"},B={class:"section-content"},z={class:"section-content"},U={name:"SelectInputField"},W=I({...U,setup(G){const{t:v}=F(),h=g.string({invalid_type_error:v("form.errors.multiSelect.invalid")}).array().min(1,{message:v("form.errors.multiSelect.invalid")});let u=V({customStyleInput:c(),disabled:c("DE"),disabledMultiSelect:c(["BE","DE"]),input:c(),inputWithValidation:c(),multiSelect:c(),noLabelInput:c()});const r=c([{value:"FR",label:"French"},{value:"DE",label:"German"},{value:"BE",label:"Dutch"},{value:"NP",label:"Nepali"},{value:"HI",label:"Hindi"}]);return(a,s)=>{const p=f("SshPre"),S=f("Page");return D(),_(S,{title:a.$t("form.label.select"),class:"demo"},{default:o(()=>[n("section",null,[n("h2",null,b(a.$t("form.label.basicInput")),1),l(),n("div",E,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=i=>e(u).noLabelInput=i),options:r.value,placeholder:a.$t("form.placeholder.select")},null,8,["modelValue","options","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.labelInput")),1),l(),n("div",$,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).input,"onUpdate:modelValue":s[1]||(s[1]=i=>e(u).input=i),label:a.$t("form.label.select"),options:r.value,placeholder:a.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.disabled")),1),l(),n("div",N,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).disabled,"onUpdate:modelValue":s[2]||(s[2]=i=>e(u).disabled=i),label:a.$t("form.label.disabled"),options:r.value,disabled:""},null,8,["modelValue","label","options"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.withI18n")),1),l(),n("div",H,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).input,"onUpdate:modelValue":s[3]||(s[3]=i=>e(u).input=i),label:a.$t("form.label.select"),options:r.value,placeholder:a.$t("form.placeholder.select")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.multiSelect")),1),l(),n("div",y,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).multiSelect,"onUpdate:modelValue":s[4]||(s[4]=i=>e(u).multiSelect=i),label:a.$t("form.label.select"),options:r.value,placeholder:a.$t("form.placeholder.multiSelect"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.disabledMultiSelect")),1),l(),n("div",P,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).disabledMultiSelect,"onUpdate:modelValue":s[5]||(s[5]=i=>e(u).disabledMultiSelect=i),label:a.$t("form.label.disabled"),options:r.value,disabled:"",multiple:""},null,8,["modelValue","label","options"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.inputWithValidation")),1),l(),n("div",B,[t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).inputWithValidation,"onUpdate:modelValue":s[6]||(s[6]=i=>e(u).inputWithValidation=i),label:a.$t("form.label.select"),options:r.value,placeholder:a.$t("form.placeholder.multiSelect"),schema:e(h),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1})])]),l(),n("section",null,[n("h2",null,b(a.$t("form.label.customStyleInput")),1),l(),n("div",z,[t(p,{language:"html-vue"},{default:o(()=>[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              class="custom-style-select"
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

          <style lang="css">
          .custom-style-select .multiple-mode .selected-option {
            --_multiselect-tag-border-radius: 1rem;
            --_multiselect-tag-color: #007aff;
            color: #fff;
          }

          .custom-style-select .multiselect-input {
            --_multiselect-border-color: #007aff;
          }

          .custom-style-select .multiselect-option.selected {
            --_multiselect-selected-bg-color: #22c55e;
            --_multiselect-selected-color: #fff;
          }
        </style>
        `)]),_:1}),l(),t(e(d),null,{default:o(()=>[t(e(m),{modelValue:e(u).multiSelect,"onUpdate:modelValue":s[7]||(s[7]=i=>e(u).multiSelect=i),label:a.$t("form.label.select"),options:r.value,placeholder:a.$t("form.placeholder.multiSelect"),class:"custom-style-select",multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{W as default};