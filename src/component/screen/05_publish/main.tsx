'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

export default function PublishScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}
      onClick={() => setScreenIndex(6)}
    >
      <input type='text' placeholder='Screen 6' />
    </div>
  );
}