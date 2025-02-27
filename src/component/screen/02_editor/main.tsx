'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

export default function PromptScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}
      onClick={() => setScreenIndex(3)}
    >
      <textarea placeholder='Screen 3' />
    </div>
  );
}