import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';

const MainPage: FC = () => {
  const t = useTranslations('MainPage');
  return (
    <div className="p-15 bg-white dark:bg-dark">
      <div className="relative ">
        <Card
          src="/images/cards/main.jpg"
          width={330}
          height={206}
          alt="Main image with a group of people"
        />
        <h1 className="absolute left-5 text-2xl text-white w-52 top-14 leading-none">
          {t('title')}
        </h1>
        <div className="absolute bottom-5 left-5 flex justify-center gap-2.5">
          <Button
            type={ButtonType.SQUARE}
            color={ButtonColor.BLUE}
            text={t('buttonContent1')}
            sendLink="/settings"
          />
          <Button
            type={ButtonType.SQUARE}
            color={ButtonColor.WHITE}
            text={t('buttonContent2')}
            sendLink="/instruction"
          />
        </div>
      </div>
      <h3 className="mt-5 text-2xl leading-none text-black dark:text-white">
        {t('subtitle')}
      </h3>
      <div className="mt-3.5">
        <div className="flex justify-between">
          <div className="relative">
            <Card
              src="/images/cards/mafia.jpg"
              width={155}
              height={155}
              alt={t('mafia')}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              {t('mafia')}
            </span>
          </div>
          <div className="relative">
            <Card
              src="/images/cards/sherif.jpg"
              width={155}
              height={155}
              alt={t('sherif')}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              {t('sherif')}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="relative">
            <Card
              src="/images/cards/courtesan.jpg"
              width={155}
              height={155}
              alt={t('courtesan')}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              {t('courtesan')}
            </span>
          </div>
          <div className="relative">
            <Card
              src="/images/cards/doctor.jpg"
              width={155}
              height={155}
              alt={t('doctor')}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              {t('doctor')}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="relative">
            <Card
              src="/images/cards/maniac.jpg"
              width={155}
              height={155}
              alt={t('maniac')}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              {t('maniac')}
            </span>
          </div>
          <div className="relative">
            <Card
              src="/images/cards/civilian.jpg"
              width={155}
              height={155}
              alt={t('civilian')}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              {t('civilian')}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          type={ButtonType.SQUARE}
          color={ButtonColor.BLUE}
          text={t('buttonContent3')}
          sendLink="/not-ready"
        />
      </div>
    </div>
  );
};

export default MainPage;
