import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transmission Universelle de Patrimoine (TUP)",
  description:
    "La TUP permet la dissolution d'une filiale détenue à 100% sans liquidation. Article 1844-5 du Code civil.",
};

export default function TupPage() {
  const t = useTranslations("tup");

  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];
  const advantages = [
    t("adv1"),
    t("adv2"),
    t("adv3"),
    t("adv4"),
    t("adv5"),
    t("adv6"),
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-4">
            {t("subtitle")}
          </p>
          <span className="inline-block bg-emerald-600/50 backdrop-blur px-4 py-2 rounded-full text-sm">
            {t("article")}
          </span>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What is TUP */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("whatIs")}
            </h2>
            <p className="text-gray-600 leading-relaxed">{t("whatIsDesc")}</p>
          </div>

          {/* How it works */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("howItWorks")}
            </h2>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("advantages")}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-emerald-50 rounded-lg p-4"
                >
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-700">{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t("eligibility")}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {t("eligibilityDesc")}
            </p>
            <div className="max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
