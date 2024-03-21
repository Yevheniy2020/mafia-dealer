import React, { FC } from 'react';

interface HamburgerProps {
  isActive?: boolean;
  onClick?: () => void;
}

enum HamburgerActive {
  WHITE = 'dark:bg-white bg-dark',
  GOLD = 'bg-gold',
}

const Hamburger: FC<HamburgerProps> = ({ isActive = false, onClick }) => {
  const classes = `
  block 
  h-0.5 
  w-5 
  rounded
  ${isActive ? HamburgerActive.GOLD : HamburgerActive.WHITE} 
  `;
  return (
    <div onClick={onClick} className="flex flex-col gap-1 cursor-pointer">
      <span className={classes}></span>
      <span className={classes}></span>
      <span className={classes}></span>
    </div>
  );
};

export default Hamburger;
