import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectOne() {
  const t = useTranslations("project-1");

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-gray-900/90 px-6 pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(16,185,129,0.25), transparent 35%),
              radial-gradient(circle at 80% 70%, rgba(6,182,212,0.18), transparent 35%)
            `,
          }}
        />
        <div className="relative max-w-6xl mx-auto flex flex-col gap-10 mt-10 md:mt-26">
          {/* TITLE */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#F9F9F9]">
              {t("project-title")}
            </h1>

            <p className="text-gray-400 text-lg md:text-xl">
              {t("project-author")}
            </p>
          </div>
          {/* HERO IMAGE */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/cloud-infra-aws.jpg"
              alt="project image"
              width={1400}
              height={700}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-900/90 px-6 pb-28 pt-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-20 mb-10 md:mb-12">
          {/* ABSTRACT */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F9F9F9]">
                {t("project-abstract")}
              </h2>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {t("project-abstract-intro")}
            </p>
          </div>

          {/* BODY */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F9F9F9]">
                {t("project-body-title")}
              </h2>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {t("project-body-desc")}
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F9F9F9]">
                {t("project-conclusion-title")}
              </h2>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {t("project-conclusion-desc")}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#F9F9F9]">
                {t("project-pre-cta-title")}
              </h3>
              <p className="text-gray-400">{t("project-pre-cta-subtitle")}</p>
            </div>
            <Link
              href="/contact"
              className="rounded-sm px-8 py-4 font-semibold text-[#F9F9F9] transition border border-[#B1C795] hover:bg-[#51603E]"
            >
              {t("project-contact-btn")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
