import React, { FC } from 'react';

import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';

interface ButtonProps {
  text?: string;
  type?: ButtonType;
  color?: ButtonColor;
  onClick?: () => void;
  typeSend?: 'button' | 'submit';
  style?: string;
}

const Button: FC<ButtonProps> = ({
  text = 'Hover me',
  type = ButtonType.SQUARE,
  color = ButtonColor.WHITE,
  onClick,
  typeSend = 'button',
  style = '',
  ...rest
}) => {
  const textColor = ButtonColor.WHITE === color ? `text-black` : ``;
  return (
    <button
      className={`group relative h-8 overflow-hidden ${type} ${color} px-2.5 text-neutral-50 transition ${style}`}
      type={typeSend}
      onClick={onClick}
      {...rest}
    >
      <span className={`${textColor} text-xs leading-loose`}>{text}</span>
    </button>
  );
};

export default Button;
