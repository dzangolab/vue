const Accordion = () => import("@/views/UI/accordion/Index.vue");
const Badge = () => import("@/views/UI/badge/Index.vue");
const Button = () => import("@/views/UI/button/Index.vue");
const Card = () => import("@/views/UI/card/Index.vue");
const ConfirmationModal = () =>
  import("@/views/UI/confirmationModal/Index.vue");
const Data = () => import("@/views/UI/data/Index.vue");
const Divider = () => import("@/views/UI/divider/Index.vue");
const Dropdown = () => import("@/views/UI/dropdown/Index.vue");
const FileCard = () => import("@/views/UI/fileCard/Index.vue");
const FilesList = () => import("@/views/UI/filesList/Index.vue")
const GridContainer = () => import("@/views/UI/gridContainer/Index.vue");
const LoadingPage = () => import("@/views/UI/loading/Index.vue");
const Message = () => import("@/views/UI/message/Index.vue");
const Modal = () => import("@/views/UI/modal/Index.vue");
const Page = () => import("@/views/UI/page/Index.vue");
const Popup = () => import("@/views/UI/popup/Index.vue");
const SortableList = () => import("@/views/UI/sortableList/Index.vue");
const Stepper = () => import("@/views/UI/stepper/Index.vue");
const SubPane = () => import("@/views/UI/SubPanePage.vue");
const TabbedPanel = () => import("@/views/UI/tabbed-panel/Index.vue");
const TabView = () => import("@/views/UI/tabView/Index.vue");
const Tooltip = () => import("@/views/UI/tooltip/Index.vue");
const Typography = () => import("@/views/UI/typography/Index.vue");
const UI = () => import("@/views/UI/Index.vue");
const YoutubeFacade = () => import("@/views/UI/youtubeFacade/Index.vue");

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
        component: TabView,
        name: "tabView",
        path: "tab-view",
      },
      {
        component: Typography,
        name: "typography",
        path: "typography",
      },
      {
        component: Button,
        name: "button",
        path: "button",
      },
      {
        component: Badge,
        name: "badge",
        path: "badge",
      },
      {
        component: ConfirmationModal,
        name: "confirmationModal",
        path: "confirmation-modal",
      },
      {
        component: Data,
        name: "data",
        path: "data",
      },
      {
        component: FileCard,
        name: "fileCard",
        path: "file-card",
      },
      {
        component: FilesList,
        name: "filesList",
        path: "files-list",
      },
      {
        component: GridContainer,
        name: "gridContainer",
        path: "grid-container",
      },
      {
        component: Tooltip,
        name: "tooltip",
        path: "tooltip",
      },
      {
        component: Card,
        name: "card",
        path: "card",
      },
      {
        component: Message,
        name: "message",
        path: "message",
      },
      {
        component: Modal,
        name: "modal",
        path: "modal",
      },
      {
        component: Page,
        name: "page",
        path: "page",
      },
      {
        component: LoadingPage,
        name: "loadingPage",
        path: "loading-page",
      },
      {
        component: Popup,
        name: "popup",
        path: "popup",
      },
      {
        component: Divider,
        name: "divider",
        path: "divider",
      },
      {
        component: Dropdown,
        name: "dropdown",
        path: "dropdown",
      },
      {
        component: SortableList,
        name: "sortableList",
        path: "sortable-list",
      },
      {
        component: Stepper,
        name: "stepper",
        path: "stepper",
      },
      {
        component: YoutubeFacade,
        name: "youtubeFacade",
        path: "youtube-facade",
      },
    ],
  },
];

export default routes;
