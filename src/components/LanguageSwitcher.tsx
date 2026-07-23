'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

const languageNames: Record<Locale, string> = {
  en: 'EN',
  zh: '中文'
};

export default function LanguageSwitcher() {
  const router = useRouter();

  const switchLocale = async (locale: Locale) => {
    // Set cookie
    document.cookie = `locale=${locale};path=/;max-age=31536000`;
    // Refresh page
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale, index) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className="px-2 py-1 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
        >
          {languageNames[locale]}
          {index < locales.length - 1 && (
            <span className="text-gray-300 mx-1">/</span>
          )}
        </button>
      ))}
    </div>
  );
}