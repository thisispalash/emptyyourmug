'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import BaseName from './BaseName';
import Link from '@/component/primitive/Link';
import Footer from '@/component/primitive/Footer';

export default function IdentityScreen() {

  const { author } = useAppContext();

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col gap-8',
      'items-center justify-center'
    )}>
      
      <span className='text-2xl lowercase'>
        what should we call the author?
      </span>
      <div className='w-full flex flex-col gap-1 items-center'>
        <BaseName />
        <Link href='#'>
          <span className='text-base'>
            published before?
          </span>
        </Link>
      </div>
      <Footer dir='fb' isForwardDisabled={!author} />
    </div>
  );
}