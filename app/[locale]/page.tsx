import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Contact from "@/components/Contact";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="overflow-hidden bg-gray-950 text-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-12">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/landing-page-hero-img.jpg"
            alt="hero background"
            fill
            priority
            className="object-cover object-center opacity-80"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gray-950/50" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(6,182,212,0.18), transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(16,185,129,0.12), transparent 35%)
            `,
          }}
        />

        <div className="mx-auto mt-24 flex w-full max-w-6xl flex-col items-center justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight text-[#F9F9F9] md:text-6xl">
              {t("hero-title")}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              {t("hero-subtitle")}
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/#contactSection"
                className="rounded-full px-8 py-4 font-semibold text-[#F9F9F9] transition border border-[#B1C795] hover:bg-[#51603E]"
              >
                {t("hero-cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-lighten">
          <Image
            src="/blueprint-bg.png"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {t("services-title")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              {t("service-subtitle")}
            </p>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-8 lg:grid-cols-12">
            {/* FEATURED CARD */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#B1C795] hover:bg-white/[0.05] lg:col-span-7">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_40%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                {/* TOP */}
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B1C795]">
                    {t("services-1-subtitle")}
                  </p>

                  <h3 className="mt-8 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                    {t("services-1-title")}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                    {t("service-1-desc")}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-bold text-white">10+</p>
                    <p className="mt-2 text-sm text-slate-400">
                      {t("metrics-1-subtitle")}
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white">99.9%</p>
                    <p className="mt-2 text-sm text-slate-400">
                      {t("metrics-2-subtitle")}
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="mt-2 text-sm text-slate-400">
                      {t("metrics-3-subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              {/* CARD 1 */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B1C795] hover:bg-white/[0.05]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_45%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B1C795]">
                    {t("services-2-subtitle")}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-white">
                    {t("services-2-title")}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-slate-400">
                    {t("service-2-desc")}
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B1C795] hover:bg-white/[0.05]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_45%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B1C795]">
                    {t("services-3-subtitle")}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-white">
                    {t("services-3-title")}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-slate-400">
                    {t("service-3-desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT RESULTS */}
      <section className="flex items-center border-t border-white/10 bg-gray-950 px-6 py-26">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row">
          {/* TEXT */}
          <div className="flex flex-1 flex-col gap-8 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight text-[#F9F9F9] md:text-5xl">
              {t("proven-proj-title")}
            </h2>

            <p className="max-w-xl text-lg text-gray-400">
              {t("proven-proj-desc")}
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/portfolio"
                className="rounded-full bg-[#697857] px-8 py-4 font-semibold uppercase transition hover:bg-[#51603E]"
              >
                {t("proven-proj-cta")}
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex-1">
            <div className="absolute inset-0 rounded-full bg-gray-700/10 blur-3xl" />
            <Image
              src="/project-section-image.png"
              alt="project"
              width={720}
              height={620}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-slate-800">
        <Contact />
      </section>
    </main>
  );
}
