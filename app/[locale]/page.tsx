import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {

  const t = useTranslations('Home');
  const tc = useTranslations('Contact');

  return (
    <main>
      <section className="md:min-h-[calc(100svh-64px)] flex justify-center mx-auto px-6 py-12">
        <div className="flex flex-col-reverse items-center gap-12 max-w-6xl md:flex md:flex-row">
          <div className="flex flex-col flex-1 gap-6">
            <h1 className="text-3xl text-center font-bold md:text-5xl md:text-start">
              {t('hero-title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed md:text-2xl">
              {t('hero-subtitle')}
            </p>
            <div className="flex justify-center md:flex md:justify-start">
              <Link
                href="/contact"
                className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4"
              >
                {t('hero-cta')}
              </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <Image
              src="/home-page-hero.jpg"
              alt="home-page-hero-image"
              width={680}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-sky-100 flex justify-center px-6 py-12 mx-auto md:py-24">
        <div className="flex flex-col gap-12 max-w-6xl md:gap-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-center md:text-5xl">{t("services-title")}</h1>
          </div>
          {/* Service 1 */}
          <div className="flex flex-col gap-12 max-w-4xl">
            <div className="pb-8 border-b border-gray-300">
              <p className="mb-3 text-md text-gray-500 uppercase">{t("services-1-subtitle")}</p>
              <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                {t("services-1-title")}
              </p>
            </div>
            <div className="pb-8 border-b border-gray-300">
              <p className="mb-3 text-md text-gray-500 uppercase">{t("services-2-subtitle")}</p>
              <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                {t("services-2-title")}
              </p>
            </div>
            <div className="pb-8 border-b border-gray-300">
              <p className="mb-3 text-md text-gray-500 uppercase">{t("services-3-subtitle")}</p>
              <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                {t("services-3-title")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project results section */}
      <section className="flex justify-center px-6 py-12 mx-auto md:py-24">
        <div className="flex flex-col-reverse items-center gap-12 max-w-6xl md:flex md:flex-row">
          <div className="flex flex-col flex-1 gap-12">
            <h1 className="text-3xl font-bold md:text-5xl text-center md:text-start">{t("proven-proj-title")}</h1>
            <p className="text-xl text-gray-600 leading-relaxed md:text-xl">
              {t("proven-proj-desc")}
            </p>
            <div className="flex justify-center md:flex md:justify-start">
              <Link
                href="/portfolio"
                className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4 uppercase"
              >
                {t("proven-proj-cta")}
              </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <Image
              src="/home-page-hero.jpg"
              alt="home-page-hero-image"
              width={680}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section className="bg-sky-100 flex justify-center items-center px-6 py-12 md:py-24 mx-auto">
        <div className="max-w-6xl flex flex-col justify-center items-center w-full">
          {/* TOP HEADING */}
          <div className="flex flex-col text-center mb-12">
            <h2 className="text-3xl font-semibold mb-8 md:text-5xl">{tc("contact-title")}</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {tc("contact-subtitle")}
            </p>
          </div>
          <div className="flex max-w-2xl w-full">
            <form className="flex flex-col justify-center gap-4 w-full">
              <input
                type="email"
                placeholder={tc("contact-placeholder-email")}
                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition"
              />

              <input
                type="text"
                placeholder={tc("contact-placeholder-name")}
                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition"
              />

              <textarea
                rows={5}
                placeholder={tc("contact-placeholder-text")}
                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition resize-none md:mb-4"
              />
              <button
                type="submit"
                className="bg-emerald-700 text-white text-sm px-9 py-4 rounded-sm hover:bg-emerald-800 transition cursor-pointer"
              >
                {tc("contact-cta")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
