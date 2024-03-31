'use client';
import React, { FC, useEffect, useState } from 'react';

import ButtonGroup from '@/components/common/ui/button-group';
import ButtonGroupContext from '@/components/common/ui/button-group/components';
import { ButtonGroupType } from '@/components/common/ui/button-group/types';
import Card from '@/components/common/ui/card';
import calculateMafiaRoles from '@/components/screen/card-page/util/calculateMafiaRoles';
import generateRandomRoles from '@/components/screen/card-page/util/generateRandomRoles';

import { useSettingsContext } from '../../../../providers/SettingsProvider';

const CardsImages = {
  default: '',
  mafia: '/images/game-cards/mafia.jpg',
  sherif: '/images/game-cards/sherif.jpg',
  doctor: '/images/game-cards/doctor.jpg',
  civilian: '/images/game-cards/civilian.jpg',
  maniac: '/images/game-cards/maniac.jpg',
  courtesan: '/images/game-cards/courtesan.jpg',
  finish: '/images/game-cards/finish.jpg',
};

const CardsTitle = {
  default: '?',
  mafia: 'YOU ARE MAFIA',
  sherif: 'YOU ARE SHERIF',
  doctor: 'YOU ARE DOCTOR',
  civilian: 'YOU ARE CIVILIAN',
  maniac: 'YOU ARE MANIAC',
  courtesan: 'YOU ARE COURTESAN',
  finish: 'NO MORE CARDS',
};

enum TypeCard {
  DEFAULT = 'default',
  MAFIA = 'mafia',
  SHERIF = 'sherif',
  DOCTOR = 'doctor',
  CIVILIAN = 'civilian',
  MANIAC = 'maniac',
  COURTESAN = 'courtesan',
  FINISH = 'finish',
}

const CardPage: FC = () => {
  const { settingsValue } = useSettingsContext();
  const [rolesList, setRolesList] = useState<string[]>(['']);
  const [activeButton, setActiveButton] = useState('');
  const [counterRolesList, setCounterRolesList] = useState(0);
  const [currentType, setCurrentType] = useState(TypeCard.DEFAULT);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if ('players' in settingsValue) {
      setRolesList(
        generateRandomRoles(calculateMafiaRoles(settingsValue['players'])),
      );
    } else {
      setRolesList(generateRandomRoles(settingsValue));
    }
  }, []);
  const handleButtonLeftClick = () => {
    setCurrentType(rolesList[counterRolesList] as TypeCard);
    setIsFinish(rolesList.length === counterRolesList);
    setActiveButton('left');
    console.log(rolesList);
    console.log(rolesList[counterRolesList]);
  };

  const handleButtonRightClick = () => {
    setActiveButton('right');
    setCounterRolesList(prevState => prevState + 1);
    setCurrentType(TypeCard.DEFAULT);
  };
  return (
    <div className="p-15 bg-white dark:bg-dark">
      <div className="relative">
        {!isFinish ? (
          currentType === TypeCard.DEFAULT ? (
            <>
              <div className="w-full h-330 bg-blueDark rounded-lg"></div>
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white text-9xl leading-none ">
                {CardsTitle[currentType]}
              </h1>
            </>
          ) : (
            <>
              <Card
                src={CardsImages[currentType]}
                width={330}
                height={330}
                alt="The role"
              />
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-40 text-center leading-none">
                {CardsTitle[currentType]}
              </h1>
            </>
          )
        ) : (
          <>
            <Card
              src={CardsImages[TypeCard.FINISH]}
              width={330}
              height={330}
              alt="The role"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-40 text-center leading-none">
              {CardsTitle[TypeCard.FINISH]}
            </h1>
          </>
        )}
      </div>
      {!isFinish && (
        <div className="pt-8 pb-6 flex justify-center">
          <ButtonGroupContext>
            <ButtonGroup
              isRight={false}
              isActive={activeButton === 'left'}
              type={ButtonGroupType.SQUARE}
              text="Open"
              onClick={handleButtonLeftClick}
            />
            <ButtonGroup
              isRight={true}
              type={ButtonGroupType.SQUARE}
              isActive={activeButton === 'right'}
              text="Next"
              onClick={handleButtonRightClick}
            />
          </ButtonGroupContext>
        </div>
      )}
    </div>
  );
};

export default CardPage;
