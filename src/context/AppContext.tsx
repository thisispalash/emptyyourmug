'use client';

import { createContext, useContext, useState } from 'react';

interface AppContextType {
  screenIndex: number;
  setScreenIndex: (index: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [ screenIndex, setScreenIndex ] = useState(0);

  return (
    <AppContext.Provider value={{ 
      screenIndex, 
      setScreenIndex 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}