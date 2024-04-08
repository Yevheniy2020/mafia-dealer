import React from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import CardPage from '@/components/screen/card-page';

export const metadata: Metadata = {
  title: 'The card',
  openGraph: {
    title: 'The card',
  },
};
const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <CardPage />;
};

export default Page;
