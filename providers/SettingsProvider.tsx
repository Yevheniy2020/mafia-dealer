'use client';
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

export interface SettingsValueAutomatic {
  players: number;
}

export interface SettingsValueManual {
  mafia?: number;
  sheriff?: number;
  doctors?: number;
  courtesans?: number;
  maniacs?: number;
  civilians?: number;
}

type SettingsContextType = {
  settingsValue: SettingsValueAutomatic | SettingsValueManual;
  setSettingsValue: React.Dispatch<
    React.SetStateAction<SettingsValueAutomatic | SettingsValueManual>
  >;
};

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
}

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [settingsValue, setSettingsValue] = useState<
    SettingsValueAutomatic | SettingsValueManual
  >({ mafia: 0 });
  const value = { settingsValue, setSettingsValue };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
