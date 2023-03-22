const Password = () => import("@/views/UI/Password.vue");
const UI = () => import("@/views/UI/Index.vue");

const routes = [
  {
    path: "/ui",
    children: [
      {
        component: UI,
        name: "ui",
        path: "",
      },
      {
        component: Password,
        name: "password",
        path: "password",
      },
    ],
  },
];

export default routes;
