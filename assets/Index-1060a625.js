import{d as m,j as g,K as s,o as _,c as f,w as a,L as t,C as e,M as i,f as o,E as c,as as p,aB as v}from"./index-6962cf42-46e4151e.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-081924df.js";const k={class:"section-content"},h={class:"container"},P=m({__name:"Index",setup(L){const l=g(!1),r=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(n,B)=>{const u=s("router-link"),d=s("SshPre");return _(),f(b,{title:n.$t("ui.loading.title"),class:"demo-loading"},{toolbar:a(()=>[t(u,{to:{name:"ui"},class:"back"},{default:a(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,i(n.$t("ui.loading.usage.basic")),1),e(),o("div",k,[o("div",h,[t(c(p),{label:n.$t("ui.loading.buttonLabel.clickMe"),onClick:r},null,8,["label"]),e(),t(c(v),{loading:l.value},null,8,["loading"])]),e(),t(d,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <ButtonElement label="Click me" @click="startLoading" />

            <LoadingPage :loading="loading" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{P as default};