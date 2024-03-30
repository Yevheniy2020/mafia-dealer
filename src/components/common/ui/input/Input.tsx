import React, { FC } from 'react';

interface InputProps {
  placeholder?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input: FC<InputProps> = ({
  placeholder = 'Type here!',
  isRequired = false,
  onChange,
  name,
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
      name={name}
      className={classes}
      placeholder={placeholder}
      required={isRequired}
      onChange={onChange}
    />
  );
};

export default Input;
