'use client';
import React, { FC, useEffect, useState } from 'react';

import DarkIcon from '@/components/common/icons/theme/DarkIcon';
import LightIcon from '@/components/common/icons/theme/LightIcon';

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

const Switcher: FC = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // Update the theme in local storage
  const handleThemeChange = (isChecked: boolean) => {
    const newTheme = isChecked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        checked={theme === 'dark'}
        type="checkbox"
        className="sr-only peer"
        onChange={e => handleThemeChange(e.target.checked)}
      />
      <div className={switcherClasses}>
        <span
          className={'absolute inset-0 flex justify-end items-center z-10 pr-2'}
        >
          <DarkIcon isDark={theme === 'dark'} />
        </span>
        <span className={'absolute inset-0 flex items-center z-10 pl-2'}>
          <LightIcon isDark={theme === 'dark'} />
        </span>
      </div>
    </label>
  );
};

export default Switcher;
