import { useEffect, useState } from "react";
import { APP_STORE_URL } from "../config";
import { useLanguage } from "../i18n";
import { LanguageSelect } from "./LanguageSelect";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#features", label: t.nav.features },
    { href: "/#watch", label: t.nav.watch },
    { href: "/#pro", label: t.nav.pro },
    { href: "/#faq", label: t.nav.faq },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-gray-200/70 bg-white/80 backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-950/80" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/assets/icon.png" alt="" className="h-8 w-8 rounded-[0.6rem]" />
          <span className="text-lg font-bold tracking-tight">Finly</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex dark:text-gray-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-gray-950 dark:hover:text-white">{link.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSelect className="text-gray-700 dark:text-gray-200" />
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:inline-flex">
            {t.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}
