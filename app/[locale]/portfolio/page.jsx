import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("Portfolio");

  return (
    <main className="text-white overflow-hidden">
      <section className="bg-gray-900/90 px-6 py-28 text-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 mt-10 md:mt-26">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold">
                {t("section-1-title")}
              </h1>
              <p className="text-gray-400 text-lg">{t("section-1-subtitle")}</p>
            </div>
            <Link
              href="/project-1"
              className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>{t("section-project-link")}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          {/* FEATURED PROJECT */}
          <div className="group relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/cloud-infra-aws.jpg"
              alt=""
              width={1200}
              height={600}
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {t("section-1-block-1-title")}
              </h2>
              <p className="text-gray-300 max-w-xl">
                {t("section-1-block-1-subtitle")}
              </p>
            </div>
          </div>
          {/* SECONDARY PROJECTS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CARD 2 */}
            <div className="group">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/backend-dev.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  {t("section-1-block-2-title")}
                </h3>
                <p className="text-gray-400">
                  {t("section-1-block-2-subtitle")}
                </p>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="group">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/consulting.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  {t("section-1-block-3-title")}
                </h3>
                <p className="text-gray-400">
                  {t("section-1-block-3-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950/90 px-6 py-28 text-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold">
                {t("section-2-title")}
              </h1>
              <p className="text-gray-400 text-lg">{t("section-2-subtitle")}</p>
            </div>
            <Link
              href="/project-2"
              className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>{t("section-project-link")}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          {/* FEATURED */}
          <div className="group relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/microservice-container.jpg"
              alt=""
              width={1200}
              height={600}
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {t("section-2-block-1-title")}
              </h2>
              <p className="text-gray-300 max-w-xl">
                {t("section-2-block-1-subtitle")}
              </p>
            </div>
          </div>
          {/* SECONDARY */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/devops-modernization.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  {t("section-2-block-2-title")}
                </h3>
                <p className="text-gray-400">
                  {t("section-2-block-2-subtitle")}
                </p>
              </div>
            </div>
            <div className="group">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/architech-consult.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  {t("section-2-block-3-title")}
                </h3>
                <p className="text-gray-400">
                  {t("section-2-block-3-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/90 px-6 py-28 text-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold">
                {t("section-3-title")}
              </h1>
              <p className="text-gray-400 text-lg">{t("section-3-subtitle")}</p>
            </div>

            <Link
              href="/project-3"
              className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>{t("section-project-link")}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* FEATURED */}
          <div className="group relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/cloud-cost.jpg"
              alt=""
              width={1200}
              height={600}
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {t("section-3-block-1-title")}
              </h2>
              <p className="text-gray-300 max-w-xl">
                {t("section-3-block-1-subtitle")}
              </p>
            </div>
          </div>

          {/* SECONDARY */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/scalable-data.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  {t("section-3-block-2-title")}
                </h3>
                <p className="text-gray-400">
                  {t("section-3-block-2-subtitle")}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/arch-advisory.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  {t("section-3-block-3-title")}
                </h3>
                <p className="text-gray-400">
                  {t("section-3-block-3-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
