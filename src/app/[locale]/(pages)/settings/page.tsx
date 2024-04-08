import React from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import SettingsPage from '@/components/screen/settings-page';

export const metadata: Metadata = {
  title: 'Start the game and chose the mode',
  openGraph: {
    title: 'Start the game and chose the mode',
  },
};
const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <SettingsPage />;
};

export default Page;
