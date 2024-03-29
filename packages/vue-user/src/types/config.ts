import type { RouteOverrides } from "./router";
import type {
  IsEmailOptions,
  StrongPasswordOptions,
} from "@dzangolab/vue3-form";

interface DzangolabVueUserConfig {
  password?: {
    minLength: number;
  };
  options?: {
    email?: IsEmailOptions;
    password?: StrongPasswordOptions;
  };
  routes?: RouteOverrides;
  socialLogins?: string[];
}

declare module "@dzangolab/vue3-config" {
  export interface AppConfig {
    user?: DzangolabVueUserConfig;
  }
}

export type { DzangolabVueUserConfig };
