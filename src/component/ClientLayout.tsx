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
        'flex flex-col items-center justify-center gap-8',
        'transition-all duration-500',
        // isLoading ? 'opacity-0' : 'opacity-100',
      )}
    >
      <div className={clsx(
        'w-full h-full',
        'flex flex-col items-center justify-center gap-8',
        'transition-opacity duration-500',
        // isLoading ? 'opacity-0' : 'opacity-100',
      )}>
        {children}
      </div>
    </main>
  );
}