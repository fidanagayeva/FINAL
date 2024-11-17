import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const clonedUrl = req.nextUrl.clone(); 
  const redirectPaths = [
    '/accessories', 
    '/account', 
    '/admin', 
    '/authpage', 
    '/blog', 
    '/care', 
    '/cart', 
    '/gifts', 
    '/houseplants', 
    '/plnts', 
    '/pots', 
    '/sale'
  ];

  if (clonedUrl.pathname === '/') {
    clonedUrl.pathname = '/home'; 
    return NextResponse.redirect(clonedUrl);
  }

  if (redirectPaths.includes(clonedUrl.pathname) && !req.headers.get('referer')) {
    clonedUrl.pathname = '/home'; 
    return NextResponse.redirect(clonedUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', 
};