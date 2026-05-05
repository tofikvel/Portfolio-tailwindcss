"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_kllxxzg",
        "template_wylifsh",
        form,
        "-D9iPLMVoc_m9A9ao",
      );

      alert("✅ Message sent!");

      // reseting the form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      let message = "Something went wrong";

      if (typeof error === "object" && error !== null && "text" in error) {
        message = (error as { text: string }).text;
      }

      alert("❌ Failed: " + message);
    }
  };

  return (
    <main className="bg-slate-950 text-white">
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(16,185,129,0.15), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(6,182,212,0.1), transparent 40%)
          `,
        }}
      >
        <div className="w-full max-w-2xl">
          {/* Heading */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("contact-title")}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("contact-subtitle")}
            </p>
          </div>

          {/* Form Card */}
          <div className="p-6 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t("contact-placeholder-name")}
                className="w-full bg-transparent border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#697857] focus:ring-1 focus:ring-[#697857] transition placeholder-gray-500"
              />

              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t("contact-placeholder-email")}
                className="w-full bg-transparent border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#697857] focus:ring-1 focus:ring-[#697857] transition placeholder-gray-500"
              />

              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t("contact-placeholder-text")}
                className="w-full bg-transparent border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#697857] focus:ring-1 focus:ring-[#697857] transition resize-none placeholder-gray-500"
              />

              <button
                onClick={sendEmail}
                disabled={loading}
                className="mt-4 bg-[#697857] hover:bg-[#51603E] cursor-pointer px-8 py-4 rounded-lg font-semibold transition shadow-lg shadow-emerald-900/30 disabled:opacity-50"
              >
                {loading ? "Sending..." : t("contact-cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
