import { createRouter, createWebHistory } from "vue-router";

import { feature } from "@/config";

import type { AppFeatures } from "@dzangolab/vue3-config";
import type { LayoutType } from "@dzangolab/vue3-layout";
import type { RouteMeta, Router, RouterOptions } from "vue-router";

interface AppRouteMeta extends RouteMeta {
  authenticated?: boolean | null;
  feature?: keyof AppFeatures;
  layout?: LayoutType;
}

const About = () => import("@/views/About.vue");
const Home = () => import("@/views/Home.vue");
const Layout = () => import("@/views/Layout/Index.vue");
const Sentry = () => import("@/views/Sentry.vue");
const SubPane = () => import("@/views/UI/SubPanePage.vue");
const TabbedPanel = () => import("@/views/UI/TabbedPanelPage.vue");
const UI = () => import("@/views/UI/Index.vue");

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: About,
      name: "about",
      path: "/about",
    },
    {
      component: Home,
      name: "home",
      path: "/",
    },
    {
      component: Layout,
      name: "layout",
      path: "/layout",
    },
    {
      component: Sentry,
      name: "sentry",
      path: "/sentry",
    },
    {
      children: [
        {
          component: TabbedPanel,
          name: "tabbedPanel",
          path: "tabbed-panel",
        },
        {
          component: SubPane,
          name: "subPane",
          path: "sub-pane",
        },
      ],
      component: UI,
      name: "ui",
      path: "/ui",
    },
  ],
} as RouterOptions);

router.beforeEach((to, from, next) => {
  const meta = to.meta as AppRouteMeta;

  if (typeof meta.feature !== "undefined" && !feature(meta.feature)) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
