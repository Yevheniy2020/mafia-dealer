import React from 'react';

import Footer from '@/components/common/layout/footer';
import Header from '@/components/common/layout/header';
import Card from '@/components/common/ui/card';

const NotFound = () => {
  return (
    <div className="w-360 ">
      <Header />
      <div className="bg-blueDark flex justify-center items-center h-fullVH">
        <div className="relative">
          <Card
            src="/images/cards/found.jpg"
            width={330}
            height={188.53}
            alt="This page is not ready"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 leading-none">
            This page is not ready
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
