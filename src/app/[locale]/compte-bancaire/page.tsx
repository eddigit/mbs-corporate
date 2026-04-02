import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouverture de Compte Bancaire",
  description:
    "Ouvrez votre compte bancaire professionnel à distance en 4 jours. Multi-devises, Internet Banking, Cartes Visa/Mastercard.",
};

export default function BankAccountPage() {
  const t = useTranslations("bankAccount");

  const features = [
    { icon: "🌍", key: "remote" },
    { icon: "💱", key: "multiCurrency" },
    { icon: "💻", key: "banking" },
    { icon: "💳", key: "cards" },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-6">
            {t("subtitle")}
          </p>
          <div className="inline-flex items-center bg-emerald-600/50 backdrop-blur px-6 py-3 rounded-full">
            <span className="text-2xl mr-3">⚡</span>
            <span className="font-semibold text-lg">{t("guarantee")}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f) => (
              <div
                key={f.key}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`features.${f.key}`)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`features.${f.key}Desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
              {t("partners")}
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              {t("partnersDesc")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Europe", "Moyen-Orient", "Asie", "Amériques"].map((region) => (
                <div
                  key={region}
                  className="bg-white rounded-xl p-4 text-center shadow-sm"
                >
                  <p className="font-medium text-gray-700">{region}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              {t("cta")}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
