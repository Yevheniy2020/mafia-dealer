import React from 'react';

import Footer from '@/components/common/layout/components/footer';

import Header from './components/header';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-360">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
