import { SUPPORT_EMAIL } from "../config";
import { useLanguage } from "../i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/assets/icon.png" alt="" className="h-8 w-8 rounded-[0.6rem]" />
            <span className="text-lg font-bold">Finly</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">{t.footer.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.footer.product}</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-brand" href="/#features">{t.nav.features}</a></li>
            <li><a className="hover:text-brand" href="/#pro">{t.nav.pro}</a></li>
            <li><a className="hover:text-brand" href="/support/">{t.footer.support}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.footer.legal}</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-brand" href="/privacy/">{t.footer.privacy}</a></li>
            <li><a className="hover:text-brand" href="/terms/">{t.footer.terms}</a></li>
            <li><a className="hover:text-brand" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500 dark:border-gray-800">
        © {year} Arda Sentürk. {t.footer.rights} Apple, Apple Watch and iPhone are trademarks of Apple Inc.
      </div>
    </footer>
  );
}
