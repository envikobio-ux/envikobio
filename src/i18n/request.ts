import { getRequestConfig } from 'next-intl/server';
import { headers, cookies } from 'next/headers';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const headersList = await headers();
  const cookieStore = await cookies();
  
  const host = headersList.get('host') || '';
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  
  // Determine locale: cookie > domain > default
  let locale: Locale = 'en';
  
  if (cookieLocale && (cookieLocale === 'en' || cookieLocale === 'zh')) {
    locale = cookieLocale;
  } else if (host.includes('alvokorbiosolution.cn') || host.endsWith('.cn') || host.includes('.cn:')) {
    locale = 'zh';
  }
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});