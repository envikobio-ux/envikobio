import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Chinese domain → redirect to /zh
  if (host.includes('alvokorbiosolution.cn')) {
    const url = request.nextUrl;
    // If already has locale prefix, continue
    if (url.pathname.startsWith('/zh') || url.pathname.startsWith('/en')) {
      return intlMiddleware(request);
    }
    // Redirect to Chinese version
    url.pathname = `/zh${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.redirect(url);
  }
  
  // English domain (alvokorbiosolution.com, envikobio.com) → redirect to /en
  if (host.includes('alvokorbiosolution.com') || host.includes('envikobio.com')) {
    const url = request.nextUrl;
    // If already has locale prefix, continue
    if (url.pathname.startsWith('/zh') || url.pathname.startsWith('/en')) {
      return intlMiddleware(request);
    }
    // Redirect to English version
    url.pathname = `/en${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.redirect(url);
  }
  
  // Default: use intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|zh)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};