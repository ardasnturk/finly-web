import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { LanguageProvider } from "../components/LanguageProvider";

export function meta() {
  return [
    { title: "Finly - Take Control of Your Finances" },
    {
      name: "description",
      content:
        "The smart way to track your income, expenses, and savings. Set financial goals, get insights, and achieve financial freedom with Finly.",
    },
    {
      name: "keywords",
      content:
        "budget tracker, finance app, expense tracking, financial goals, money management",
    },
    { property: "og:title", content: "Finly - Take Control of Your Finances" },
    {
      property: "og:description",
      content: "The smart way to track your income, expenses, and savings.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/assets/icon.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Finly - Take Control of Your Finances" },
    {
      name: "twitter:description",
      content: "The smart way to track your income, expenses, and savings.",
    },
    { name: "twitter:image", content: "/assets/icon.png" },
  ];
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-950">
          <Header />
          <main>
            <Hero />
            <Features />
            <Testimonials />
            <FAQ />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
