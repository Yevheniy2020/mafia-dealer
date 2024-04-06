import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import SettingsPage from '@/components/screen/settings-page';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <SettingsPage />;
};

export default Page;
