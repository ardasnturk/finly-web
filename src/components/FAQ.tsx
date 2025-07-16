import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is Finly free to use?",
      answer:
        "Finly offers a free version with basic features. We also offer a premium subscription with advanced analytics, unlimited categories, and priority support.",
    },
    {
      question: "How secure is my financial data?",
      answer:
        "Your data is encrypted using bank-level security standards. We never share your personal information with third parties, and all data is stored securely on our servers.",
    },
    {
      question: "Can I sync my bank accounts?",
      answer:
        "Currently, Finly supports manual entry and CSV import. We're working on bank integration features that will be available in future updates.",
    },
    {
      question: "Does Finly work offline?",
      answer:
        "Yes! Finly works offline and will sync your data when you're back online. This ensures you never lose your financial information.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Absolutely! You can export your financial data in CSV format at any time. This makes it easy to backup your information or use it with other financial tools.",
    },
    {
      question: "What devices are supported?",
      answer:
        "Finly is currently available for iOS devices. We're working on Android and web versions that will be released soon.",
    },
    {
      question: "How accurate are the AI suggestions?",
      answer:
        "Our AI analyzes your spending patterns and provides personalized suggestions. The more you use Finly, the more accurate the recommendations become.",
    },
    {
      question: "Can I set up multiple budgets?",
      answer:
        "Yes! You can create multiple budgets for different purposes - monthly budget, vacation savings, emergency fund, and more. Each budget can have its own goals and categories.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Finly
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@finly.app"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
