"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Globe, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Globe className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                CMB<span className="text-emerald-400"> LUX</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">{t("description")}</p>
            <div className="flex flex-col gap-2.5 mt-5">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-emerald-500/60" strokeWidth={1.2} />
                <span>contact@cmb-lux.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emerald-500/60" strokeWidth={1.2} />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-emerald-500/60" strokeWidth={1.2} />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: nav("home") },
                { href: "/juridictions", label: nav("jurisdictions") },
                { href: "/compte-bancaire", label: nav("bankAccount") },
                { href: "/tup", label: nav("tup") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("ourServices")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/services", label: nav("services") },
                { href: "/contact", label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("legal")}</h4>
            <ul className="space-y-2.5 text-sm">
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

        <div className="border-t border-gray-800/50 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} CMB LUX. {t("rights")}
          </p>
          <p>Crafted with precision ✦</p>
        </div>
      </div>
    </footer>
  );
}
