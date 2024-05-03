import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const splashCookie = request.cookies.get('splash');
  let response = NextResponse.next();

  if (!splashCookie || splashCookie.value === 'false') {
    response.cookies.set('splash', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
  }

  return response;
}
