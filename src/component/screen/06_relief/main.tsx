'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

export default function ReliefScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}
      onClick={() => setScreenIndex(7)}
    >
      <input type='range' min={0} max={100} />
    </div>
  );
}