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
      await emailjs.send("service_kllxxzg", "template_wylifsh", form, "-D9iPLMVoc_m9A9ao");

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
    <main>
      <section
        className="relative pt-28 px-6 md:pt-40 pb-40 bg-gray-950 flex items-center justify-center overflow-hidden min-h-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(16,185,129,0.15), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(6,182,212,0.1), transparent 40%)
          `,
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 space-y-4 px-4">
            <h2 className="text-4xl md:text-5xl text-[#F9F9F9] font-bold">{t("contact-title")}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{t("contact-subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 px-4 py-6 md:rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            {/* Contact details */}
            <div className="order-2 lg:order-1 flex flex-col justify-between h-full md:p-10">
              {/* Heading */}
              <div className="mb-12 px-4">
                <h3 className="text-2xl font-semibold text-white">{t("contact-information-inner-title")}</h3>
                <p className="text-md mt-3 max-w-sm text-gray-400 leading-relaxed">{t("contact-information-notice")}</p>
              </div>
              {/* Contact Items */}
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-center gap-5">
                  <div
                    className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl border border-white/10 bg-white/[0.03]
          text-gray-200
        "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-sm text-[#F9F9F9]">+49 176 802 289 57</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5">
                  <div
                    className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl border border-white/10 bg-white/[0.03]
          text-gray-200
        "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-sm text-[#F9F9F9]">info@baque-solutions.com</p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-center gap-5">
                  <div
                    className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl border border-white/10 bg-white/[0.03]
          text-gray-200
        "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-sm text-gray-400">Office</p>
                    <p className="max-w-sm text-md leading-relaxed text-[#F9F9F9]">{t("contact-addess")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Card */}
            <div className="order-1 lg:order-2 rounded-2xl border border-white/5 bg-black/10 p-4 md:p-8">
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
                  className="mt-4 bg-[#697857] hover:bg-[#51603E] cursor-pointer px-8 py-4 rounded-sm font-semibold transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : t("contact-cta")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
