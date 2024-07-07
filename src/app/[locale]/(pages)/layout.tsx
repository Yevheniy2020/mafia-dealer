import React, { ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Loading from '@/components/common/layout/loading/Loading';

import { SettingsProvider } from '../../../../providers/SettingsProvider';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const Layout = ({ children, params: { locale } }: Props) => {
  // Enable static rendering
  const messages = useMessages();

  unstable_setRequestLocale(locale);
  return (
    <SettingsProvider>
      <div lang={locale} className="bg-white dark:bg-dark">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Loading>{children}</Loading>
        </NextIntlClientProvider>
      </div>
    </SettingsProvider>
  );
};

export default Layout;
