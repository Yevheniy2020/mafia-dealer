import React from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import LocalizationPage from '@/components/screen/localization-page';

export const metadata: Metadata = {
  title: 'We have the localization',
  openGraph: {
    title: 'We have the localization',
  },
};
const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <LocalizationPage />;
};

export default Page;
