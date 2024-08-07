'use client';
import React, { ReactNode, useEffect, useState } from 'react';

import Footer from '@/components/common/layout/footer';
import Header from '@/components/common/layout/header';
import Spinner from '@/components/common/ui/spinner/Spinner';

type Props = {
  children: ReactNode;
};

const Loading = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="w-360	">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Loading;
