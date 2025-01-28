import{I as f}from"./DzangolabVue3Form.es-530610db.js";import{d as v,j as k,K as m,o as C,c as _,w as o,L as t,C as l,M as i,f as n,E as s,ar as d,aq as y,ae as g}from"./index-35228b09-3d0d33db.js";import{_ as $}from"./LayoutPage.vue_vue_type_style_index_0_lang-adefaed8.js";import"./index-893c107f.js";const h={class:"section-content"},F={class:"section-content"},S={name:"StickyCollapsibleFooter"},I=v({...S,setup(z){const r=k(),c=e=>{e&&alert(e)};return(e,a)=>{const b=m("router-link"),p=m("SshPre");return C(),_($,{title:e.$t("layout.label.stickyCollapsibleFooter"),class:"demo sticky-collapsible-footer"},{toolbar:o(()=>[t(b,{to:{name:"layout"},class:"back"},{default:o(()=>[l(i(e.$t("common.back")),1)]),_:1})]),default:o(()=>[l(),n("section",null,[n("h2",null,i(e.$t("layout.label.footerFixed")),1),l(),n("div",h,[t(s(d),null,{default:o(()=>[t(s(f),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=u=>r.value=u),placeholder:e.$t("layout.placeholder.input")},null,8,["modelValue","placeholder"]),l(),t(s(y),{label:e.$t("layout.label.submit"),size:"small",onClick:a[1]||(a[1]=u=>c(r.value))},null,8,["label"]),l(),t(s(y),{label:e.$t("layout.label.cancel"),severity:"secondary",size:"small",variant:"outlined",onClick:a[2]||(a[2]=u=>c(e.$t("layout.label.cancelled")))},null,8,["label"])]),_:1}),l(),t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,i(e.$t("layout.label.footerAbsolute")),1),l(),n("div",F,[t(s(g),null,{default:o(()=>[l(i(e.$t("layout.label.bodyContent"))+" ",1),t(s(d),{fixed:!1},{default:o(()=>[l(i(e.$t("layout.label.stickyFooterContent")),1)]),_:1})]),_:1}),l(),t(p,{language:"html-vue"},{default:o(()=>[l(`
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
        `)]),_:1}),l()])])]),_:1},8,["title"])}}});export{I as default};
