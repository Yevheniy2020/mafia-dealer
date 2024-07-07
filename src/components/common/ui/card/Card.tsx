import React, { FC } from 'react';
import Image from 'next/image';

interface CardProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  rounded?: string;
  id?: string;
}

const Card: FC<CardProps> = ({
  src = '/images/cards/test.jpg',
  width = 330,
  height = 206,
  alt = 'Beautiful picture!',
  rounded = 'rounded-lg',
  id,
}) => {
  const classes = `
    absolute 
    top-0
    left-0 
    w-full  
    h-full
    bg-dark 
    bg-opacity-80 
    ${rounded}
  `;
  return (
    <div className={`relative max-w-fit overflow-hidden ${rounded}`}>
      <Image
        id={id}
        className={rounded}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
      <div className={classes}></div>
    </div>
  );
};

export default Card;
