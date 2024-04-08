import React from 'react';

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

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  text = 'Hello1',
  onClick,
  typeSend = 'button',
  type = ButtonGroupType.CIRCLE,
  style = '',
  isActive = false,
  isRight,
  ...rest
}) => {
  const buttonClass =
    type === ButtonGroupType.CIRCLE && isRight ? 'rounded-e-lg' : type;

  const classes = `
    ${type === ButtonGroupType.CIRCLE ? 'px-15 py-12' : 'px-25 py-12'} 
    leading-loose 
    text-white 
    focus:z-10 
    focus:text-white 
    ${isActive ? 'bg-gold' : 'bg-blueDark'} 
    ${buttonClass} 
    ${style}
  `;

  return (
    <button type={typeSend} onClick={onClick} className={classes} {...rest}>
      {text}
    </button>
  );
};

export default ButtonGroup;
