import { storeToRefs } from "pinia";
import { Router } from "vue-router";

import AuthGoogleCallback from "./components/AuthGoogleCallback.vue";
import useUserStore from "./store";
import { getUser } from "./supertokens";
import Login from "./views/Login.vue";
import PasswordReset from "./views/PasswordReset.vue";
import PasswordResetRequest from "./views/PasswordResetRequest.vue";
import PasswordResetRequestAcknowledge from "./views/PasswordResetRequestAcknowledge.vue";
import Profile from "./views/Profile.vue";
import Signup from "./views/Signup.vue";

import type { DzangolabVueUserConfig, RouteOverride } from "./types";
import type { RouteMeta, RouteRecordRaw } from "vue-router";

const _routes = {
  google: {
    component: AuthGoogleCallback,
    name: "authcallback",
    path: "/auth/callback/google",
  },
  login: {
    component: Login,
    name: "login",
    path: "/login",
  } as RouteRecordRaw,
  profile: {
    meta: {
      authenticated: true,
    } as RouteMeta,
    component: Profile,
    name: "profile",
    path: "/profile",
  } as RouteRecordRaw,
  signup: {
    component: Signup,
    name: "signup",
    path: "/signup",
  } as RouteRecordRaw,
  passwordReset: {
    component: PasswordReset,
    name: "resetPassword",
    path: "/reset-password/:token?",
  } as RouteRecordRaw,
  passwordResetRequest: {
    component: PasswordResetRequest,
    name: "resetPasswordRequest",
    path: "/reset-password-request",
  } as RouteRecordRaw,
  passwordResetRequestAcknowledge: {
    component: PasswordResetRequestAcknowledge,
    name: "resetPasswordRequestAcknowledge",
    path: "/reset-password-request-acknowledge",
  },
};

const getRoute = (
  defaultRoute: object,
  override?: RouteOverride
): RouteRecordRaw => {
  return {
    ...defaultRoute,
    ...override,
  } as RouteRecordRaw;
};

const addRoutes = (router: Router, user?: DzangolabVueUserConfig) => {
  const routes = user?.routes;

  if (user?.socialLogins?.includes("google")) {
    router.addRoute(getRoute(_routes.google, routes?.google));
  }

  router.addRoute(getRoute(_routes.login, routes?.login));

  if (!routes?.signup?.disabled) {
    router.addRoute(getRoute(_routes.signup, routes?.signup));
  }

  router.addRoute(getRoute(_routes.passwordReset, routes?.passwordReset));

  router.addRoute(
    getRoute(_routes.passwordResetRequest, routes?.passwordResetRequest)
  );

  router.addRoute(getRoute(_routes.profile, routes?.profile));

  router.addRoute(
    getRoute(
      _routes.passwordResetRequestAcknowledge,
      routes?.passwordResetRequestAcknowledge
    )
  );
};

const redirectRoutes = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);

    const routesToRedirect = [
      "login",
      "signup",
      "resetPassword",
      "resetPasswordRequest",
    ];
    const name = to.name as string;

    if (user.value && routesToRedirect.includes(name)) {
      next({ name: "profile" });
    } else {
      next();
    }
  });
};

const addAuthenticationGuard = (router: Router) => {
  router.beforeEach(async (to) => {
    const meta = to.meta as RouteMeta;

    const userStore = useUserStore();

    const { user } = storeToRefs(userStore);

    if (!user.value) {
      user.value = await getUser();
    }
    if (meta.authenticated && !user.value) {
      router.push({ name: "login" }); // using next inside async function is not allowed
    }
  });
};

const updateRouter = (router: Router, user?: DzangolabVueUserConfig) => {
  addRoutes(router, user);

  addAuthenticationGuard(router);

  redirectRoutes(router);
};

export default updateRouter;
