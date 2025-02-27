'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

export default function IdentityScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}
      onClick={() => setScreenIndex(5)}
    >
      <input type='text' placeholder='Screen 5' />
    </div>
  );
}