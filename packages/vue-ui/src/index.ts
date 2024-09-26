import "./assets/css/index.css";

import Accordion from "./Accordion/Index.vue";
import BadgeComponent from "./Badge/Index.vue";
import ButtonElement from "./Button/Index.vue";
import GoogleSignInButton from "./components/GoogleSignInButton.vue";
import LoadingButton from "./components/LoadingButton.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import SubPane from "./components/SubPane.vue";
import ConfirmationModal from "./ConfirmationModal/Index.vue";
import Errors from "./Errors/Index.vue";
import DebouncedInput from "./FormWidgets/DebouncedInput/Index.vue";
import Page from "./Page/Index.vue";
import ResponsiveMenu from "./ResponsiveMenu/Index.vue";
import TabbedPanel from "./TabbedPanel/Index.vue";
import Tooltip from "./Tooltip/Index.vue";

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
  BadgeComponent,
  ButtonElement,
  ConfirmationModal,
  DebouncedInput,
  Errors,
  GoogleSignInButton,
  LoadingButton,
  LoadingIcon,
  Page,
  ResponsiveMenu,
  SubPane,
  TabbedPanel,
  Tooltip,
};

export type { Error } from "./types";
