import { useLocale } from "next-intl";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const locale = useLocale();
  const title = locale === "fr" ? service.titleFr : service.titleEn;
  const desc = locale === "fr" ? service.shortDescFr : service.shortDescEn;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all">
      <div className="text-3xl mb-3">{service.icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
