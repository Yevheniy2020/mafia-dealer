import React, { FC } from 'react';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';
import Line from '@/components/common/ui/line';

const LocalizationPage: FC = () => {
  return (
    <div className="p-15 bg-white dark:bg-dark h-fullVH">
      <div className="relative">
        <Card
          src="/images/cards/localization.jpg"
          width={330}
          height={185}
          alt="The group of people"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 leading-none">
          We have the localization
        </h1>
      </div>
      <div className="pt-15">
        <div className="mt-3 mb-3 flex items-center gap-3">
          <span className="text-xl leading-none text-black dark:text-white">
            English
          </span>
          <Button
            type={ButtonType.CIRCLE}
            color={ButtonColor.BLUE}
            text="Continue"
          />
        </div>
        <Line />
        <div className="mt-3 mb-3 flex items-center gap-3">
          <span className="text-xl leading-none text-black dark:text-white">
            Ukrainian
          </span>
          <Button
            type={ButtonType.CIRCLE}
            color={ButtonColor.BLUE}
            text="Продовжити"
          />
        </div>
      </div>
    </div>
  );
};

export default LocalizationPage;
