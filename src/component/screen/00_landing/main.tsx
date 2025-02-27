'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';
import Footer from '@/component/primitive/Footer';

export default function LandingScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8 cursor-pointer'
    )}>
      <div className={clsx(
        'grid grid-cols-4 gap-4'
      )}>
        Screen 1
      </div>
      <Footer />
    </div>
  );
}