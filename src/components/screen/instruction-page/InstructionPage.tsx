import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';
import Line from '@/components/common/ui/line';

const InstructionPage: FC = () => {
  const t = useTranslations('InstructionPage');

  return (
    <div className="p-15 bg-white dark:bg-dark">
      <div className="relative">
        <Card
          src="/images/cards/instruction.jpg"
          width={330}
          height={185}
          alt="A girl who reading the instruction"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 leading-none text-center">
          {t('title')}
        </h1>
      </div>
      <div className="pt-15">
        <div className="mt-2.5">
          <h6 className="text-2xl dark:text-white text-black ">{t('p1')}</h6>
          <div className="text-base dark:text-white text-black  mt-2.5 mb-2.5">
            {t('text1')}
          </div>
          <Line />
        </div>
        <div className="mt-2.5">
          <h6 className="text-2xl dark:text-white text-black "> {t('p2')}</h6>
          <div className="text-base dark:text-white text-black  mt-2.5 mb-2.5">
            {t('text2')}
          </div>
          <Line />
        </div>
        <div className="mt-2.5">
          <h6 className="text-2xl dark:text-white text-black ">{t('p3')}</h6>
          <div className="text-base dark:text-white text-black  mt-2.5 mb-2.5">
            {t('text3')}
          </div>
          <Line />
        </div>
        <div className="mt-2.5">
          <h6 className="text-2xl dark:text-white text-black ">{t('p4')}</h6>
          <ul className="text-base dark:text-white text-black  mt-2.5 mb-2.5 list-disc pl-4">
            <li>{t('text4subtext1')}</li>
            <li>{t('text4subtext2')}</li>
            <li>{t('text4subtext3')}</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          type={ButtonType.SQUARE}
          color={ButtonColor.BLUE}
          text={t('buttonContent1')}
          sendLink="/"
        />
      </div>
    </div>
  );
};

export default InstructionPage;
