'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Editor from './Editor';
import Footer from '@/component/primitive/Footer';

export default function PromptScreen() {

  const { setScreenIndex, story } = useAppContext();

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col gap-8'
    )}>
      <Editor />
      <Footer dir='fb' onBack={() => setScreenIndex(1)} onForward={() => setScreenIndex(3)} />
    </div>
  );
}