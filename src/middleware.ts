import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'never'
});

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl;
  
  // Redirect envikobio.com to alvokorbiosolution.com
  if (host.includes('envikobio.com')) {
    const newUrl = new URL(request.url);
    newUrl.host = 'www.alvokorbiosolution.com';
    return NextResponse.redirect(newUrl, 301);
  }
  
  // Set locale based on domain
  let locale = 'en';
  
  // Chinese domain
  if (host.includes('alvokorbiosolution.cn') || host.includes('.cn')) {
    locale = 'zh';
  }
  
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