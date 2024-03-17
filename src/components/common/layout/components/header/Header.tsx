import React, { FC } from 'react';
import Image from 'next/image';

import Hamburger from '@/components/common/layout/components/header/components/Hamburger';
import Switcher from '@/components/common/ui/switcher';

const Header: FC = () => {
  return (
    <div
      className="w-full
     p-2.5
     bg-blueDark
     flex
     justify-between
     items-center"
    >
      <div className="flex items-center gap-1">
        <Image
          src={'/logo-svg/white-logo.svg'}
          width={20}
          height={20}
          alt={'Logo'}
        />
        <span className="text-xl text-white">Mafia Dealer</span>
      </div>
      <div className="flex gap-5 items-center">
        <Switcher />
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
