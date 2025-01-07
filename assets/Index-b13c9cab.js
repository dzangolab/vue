import{_ as c,A as g}from"./DzangolabVue3Form.es-8d86bf26.js";import{d as C,a7 as I,p as V,j as p,K as f,o as x,c as y,w as s,L as t,C as e,M as m,f as a,E as n}from"./index-137faed7-eb3bdd72.js";import{m as _}from"./index-54335b6b.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-8e25b048.js";const $={class:"section-content"},z={class:"section-content"},O={class:"section-content"},L={class:"section-content"},B={name:"CheckboxInput"},F=C({...B,setup(w){const{t:l}=I(),v=_.string().array().min(6,{message:l("form.errors.checkbox.min",{min:6})});let r=V({disabled:p(["car"]),inputWithValidation:p(),multiCheckbox:p([]),noLabelInput:p()});const h=[{label:l("form.label.title"),value:1},{label:l("form.label.solutions"),value:2},{label:l("form.label.deliverableList"),value:3},{label:l("form.label.workInProgress"),value:4},{label:l("form.label.summary"),value:5},{label:l("form.label.next"),value:6},{label:l("form.label.assumptions"),value:7},{label:l("form.label.generalQuestions"),value:8},{label:l("form.label.consequences"),value:9},{label:l("form.label.other"),value:10}],d=[{label:l("form.label.bike"),value:"bike"},{label:l("form.label.car"),value:"car"},{label:l("form.label.truck"),value:"truck"}];return(o,i)=>{const k=f("router-link"),b=f("SshPre");return x(),y(S,{title:o.$t("form.label.checkbox"),class:"demo"},{toolbar:s(()=>[t(k,{to:{name:"form"},class:"back"},{default:s(()=>[e(m(o.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),a("section",null,[a("h2",null,m(o.$t("form.label.basicInput")),1),e(),a("div",$,[t(b,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <CheckboxInput
              v-model:checked="input"
              :input-label="Accept"
              name="input"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `)]),_:1}),e(),t(n(c),{checked:n(r).noLabelInput,"onUpdate:checked":i[0]||(i[0]=u=>n(r).noLabelInput=u),"input-label":o.$t("form.label.accept"),name:"basic"},null,8,["checked","input-label"])])]),e(),a("section",null,[a("h2",null,m(o.$t("form.label.multiCheckbox")),1),e(),a("div",z,[t(b,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          <\/script>
        `)]),_:1}),e(),t(n(c),{modelValue:n(r).multiCheckbox,"onUpdate:modelValue":i[1]||(i[1]=u=>n(r).multiCheckbox=u),label:o.$t("form.label.vehicle"),options:d,name:"multi-checkbox"},null,8,["modelValue","label"])])]),e(),a("section",null,[a("h2",null,m(o.$t("form.label.disabled")),1),e(),a("div",O,[t(b,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              direction="horizontal"
              disabled
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref(["car"]);
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          <\/script>
        `)]),_:1}),e(),t(n(c),{modelValue:n(r).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>n(r).disabled=u),label:o.$t("form.label.vehicle"),options:d,direction:"horizontal",disabled:"",name:"disabled-checkbox"},null,8,["modelValue","label"])])]),e(),a("section",null,[a("h2",null,m(o.$t("form.label.inputWithValidation")),1),e(),a("div",L,[t(b,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Form>
              <CheckboxInput
                v-model="input"
                :label="t('form.label.dailySynchro')"
                :options="dailySynchroOptions"
                :schema="inputSchema"
                name="checkbox"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, CheckboxInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { ref } from "vue";

          const { t } = useI18n();

          const inputSchema = z
            .string()
            .array()
            .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

          const input = ref();
          const dailySynchroOptions = [
            {
              label: t("form.label.title"),
              value: 1,
            },
            {
              label: t("form.label.solutions"),
              value: 2,
            },
            {
              label: t("form.label.deliverableList"),
              value: 3,
            },
            {
              label: t("form.label.workInProgress"),
              value: 4,
            },
            {
              label: t("form.label.summary"),
              value: 5,
            },
            {
              label: t("form.label.next"),
              value: 6,
            },
            {
              label: t("form.label.assumptions"),
              value: 7,
            },
            {
              label: t("form.label.generalQuestions"),
              value: 8,
            },
            {
              label: t("form.label.consequences"),
              value: 9,
            },
            {
              label: t("form.label.other"),
              value: 10,
            },
          ];
          <\/script>
        `)]),_:1}),e(),t(n(g),null,{default:s(()=>[t(n(c),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":i[3]||(i[3]=u=>n(r).inputWithValidation=u),label:o.$t("form.label.dailySynchro"),options:h,schema:n(v),name:"daily-synchro"},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{F as default};
