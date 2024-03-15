import React from 'react';

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
    </div>
  );
};

export default Layout;
