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
    <select value={locale} onChange={(e) => switchLocale(e.target.value)} className="flex max-w-12 h-8 cursor-pointer">
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
