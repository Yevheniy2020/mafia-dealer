import React, { FC } from 'react';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';

const ButtonPage: FC = () => {
  return (
    <>
      <Button type={ButtonType.CIRCLE} color={ButtonColor.WHITE} />
      <br />
      <Button type={ButtonType.SQUARE} color={ButtonColor.BLUE} />
      <br />
      <Button />
    </>
  );
};

export default ButtonPage;
