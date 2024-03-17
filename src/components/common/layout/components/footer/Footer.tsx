import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Line from '@/components/common/ui/line';

const Footer: FC = () => {
  return (
    <div className="w-full pt-2 pb-2 pl-5 pr-5 bg-lightGray">
      <Link
        className="flex flex-col items-end pb-2"
        href="https://github.com/Yevheniy2020"
      >
        <Image
          src="/footer/github.svg"
          height={24}
          width={24}
          alt="GitHub"
        ></Image>
      </Link>
      <Line style="w-full" />
      <span className="flex flex-col items-center pt-2 text-xs text-dark">
        By Yevhenii Mynenko
      </span>
    </div>
  );
};

export default Footer;
