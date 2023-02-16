import "./assets/css/index.css";

import Accordion from "./Accordion/Index.vue";
import SubPane from "./Accordion/SubPane.vue";
import LoadingButton from "./components/LoadingButton.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import Errors from "./Errors/Index.vue";
import Page from "./Page/Index.vue";
import ResponsiveMenu from "./ResponsiveMenu/Index.vue";

import type { Error } from "./types";
import type { App } from "vue";

const plugin = {
  install: (app: App): void => {
    app.component("LoadingButton", LoadingButton);
    app.component("LoadingIcon", LoadingIcon);
    app.component("Page", Page);
  },
};

export default plugin;

export {
  Accordion,
  Errors,
  LoadingButton,
  LoadingIcon,
  Page,
  ResponsiveMenu,
  SubPane,
};

export type { Error };
