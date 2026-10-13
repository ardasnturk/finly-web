export const LANGUAGES = ["en", "tr", "de", "it", "es", "ja", "zh"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  it: "Italiano",
  es: "Español",
  ja: "日本語",
  zh: "简体中文",
};

export interface Item {
  title: string;
  text: string;
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { features: string; watch: string; pro: string; faq: string; download: string; language: string };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    badges: string[];
    screenshotAlt: string;
  };
  appStore: { small: string; large: string };
  trust: Item[];
  features: { title: string; subtitle: string; items: Item[] };
  watch: { eyebrow: string; title: string; text: string; points: string[] };
  privacy: { eyebrow: string; title: string; text: string; points: Item[]; link: string };
  pro: {
    eyebrow: string;
    title: string;
    subtitle: string;
    freeTitle: string;
    free: string[];
    proTitle: string;
    proItems: string[];
    note: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string };
  footer: { tagline: string; product: string; legal: string; privacy: string; terms: string; support: string; rights: string };
  legal: {
    updated: string;
    back: string;
    privacyTitle: string;
    privacyIntro: string;
    privacySections: LegalSection[];
    termsTitle: string;
    termsIntro: string;
    termsSections: LegalSection[];
  };
  support: {
    title: string;
    intro: string;
    emailLabel: string;
    emailHint: string;
    topics: Item[];
  };
}
