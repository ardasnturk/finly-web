export const APP_STORE_URL = "https://apps.apple.com/app/id6747941491";
export const SUPPORT_EMAIL = "support@ardasnturk.com";
export const SITE_URL = "https://finly.ardasnturk.com";

/** Localized App Store screenshot shown on the site (generated from the iOS app). */
export function screenshot(language: string, name: string): string {
  return `/screens/${language}/${name}.png`;
}
