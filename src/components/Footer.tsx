import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-3">
              Corporate Services
            </h3>
            <p className="text-sm leading-relaxed">{t("description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {nav("home")}
                </Link>
              </li>
              <li>
                <Link href="/juridictions" className="hover:text-emerald-400 transition-colors">
                  {nav("jurisdictions")}
                </Link>
              </li>
              <li>
                <Link href="/compte-bancaire" className="hover:text-emerald-400 transition-colors">
                  {nav("bankAccount")}
                </Link>
              </li>
              <li>
                <Link href="/tup" className="hover:text-emerald-400 transition-colors">
                  {nav("tup")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {t("ourServices")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  {nav("services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">{t("legal")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-emerald-400 cursor-pointer transition-colors">
                  {t("privacy")}
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 cursor-pointer transition-colors">
                  {t("terms")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Corporate Services.{" "}
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
