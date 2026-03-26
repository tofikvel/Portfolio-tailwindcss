import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {

    const t = useTranslations("Policy");

    return (
        <main>
            <section className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center mx-auto max-w-6xl px-6 py-12 gap-12 md:py-20">
                    <h1 className="font-bold text-4xl md:text-5xl">{t("policy-heading")}</h1>
                    <div className="flex flex-col gap-6 text-start">
                        <h3 className="font-bold text-2xl md:text-3xl">{t("data-protection-title")}</h3>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("general-info-title")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("general-info-body")}</h4>
                        </div>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-title")}</h3>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-1-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("data-collection-1-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-2-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("data-collection-2-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-3-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("data-collection-3-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-4-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("data-collection-4-body")}</h4>
                        </div>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("hosting-heading")}</h3>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("hosting-title")}</h3>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("hosting-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("hosting-body")}</h4>
                        </div>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-heading")}</h3>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-1-subtitle")}</h3>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-1-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-2-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-2-li-1")}</h4>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-2-li-2")}</h4>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-2-li-3")}</h4>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-2-li-4")}</h4>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-2-li-5")}</h4>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-2-li-6")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-3-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-3-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-4-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-4-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-5-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-5-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-6-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-6-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-7-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed uppercase">{t("gnmi-8-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-8-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-8-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-9-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-9-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-10-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-10-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-11-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-11-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("gnmi-12-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("gnmi-12-body")}</h4>
                        </div>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-heading")}</h3>
                        <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-1-subtitle")}</h3>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl md:2xl leading-relaxed">{t("data-collection-1-body")}</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl md:text-3xl">{t("data-collection-2-subtitle")}</h3>
                            <h4 className="text-xl md:2xl leading-relaxed">{t("data-collection-2-body")}</h4>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}