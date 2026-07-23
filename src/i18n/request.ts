import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  // Get locale from headers (set by middleware based on domain)
  const headersList = await headers();
  const localeHeader = headersList.get('x-locale');
  
  // Detect locale from domain
  const host = headersList.get('host') || '';
  const detectedLocale = localeHeader || 
    (host.includes('.cn') || host.includes('alvokorbiosolution.cn') ? 'zh' : 'en');
  
  // Ensure locale is valid
  const locale: Locale = (locales.includes(detectedLocale as Locale) ? detectedLocale : 'en') as Locale;
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});