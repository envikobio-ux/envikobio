import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'never'
});

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // PRIORITY 1: Redirect envikobio.com to alvokorbiosolution.com (301 permanent)
  if (host.includes('envikobio.com')) {
    const url = request.nextUrl.clone();
    url.hostname = 'www.alvokorbiosolution.com';
    url.port = '';
    const response = NextResponse.redirect(url.toString(), 301);
    // Add cache control headers
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }
  
  // PRIORITY 2: Set locale based on domain
  let locale = 'en';
  
  // Chinese domain → zh
  if (host.includes('alvokorbiosolution.cn') || host.endsWith('.cn')) {
    locale = 'zh';
  }
  
  // Apply intl middleware
  const response = intlMiddleware(request);
  
  // Set locale headers and cookie
  response.headers.set('x-locale', locale);
  response.headers.append('Set-Cookie', `NEXT_LOCALE=${locale}; Path=/; SameSite=Lax`);
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};