import{m as d,v as i}from"./DzangolabVue3Form.es-e74307c3.js";import{d as v,a7 as I,p as V,j as f,K as c,o as $,c as F,w as a,L as n,C as e,M as u,f as o,E as l}from"./index-137faed7-93834ea2.js";import{m as _}from"./index-9b29a3a4.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-3ef133bb.js";const y={class:"section-content"},z={class:"section-content"},U={class:"section-content"},k={class:"section-content"},E={class:"section-content"},S={class:"section-content"},T={name:"InputField"},P=v({...T,setup(W){const{t:b}=I(),h=_.string().min(3,{message:b("form.errors.input.min",{length:3})});let r=V({disabled:f("monorepo@gmail.com"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(t,s)=>{const g=c("router-link"),p=c("SshPre");return $(),F(w,{title:t.$t("form.label.input"),class:"demo"},{toolbar:a(()=>[n(g,{to:{name:"form"},class:"back"},{default:a(()=>[e(u(t.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,u(t.$t("form.label.basicInput")),1),e(),o("div",y,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(i),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=m=>l(r).noLabelInput=m),placeholder:t.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(t.$t("form.label.labelInput")),1),e(),o("div",z,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(i),{modelValue:l(r).input,"onUpdate:modelValue":s[1]||(s[1]=m=>l(r).input=m),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(t.$t("form.label.inputWithType")),1),e(),o("div",U,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(i),{modelValue:l(r).passwordInput,"onUpdate:modelValue":s[2]||(s[2]=m=>l(r).passwordInput=m),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(t.$t("form.label.disabled")),1),e(),o("div",k,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(i),{modelValue:l(r).disabled,"onUpdate:modelValue":s[3]||(s[3]=m=>l(r).disabled=m),label:t.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(t.$t("form.label.withI18n")),1),e(),o("div",E,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(i),{modelValue:l(r).input,"onUpdate:modelValue":s[4]||(s[4]=m=>l(r).input=m),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(t.$t("form.label.inputWithValidation")),1),e(),o("div",S,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Title"
              placeholder="Enter course title"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(3, { message: "Title must be at least 3 character(s)" });        
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(i),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":s[5]||(s[5]=m=>l(r).inputWithValidation=m),label:t.$t("form.label.title"),placeholder:t.$t("form.placeholder.title"),schema:l(h),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{P as default};