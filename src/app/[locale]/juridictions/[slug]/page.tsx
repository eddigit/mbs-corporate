import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { jurisdictions, getJurisdiction } from "@/data/jurisdictions";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return jurisdictions.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const j = getJurisdiction(slug);
  if (!j) return {};
  const name = locale === "fr" ? j.nameFr : j.nameEn;
  return {
    title: `Création de société - ${name}`,
    description: locale === "fr" ? j.descriptionFr : j.descriptionEn,
  };
}

export default async function JurisdictionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const j = getJurisdiction(slug);

  if (!j) notFound();

  return <JurisdictionContent j={j} />;
}

function JurisdictionContent({ j }: { j: ReturnType<typeof getJurisdiction> }) {
  const t = useTranslations("jurisdictions");
  const locale = useLocale();

  if (!j) return null;

  const name = locale === "fr" ? j.nameFr : j.nameEn;
  const description = locale === "fr" ? j.descriptionFr : j.descriptionEn;
  const advantages = locale === "fr" ? j.advantagesFr : j.advantagesEn;
  const price = locale === "fr" ? j.priceFr : j.priceEn;

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/juridictions"
            className="text-emerald-200 hover:text-white text-sm mb-4 inline-block transition-colors"
          >
            ← {t("backToList")}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{j.flag}</span>
            <h1 className="text-3xl sm:text-4xl font-bold">{name}</h1>
          </div>
          <p className="text-emerald-100 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-emerald-50 rounded-xl p-5">
              <p className="text-sm text-gray-600 mb-1">{t("taxRate")}</p>
              <p className="text-2xl font-bold text-emerald-700">{j.taxRate}</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5">
              <p className="text-sm text-gray-600 mb-1">{t("from")}</p>
              <p className="text-lg font-bold text-emerald-700">{price}</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5">
              <p className="text-sm text-gray-600 mb-1">{t("minCapital")}</p>
              <p className="text-lg font-bold text-gray-900">{j.capitalMin}</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5">
              <p className="text-sm text-gray-600 mb-1">{t("timeline")}</p>
              <p className="text-lg font-bold text-gray-900">{j.timeline}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("advantages")}
              </h2>
              <ul className="space-y-3">
                {advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-0.5">✓</span>
                    <span className="text-gray-700">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("companyTypes")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {j.companyTypes.map((type) => (
                  <span
                    key={type}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("contactUs")}
            </h2>
            <p className="text-gray-600 mb-6">{t("requestQuote")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t("requestQuote")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
