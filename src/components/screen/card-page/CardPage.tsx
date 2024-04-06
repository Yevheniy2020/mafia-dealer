'use client';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import ButtonGroup from '@/components/common/ui/button-group';
import ButtonGroupContext from '@/components/common/ui/button-group/components';
import { ButtonGroupType } from '@/components/common/ui/button-group/types';
import Card from '@/components/common/ui/card';
import calculateMafiaRoles from '@/components/screen/card-page/util/calculateMafiaRoles';
import generateRandomRoles from '@/components/screen/card-page/util/generateRandomRoles';
import { useRouter } from '@/navigation';

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

enum TypeNoRoleCard {
  DEFAULT = 'default',
  FINISH = 'finish',
}

const CardPage: FC = () => {
  const t = useTranslations('CardPage');
  const router = useRouter();
  const { settingsValue } = useSettingsContext();
  const [rolesList, setRolesList] = useState<string[]>(['']);
  const [activeButton, setActiveButton] = useState('');
  const [counterRolesList, setCounterRolesList] = useState(0);
  const [currentType, setCurrentType] = useState(TypeNoRoleCard.DEFAULT);
  const [isFinish, setIsFinish] = useState(false);

  const CardsTitle = useMemo(
    () => ({
      default: '?',
      mafia: t('mafia'),
      sherif: t('sherif'),
      doctor: t('doctor'),
      civilian: t('civilian'),
      maniac: t('maniac'),
      courtesan: t('courtesan'),
      finish: t('finish'),
    }),
    [t],
  );

  useEffect(() => {
    !rolesList.length && router.push('/settings');
  }, [rolesList, router]);

  useEffect(() => {
    'players' in settingsValue
      ? setRolesList(
          generateRandomRoles(calculateMafiaRoles(settingsValue['players'])),
        )
      : setRolesList(generateRandomRoles(settingsValue));
  }, [settingsValue]);
  const handleButtonLeftClick = () => {
    setCurrentType(rolesList[counterRolesList] as TypeNoRoleCard);
    setIsFinish(rolesList.length === counterRolesList);
    setActiveButton('left');
  };

  const handleButtonRightClick = () => {
    setActiveButton('right');
    setCounterRolesList(prevState => prevState + 1);
    setCurrentType(TypeNoRoleCard.DEFAULT);
  };
  return (
    <div className="p-15 bg-white dark:bg-dark h-fullVH flex flex-col justify-center ">
      <div className="relative">
        <div className="absolute top-3 right-3 text-white ">
          {counterRolesList} / {rolesList.length}
        </div>
        {!isFinish ? (
          currentType === TypeNoRoleCard.DEFAULT ? (
            <div className="">
              <div className="w-full h-330 bg-blueDark rounded-lg"></div>
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white text-9xl leading-none ">
                {CardsTitle[currentType]}
              </h1>
            </div>
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
              src={CardsImages[TypeNoRoleCard.FINISH]}
              width={330}
              height={330}
              alt="The role"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-40 text-center leading-none">
              {CardsTitle[TypeNoRoleCard.FINISH]}
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
              text={t('buttonContent1')}
              onClick={handleButtonLeftClick}
            />
            <ButtonGroup
              isRight={true}
              type={ButtonGroupType.SQUARE}
              isActive={activeButton === 'right'}
              text={t('buttonContent2')}
              onClick={handleButtonRightClick}
            />
          </ButtonGroupContext>
        </div>
      )}
    </div>
  );
};

export default CardPage;
