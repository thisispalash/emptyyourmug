'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Footer from '@/component/primitive/Footer';

export default function PromptScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}>
      <div className={clsx(
        'grid grid-cols-3 gap-4'
      )}>
        Screen 2
      </div>
      <Footer />
    </div>
  );
}