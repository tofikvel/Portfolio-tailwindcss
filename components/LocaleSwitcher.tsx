"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
      className="
        h-9
        px-3
        rounded-lg
        bg-transparent
        text-gray-300
        hover:bg-white/10
        hover:text-white
        border border-transparent
        hover:border-white/10
        focus:outline-none
        focus:bg-black/60
        focus:text-white
        transition-all duration-200
        cursor-pointer
        text-lg
        font-medium
      "
    >
      <option value="en" className="bg-slate-900 text-white cursor-pointer">
        EN
      </option>

      <option value="de" className="bg-slate-900 text-white cursor-pointer">
        DE
      </option>
    </select>
  );
}
