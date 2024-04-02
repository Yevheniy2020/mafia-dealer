import React, { ReactNode } from 'react';
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
  unstable_setRequestLocale(locale);
  return (
    <SettingsProvider>
      <div lang={locale} className="bg-white dark:bg-dark">
        <Header />
        <div className="flex justify-center">
          <div className="w-360">{children}</div>
        </div>
        <Footer />
      </div>
    </SettingsProvider>
  );
};

export default Layout;
