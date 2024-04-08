import React from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import InstructionPage from '@/components/screen/instruction-page';

export const metadata: Metadata = {
  title: 'The instruction',
  openGraph: {
    title: 'The instruction',
  },
};
const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <InstructionPage />;
};

export default Page;
