import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("Portfolio");

  return (
    <main>
      <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col gap-8 max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <h1 className="text-xl md:text-4xl text-center max-w-3xl">{t("section-1-title")}</h1>
            <h2 className="text-lg md:text-2xl max-w-3xl">{t("section-1-subtitle")}</h2>
            <Link href="/project-1" className="flex flex-row gap-2 items-center">
              <span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
              </span>
              <span>{t("section-project-link")}</span>
            </Link>
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-6 w-fit md:place-items-start">
            <div className="flex flex-col gap-4 md:max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-1-block-1-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-1-block-1-subtitle")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-1-block-2-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-1-block-2-subtitle")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-1-block-3-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-1-block-3-subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sky-50 flex justify-center mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col gap-8 max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <h1 className="text-xl md:text-4xl text-center max-w-3xl">{t("section-2-title")}</h1>
            <h2 className="text-lg md:text-2xl max-w-3xl">{t("section-2-subtitle")}</h2>
            <Link href="/project-2" className="flex flex-row gap-2 items-center">
              <span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
              </span>
              <span>{t("section-project-link")}</span>
            </Link>
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-6 w-fit md:place-items-start">
            <div className="flex flex-col items-center gap-4 md:max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-2-block-1-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-2-block-1-subtitle")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-2-block-2-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-2-block-2-subtitle")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-2-block-3-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-2-block-3-subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col gap-8 max-w-6xl">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <h1 className="text-xl md:text-4xl text-center max-w-3xl">{t("section-3-title")}</h1>
            <h2 className="text-lg md:text-2xl max-w-3xl">{t("section-3-subtitle")}</h2>
            <Link href="/project-3" className="flex flex-row gap-2 items-center">
              <span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
              </span>
              {t("section-project-link")}
            </Link>
          </div>
          <div className="grid grid-col md:grid-cols-3 gap-6 w-fit md:place-items-start">
            <div className="flex flex-col items-center gap-4 md:max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-3-block-1-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-3-block-1-subtitle")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-3-block-2-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-3-block-2-subtitle")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 max-w-87.5">
              <div className="flex">
                <Image
                  src="/home-page-hero.jpg"
                  alt="home-page-hero-image"
                  width={380}
                  height={300}
                  className="rounded-lg h-75 w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-xl font-bold">{t("section-3-block-3-title")}</h3>
                <p className="text-md md:text-lg leading-relaxed">{t("section-3-block-3-subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
