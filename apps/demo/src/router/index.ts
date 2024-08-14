import { createRouter, createWebHashHistory } from "vue-router";

import { feature } from "@/config";
import form from "./form";
import ui from "./ui";

// import About from "@/views/About.vue";
// import Home from "@/views/Home.vue";
// import Layout from "@/views/Layout/Index.vue";
// import Sentry from "@/views/Sentry.vue";

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

const router: Router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    ...form,
    ...ui,
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
