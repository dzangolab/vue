import{m as V,l as p,Z as m}from"./DzangolabVue3Form.es-4febcfcc.js";import{d as _,a3 as $,l as T,j as c,E as h,o as x,c as F,w as o,J as t,C as e,Z as i,f as a,N as l}from"./index-66214709-683f8f7e.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-a24a8f86.js";import"./index-dd0a7bd8.js";const z={class:"section-content"},C={class:"section-content"},E={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},y={class:"section-content"},S={class:"section-content"},O={name:"TextareaInputField"},B=_({...O,setup(D){const{t:f}=$(),g=V.string().min(15,{message:f("form.errors.input.min",{length:15})}),v={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let r=T({customRowsColsInput:c(),customValidationInput:c(),disabled:c("Disabled textarea input"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(n,u)=>{const I=h("router-link"),d=h("SshPre");return x(),F(w,{title:n.$t("form.label.textarea"),class:"demo"},{toolbar:o(()=>[t(I,{to:{name:"form"},class:"back"},{default:o(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),a("section",null,[a("h2",null,i(n.$t("form.label.basicInput")),1),e(),a("div",z,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=s=>l(r).noLabelInput=s),placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.labelInput")),1),e(),a("div",C,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).input,"onUpdate:modelValue":u[1]||(u[1]=s=>l(r).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.disabled")),1),e(),a("div",E,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).disabled,"onUpdate:modelValue":u[2]||(u[2]=s=>l(r).disabled=s),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.withI18n")),1),e(),a("div",U,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).input,"onUpdate:modelValue":u[3]||(u[3]=s=>l(r).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),a("div",k,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=s=>l(r).inputWithValidation=s),label:n.$t("form.label.textarea"),options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.customErrorMessageInput")),1),e(),a("div",q,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).textInput,"onUpdate:modelValue":u[5]||(u[5]=s=>l(r).textInput=s),label:n.$t("form.label.textarea"),"error-messages":v,options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.customValidationInput")),1),e(),a("div",y,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea""
              placeholder="Enter course title"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)"") });
          <\/script>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=s=>l(r).customValidationInput=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),schema:l(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.customColsRowsInput")),1),e(),a("div",S,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100",
              label="Textarea"
              placeholder="Enter input"
              rows="10"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>

          <style>
          .textarea-field textarea {
            --_input-field-textarea-height: unset;
            --_input-field-textarea-width: unset;
          }
          </style>
        `)]),_:1}),e(),t(l(m),null,{default:o(()=>[t(l(p),{modelValue:l(r).customRowsColsInput,"onUpdate:modelValue":u[7]||(u[7]=s=>l(r).customRowsColsInput=s),cols:100,label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),rows:10,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{B as default};