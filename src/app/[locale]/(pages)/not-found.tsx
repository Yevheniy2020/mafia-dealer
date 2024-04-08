import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import Card from '@/components/common/ui/card';

export const metadata: Metadata = {
  title: 'This page is not ready',
  openGraph: {
    title: 'This page is not ready',
  },
};
const NotFound = () => {
  const t = useTranslations('NotFound');

  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-360  dark:bg-blueDark bg-white flex justify-center items-center h-fullVH">
          <div className="relative">
            <Card
              src="/images/cards/found.jpg"
              width={330}
              height={188.53}
              alt="This page is not ready"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white text-center w-72 leading-none">
              {t('title')}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
