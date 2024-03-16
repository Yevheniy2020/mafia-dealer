import React, { FC } from 'react';

interface HamburgerProps {
  isActive?: boolean;
}

enum HamburgerActive {
  WHITE = 'bg-white',
  GOLD = 'bg-gold',
}

const Hamburger: FC<HamburgerProps> = ({ isActive = false }) => {
  const classes = `
  block 
  h-0.5 
  w-5 
  rounded
  ${isActive ? HamburgerActive.GOLD : HamburgerActive.WHITE} 
  `;
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <span className={classes}></span>
      <span className={classes}></span>
      <span className={classes}></span>
    </div>
  );
};

export default Hamburger;
