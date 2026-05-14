"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const copyRightDate = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#1B1B1B] text-[#F9F9F9] px-6 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 md:flex-row md:justify-between mb-12">
        {/* Brand logo and contact details (left side) */}
        <div className="flex flex-col gap-12">
          {/* Brand logo */}
          <div className="md:text-start flex justify-center md:justify-start">
            <Link href="/" className="text-xl text-bold md:text-3xl">
              <Image
                className="block md:hidden object-contain"
                src="/icons/baque-primary-symbol.png"
                width={50}
                height={50}
                alt="brand-nav-logo-small"
              />
              <Image
                className="hidden md:block object-contain"
                src="/icons/brand-logo-olive-white.png"
                width={185}
                height={185}
                alt="brand-nav-logo-large"
              />
            </Link>
          </div>
          {/* Contact details and social links */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-md text-[#F9F9F9]">+49 176 802 289 57</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className="
                flex h-10 w-10 shrink-0 items-center justify-center text-gray-200
        "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-md text-[#F9F9F9]">
                  info@baque-solutions.com
                </p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-3">
              <div
                className="
                flex h-10 w-10 shrink-0 items-center justify-center text-gray-200
        "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                  />
                </svg>
              </div>
              <div className="">
                <p className="text-sm text-gray-400">Office</p>
                <p className="max-w-xs text-md leading-relaxed text-[#F9F9F9]">
                  {t("footer-addess")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Additional links */}
        <div className="flex flex-row gap-20">
          <div className="flex flex-col space-y-4 md:flex md:flex-col md:space-y-6">
            <h3 className="font-bold text-lg text-bold text-gray-400">
              {t("navigation-title")}
            </h3>
            <Link href="/" className="hover:text-gray-300 transition text-md">
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition text-md"
            >
              {t("about")}
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-300 transition text-md"
            >
              {t("services")}
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-gray-300 transition text-md"
            >
              {t("portfolio")}
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:flex md:flex-col md:space-y-6">
            <h3 className="font-bold text-lg text-bold text-gray-400">
              {t("help-title")}
            </h3>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition text-md"
            >
              {t("contact")}
            </Link>
            <Link
              href="/imprint"
              className="hover:text-gray-300 transition text-md"
            >
              {t("imprint")}
            </Link>
            <Link
              href="/policy"
              className="hover:text-gray-300 transition text-md"
            >
              {t("privacy-policy")}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-md text-gray-400">
          &copy; {copyRightDate} Baque Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
