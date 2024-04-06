import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import InstructionPage from '@/components/screen/instruction-page';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <InstructionPage />;
};

export default Page;
