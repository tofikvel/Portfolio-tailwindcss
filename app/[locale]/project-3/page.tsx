import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function ProjectThree() {

    const t = useTranslations("project-3")

    return (
        <main>
            <section className="flex justify-center mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col gap-20 w-3xl">
                    <div className="flex flex-col gap-6 text-start">
                        <h1 className="text-3xl font-bold md:text-5xl">
                            {t("project-title")}
                        </h1>
                        <h3 className="text-lg font-light md:text-xl">
                            {t("project-author")}
                        </h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">
                                {t("project-abstract")}
                            </h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                {t("project-abstract-intro")}
                            </p>
                        </div>
                        <div className="flex">
                            <Image
                                src="/home-page-hero.jpg"
                                alt="home-page-hero-image"
                                width={380}
                                height={600}
                                className="rounded-lg h-125 w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">
                                {t("project-body-1-title")}
                            </h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                {t("project-body-1-desc")}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">
                                {t("project-body-2-title")}
                            </h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                {t("project-body-2-desc")}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">
                                {t("project-body-3-title")}
                            </h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                {t("project-body-3-desc")}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl md:text-2xl">
                                {t("project-conclusion-title")}
                            </h4>
                            <p className="text-lg font-light md:text-xl leading-relaxed">
                                {t("project-conclusion-desc")}
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link
                                href="/contact"
                                className="bg-emerald-700 text-white px-6 py-4 rounded-full hover:bg-emerald-800 transition cursor-pointer md:px-12 md:py-4"
                            >
                                {t("project-contact-btn")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}