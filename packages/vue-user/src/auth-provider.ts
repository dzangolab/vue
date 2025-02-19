import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";

import type { AppConfig } from "@dzangolab/vue3-config";

let authConfig: AppConfig | undefined;

const initAuthProvider = (config?: AppConfig) => {
  authConfig = config;
};

const getAuthProvider = () => {
  if (
    authConfig?.authProvider &&
    ["laravel-passport", "supertokens"].includes(authConfig.authProvider)
  ) {
    return authConfig.authProvider as "laravel-passport" | "supertokens";
  }

  return "supertokens"; // Default to supertokens
};

const providers = {
  "laravel-passport": {
    doLogin: laravelPassport.login,
    doLogout: laravelPassport.logout,
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
