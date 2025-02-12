/* eslint-disable no-console */
import * as laravelPassport from "./laravel-passport";
import * as supertokens from "./supertokens";

import type { AppConfig } from "@dzangolab/vue3-config";

let authConfig: AppConfig | undefined;

const initAuthProvider = (config?: AppConfig) => {
  authConfig = config;
};

const getAuthProvider = () => {
  console.log("from inside the getAuthProvider", authConfig?.authProvider);
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
  },
  supertokens: {
    doChangePassword: supertokens.changePassword,
    doGoogleSignIn: supertokens.googleSignIn,
    doLogin: supertokens.login,
    doLogout: supertokens.logout,
    doRequestPasswordReset: supertokens.requestPasswordReset,
    doResetPassword: supertokens.resetPassword,
    doSignup: supertokens.signup,
  },
};

// Export the selected provider dynamically
const auth = () => providers[getAuthProvider()];

export default initAuthProvider;

export { auth };
