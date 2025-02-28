'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Footer from '@/component/primitive/Footer';
import Title from './Title';

export default function TitleScreen() {

  const { setStory } = useAppContext();

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col gap-8',
      'items-center justify-center'
    )}>
      
      <span className='text-2xl lowercase'>
        what would you like to call your story?
      </span>
      <Title />
      <Footer dir='fb' onBack={() => setStory('')} />
    </div>
  );
}