const Accordion = () => import("@/views/UI/accordion/Index.vue");
const Badge = () => import("@/views/UI/badge/Index.vue");
const Button = () => import("@/views/UI/button/Index.vue");
const Card = () => import("@/views/UI/card/Index.vue");
const ConfirmationModal = () =>
  import("@/views/UI/confirmationModal/Index.vue");
const Dropdown = () => import("@/views/UI/dropdown/Index.vue");
const LoadingPage = () => import("@/views/UI/loading/Index.vue");
const Message = () => import("@/views/UI/message/Index.vue");
const Modal = () => import("@/views/UI/modal/Index.vue");
const Popup = () => import("@/views/UI/popup/Index.vue");
const SortableList = () => import("@/views/UI/sortableList/Index.vue");
const Stepper = () => import("@/views/UI/stepper/Index.vue");
const SubPane = () => import("@/views/UI/SubPanePage.vue");
const TabbedPanel = () => import("@/views/UI/tabbed-panel/Index.vue");
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
