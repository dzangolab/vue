import{d as p,G as u,o as b,c as m,w as s,K as n,C as e,S as o,f as l,D as t,an as i,aj as v,ak as h}from"./index-d658739c-63af44b8.js";import{_}from"./UiPage.vue_vue_type_style_index_0_lang-d476e23e.js";import{_ as f}from"./index-bc5452e9.js";const r=c=>(v("data-v-7cc76d96"),c=c(),h(),c),B={class:"section-content"},y={class:"section-content"},k={class:"section-content"},$={class:"section-content"},I={class:"container"},w={class:"section-content"},z={class:"container"},S={class:"section-content"},L={class:"container"},C={class:"section-content"},P={class:"container"},D={class:"section-content"},N={class:"container"},R=r(()=>l("i",{class:"pi pi-check"},null,-1)),V=r(()=>l("i",{class:"pi pi-times"},null,-1)),A=p({__name:"Index",setup(c){return(a,U)=>{const g=u("router-link"),d=u("SshPre");return b(),m(_,{title:a.$t("ui.badge.title"),class:"demo-badge"},{toolbar:s(()=>[n(g,{to:{name:"ui"},class:"back"},{default:s(()=>[e(o(a.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.basic")),1),e(),l("div",B,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),n(t(i),{label:a.$t("ui.badge.label.basic")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.withI18n")),1),e(),l("div",y,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),n(t(i),{label:a.$t("ui.badge.label.addedIn")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.rounded")),1),e(),l("div",k,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),n(t(i),{label:a.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.severity")),1),e(),l("div",$,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Primary" severity="primary" />
            <Badge label="Secondary" severity="secondary" />
            <Badge label="Alternate" severity="alternate" />
            <Badge label="Success" severity="success" />
            <Badge label="Danger" severity="danger" />
            <Badge label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",I,[n(t(i),{label:a.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.icon")),1),e(),l("div",w,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",z,[n(t(i),{"icon-left":"pi pi-thumbs-up"}),e(),n(t(i),{"icon-right":"pi pi-thumbs-down"})])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.iconPackage")),1),e(),l("div",S,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",L,[n(t(i),{label:a.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.iconAndLabel")),1),e(),l("div",C,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",P,[n(t(i),{label:a.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,o(a.$t("ui.badge.usage.iconElement")),1),e(),l("div",D,[n(d,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <Badge label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </Badge>

            <Badge label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </Badge>
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",N,[n(t(i),{label:a.$t("ui.badge.label.correct")},{iconLeft:s(()=>[R]),_:1},8,["label"]),e(),n(t(i),{label:a.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:s(()=>[V]),_:1},8,["label"])])])])]),_:1},8,["title"])}}});const G=f(A,[["__scopeId","data-v-7cc76d96"]]);export{G as default};
