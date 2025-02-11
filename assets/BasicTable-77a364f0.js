import{Z as r}from"./DzangolabVue3TanstackTable.es-cbb5f279.js";import{_ as g}from"./TablePage.vue_vue_type_style_index_0_lang-eed52c9f.js";import{d as h,J as d,o as b,c as y,w as i,K as l,W as e,L as o,f as a,D as n}from"./index-729398ab-7d472bf5.js";const m=[{id:1,name:"John Doe",email:"john.doe@example.com",age:28,city:"New York"},{id:2,name:"Jane Elizabeth Smith",email:"jane.smith@example.com",age:32,city:"Los Angeles"},{id:3,name:"Robert Johnson",email:"bob.j@example.com",age:25,city:"Chicago"},{id:4,name:"Alice Brown",email:"alice.brown@example.com",age:22,city:"San Francisco Bay Area"},{id:5,name:"Charles William Wilson Jr.",email:"charlie.w@example.com",age:35,city:"Houston"},{id:6,name:"Evangeline Martinez",email:"eva.martinez@example.com",age:30,city:"Miami Beach"},{id:7,name:"David Lawrence",email:"david.lee@example.com",age:27,city:"Seattle"},{id:8,name:"Sophia Turner",email:"sophie.t@example.com",age:29,city:"Atlanta"},{id:9,name:"Michael Anthony Adams",email:"michael.a@example.com",age:31,city:"Dallas-Fort Worth"},{id:10,name:"Olivia Charlotte Carter",email:"olivia.carter@example.com",age:26,city:"Denver"},{id:11,name:"Ryan Alexander Cooper",email:"ryan.cooper@example.com",age:34,city:"Boston"},{id:12,name:"Emily Davis",email:"emily.d@example.com",age:33,city:"Phoenix"},{id:13,name:"Daniel William White",email:"daniel.white@example.com",age:28,city:"Philadelphia"},{id:14,name:"Ava Rose Moore",email:"ava.m@example.com",age:24,city:"Austin"},{id:15,name:"Nicholas Harrison",email:"nicholas.h@example.com",age:27,city:"San Diego"},{id:16,name:"Emma Grace Turner",email:"emma.t@example.com",age:29,city:"Portland"},{id:17,name:"William Lewis Jr.",email:"william.l@example.com",age:32,city:"Detroit"},{id:18,name:"Grace Margaret Murphy",email:"grace.murphy@example.com",age:26,city:"Minneapolis"},{id:19,name:"Matthew Wright",email:"matthew.w@example.com",age:30,city:"Charlotte"},{id:20,name:"Lily Alexandra Adams",email:"lily.adams@example.com",age:31,city:"Nashville"}],f={class:"section-content"},v={class:"section-content"},_={class:"section-content"},T={class:"section-content"},x={class:"section-content"},C={name:"SortableTable"},z=h({...C,setup(D){const s=[{accessorKey:"email",enableSorting:!0,header:"Email"},{accessorKey:"name",header:"Full name"},{align:"right",accessorKey:"age",header:"Age"},{accessorKey:"city",header:"City"}],u=s.map(t=>({...t,enableSorting:!0}));return(t,A)=>{const p=d("router-link"),c=d("SshPre");return b(),y(g,{title:t.$t("table.title"),class:"demo data-table"},{toolbar:i(()=>[l(p,{to:{name:"table"},class:"back"},{default:i(()=>[e(o(t.$t("common.back")),1)]),_:1})]),default:i(()=>[e(),a("section",null,[a("h2",null,o(t.$t("table.usage.basic")),1),e(),a("div",f,[l(n(r),{"columns-data":s,data:n(m).slice(0,15),paginated:!1},null,8,["data"]),e(),l(c,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Table
              :columns-data="columns"
              :data="data"
              :paginated="false"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              accessorKey: "age",
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
              header: "City",
            },
          ];
  
          const data = [
            {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              age: 28,
              city: "New York",
            },
            {
              id: 2,
              name: "Jane Elizabeth Smith",
              email: "jane.smith@example.com",
              age: 32,
              city: "Los Angeles",
            },
            ...
          ]
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,o(t.$t("table.usage.pagination")),1),e(),a("div",v,[l(n(r),{"columns-data":s,data:n(m)},null,8,["data"]),e(),l(c,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Table :columns-data="columns" :data="data" />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              accessorKey: "age",
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
              header: "City",
            },
          ];
  
          const data = [
            {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              age: 28,
              city: "New York",
            },
            {
              id: 2,
              name: "Jane Elizabeth Smith",
              email: "jane.smith@example.com",
              age: 32,
              city: "Los Angeles",
            },
            ...
          ]
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,o(t.$t("table.usage.sortable")),1),e(),a("div",_,[l(n(r),{"columns-data":n(u),data:n(m),"initial-sorting":[{id:"email",desc:!1}]},null,8,["columns-data","data"]),e(),l(c,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Table
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]

          const sortableColumns = columns.map((column) => ({
            ...columns,
            enableSorting: true,
          }));
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,o(t.$t("table.usage.title")),1),e(),a("div",T,[l(n(r),{"columns-data":s,data:n(m).slice(0,5),"title-info":{text:t.$t("table.label.users"),align:"left"}},null,8,["data","title-info"]),e(),l(c,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Table 
              :columns-data="columns"
              :data="data"
              :title-info="{ text: 'Users', align: 'left' }"
            />
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,o(t.$t("table.usage.footer")),1),e(),a("div",x,[l(n(r),{"columns-data":s,data:n(m)},{footer:i(()=>[e(o(`${t.$t("table.label.totalRecords")}: ${n(m).length??"0"}`),1)]),_:1},8,["data"]),e(),l(c,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Table :columns-data="columns" :data="data">
              <template #footer>
                {{ \`Total records: \${data.length ?? "0"}\` }}
              </template>
            </Table>
          </template>
    
          <script setup lang="ts">
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array<TableColumnDefinition> = [
            ...
          ];
  
          const data = [
            ...
          ]
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{z as default};
