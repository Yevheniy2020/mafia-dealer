import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import CardPage from '@/components/screen/card-page';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <CardPage />;
};

export default Page;
