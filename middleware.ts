import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { HEADER_CURRENT_PATH } from './common/headers';
import { RESUME_PATH } from './common/paths';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /cv or /resume pathname to the 'RESUME_PATH'
  if (pathname.startsWith('/cv') || pathname.startsWith('/resume')) {
    return NextResponse.redirect(new URL(RESUME_PATH, request.url));
  }

  const headers = new Headers(request.headers);
  headers.set(HEADER_CURRENT_PATH, pathname);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // match all routes except api or static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
