import React, { FC } from 'react';
import Image from 'next/image';

interface CardProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  rounded?: string;
}

const Card: FC<CardProps> = ({
  src = '/images/cards/test.jpg',
  width = 330,
  height = 206,
  alt = 'Beatiful picture',
  rounded = 'rounded-lg',
}) => {
  return (
    <div className={`relative max-w-fit`}>
      <Image src={src} width={width} height={height} alt={alt} />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 ${rounded}`}
      ></div>
    </div>
  );
};

export default Card;
