'use client';
import React, { FC } from 'react';

import DarkIcon from '@/components/common/icons/theme/DarkIcon';
import LightIcon from '@/components/common/icons/theme/LightIcon';

interface SwitcherProps {
  onChange?: () => void;
  isActive?: boolean;
  isDark?: boolean;
}

const Switcher: FC<SwitcherProps> = ({ onChange, isActive, isDark = true }) => {
  const switcherClasses = `
  relative 
  w-14 
  h-7 
  bg-white
  dark:bg-dark
  rounded-md
  peer-checked:after:translate-x-full 
  peer-checked:after:border-white 
  dark:peer-checked:after:border-dark 
  after:content-[''] 
  after:absolute 
  after:top-0.5
  after:start-[4.2px] 
  after:bg-gold
  after:rounded-md
  after:h-6 after:w-6 
  after:transition-all 
  peer-checked:bg-white
  dark:peer-checked:bg-dark
  `;
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isActive}
        onChange={onChange}
      />
      <div className={switcherClasses}>
        <span
          className={'absolute inset-0 flex justify-end items-center z-10 pr-2'}
        >
          <DarkIcon isDark={isDark} />
        </span>
        <span className={'absolute inset-0 flex  items-center z-10 pl-2'}>
          <LightIcon isDark={isDark} />
        </span>
      </div>
    </label>
  );
};

export default Switcher;
