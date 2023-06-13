import type { RouteComponent } from "vue-router";

interface RouteOverride {
  component?: RouteComponent;
  path?: string;
}

interface RouteOverrides {
  google?: RouteOverride;
  home?: string;
  login: RouteOverride;
  signup: RouteOverride & { disabled?: boolean };
  passwordReset: RouteOverride;
  passwordResetRequest: RouteOverride;
  passwordResetRequestAcknowledge: RouteOverride;
  profile?: RouteOverride;
}

export type { RouteOverride, RouteOverrides };
