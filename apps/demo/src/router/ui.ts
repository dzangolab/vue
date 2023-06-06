const Accordion = () => import("@/views/UI/accordion/Index.vue");
const SubPane = () => import("@/views/UI/SubPanePage.vue");
const TabbedPanel = () => import("@/views/UI/tabbed-panel/Index.vue");
const TanstackTable = () => import("@/views/UI/TanstackTable.vue");
const ToolBar = () => import("@/views/UI/tool-bar/Index.vue");
const Typography = () => import("@/views/UI/typography/Index.vue");
const UI = () => import("@/views/UI/Index.vue");

const routes = [
  {
    path: "/ui",
    children: [
      {
        component: Accordion,
        name: "accordion",
        path: "accordion",
      },
      {
        component: UI,
        name: "ui",
        path: "",
      },
      {
        component: SubPane,
        name: "subpane",
        path: "subpane",
      },
      {
        component: TabbedPanel,
        name: "tabbedPanel",
        path: "tabbed-panel",
      },
      {
        component: TanstackTable,
        name: "table",
        path: "table",
      },
      {
        component: ToolBar,
        name: "toolBar",
        path: "tool-bar",
      },
      {
        component: Typography,
        name: "typography",
        path: "typography",
      },
    ],
  },
];

export default routes;
