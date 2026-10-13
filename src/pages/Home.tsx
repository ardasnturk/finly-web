import { useState } from "react";
import { AppStoreButton } from "../components/AppStoreButton";
import { Icon, type IconName } from "../components/Icon";
import { PhoneFrame } from "../components/PhoneFrame";
import { screenshot } from "../config";
import { useLanguage } from "../i18n";

const FEATURE_ICONS: IconName[] = ["bolt", "wallet", "repeat", "chart", "widget", "target", "family", "export"];
const TRUST_ICONS: IconName[] = ["shield", "offline", "faceid", "globe"];
const PRIVACY_ICONS: IconName[] = ["phone", "cloud", "sparkles", "lock"];

export function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Features />
      <Watch />
      <Privacy />
      <Pro />
      <FAQ />
      <CallToAction />
    </>
  );
}

function Hero() {
  const { t, language } = useLanguage();
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[38rem] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.28),transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand dark:bg-brand/20 dark:text-indigo-300">
            <Icon name="sparkles" className="h-4 w-4" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent">{t.hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-pretty text-gray-600 lg:mx-0 dark:text-gray-300">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
            <AppStoreButton />
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-600 lg:justify-start dark:text-gray-400">
            {t.hero.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-emerald-500" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[19rem]">
          <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-brand/30 to-purple-400/20 blur-3xl" />
          <PhoneFrame src={screenshot(language, "home")} alt={t.hero.screenshotAlt} />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useLanguage();
  return (
    <section aria-label="Highlights" className="border-y border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/40">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
        {t.trust.map((item, index) => (
          <li key={item.title} className="flex items-start gap-3">
            <Icon name={TRUST_ICONS[index]} className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-pretty text-gray-600 dark:text-gray-400">{text}</p>}
    </div>
  );
}

function Features() {
  const { t, language } = useLanguage();
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t.features.title} text={t.features.subtitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand dark:bg-brand/20 dark:text-indigo-300">
                <Icon name={FEATURE_ICONS[index]} />
              </div>
              <h3 className="mt-5 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 flex justify-center gap-6 overflow-hidden sm:gap-10">
          <PhoneFrame src={screenshot(language, "analytics")} alt="" className="w-44 sm:w-56" />
          <PhoneFrame src={screenshot(language, "subscriptions")} alt="" className="hidden w-44 sm:block sm:w-56" />
        </div>
      </div>
    </section>
  );
}

function Watch() {
  const { t, language } = useLanguage();
  const [missing, setMissing] = useState(false);
  return (
    <section id="watch" className="scroll-mt-20 bg-gray-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-12 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative rounded-[3.2rem] bg-gradient-to-b from-gray-700 to-gray-900 p-3 shadow-2xl">
              {missing ? (
                <div className="flex aspect-[422/514] w-52 items-center justify-center rounded-[2.6rem] bg-black sm:w-60">
                  <img src="/assets/icon.png" alt="" className="h-24 w-24 rounded-[1.6rem]" />
                </div>
              ) : (
                <img src={screenshot(language, "watch")} alt="" width={422} height={514} loading="lazy"
                  onError={() => setMissing(true)} className="block w-52 rounded-[2.6rem] bg-black sm:w-60" />
              )}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">{t.watch.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.watch.title}</h2>
          <p className="mt-4 text-lg text-pretty text-gray-300">{t.watch.text}</p>
          <ul className="mt-8 space-y-3">
            {t.watch.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/30 text-indigo-200">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-gray-200">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  const { t } = useLanguage();
  return (
    <section id="privacy" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow={t.privacy.eyebrow} title={t.privacy.title} text={t.privacy.text} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.privacy.points.map((item, index) => (
            <article key={item.title} className="rounded-3xl bg-gradient-to-b from-emerald-50 to-white p-6 ring-1 ring-emerald-100 dark:from-emerald-500/10 dark:to-transparent dark:ring-emerald-500/20">
              <Icon name={PRIVACY_ICONS[index]} className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <a href="/privacy/" className="font-semibold text-brand hover:underline">{t.privacy.link} →</a>
        </p>
      </div>
    </section>
  );
}

function Pro() {
  const { t } = useLanguage();
  return (
    <section id="pro" className="scroll-mt-20 bg-gray-50 py-24 dark:bg-gray-900/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle eyebrow={t.pro.eyebrow} title={t.pro.title} text={t.pro.subtitle} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-bold">{t.pro.freeTitle}</h3>
            <ul className="mt-6 space-y-3">
              {t.pro.free.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-purple-600 p-8 text-white shadow-xl">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Icon name="sparkles" className="h-5 w-5" />
              {t.pro.proTitle}
            </h3>
            <ul className="relative mt-6 space-y-3">
              {t.pro.proItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-indigo-100" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-600 dark:text-gray-400">{t.pro.note}</p>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle title={t.faq.title} />
        <div className="mt-12 divide-y divide-gray-200 rounded-3xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          {t.faq.items.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q}>
                <h3>
                  <button type="button" aria-expanded={expanded} aria-controls={`faq-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold">
                    {item.q}
                    <Icon name="chevron" className={`h-5 w-5 shrink-0 text-gray-400 transition ${expanded ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-${index}`} hidden={!expanded} className="px-6 pb-5 text-gray-600 dark:text-gray-400">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-brand to-purple-600 px-6 py-14 text-center text-white shadow-xl">
        <img src="/assets/icon.png" alt="" className="h-16 w-16 rounded-2xl shadow-lg" />
        <h2 className="text-3xl font-bold tracking-tight text-balance">{t.cta.title}</h2>
        <p className="max-w-xl text-lg text-indigo-100">{t.cta.text}</p>
        <AppStoreButton inverted />
      </div>
    </section>
  );
}
