import{d as _,a7 as p,j as l,K as u,o as c,c as b,w as a,L as r,C as t,M as o,f as n,E as g,aE as L,a as h,g as k}from"./index-6962cf42-46e4151e.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-081924df.js";const S={class:"section-content"},$={key:0,class:"most-favourite"},N=_({__name:"Index",setup(B){const{t:s}=p(),m=l([{id:1,data:s("ui.sortableList.games.basketball")},{id:2,data:s("ui.sortableList.games.cricket")},{id:3,data:s("ui.sortableList.games.football")},{id:4,data:s("ui.sortableList.games.hockey")},{id:5,data:s("ui.sortableList.games.volleyball")}]),i=l(),d=e=>{i.value=e[0].data};return(e,C)=>{const v=u("router-link"),f=u("SshPre");return c(),b(y,{title:e.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:a(()=>[r(v,{to:{name:"ui"},class:"back"},{default:a(()=>[t(o(e.$t("common.back")),1)]),_:1})]),default:a(()=>[t(),n("section",null,[n("h2",null,o(e.$t("ui.sortableList.usage.basic")),1),t(),n("div",S,[n("h3",null,o(e.$t("ui.sortableList.usage.sortSport")),1),t(),r(g(L),{list:m.value,onOnDrag:d},null,8,["list"]),t(),i.value?(c(),h("div",$,o(e.$t("ui.sortableList.games.favourite",{sport:i.value})),1)):k("",!0),t(),r(f,{language:"html-vue"},{default:a(()=>[t(`
          <template>
            <h3>Sort sports from most to least favorite</h3>

            <SortableList :list="list" @on-drag="onDrag" />

            <div v-if="mostFavourite" class="most-favourite">
              {{ mostFavorite + " is your most favorite sport." }}
            </div>
          </template>

          <script setup lang="ts"> 
            import { SortableList } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Basketball",
              },
              ...
            ]);

            const mostFavourite = ref<string>();

            const onDrag = (sortedList: [{ id: number, data: string }]) => {
              mostFavourite.value = sortedList[0].data;
            };
          <\/script>
        `)]),_:1}),t()])])]),_:1},8,["title"])}}});export{N as default};