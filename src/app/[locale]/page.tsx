"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { services } from "@/data/services";
import { jurisdictions } from "@/data/jurisdictions";
import ContactForm from "@/components/ContactForm";
import {
  Globe,
  Building2,
  Landmark,
  FileText,
  Plane,
  Shield,
  Zap,
  GraduationCap,
  HeadphonesIcon,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "creation-societe": <Building2 className="w-8 h-8" strokeWidth={1.2} />,
  "compte-bancaire": <Landmark className="w-8 h-8" strokeWidth={1.2} />,
  tup: <FileText className="w-8 h-8" strokeWidth={1.2} />,
  "expatriation-dubai": <Plane className="w-8 h-8" strokeWidth={1.2} />,
};

const whyUsIcons = [
  { icon: <Shield className="w-7 h-7" strokeWidth={1.2} />, key: "trust" },
  { icon: <Zap className="w-7 h-7" strokeWidth={1.2} />, key: "speed" },
  { icon: <GraduationCap className="w-7 h-7" strokeWidth={1.2} />, key: "expertise" },
  { icon: <HeadphonesIcon className="w-7 h-7" strokeWidth={1.2} />, key: "support" },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const mainServices = services.slice(0, 4);
  const featuredJurisdictions = jurisdictions.filter((j) =>
    ["royaume-uni", "dubai", "chypre", "hong-kong", "singapour", "delaware"].includes(j.slug)
  );

  return (
    <>
      {/* Hero — full immersive */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 gradient-animate">
        {/* Decorative elements */}
        <div className="absolute inset-0 dots-pattern" />
        <div className="absolute inset-0 lines-pattern" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-emerald-300/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[40%] w-48 h-48 bg-teal-400/5 rounded-full blur-2xl animate-float-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-emerald-300" strokeWidth={1.2} />
                <span className="text-emerald-200 text-sm font-medium">28 juridictions disponibles</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
                {t("hero.title").split(" ").slice(0, 3).join(" ")}{" "}
                <span className="text-gradient">{t("hero.title").split(" ").slice(3, 5).join(" ")}</span>{" "}
                {t("hero.title").split(" ").slice(5).join(" ")}
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-emerald-100/80 mb-8 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  {t("hero.ctaButton")}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/juridictions"
                  className="inline-flex items-center justify-center gap-2 glass text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/15 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" strokeWidth={1.5} />
                  {t("jurisdictions.title")}
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeInUp} className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                {[
                  { value: "28", label: "Juridictions" },
                  { value: "10+", label: "Ans d'expertise" },
                  { value: "4j", label: "Compte bancaire" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-emerald-300">{stat.value}</div>
                    <div className="text-xs text-emerald-200/60 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact form card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-3xl p-8 lg:p-10 glow-pulse"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">{t("hero.cta")}</h2>
              <p className="text-emerald-200/60 text-sm mb-6">Un expert vous recontactera sous 24h</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured jurisdictions */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-1.5 mb-4">
              <Globe className="w-4 h-4 text-emerald-600" strokeWidth={1.2} />
              <span className="text-emerald-700 text-sm font-medium">Nos destinations populaires</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t("jurisdictions.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-2xl mx-auto">
              {t("jurisdictions.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {featuredJurisdictions.map((j) => (
              <motion.div key={j.slug} variants={fadeInUp}>
                <Link
                  href={`/juridictions/${j.slug}`}
                  className="group block bg-white border border-gray-100 rounded-2xl p-5 text-center card-hover"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{j.flag}</div>
                  <h3 className="font-medium text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {locale === "fr" ? j.nameFr : j.nameEn}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium">{j.taxRate}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/juridictions"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors animated-underline"
            >
              Voir les 28 juridictions
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t("services.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mainServices.map((s) => (
              <motion.div key={s.slug} variants={fadeInUp}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-7 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-100 transition-colors icon-thin">
                    {serviceIcons[s.slug] || <Building2 className="w-8 h-8" strokeWidth={1.2} />}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {locale === "fr" ? s.titleFr : s.titleEn}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {locale === "fr" ? s.shortDescFr : s.shortDescEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
                    {t("services.learnMore")}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us — immersive dark section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-50" />
        <div className="absolute top-10 left-[20%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
              {t("whyUs.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-emerald-200/60 max-w-2xl mx-auto">
              {t("whyUs.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUsIcons.map((item) => (
              <motion.div key={item.key} variants={fadeInUp}>
                <div className="glass rounded-2xl p-7 h-full card-hover">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-5 icon-thin">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {t(`whyUs.${item.key}`)}
                  </h3>
                  <p className="text-sm text-emerald-100/50 leading-relaxed">
                    {t(`whyUs.${item.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t("hero.cta")}
          </h2>
          <p className="text-emerald-50/80 mb-8 text-lg">{t("hero.subtitle")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/20"
          >
            {t("hero.ctaButton")}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
