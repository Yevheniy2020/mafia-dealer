import React, { FC } from 'react';

interface InputProps {
  placeholder?: string;
  isRequired?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder = 'Type here!',
  isRequired = false,
}) => {
  const classes = `
    border 
    text-gray 
    text-xs 
    rounded-lg
    block 
    w-full 
    p-2.5
  `;
  return (
    <input
      type="text"
      className={classes}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export default Input;
