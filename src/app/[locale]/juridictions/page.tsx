import { useTranslations } from "next-intl";
import { jurisdictions } from "@/data/jurisdictions";
import JurisdictionCard from "@/components/JurisdictionCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos 28 Juridictions",
  description:
    "Découvrez nos 28 juridictions pour la création de votre société à l'étranger. Comparez les taux d'imposition et les tarifs.",
};

export default function JurisdictionsPage() {
  const t = useTranslations("jurisdictions");

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jurisdictions.map((j) => (
              <JurisdictionCard key={j.slug} j={j} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
