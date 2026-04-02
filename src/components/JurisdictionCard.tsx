import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import type { Jurisdiction } from "@/data/jurisdictions";

export default function JurisdictionCard({ j }: { j: Jurisdiction }) {
  const locale = useLocale();
  const t = useTranslations("jurisdictions");
  const name = locale === "fr" ? j.nameFr : j.nameEn;
  const price = locale === "fr" ? j.priceFr : j.priceEn;

  return (
    <Link
      href={`/juridictions/${j.slug}`}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
    >
      <div className="text-4xl mb-3">{j.flag}</div>
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
        {name}
      </h3>
      <div className="space-y-1 text-sm text-gray-600">
        <p>
          <span className="font-medium">{t("taxRate")} :</span> {j.taxRate}
        </p>
        <p className="text-emerald-600 font-medium">{price}</p>
      </div>
      <div className="mt-3 text-sm text-emerald-600 font-medium group-hover:underline">
        {t("learnMore")} →
      </div>
    </Link>
  );
}
