'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';
import Footer from '@/component/primitive/Footer';

export default function PublishScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}>
      <input type='text' placeholder='Screen 6' />
      <Footer />
    </div>
  );
}