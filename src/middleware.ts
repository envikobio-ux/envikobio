import { NextRequest, NextResponse } from 'next/server';

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
  if (host.includes('alvokorbiosolution.cn')) {
    const url = request.nextUrl.clone();
    url.hostname = 'www.alvokorbiosolution.com';
    url.port = '';
    const response = NextResponse.redirect(url.toString(), 302);
    return response;
  }
  
  // Set locale to English for all requests
  const response = NextResponse.next();
  response.headers.set('x-locale', 'en');
  response.cookies.set('NEXT_LOCALE', 'en', { path: '/' });
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};