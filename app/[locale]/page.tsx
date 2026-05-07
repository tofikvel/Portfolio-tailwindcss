import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Contact from "@/components/Contact";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="text-white overflow-hidden">
      {/* HERO */}
      <section
        className="bg-gray-950 relative min-h-screen flex items-center px-6 py-12 mx-auto"
        style={{
          backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(6,182,212,0.1), transparent 40%)`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 mt-24">
          <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("hero-title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl">
              {t("hero-subtitle")}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-[#697857] hover:bg-[#51603E] px-8 py-4 rounded-full font-semibold shadow-lg shadow-emerald-900/30"
              >
                {t("hero-cta")}
              </Link>
            </div>
          </div>
          {/* IMAGE */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
            <Image
              src="/hero-image.png"
              alt="hero"
              width={700}
              height={600}
              className="relative w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-gray-900 relative py-20 md:py-32 px-6 border-t border-slate-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("services-title")}
            </h2>
          </div>
          {/* LAYOUT */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* FEATURED SERVICE */}
            <div className="md:col-span-2 relative rounded-2xl p-10 bg-slate-900/70 border border-slate-800 overflow-hidden hover:border-[#697857] transition">
              {/* glow inside card */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#10b981,transparent_50%)]" />

              <div className="relative flex flex-col gap-6">
                <p className="text-sm text-emerald-400 uppercase tracking-wide">
                  {t("services-1-subtitle")}
                </p>

                <p className="text-2xl md:text-3xl font-semibold leading-relaxed max-w-xl">
                  {t("services-1-title")}
                </p>
              </div>
            </div>
            {/* SIDE SERVICES */}
            <div className="flex flex-col gap-10">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-[#697857] transition">
                <p className="text-sm text-emerald-400 uppercase mb-2">
                  {t("services-2-subtitle")}
                </p>
                <p className="text-lg font-semibold leading-relaxed">
                  {t("services-2-title")}
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-[#697857] transition">
                <p className="text-sm text-emerald-400 uppercase mb-2">
                  {t("services-3-subtitle")}
                </p>
                <p className="text-lg font-semibold leading-relaxed">
                  {t("services-3-title")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project results section */}
      <section className="relative bg-gray-950 flex items-center px-6 py-20 border-t border-slate-800">
        <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* TEXT */}
          <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("proven-proj-title")}
            </h2>

            <p className="text-lg text-gray-400 max-w-xl">
              {t("proven-proj-desc")}
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/portfolio"
                className="uppercase bg-[#697857] hover:bg-[#51603E] px-8 py-4 rounded-full font-semibold shadow-lg shadow-emerald-900/30"
              >
                {t("proven-proj-cta")}
              </Link>
            </div>
          </div>

          {/* VISUAL SIDE */}
          <div className="flex-1 relative">
            {/* MAIN CARD */}
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
            <Image
              src="/project-imgage.png"
              alt="project"
              width={720}
              height={620}
              className="w-full h-auto object-cover"
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
