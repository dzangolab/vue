import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";
import { LoginCredentials } from "./types";

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
    doLogin: (credentials: LoginCredentials) => {
      const path = authConfig?.user?.apiRoutes?.login || "/api/login";

      return laravelPassport.login(
        credentials,
        authConfig?.apiBaseUrl || "",
        path,
      );
    },
    doLogout: () => {
      const path = authConfig?.user?.apiRoutes?.logout || "/api/logout";

      return laravelPassport.logout(authConfig?.apiBaseUrl || "", path);
    },
    verifySessionRoles: laravelPassport.verifySessionRoles,
  },
  supertokens: {
    doChangePassword: supertokens.changePassword,
    doGoogleSignIn: supertokens.googleSignIn,
    doLogin: supertokens.login,
    doLogout: supertokens.logout,
    doRequestPasswordReset: supertokens.requestPasswordReset,
    doResetPassword: supertokens.resetPassword,
    doSignup: supertokens.signup,
    verifySessionRoles: supertokens.verifySessionRoles,
  },
};

// Export the selected provider dynamically
const auth = () => providers[getAuthProvider()];

export default initAuthProvider;

export { auth };
