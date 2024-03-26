import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import MainPage from '@/components/screen/main-page';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <MainPage />;
};

export default Page;
