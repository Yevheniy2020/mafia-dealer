import React, { FC } from 'react';

interface HamburgerProps {
  isActive?: boolean;
}

enum HamburgerActive {
  WHITE = 'bg-white',
  GOLD = 'bg-amber-400',
}

const Hamburger: FC<HamburgerProps> = ({ isActive = true }) => {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <span
        className={`block h-0.5 w-5 ${isActive ? HamburgerActive.GOLD : HamburgerActive.WHITE} rounded`}
      ></span>
      <span
        className={`block h-0.5 w-5 ${isActive ? HamburgerActive.GOLD : HamburgerActive.WHITE} rounded `}
      ></span>{' '}
      <span
        className={`block h-0.5 w-5 ${isActive ? HamburgerActive.GOLD : HamburgerActive.WHITE} rounded `}
      ></span>
    </div>
  );
};

export default Hamburger;
