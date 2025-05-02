import {
  API_PATH_CHANGE_EMAIL,
  API_PATH_CHANGE_PASSWORD,
  API_PATH_LOGIN,
  API_PATH_LOGOUT,
  API_PATH_PASSWORD_RESET,
  API_PATH_PASSWORD_RESET_REQUEST,
  API_PATH_SIGNUP,
} from "./constant";
import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";
import {
  ChangePasswordPayload,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload
} from "./types";

import type { AppConfig } from "@dzangolab/vue3-config";

let authConfig: AppConfig | undefined;

const initAuthProvider = (config?: AppConfig) => {
  authConfig = config;
};

const getAuthProvider = () => {
  if (
    authConfig?.user?.features?.authProvider &&
    ["laravel-passport", "supertokens"].includes(
      authConfig.user.features.authProvider,
    )
  ) {
    return authConfig.user.features.authProvider as
      | "laravel-passport"
      | "supertokens";
  }

  return "supertokens"; // Default to supertokens
};

const providers = {
  "laravel-passport": {
    doChangeEmail: (email: string) => {
      const path =
        authConfig?.user?.apiRoutes?.changeEmail || API_PATH_CHANGE_EMAIL;

      return laravelPassport.changeEmail(
        email,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doChangePassword: (payload: ChangePasswordPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.changePassword || API_PATH_CHANGE_PASSWORD;

      return laravelPassport.changePassword(
        payload,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doLogin: (credentials: LoginCredentials) => {
      const path = authConfig?.user?.apiRoutes?.login || API_PATH_LOGIN;

      return laravelPassport.login(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doLogout: () => {
      const path = authConfig?.user?.apiRoutes?.logout || API_PATH_LOGOUT;

      return laravelPassport.logout(authConfig?.apiBaseUrl || "", path);
    },
    doRequestPasswordReset: (credentials: PasswordResetRequestPayload) => {
      const path = authConfig?.user?.apiRoutes?.passwordResetRequest || API_PATH_PASSWORD_RESET_REQUEST;

      return laravelPassport.requestPasswordReset(
        credentials,
        authConfig?.apiBaseUrl || "",
        path
      );
    },
    doResetPassword: (credentials: PasswordResetPayload) => {
      const path = authConfig?.user?.apiRoutes?.passwordResetRequest || API_PATH_PASSWORD_RESET;

      return laravelPassport.resetPassword(
        credentials,
        authConfig?.apiBaseUrl || "",
        path
      );
    },
    doSignup: (credentials: LoginCredentials) => {
      const path = authConfig?.user?.apiRoutes?.signup || API_PATH_SIGNUP;

      return laravelPassport.signup(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    verifySessionRoles: laravelPassport.verifySessionRoles,
  },
  supertokens: {
    doChangeEmail: supertokens.changeEmail,
    doChangePassword: supertokens.changePassword,
    doGoogleSignIn: supertokens.googleSignIn,
    doLogin: supertokens.login,
    doLogout: supertokens.logout,
    doRequestPasswordReset: supertokens.requestPasswordReset,
    doResetPassword: supertokens.resetPassword,
    doSignup: supertokens.signup,
    isProfileCompleted: supertokens.isProfileCompleted,
    verifySessionRoles: supertokens.verifySessionRoles,
  },
};

// Export the selected provider dynamically
const auth = () => providers[getAuthProvider()];

export default initAuthProvider;

export { auth, authConfig };
