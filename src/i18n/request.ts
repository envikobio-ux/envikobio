import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  // Default to English (中文版暂未开放)
  const locale: Locale = 'en';
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});