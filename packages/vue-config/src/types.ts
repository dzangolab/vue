import type { Options as SentryOptions } from "@sentry/core";

interface AppConfig {
  authBasePath?: string;
  apiBaseUrl: string;
  appTitle: string;
  appVersion: string;
  copyright?: {
    holder: string;
    url: string;
  };
  features: AppFeatures;
  sentry?: SentryOptions & {
    enabled?: boolean;
  };
  slug: string;
  websiteDomain: string;
}

interface AppFeatures {
  showVersion: boolean;
}

export type { AppConfig, AppFeatures };
