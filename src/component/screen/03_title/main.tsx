'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Footer from '@/component/primitive/Footer';

export default function TitleScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}>
      <input type='text' placeholder='Screen 4' />
      <Footer />
    </div>
  );
}