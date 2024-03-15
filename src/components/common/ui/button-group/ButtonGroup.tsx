import React, { FC } from 'react';

import { ButtonGroupType } from '@/components/common/ui/button-group/types';

interface ButtonGroupProps {
  text?: string;
  onClick?: () => void;
  typeSend?: 'button' | 'submit';
  style?: string;
  type?: ButtonGroupType;
  isActive?: boolean;
  isRight: boolean;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
  text = 'Hello1',
  onClick,
  typeSend = 'button',
  type = ButtonGroupType.CIRCLE,
  style = '',
  isActive = false,
  isRight,
  ...rest
}) => {
  const buttonClass = (() => {
    switch (type) {
      case ButtonGroupType.CIRCLE:
        return isRight ? 'text-xs rounded-e-lg' : type;
      default:
        return type;
    }
  })();

  const activeClass = isActive ? 'bg-amber-400' : 'bg-gray-800';
  const baseClass = `px-6 py-3 leading-loose text-white focus:z-10 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${style}`;
  return (
    <button
      type={typeSend}
      onClick={onClick}
      className={`${baseClass} ${buttonClass} ${activeClass}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default ButtonGroup;
