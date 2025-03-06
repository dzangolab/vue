import "./assets/css/index.css";

import Accordion from "./Accordion/Index.vue";
import BadgeComponent from "./Badge/Index.vue";
import ButtonElement from "./Button/Index.vue";
import Card from "./Card/Index.vue";
import Data from "./Data/Index.vue";
import GoogleSignInButton from "./components/GoogleSignInButton.vue";
import LoadingButton from "./components/LoadingButton.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import SubPane from "./components/SubPane.vue";
import ConfirmationModal from "./ConfirmationModal/Index.vue";
import Divider from "./Divider/Index.vue";
import Dropdown from "./Dropdown/Index.vue";
import Errors from "./Errors/Index.vue";
import FileCard from "./FileCard/Index.vue";
import DebouncedInput from "./FormWidgets/DebouncedInput/Index.vue";
import GridContainer from "./GridContainer/Index.vue";
import LoadingPage from "./LoadingPage/Index.vue";
import Message from "./Message/Index.vue";
import Modal from "./Modal/Index.vue";
import Page from "./Page/Index.vue";
import Popup from "./Popup/Index.vue";
import ResponsiveMenu from "./ResponsiveMenu/Index.vue";
import SortableList from "./SortableList/Index.vue";
import Stepper from "./Stepper/Index.vue";
import TabbedPanel from "./TabbedPanel/Index.vue";
import Tooltip from "./Tooltip/Index.vue";
import YoutubeFacade from "./YoutubeFacade/Index.vue";

import type { App } from "vue";

const plugin = {
  install: (app: App): void => {
    app.component("LoadingButton", LoadingButton);
    app.component("LoadingIcon", LoadingIcon);
    app.component("Page", Page);
  },
};

export default plugin;

export * from "./utils";

export {
  Accordion,
  BadgeComponent,
  ButtonElement,
  Card,
  Data,
  Divider,
  Dropdown,
  ConfirmationModal,
  DebouncedInput,
  Errors,
  FileCard,
  GridContainer,
  GoogleSignInButton,
  LoadingButton,
  LoadingIcon,
  LoadingPage,
  Message,
  Modal,
  Page,
  Popup,
  ResponsiveMenu,
  SortableList,
  Stepper,
  SubPane,
  TabbedPanel,
  Tooltip,
  YoutubeFacade,
};

export type { Error, FileMessages, IFile } from "./types";
