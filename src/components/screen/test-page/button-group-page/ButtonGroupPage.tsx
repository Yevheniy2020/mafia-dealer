'use client';
import { FC, useState } from 'react';

import ButtonGroup from '@/components/common/ui/button-group';
import ButtonGroupContext from '@/components/common/ui/button-group/components';
import { ButtonGroupType } from '@/components/common/ui/button-group/types';

const ButtonGroupPage: FC = () => {
  const [activeButton, setActiveButton] = useState('left');
  const handleButtonClick = (direction: string) => {
    setActiveButton(direction);
  };
  return (
    <>
      <ButtonGroupContext>
        <ButtonGroup
          isRight={false}
          isActive={activeButton === 'left'}
          onClick={() => handleButtonClick('left')}
        />
        <ButtonGroup
          isRight={true}
          isActive={activeButton === 'right'}
          onClick={() => handleButtonClick('right')}
        />
      </ButtonGroupContext>
      <ButtonGroupContext>
        <ButtonGroup
          isRight={false}
          type={ButtonGroupType.SQUARE}
          isActive={activeButton === 'left'}
          onClick={() => handleButtonClick('left')}
        />
        <ButtonGroup
          isRight={true}
          type={ButtonGroupType.SQUARE}
          isActive={activeButton === 'right'}
          onClick={() => handleButtonClick('right')}
        />
      </ButtonGroupContext>
    </>
  );
};

export default ButtonGroupPage;
