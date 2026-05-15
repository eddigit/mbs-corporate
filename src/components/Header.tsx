"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/juridictions", label: t("jurisdictions") },
    { href: "/compte-bancaire", label: t("bankAccount") },
    { href: "/tup", label: t("tup") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ];

  function switchLocale() {
    const newLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scrolled ? 'bg-emerald-600' : 'bg-white/15 backdrop-blur'}`}>
              <Globe className={`w-4.5 h-4.5 ${scrolled ? 'text-white' : 'text-emerald-300'}`} strokeWidth={1.5} />
            </div>
            <span className={`text-lg font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              CMB<span className={scrolled ? 'text-emerald-600' : 'text-emerald-300'}> LUX</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? scrolled
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-white bg-white/15"
                    : scrolled
                    ? "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all ${
                scrolled
                  ? "text-gray-500 hover:text-emerald-600 hover:bg-emerald-50/50"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
              {locale === "fr" ? "EN" : "FR"}
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25"
            >
              {t("freeConsultation")}
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled ? 'text-gray-700' : 'text-white'}`} strokeWidth={1.5} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled ? 'text-gray-700' : 'text-white'}`} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-5 bg-white rounded-2xl mt-2 shadow-xl border border-gray-100 p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-3 pt-3 mt-2 border-t border-gray-100">
                <button
                  onClick={switchLocale}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-2"
                >
                  <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {locale === "fr" ? "EN" : "FR"}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold"
                >
                  {t("freeConsultation")}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
