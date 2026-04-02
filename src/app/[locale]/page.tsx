import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { services } from "@/data/services";
import { jurisdictions } from "@/data/jurisdictions";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Services — Création de sociétés internationales",
  description:
    "Créez votre entreprise dans l'une des 28 juridictions. Accompagnement sur-mesure, ouverture de compte bancaire, TUP, expatriation Dubaï.",
};

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const mainServices = services.slice(0, 4);
  const featuredJurisdictions = jurisdictions.filter((j) =>
    ["royaume-uni", "dubai", "chypre", "hong-kong", "singapour", "delaware"].includes(j.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0wIDBjLTEuNjU3IDAtMy0xLjM0My0zLTNzMS4zNDMtMyAzLTMgMyAxLjM0MyAzIDMtMS4zNDMgMy0zIDN6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  {t("hero.ctaButton")}
                </Link>
                <Link
                  href="/juridictions"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  {t("jurisdictions.title")}
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-4">{t("hero.cta")}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Featured jurisdictions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            {t("jurisdictions.title")}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            {t("jurisdictions.subtitle")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredJurisdictions.map((j) => (
              <Link
                key={j.slug}
                href={`/juridictions/${j.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg hover:border-emerald-300 transition-all"
              >
                <div className="text-3xl mb-2">{j.flag}</div>
                <h3 className="font-medium text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {locale === "fr" ? j.nameFr : j.nameEn}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{j.taxRate}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/juridictions"
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              {t("jurisdictions.title")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((s) => (
              <div
                key={s.slug}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {locale === "fr" ? s.titleFr : s.titleEn}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {locale === "fr" ? s.shortDescFr : s.shortDescEn}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              {t("services.allServices")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            {t("whyUs.title")}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🤝", key: "trust" },
              { icon: "⚡", key: "speed" },
              { icon: "🎓", key: "expertise" },
              { icon: "💬", key: "support" },
            ].map((item) => (
              <div
                key={item.key}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`whyUs.${item.key}`)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`whyUs.${item.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("hero.cta")}
          </h2>
          <p className="text-emerald-100 mb-8">{t("hero.subtitle")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            {t("hero.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
