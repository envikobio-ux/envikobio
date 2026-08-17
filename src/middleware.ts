import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'zh'] as const;

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
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }
  
  // PRIORITY 2: Redirect alvokorbiosolution.cn to alvokorbiosolution.com (临时关闭中文版)
  // 备案完成后移除此段代码
  if (host.includes('alvokorbiosolution.cn')) {
    const url = request.nextUrl.clone();
    url.hostname = 'www.alvokorbiosolution.com';
    url.port = '';
    const response = NextResponse.redirect(url.toString(), 302);
    return response;
  }
  
  // All domains show English by default
  const locale = 'en';
  
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