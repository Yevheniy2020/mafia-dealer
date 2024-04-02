'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Hamburger from '@/components/common/layout/header/components/Hamburger';
import Line from '@/components/common/ui/line';
import SubLink from '@/components/common/ui/link';
import Switcher from '@/components/common/ui/switcher';

const Header: FC = () => {
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActiveHamburger(false);
  }, [pathname]);

  return (
    <div
      className="
       relative
       w-full
       pb-2.5
       pt-2.5
       pl-15
       pr-15
       bg-lightGray
       dark:bg-blueDark
       flex
       justify-between
       items-center"
    >
      <div className="flex items-center gap-1">
        <Image
          className="hidden dark:block"
          src={'/logo-svg/white-logo.svg'}
          width={20}
          height={20}
          alt={'Logo'}
        />
        <Image
          className="dark:hidden "
          src={'/logo-svg/black-logo.svg'}
          width={20}
          height={20}
          alt={'Logo'}
        />
        <span className="text-xl text-dark dark:text-white">Mafia Dealer</span>
      </div>
      <div className="flex gap-5 items-center">
        <Switcher />
        <Hamburger
          onClick={() => {
            setIsActiveHamburger(!isActiveHamburger);
          }}
          isActive={isActiveHamburger}
        />
      </div>
      {isActiveHamburger && (
        <span
          className="absolute
        top-12
        left-0
        w-360
        h-56
        bg-white
        dark:bg-blueDark
        flex
        flex-col
        gap-1.5
        z-40"
        >
          <SubLink text="Home" style="pl-7 mt-3" href={`/`} />
          <Line style="w-80 ml-4" />
          <SubLink href={`/settings`} text="Play" style="pl-7" />
          <Line style="w-80 ml-4" />
          <SubLink
            href={`/instruction`}
            text="Read the instruction"
            style="pl-7"
          />
          <Line style="w-80 ml-4" />
          <SubLink text="Localization" style="pl-7" href={`/localization`} />
          <Line style="w-80 ml-4" />
          <SubLink href="/not-ready" text="About roles" style="pl-7" />
          <Line style="w-80 ml-4" />
        </span>
      )}
    </div>
  );
};

export default Header;
