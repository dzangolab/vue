import{I as b}from"./DzangolabVue3Form.es-6_UQ-oQJ.js";import{d as f,r as v,y as k,l as C,o as g,p as n,C as e,e as s,t as r,g as o,u as a,Q as y,D as p,G as $}from"./index-btaM6fHL.js";import{_ as c}from"./LayoutPage.vue_vue_type_style_index_0_lang-Wc4cYnuS.js";const z={class:"section-content"},F={class:"section-content"},S={name:"StickyCollapsibleFooter"},I=f({...S,setup(B){const u=v(),m=t=>{t&&alert(t)};return(t,l)=>{const d=k("SshPre");return g(),C(c,{title:t.$t("layout.label.stickyCollapsibleFooter"),class:"demo sticky-collapsible-footer"},{toolbar:n(()=>[o(a(p),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=i=>t.$router.push("/layout"))},null,8,["label"])]),default:n(()=>[l[12]||(l[12]=e()),s("section",null,[s("h2",null,r(t.$t("layout.label.footerFixed")),1),l[8]||(l[8]=e()),s("div",z,[o(a(y),null,{default:n(()=>[o(a(b),{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=i=>u.value=i),placeholder:t.$t("layout.placeholder.input")},null,8,["modelValue","placeholder"]),l[4]||(l[4]=e()),o(a(p),{label:t.$t("layout.label.submit"),size:"small",onClick:l[2]||(l[2]=i=>m(u.value))},null,8,["label"]),l[5]||(l[5]=e()),o(a(p),{label:t.$t("layout.label.cancel"),severity:"secondary",size:"small",variant:"outlined",onClick:l[3]||(l[3]=i=>m(t.$t("layout.label.cancelled")))},null,8,["label"])]),_:1}),l[7]||(l[7]=e()),o(d,{language:"html-vue"},{default:n(()=>l[6]||(l[6]=[e(`
          <template>
            <StickyCollapsibleFooter>
              <Input
                v-model="input"
                :placeholder="$t('layout.placeholder.input')"
              />

              <ButtonElement
                :label="$t('layout.label.submit')"
                size="small"
                @click="showAlert(input)"
              />
              <ButtonElement
                :label="$t('layout.label.cancel')"
                severity="secondary"
                size="small"
                variant="outlined"
                @click="showAlert($t('layout.label.cancelled'))"
              />
            </StickyCollapsibleFooter>
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { StickyCollapsibleFooter } from "@dzangolab/vue3-layout";
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const input = ref();

          const showAlert = (message: string) => {
            if (message) {
              alert(message);
            }
          };
          <\/script>

          <style lang="css">
          .sticky-collapsible .content {
            display: flex;
            gap: 0.5rem;
          }
          </style>
        `)])),_:1})])]),l[13]||(l[13]=e()),s("section",null,[s("h2",null,r(t.$t("layout.label.footerAbsolute")),1),l[11]||(l[11]=e()),s("div",F,[o(a($),null,{default:n(()=>[e(r(t.$t("layout.label.bodyContent"))+" ",1),o(a(y),{fixed:!1},{default:n(()=>[e(r(t.$t("layout.label.stickyFooterContent")),1)]),_:1})]),_:1}),l[10]||(l[10]=e()),o(d,{language:"html-vue"},{default:n(()=>l[9]||(l[9]=[e(`
          <template>
            <Card>
              Body content

              <StickyCollapsibleFooter :fixed="false">
                This is sticky footer content.
              </StickyCollapsibleFooter>
            </Card>
          </template>

          <script setup lang="ts">
          import { StickyCollapsibleFooter } from "@dzangolab/vue3-layout";
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
          .card {
            position: relative;
          }
          </style>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{I as default};
