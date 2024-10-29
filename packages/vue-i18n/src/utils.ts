import nativeLocaleNames from "./locales/native-locale-names";

import type { LocaleMessages, VueMessageType } from "vue-i18n";

const getLocaleNames = (supportedLocales: string[]) => {
  const names: LocaleMessages<VueMessageType> = {};

  for (const locale of supportedLocales) {
    names[locale as string] = {
      locales: nativeLocaleNames,
    };
  }

  return names;
};

const getPreferredLocale = (
  languages: readonly string[],
  locales: string[],
): string | undefined => {
  let locale: string | undefined;

  languages.some((language) => {
    const tokens = language.split("-");

    let subset: string[] = [];

    for (let n = 1; n <= tokens.length; n++) {
      subset = (subset.length === 0 ? locales : subset).filter((l) => {
        return l.startsWith(tokens.slice(0, n).join("-"));
      });

      if (subset.length === 1) {
        locale = subset[0];

        return true;
      }
    }
  });

  return locale;
};

const prependMessages = (
  messages: LocaleMessages<VueMessageType>,
  defaults: LocaleMessages<VueMessageType> | undefined,
): LocaleMessages<VueMessageType> => {
  if (!defaults) {
    return messages;
  }

  const m: LocaleMessages<VueMessageType> = {};

  for (const locale in defaults) {
    const base = defaults[locale];
    const prepend = messages[locale];

    m[locale] = prepend
      ? {
          ...prepend,
          ...base,
        }
      : base;
  }

  for (const locale in messages) {
    if (m[locale]) {
      continue;
    }

    const base = defaults[locale];
    const prepend = messages[locale];

    m[locale] = base
      ? {
          ...prepend,
          ...base,
        }
      : prepend;
  }

  return m;
};

export { getLocaleNames, getPreferredLocale, prependMessages };
