import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;

  // envikobio.com → alvokorbiosolution.com 301 redirect
  if (hostname === 'envikobio.com' || hostname === 'www.envikobio.com') {
    return NextResponse.redirect(
      `https://www.alvokorbiosolution.com${pathname}`,
      301
    );
  }

  // Set English locale
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', 'en', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.jpg|.*\\.pdf|.*\\.png|.*\\.svg|.*\\.ico).*)',
  ],
};