import{d as u,p as C,e as g,o as d,w as t,C as i,f as a,t as m,h as r,u as o,G as f,a as L,F as k,v,J as b,q as $}from"./index-C44VGcWd.js";import{_}from"./UiPage.vue_vue_type_style_index_0_lang-vohbFOoL.js";const x={class:"section-content"},N=u({__name:"Index",setup(y){const p=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(n,e)=>{const l=C("SshPre");return d(),g(_,{title:n.$t("ui.gridContainer.title"),class:"demo"},{toolbar:t(()=>[r(o($),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>n.$router.push("/ui"))},null,8,["label"])]),default:t(()=>[e[4]||(e[4]=i()),a("section",null,[a("h2",null,m(n.$t("ui.gridContainer.usage.basic")),1),e[3]||(e[3]=i()),a("div",x,[r(o(f),null,{default:t(()=>[(d(),L(k,null,v(p,(s,c)=>r(o(b),{key:c+"-"+s.name,title:s.name},{default:t(()=>[i(m(s.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[2]||(e[2]=i()),r(l,{language:"html-vue"},{default:t(()=>e[1]||(e[1]=[i(`
          <template>
            <GridContainer>
              <Card
                v-for="(menu, index) in packages"
                :key="index + '-' + menu.name"
                :title="menu.name"
              >
                {{ menu.description }}
              </Card>
            </GridContainer>
          </template>

          <script setup lang="ts">
          import { Card, GridContainer } from "@dzangolab/vue3-ui";

          const packages = [
            {
              name: "Card 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },

            {
              name: "Card 4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 5",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
