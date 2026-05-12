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
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#020617] text-white overflow-hidden">
      <section className="relative isolate min-h-screen py-32">
        {/* Background Layers */}
        <div className="absolute inset-0 -z-10">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_40%)]" />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Glow */}
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Top Heading */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-sm text-emerald-300 backdrop-blur-md">
              Available for freelance & consulting work
            </div>

            <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
              Let’s build infrastructure that{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                scales reliably
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Whether you need cloud migration, CI/CD automation, or platform
              optimization, I help teams build resilient systems with modern
              DevOps practices.
            </p>
          </div>

          {/* Main Container */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(16,185,129,0.06),transparent,rgba(59,130,246,0.05))]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT PANEL */}
              <div className="relative border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-14">
                {/* Side Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_50%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-8">
                      <div className="mb-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                        Contact Information
                      </div>

                      <h3 className="text-3xl font-semibold tracking-tight">
                        Start your next infrastructure project
                      </h3>

                      <p className="mt-4 max-w-md leading-relaxed text-slate-400">
                        Usually responding within 24 hours. Feel free to reach
                        out regarding cloud engineering, DevOps consulting,
                        infrastructure audits, or long-term collaboration.
                      </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-5">
                      {/* Phone */}
                      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-500/30 hover:bg-white/[0.05]">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-emerald-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                              />
                            </svg>
                          </div>

                          <div>
                            <p className="text-sm text-slate-500">Phone</p>
                            <p className="mt-1 text-base font-medium text-white">
                              +49 176 802 289 57
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-500/30 hover:bg-white/[0.05]">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-cyan-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4z"
                              />
                            </svg>
                          </div>

                          <div>
                            <p className="text-sm text-slate-500">Email</p>
                            <p className="mt-1 text-base font-medium text-white">
                              info@baque-solutions.com
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30 hover:bg-white/[0.05]">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-violet-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                              />
                            </svg>
                          </div>

                          <div>
                            <p className="text-sm text-slate-500">Office</p>
                            <p className="mt-1 max-w-sm leading-relaxed text-white">
                              {t("contact-addess")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metrics */}
                  <div className="mt-12 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                      <p className="text-2xl font-bold text-white">24h</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Avg response
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                      <p className="text-2xl font-bold text-white">99.9%</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Reliability focus
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                      <p className="text-2xl font-bold text-white">Cloud</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Native systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative p-8 lg:p-14">
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_40%)]" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                      Project Inquiry
                    </div>

                    <h3 className="text-3xl font-semibold">
                      Tell me about your project
                    </h3>

                    <p className="mt-4 max-w-lg text-slate-400">
                      Share your infrastructure goals, current challenges, or
                      technical requirements and I’ll get back with a suitable
                      approach.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm text-slate-400">
                        Full Name
                      </label>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder={t("contact-placeholder-name")}
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-slate-400">
                        E-Mail
                      </label>

                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder={t("contact-placeholder-email")}
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-500/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-slate-400">
                        Project Details
                      </label>

                      <textarea
                        rows={6}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder={t("contact-placeholder-text")}
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 resize-none focus:border-violet-500/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <button
                      onClick={sendEmail}
                      disabled={loading}
                      className="
                        group relative mt-6 flex h-14 w-full items-center justify-center
                        overflow-hidden rounded-2xl border border-emerald-400/20
                        bg-gradient-to-r from-[#697857] to-[#5d6b4e]
                        font-semibold text-white
                        transition-all duration-300
                        hover:scale-[1.01]
                        hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]
                        disabled:opacity-50
                      "
                    >
                      <span className="absolute inset-0 bg-white/0 transition group-hover:bg-white/[0.04]" />

                      <span className="relative">
                        {loading ? "Sending..." : t("contact-cta")}
                      </span>
                    </button>

                    <p className="pt-2 text-sm text-slate-500">
                      Secure inquiry form • Usually replies within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
