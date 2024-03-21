import React, { FC } from 'react';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';

const MainPage: FC = () => {
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
          The game for a company friends
        </h1>
        <div className="absolute bottom-5 left-5 flex justify-center gap-2.5">
          <Button
            type={ButtonType.SQUARE}
            color={ButtonColor.BLUE}
            text="Play"
          />
          <Button
            type={ButtonType.SQUARE}
            color={ButtonColor.WHITE}
            text="Read the instruction"
          />
        </div>
      </div>
      <h3 className="mt-5 text-2xl leading-none text-black dark:text-white">
        Include all popular roles
      </h3>
      <div className="mt-3.5">
        <div className="flex justify-between">
          <div className="relative">
            <Card
              src="/images/cards/mafia.jpg"
              width={155}
              height={155}
              alt="Mafia"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              Mafia
            </span>
          </div>
          <div className="relative">
            <Card
              src="/images/cards/sherif.jpg"
              width={155}
              height={155}
              alt="Sherif"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              Sherif
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="relative">
            <Card
              src="/images/cards/courtesan.jpg"
              width={155}
              height={155}
              alt="Courtesan"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              Courtesan
            </span>
          </div>
          <div className="relative">
            <Card
              src="/images/cards/doctor.jpg"
              width={155}
              height={155}
              alt="Doctor"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              Doctor
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="relative">
            <Card
              src="/images/cards/maniac.jpg"
              width={155}
              height={155}
              alt="Maniac"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              Maniac
            </span>
          </div>
          <div className="relative">
            <Card
              src="/images/cards/civilian.jpg"
              width={155}
              height={155}
              alt="Civilian"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl leading-none text-white font-semibold">
              Civilian
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          type={ButtonType.SQUARE}
          color={ButtonColor.BLUE}
          text="Read more about roles"
        />
      </div>
    </div>
  );
};

export default MainPage;
