'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

export default function PromptScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}
      onClick={() => setScreenIndex(2)}
    >
      <div className={clsx(
        'grid grid-cols-3 gap-4'
      )}>
        Screen 2
      </div>
    </div>
  );
}