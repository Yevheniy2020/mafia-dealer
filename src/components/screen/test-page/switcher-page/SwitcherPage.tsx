'use client';
import React, { FC, useState } from 'react';

import Switcher from '@/components/common/ui/switcher';

const SwitcherPage: FC = () => {
  const [activeSwitcher, setActiveSwitcher] = useState(false);
  const handleClickSwitcher = (current: boolean) => {
    setActiveSwitcher(current);
  };
  return (
    <Switcher
      isActive={activeSwitcher}
      onChange={() => {
        handleClickSwitcher(!activeSwitcher);
      }}
    />
  );
};

export default SwitcherPage;
