import { Icon } from "../components/Icon";
import { SUPPORT_EMAIL } from "../config";
import { useLanguage } from "../i18n";

export function Support() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-24 sm:px-6">
      <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand">
        <Icon name="arrowLeft" className="h-4 w-4" />
        {t.legal.back}
      </a>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">{t.support.title}</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{t.support.intro}</p>
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-brand to-purple-600 p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-100">{t.support.emailLabel}</p>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-2 inline-flex items-center gap-3 text-2xl font-bold break-all hover:underline">
          <Icon name="mail" className="h-7 w-7 shrink-0" />
          {SUPPORT_EMAIL}
        </a>
        <p className="mt-4 text-sm text-indigo-100">{t.support.emailHint}</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {t.support.topics.map((topic) => (
          <section key={topic.title} className="rounded-3xl border border-gray-200 p-6 dark:border-gray-800">
            <h2 className="font-semibold">{topic.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{topic.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
