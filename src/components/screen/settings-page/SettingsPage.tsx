'use client';
import React, { FC, useState } from 'react';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import ButtonGroup from '@/components/common/ui/button-group';
import ButtonGroupContext from '@/components/common/ui/button-group/components';
import Card from '@/components/common/ui/card';
import Input from '@/components/common/ui/input';
import Line from '@/components/common/ui/line';

const SettingsPage: FC = () => {
  const [activeGroupButton, setActiveGroupButton] = useState('left');
  const handleGroupButtonClick = (direction: string) => {
    setActiveGroupButton(direction);
  };
  return (
    <div className="p-15 bg-white dark:bg-dark">
      <div className="relative">
        <Card
          src="/images/cards/settings.jpg"
          width={330}
          height={183}
          alt="The group of people setting something"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 leading-none text-center">
          Settings for game
        </h1>
      </div>
      <div className="pt-15">
        <div>
          <h6 className="text-2xl text-white">Mode</h6>
          <div className="mt-2.5 mb-2.5">
            <ButtonGroupContext>
              <ButtonGroup
                isRight={false}
                text="Automatic"
                isActive={activeGroupButton === 'left'}
                onClick={() => handleGroupButtonClick('left')}
              />
              <ButtonGroup
                isRight={true}
                text="Manual"
                isActive={activeGroupButton === 'right'}
                onClick={() => handleGroupButtonClick('right')}
              />
            </ButtonGroupContext>
          </div>
          <Line />
        </div>
        {activeGroupButton === 'left' ? (
          <div className="pt-15">
            <h6 className="text-2xl text-white mb-2.5">Number of players</h6>
            <Input placeholder="Here" />
            <Line style="mt-2.5" />
          </div>
        ) : (
          <div>
            <div className="pt-15">
              <h6 className="text-2xl text-white mb-2.5">Number of players</h6>
              <Input placeholder="Here" />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl text-white mb-2.5">Number of sheriffs</h6>
              <Input placeholder="Here" />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl text-white mb-2.5">Number of doctors</h6>
              <Input placeholder="Here" />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl text-white mb-2.5">
                Number of courtesans
              </h6>
              <Input placeholder="Here" />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl text-white mb-2.5">Number of maniacs</h6>
              <Input placeholder="Here" />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl text-white mb-2.5">
                Number of civilians
              </h6>
              <Input placeholder="Here" />
              <Line style="mt-2.5" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          type={ButtonType.SQUARE}
          color={ButtonColor.BLUE}
          text="Start"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
