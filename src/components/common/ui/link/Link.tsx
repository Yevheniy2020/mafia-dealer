import React, { FC } from 'react';
import Link from 'next/link';

interface SubLinkProps {
  text: string;
  href: string;
  style?: string;
}

const SubLink: FC<SubLinkProps> = ({ text = 'Hello', href = '#', style }) => {
  return (
    <Link
      className={`text-base text-dark dark:text-white ${style}`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default SubLink;
