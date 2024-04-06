'use client';
import React, { FC, startTransition } from 'react';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';
import Line from '@/components/common/ui/line';
import { usePathname, useRouter } from '@/navigation';

const LocalizationPage: FC = () => {
  const t = useTranslations('LocalizationPage');
  const pathname = usePathname();
  const router = useRouter();

  function handleClickButton(value: string) {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  }

  return (
    <div className="p-15 bg-white dark:bg-dark h-fullVH">
      <div className="relative">
        <Card
          src="/images/cards/localization.jpg"
          width={330}
          height={185}
          alt="The group of people"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 text-center leading-none">
          {t('title')}
        </h1>
      </div>
      <div className="pt-15">
        <div className="mt-3 mb-3 flex items-center gap-3">
          <span className="text-xl leading-none text-black dark:text-white">
            {t('text1')}
          </span>
          <Button
            type={ButtonType.CIRCLE}
            color={ButtonColor.BLUE}
            typeSend="submit"
            onClick={() => {
              handleClickButton('en');
            }}
            text="Continue"
          />
        </div>
        <Line />
        <div className="mt-3 mb-3 flex items-center gap-3">
          <span className="text-xl leading-none text-black dark:text-white">
            {t('text2')}
          </span>
          <Button
            type={ButtonType.CIRCLE}
            color={ButtonColor.BLUE}
            typeSend="submit"
            text="Продовжити"
            onClick={() => {
              handleClickButton('uk');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LocalizationPage;
