import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import LocalizationPage from '@/components/screen/localization-page';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <LocalizationPage />;
};

export default Page;
