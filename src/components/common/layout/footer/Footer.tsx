import React, { FC } from 'react';
import Link from 'next/link';

import GithubIcon from '@/components/common/icons/footer/GithubIcon';
import Line from '@/components/common/ui/line';

const Footer: FC = () => {
  return (
    <div className="w-full pt-2 pb-2 pl-15 pr-15 bg-lightGray dark:bg-blueDark">
      <Link
        className="flex flex-col items-end pb-2"
        href="https://github.com/Yevheniy2020"
      >
        <GithubIcon />
      </Link>
      <Line style="w-full" />
      <span className="flex flex-col items-center pt-2 text-xs text-dark dark:text-white">
        By Yevhenii Mynenko
      </span>
    </div>
  );
};

export default Footer;
