'use client';
import React, { FC } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';

const MainPage: FC = () => {
  const t = useTranslations('MainPage');

  useGSAP(() => {
    gsap.to('#mainWrapper', {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: 'power4.inOut',
    });
    gsap.to('#heroTitle', { opacity: 1, y: -20, delay: 0.5 });
    gsap.to('#heroCard', {
      scale: 1.2,
      duration: 6,
      repeat: -1,
      yoyo: true,
      delay: 0.5,
    });
    gsap.to('#heroButtons', { opacity: 1, y: -70, delay: 0.5 });
    gsap.to('#heroButtonMore', { opacity: 1, y: 0, delay: 0.5 });
    gsap.to('#heroSubtitle', { opacity: 1, x: 0, delay: 0.5 });
    gsap.to('#roleCard', { opacity: 1, stagger: 0.2, delay: 0.5 });
  }, []);

  return (
    <div id="mainWrapper" className="p-15 bg-white dark:bg-dark opacity-0">
      <div className="relative overflow-hidden">
        <Card
          id={'heroCard'}
          src="/images/cards/main.jpg"
          width={330}
          height={206}
          alt="Main image with a group of people"
        />
        <h1
          id="heroTitle"
          className="absolute  left-5 text-2xl text-white w-52 top-[76px] opacity-0 leading-none"
        >
          {t('title')}
        </h1>
        <div
          id="heroButtons"
          className="absolute bottom-[-50px] left-5 flex justify-center gap-2.5 opacity-0"
        >
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
      <h3
        id="heroSubtitle"
        className="opacity-0 translate-x-[-20px] mt-5 text-2xl leading-none text-black dark:text-white"
      >
        {t('subtitle')}
      </h3>
      <div className="mt-3.5">
        <div className="flex justify-between">
          <div id="roleCard" className="relative opacity-0">
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
          <div id="roleCard" className="relative opacity-0">
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
          <div id="roleCard" className="relative opacity-0">
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
          <div id="roleCard" className="relative opacity-0">
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
          <div id="roleCard" className="relative opacity-0">
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
          <div id="roleCard" className="relative opacity-0">
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
      <div
        id="heroButtonMore"
        className="mt-4 flex justify-center opacity-0 translate-y-[20px]"
      >
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
