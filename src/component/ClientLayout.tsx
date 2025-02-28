'use client';

import clsx from 'clsx';

import AppProvider, { useAppContext } from '@/context/AppContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  return (
    <AppProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </AppProvider>
  );
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {

  const { getBackgroundColor } = useAppContext();

  return (
    <main 
      style={{ backgroundColor: getBackgroundColor() }}
      className={clsx(
        'w-full h-screen p-8',
        'flex flex-col items-center justify-center gap-8'
        // 'transition-opacity duration-1000',
        // isLoading ? 'opacity-0' : 'opacity-100',
      )}
    >
      {children}
    </main>
  );
}