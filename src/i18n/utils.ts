import { ui, defaultLang, languages, type Locale, type TranslationKey } from './ui';

/**
 * Extract the locale from a URL pathname.
 * Returns the matched locale or the default locale if no prefix is found.
 *
 * Examples:
 *   /es/         → 'es'
 *   /fr/about    → 'fr'
 *   /            → 'en'  (default)
 *   /some-page   → 'en'  (default, no locale prefix)
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) {
    return lang as Locale;
  }
  return defaultLang;
}

/**
 * Returns a typed translation accessor for the given locale.
 *
 * Usage:
 *   const t = useTranslations('es');
 *   t('nav.brand')  // → 'ExtractText'
 *   t('seo.title')  // → 'ExtractText | Convertidor Gratuito …'
 */
export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<TranslationKey, string>)[key] || ui[defaultLang][key];
  };
}

/**
 * Build a localized path. The default locale ('en') produces paths
 * without a prefix; all others are prefixed with the locale code.
 *
 * Examples:
 *   getLocalizedPath('en', '/')      → '/'
 *   getLocalizedPath('es', '/')      → '/es/'
 *   getLocalizedPath('fr', '/about') → '/fr/about'
 *   getLocalizedPath('en', '/about') → '/about'
 */
export function getLocalizedPath(lang: Locale, path: string = '/'): string {
  if (lang === defaultLang) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`;
}

/**
 * Returns an array of all locales with their labels,
 * useful for building a language picker.
 *
 * Example output:
 *   [
 *     { code: 'en', label: 'English' },
 *     { code: 'es', label: 'Español' },
 *     …
 *   ]
 */
export function getLocaleList(): Array<{ code: Locale; label: string }> {
  return (Object.entries(languages) as Array<[Locale, string]>).map(
    ([code, label]) => ({ code, label })
  );
}

/**
 * Replace `{year}` placeholder in translation strings
 * with the current year. Used for copyright notices.
 */
export function interpolate(text: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    text
  );
}
