import React, { FC } from 'react';

enum ButtonColor {
  WHITE = 'bg-white',
  BLUE = 'bg-blue-500',
}

enum ButtonType {
  SQUARE = 'rounded-md',
  CIRCLE = 'rounded-3xl',
}

interface ButtonProps {
  text?: string;
  type?: ButtonType;
  color?: ButtonColor;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text = 'Hover me',
  type = ButtonType.SQUARE,
  color = ButtonColor.WHITE,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`group relative h-12 overflow-hidden ${type} ${color} px-2.5 text-neutral-50 transition`}
      {...rest}
    >
      <span className={ButtonColor.WHITE === color ? `text-black` : ``}>
        {text}
      </span>
      <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
    </button>
  );
};

export default Button;
