import createMiddleware from 'next-intl/middleware';

const locales = ['uk', 'en'];

export default createMiddleware({
  locales,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(uk|en)/:path*'],
};
