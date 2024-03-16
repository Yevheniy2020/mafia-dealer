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
  const buttonClasses = `
    group 
    relative 
    h-8 
    overflow-hidden 
    px-10 
    text-neutral-50 
    transition 
    ${type} 
    ${color} 
    ${style}
  `;
  const textClasses = `
  ${textColor} 
  text-xs 
  leading-loose
  `;
  return (
    <button
      className={buttonClasses}
      type={typeSend}
      onClick={onClick}
      {...rest}
    >
      <span className={textClasses}>{text}</span>
    </button>
  );
};

export default Button;
