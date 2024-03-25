import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(uk|en)/:path*'],
};
