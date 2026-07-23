import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'never' // Never add /en or /zh prefix
});

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Set locale based on domain
  let locale = 'en';
  
  // Chinese domain
  if (host.includes('alvokorbiosolution.cn') || host.includes('.cn')) {
    locale = 'zh';
  }
  
  // English domain (alvokorbiosolution.com, envikobio.com)
  // default is already 'en'
  
  // Create response with locale header
  const response = intlMiddleware(request);
  response.headers.set('x-locale', locale);
  
  // Also set cookie for client-side access
  response.headers.set('Set-Cookie', `NEXT_LOCALE=${locale}; Path=/; SameSite=Lax`);
  
  return response;
}

export const config = {
  matcher: ['/', '/(en|zh)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};