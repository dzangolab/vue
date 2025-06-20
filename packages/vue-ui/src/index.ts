import "./assets/css/index.css";

import Accordion from "./Accordion/Index.vue";
import BadgeComponent from "./Badge/Index.vue";
import ButtonElement from "./Button/Index.vue";
import Card from "./Card/Index.vue";
import Data from "./Data/Index.vue";
import LoadingButton from "./components/LoadingButton.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import SubPane from "./components/SubPane.vue";
import ConfirmationModal from "./ConfirmationModal/Index.vue";
import Divider from "./Divider/Index.vue";
import Dropdown from "./Dropdown/Index.vue";
import Errors from "./Errors/Index.vue";
import FileCard from "./FileCard/Index.vue";
import FilesList from "./FilesList/Index.vue";
import DebouncedInput from "./FormWidgets/DebouncedInput/Index.vue";
import GridContainer from "./GridContainer/Index.vue";
import LoadingPage from "./LoadingPage/Index.vue";
import Message from "./Message/Index.vue";
import Modal from "./Modal/Index.vue";
import Page from "./Page/Index.vue";
import Popup from "./Popup/Index.vue";
import ResponsiveMenu from "./ResponsiveMenu/Index.vue";
import SortableList from "./SortableList/Index.vue";
import { FacebookSignInButton, GoogleSignInButton  } from "./SSOButtons"
import Stepper from "./Stepper/Index.vue";
import TabbedPanel from "./TabbedPanel/Index.vue";
import TabView from "./TabView/Index.vue";
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
  FacebookSignInButton,
  FileCard,
  FilesList,
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
  TabView,
  Tooltip,
  YoutubeFacade,
};

export type {
  DropdownMenu,
  Error,
  FileMessages,
  IFile,
  TableMessages
} from "./types";
