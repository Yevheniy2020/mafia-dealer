import React, { FC } from 'react';

interface InputProps {
  placeholder?: string;
  isRequired?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder = 'Type here',
  isRequired = false,
}) => {
  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export default Input;
