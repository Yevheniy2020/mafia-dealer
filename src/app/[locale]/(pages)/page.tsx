import React from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import MainPage from '@/components/screen/main-page';

export const metadata: Metadata = {
  title: 'Mafia Dealer',
  openGraph: {
    title: 'Mafia Dealer',
    description: 'The game for a company friends',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 330,
        height: 206,
      },
    ],
    type: 'website',
  },
};
const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <MainPage />;
};

export default Page;
