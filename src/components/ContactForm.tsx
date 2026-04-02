"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Send, CheckCircle, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" strokeWidth={1.2} />
        <p className="text-emerald-700 font-semibold text-lg">{t("success")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" strokeWidth={1.2} />
          <input
            type="text"
            required
            placeholder={t("firstName")}
            className={`${inputClass} pl-10`}
          />
        </div>
        <div className="relative">
          <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" strokeWidth={1.2} />
          <input
            type="text"
            required
            placeholder={t("lastName")}
            className={`${inputClass} pl-10`}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" strokeWidth={1.2} />
          <input
            type="tel"
            required
            placeholder={t("phone")}
            className={`${inputClass} pl-10`}
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" strokeWidth={1.2} />
          <input
            type="email"
            required
            placeholder={t("email")}
            className={`${inputClass} pl-10`}
          />
        </div>
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" strokeWidth={1.2} />
        <textarea
          rows={3}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} pl-10 resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25"
      >
        {t("submit")}
        <Send className="w-4 h-4" strokeWidth={1.5} />
      </button>
    </form>
  );
}
