"use client";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const copyRightDate = new Date().getFullYear();
  const t = useTranslations("Footer")

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 py-6 mb-4 md:flex-row md:justify-between">
        {/* Brand logo and contact details (left side) */}
        <div className="flex flex-col gap-12">
          {/* Brand logo */}
          <div className="text-center md:text-start">
            <Link href="/" className="text-xl text-bold md:text-3xl">
              BAQUE Solutions
            </Link>
          </div>
          {/* Contact details and social links */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-row items-center gap-4">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0" /></svg>
              </span>
              <span className="text-lg">+49 176 802 289 57</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" /></svg>
              <span className="text-lg">info@baque-solutions.com</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12" /></svg>
              </span>
              <p className="text-lg">Münchener Straße 42A, 10779 Berlin, Germany</p>
            </div>
            <a href="https://www.linkedin.com/in/zeynalov23/" className="flex flex-row items-center gap-4">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
              </span>
              <p className="text-lg">Linkedin</p>
            </a>
          </div>
        </div>
        {/* Additional links (right side) */}
        <div className="flex flex-row gap-24">
          <div className="flex flex-col space-y-4 md:flex md:flex-col md:space-y-6">
            <h3 className="font-bold text-xl text-bold">{t("navigation-title")}</h3>
            <Link href="/" className="text-lg hover:text-gray-600">
              {t("home")}
            </Link>
            <Link href="/about" className="text-lg hover:text-gray-600">
              {t("about")}
            </Link>
            <Link href="/services" className="text-lg hover:text-gray-600">
              {t("services")}
            </Link>
            <Link href="/portfolio" className="text-lg hover:text-gray-600">
              {t("portfolio")}
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:flex md:flex-col md:space-y-6">
            <h3 className="font-bold text-xl text-bold">{t("help-title")}</h3>
            <Link href="/contact" className="text-lg hover:text-gray-600">
              {t("contact")}
            </Link>
            <Link href="#" className="text-lg hover:text-gray-600">
              {t("imprint")}
            </Link>
            <Link href="#" className="text-lg hover:text-gray-600">
              {t("privacy-policy")}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; {copyRightDate} Baque Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
