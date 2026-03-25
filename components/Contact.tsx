"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslations } from 'next-intl';


export default function Contact() {
    const t = useTranslations("Contact");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
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
                "-D9iPLMVoc_m9A9ao"
            );

            alert("✅ Message sent!");

            // reseting the form
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);

            let message = "Something went wrong";

            if (
                typeof error === "object" &&
                error !== null &&
                "text" in error
            ) {
                message = (error as { text: string }).text;
            }

            alert("❌ Failed: " + message);
        }
    };

    return (
        <main>
            <section className="flex justify-center items-center px-6 py-12 md:py-24 mx-auto">
                <div className="max-w-6xl flex flex-col justify-center items-center w-full">
                    {/* Heading */}
                    <div className="flex flex-col text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-8 md:text-5xl">
                            {t("contact-title")}
                        </h2>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            {t("contact-subtitle")}
                        </p>
                    </div>
                    {/* Form */}
                    <div className="flex max-w-2xl w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <input
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                placeholder={t("contact-placeholder-name")}
                                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                placeholder={t("contact-placeholder-email")}
                                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition"
                                required
                            />
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                placeholder={t("contact-placeholder-text")}
                                className="w-full bg-white border border-gray-400 p-4 rounded-sm focus:outline-none focus:border-gray-700 transition resize-none md:mb-4"
                                required
                            />
                            <button
                                type="button"
                                onClick={sendEmail}
                                disabled={loading}
                                className="bg-emerald-700 text-white text-sm px-9 py-4 rounded-sm hover:bg-emerald-800 transition cursor-pointer disabled:opacity-50"
                            >
                                {loading ? "Sending..." : t("contact-cta")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
