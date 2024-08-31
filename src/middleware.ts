import { NextResponse } from 'next/server'
import type { MiddlewareConfig, NextRequest } from 'next/server'
import { verifyToken } from './utils/jwt';

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config: MiddlewareConfig = {
  matcher: ['/'],
}