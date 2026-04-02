"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import type { Jurisdiction } from "@/data/jurisdictions";

export default function JurisdictionCard({ j }: { j: Jurisdiction }) {
  const locale = useLocale();
  const t = useTranslations("jurisdictions");
  const name = locale === "fr" ? j.nameFr : j.nameEn;
  const price = locale === "fr" ? j.priceFr : j.priceEn;

  return (
    <Link
      href={`/juridictions/${j.slug}`}
      className="group relative bg-white border border-gray-100 rounded-2xl p-6 card-hover block overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/80 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

      <div className="relative">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{j.flag}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">
          {name}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-400 font-medium">{t("taxRate")}</span>
          <span className="text-sm font-bold text-emerald-600">{j.taxRate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">{t("from")}</span>
          <span className="text-sm font-semibold text-gray-700">{price}</span>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-emerald-600 font-medium">{t("learnMore")}</span>
          <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
