'use client';
import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import ButtonGroup from '@/components/common/ui/button-group';
import ButtonGroupContext from '@/components/common/ui/button-group/components';
import Card from '@/components/common/ui/card';
import Input from '@/components/common/ui/input';
import Line from '@/components/common/ui/line';

import { useSettingsContext } from '../../../../providers/SettingsProvider';

// Mafia: Starts as 1 member for 1-6 players and then scales up by 1 additional member for every 5-6 additional players.
//   Sheriff: Always included when there are at least 4 players.
//   Doctor: Included when there are at least 8 players, then adds another every 20 players.
//   Courtesans: Introduced at 15 players, with an additional courtesan added every 30 players.
//   Maniacs: Introduced at 12 players, adding another every 25 players.
//   Civilians: Fill the remaining player slots.

const SettingsPage: FC = () => {
  const t = useTranslations('SettingsPage');

  const { setSettingsValue } = useSettingsContext();
  const [activeGroupButton, setActiveGroupButton] = useState('left');

  const handlerGroupButtonClick = (direction: string) => {
    setActiveGroupButton(direction);
  };
  return (
    <div
      className={`p-15 bg-white dark:bg-dark ${activeGroupButton == 'left' && 'h-fullVH'}`}
    >
      <div className="relative">
        <Card
          src="/images/cards/settings.jpg"
          width={330}
          height={183}
          alt="The group of people setting something"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 leading-none text-center">
          {t('title')}
        </h1>
      </div>
      <div className="pt-15">
        <div>
          <h6 className="text-2xl dark:text-white text-black">
            {t('subtitle1')}
          </h6>
          <div className="mt-2.5 mb-2.5">
            <ButtonGroupContext>
              <ButtonGroup
                isRight={false}
                text={t('buttonContent1')}
                isActive={activeGroupButton === 'left'}
                onClick={() => handlerGroupButtonClick('left')}
              />
              <ButtonGroup
                isRight={true}
                text={t('buttonContent2')}
                isActive={activeGroupButton === 'right'}
                onClick={() => handlerGroupButtonClick('right')}
              />
            </ButtonGroupContext>
          </div>
          <Line />
        </div>
        {activeGroupButton === 'left' ? (
          <div className="pt-15">
            <h6 className="text-2xl  mb-2.5 dark:text-white text-black">
              {t('subtitle2')}
            </h6>
            <Input
              placeholder="Here"
              onChange={e => setSettingsValue({ players: +e.target.value })}
            />
            <Line style="mt-2.5" />
          </div>
        ) : (
          <div>
            <div className="pt-15">
              <h6 className="text-2xl dark:text-white text-black mb-2.5">
                {t('textMafia')}
              </h6>
              <Input
                name="mafia"
                placeholder="Here"
                onChange={e =>
                  setSettingsValue(prevState => ({
                    ...prevState,
                    [e.target.name]: +e.target.value,
                  }))
                }
              />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl dark:text-white text-black mb-2.5">
                {t('textSheriffs')}
              </h6>
              <Input
                name="sherif"
                placeholder="Here"
                onChange={e =>
                  setSettingsValue(prevState => ({
                    ...prevState,
                    [e.target.name]: +e.target.value,
                  }))
                }
              />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl dark:text-white text-black mb-2.5">
                {t('textDoctors')}
              </h6>
              <Input
                name="doctor"
                placeholder="Here"
                onChange={e =>
                  setSettingsValue(prevState => ({
                    ...prevState,
                    [e.target.name]: +e.target.value,
                  }))
                }
              />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl dark:text-white text-black mb-2.5">
                {t('textCourtesans')}
              </h6>
              <Input
                name="courtesan"
                placeholder="Here"
                onChange={e =>
                  setSettingsValue(prevState => ({
                    ...prevState,
                    [e.target.name]: +e.target.value,
                  }))
                }
              />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl dark:text-white text-black mb-2.5">
                {t('textManiac')}
              </h6>
              <Input
                name="maniac"
                placeholder="Here"
                onChange={e =>
                  setSettingsValue(prevState => ({
                    ...prevState,
                    [e.target.name]: +e.target.value,
                  }))
                }
              />
              <Line style="mt-2.5" />
            </div>
            <div className="pt-15">
              <h6 className="text-2xl dark:text-white text-black mb-2.5">
                {t('textCivilian')}
              </h6>
              <Input
                name="civilian"
                placeholder="Here"
                onChange={e =>
                  setSettingsValue(prevState => ({
                    ...prevState,
                    [e.target.name]: +e.target.value,
                  }))
                }
              />
              <Line style="mt-2.5" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          type={ButtonType.SQUARE}
          color={ButtonColor.BLUE}
          text={t('buttonContent3')}
          sendLink="/card"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
