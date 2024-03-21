import React, { FC } from 'react';

const Line: FC<{ style?: string }> = ({ style }) => {
  return <div className={`h-1px dark:bg-gray bg-dark ${style}`}></div>;
};

export default Line;
