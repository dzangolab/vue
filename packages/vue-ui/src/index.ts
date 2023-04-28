import "./assets/css/index.css";

import Accordion from "./Accordion/Index.vue";
import LoadingButton from "./components/LoadingButton.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import SubPane from "./components/SubPane.vue";
import Errors from "./Errors/Index.vue";
import Page from "./Page/Index.vue";
import ResponsiveMenu from "./ResponsiveMenu/Index.vue";
import TabbedPanel from "./TabbedPanel/Index.vue";
import YouTubeFacade from "./YouTubeFacade/Index.vue";

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
  TabbedPanel,
  YouTubeFacade,
};

export type { Error } from "./types";
