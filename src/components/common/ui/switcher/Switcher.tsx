'use client';
import React, { FC } from 'react';

import DarkIcon from '@/components/common/icons/theme/DarkIcon';
import LightIcon from '@/components/common/icons/theme/LightIcon';

interface SwitcherProps {
  onChange?: () => void;
  isActive?: boolean;
}

const Switcher: FC<SwitcherProps> = ({ onChange, isActive }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isActive}
        onChange={onChange}
      />
      <div
        className="relative w-14 h-7 bg-slate-950 rounded-md dark:peer-focus:ring-slate-950 peer dark:bg-gray-700
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
      peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5
      after:start-[3.7px] after:bg-amber-400 after:rounded-md
      after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-slate-950"
      >
        <span
          className={'absolute inset-0 flex justify-end items-center z-10 pr-2'}
        >
          <DarkIcon />
        </span>
        <span className={'absolute inset-0 flex  items-center z-10 pl-2'}>
          <LightIcon />
        </span>
      </div>
    </label>
  );
};

export default Switcher;
