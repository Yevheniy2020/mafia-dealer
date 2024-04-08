'use client';
import React, { FC } from 'react';

import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import { useRouter } from '@/navigation';

interface ButtonProps {
  text?: string;
  type?: ButtonType;
  color?: ButtonColor;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sendLink?: string;
  typeSend?: 'button' | 'submit';
  style?: string;
}

const Button: FC<ButtonProps> = ({
  text = 'Hover me',
  type = ButtonType.SQUARE,
  color = ButtonColor.WHITE,
  onClick,
  sendLink = '',
  typeSend = 'button',
  style = '',
  ...rest
}) => {
  const router = useRouter();
  const textColor = ButtonColor.WHITE === color ? `text-black` : ``;
  const buttonClasses = `
    group 
    relative 
    h-9 
    overflow-hidden 
    px-12 
    text-neutral-50 
    transition 
    ${type} 
    ${color} 
    ${style}
  `;
  const textClasses = `
  ${textColor} 
  text-base
  leading-loose
  `;
  return (
    <button
      className={buttonClasses}
      type={typeSend}
      onClick={
        typeSend != 'button'
          ? onClick
          : () => {
              router.push(sendLink);
            }
      }
      {...rest}
    >
      <span className={textClasses}>{text}</span>
    </button>
  );
};

// router.push('/settings');
export default Button;
