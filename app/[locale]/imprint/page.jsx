import { useTranslations } from 'next-intl';


export default function ImprintPage() {

    const t = useTranslations("Imprint");

    return (
        <main>
            <section className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center text-center mx-auto px-6 py-12 max-w-6xl md:py-20 gap-12">
                    <h1 className="text-3xl font-bold md:text-5xl">{t('imprint-heading')}</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl">{t("imprint-host-name")}</h1>
                        <h4 className="text-lg md:text-xl">{t("imprint-host-position")}</h4>
                        <h4 className="text-lg md:text-xl">{t("imprint-host-addess")}</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl">{t("imprint-contact-heading")}</h1>
                        <h4 className="text-lg md:text-xl">{t("imprint-host-number")}</h4>
                        <h4 className="text-lg md:text-xll">{t("imprint-host-email")}</h4>
                        <h4 className="text-lg md:text-xl">{t("imprint-host-tax")}</h4>
                        <h4 className="text-lg md:text-xl">{t("imprint-trademark")}</h4>
                    </div>
                </div>
            </section>
        </main>
    )
}