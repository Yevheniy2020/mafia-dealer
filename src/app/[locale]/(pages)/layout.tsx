import React, { ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Footer from '@/components/common/layout/footer';
import Header from '@/components/common/layout/header';

import { SettingsProvider } from '../../../../providers/SettingsProvider';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const locales = ['uk', 'en'];

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

const Layout = ({ children, params: { locale } }: Props) => {
  // Enable static rendering
  const messages = useMessages();

  unstable_setRequestLocale(locale);
  return (
    <SettingsProvider>
      <div lang={locale} className="bg-white dark:bg-dark">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="flex justify-center">
            <div className="w-360">{children}</div>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </div>
    </SettingsProvider>
  );
};

export default Layout;
