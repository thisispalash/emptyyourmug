'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';
import Footer from '@/component/primitive/Footer';

export default function ReliefScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}>
      <input type='range' min={0} max={100} />
      <Footer />
    </div>
  );
}