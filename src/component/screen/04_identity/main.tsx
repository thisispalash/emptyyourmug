'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Footer from '@/component/primitive/Footer';
import BaseName from './BaseName';

export default function IdentityScreen() {

  const { setAuthor, author } = useAppContext();

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col gap-8',
      'items-center justify-center'
    )}>
      
      <span className='text-2xl lowercase'>
        what should we call the author?
      </span>
      <BaseName />
      <Footer dir='fb' onBack={() => setAuthor('')} isForwardDisabled={!author} />
    </div>
  );
}