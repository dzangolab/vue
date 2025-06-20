import {
  API_PATH_CHANGE_PASSWORD,
  API_PATH_GET_VERIFICATION_STATUS,
  API_PATH_LOGIN,
  API_PATH_LOGOUT,
  API_PATH_PASSWORD_RESET,
  API_PATH_PASSWORD_RESET_REQUEST,
  API_PATH_SEND_VERIFICATION_EMAIL,
  API_PATH_SIGNUP,
  API_PATH_VERIFY_EMAIL,
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
    doChangePassword: (payload: ChangePasswordPayload) => {
      const path =
        authConfig?.user?.apiRoutes?.changePassword || API_PATH_CHANGE_PASSWORD;

      return laravelPassport.changePassword(
        payload,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doGetVerificationStatus: () => {
      const path =
        authConfig?.user?.apiRoutes?.getVerificationStatus || API_PATH_GET_VERIFICATION_STATUS;

      return laravelPassport.getVerificationStatus(
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
    doSendVerificationEmail: () => {
      const path =
        authConfig?.user?.apiRoutes?.sendVerificationEmail || API_PATH_SEND_VERIFICATION_EMAIL;

      return laravelPassport.sendVerificationEmail(
        authConfig?.apiBaseUrl || "",
        path,
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
    doVerifyEmail: (token: string) => {
      const path = authConfig?.user?.apiRoutes?.verifyEmail || API_PATH_VERIFY_EMAIL;

      return laravelPassport.verifyEmail(
        token,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    verifySessionRoles: laravelPassport.verifySessionRoles,
  },
  supertokens: {
    doChangePassword: supertokens.changePassword,
    doGetVerificationStatus: supertokens.getVerificationStatus,
    doLogin: supertokens.login,
    doLogout: supertokens.logout,
    doRequestPasswordReset: supertokens.requestPasswordReset,
    doResetPassword: supertokens.resetPassword,
    doSendVerificationEmail: supertokens.resendVerificationEmail,
    doSignup: supertokens.signup,
    doSocialSignIn: supertokens.socialSignIn,
    doVerifyEmail: supertokens.verifyEmail,
    isProfileCompleted: supertokens.isProfileCompleted,
    verifySessionRoles: supertokens.verifySessionRoles,
  },
};

// Export the selected provider dynamically
const auth = () => providers[getAuthProvider()];

export default initAuthProvider;

export { auth, authConfig };
