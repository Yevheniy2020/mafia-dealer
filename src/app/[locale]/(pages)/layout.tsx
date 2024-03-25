import React from 'react';

import Footer from '@/components/common/layout/footer';
import Header from '@/components/common/layout/header';

const locales = ['uk', 'en'];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

const Layout = ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  return (
    <div lang={locale} className="w-360">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
