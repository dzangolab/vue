import { DefineComponent } from "vue";

import type { RouteOverrides } from "./router";
import type {
  IsEmailOptions,
  StrongPasswordOptions,
} from "@dzangolab/vue3-form";

interface DzangolabVueUserConfig {
  apiRoutes?: {
    login: string;
    logout: string;
    refresh: string;
  };
  features?: {
    signUp?: {
      emailVerification?: boolean;
      termsAndConditions?: {
        display?: boolean;
        label: DefineComponent | string;
        showCheckbox?: boolean;
      };
    };
    updateEmail?: boolean;
  };
  password?: {
    minLength: number;
  };
  options?: {
    email?: IsEmailOptions;
    password?: StrongPasswordOptions;
  };
  routes?: RouteOverrides;
  socialLogins?: string[];
  supportedRoles?: string[];
}

declare module "@dzangolab/vue3-config" {
  export interface AppConfig {
    loginType: "email" | "username" | "emailOrUsername";
    user?: DzangolabVueUserConfig;
    authProvider?: string;
  }
}

export type { DzangolabVueUserConfig };
