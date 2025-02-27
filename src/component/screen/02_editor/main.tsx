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
      <textarea placeholder='Screen 3' />
      <Footer />
    </div>
  );
}