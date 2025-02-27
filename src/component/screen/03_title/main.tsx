'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

export default function TitleScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}
      onClick={() => setScreenIndex(4)}
    >
      <input type='text' placeholder='Screen 4' />
    </div>
  );
}