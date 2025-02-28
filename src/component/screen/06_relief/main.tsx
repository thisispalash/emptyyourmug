'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Link from '@/component/primitive/Link';
import RangeInput from '@/component/primitive/RangeInput';

export default function ReliefScreen() {

  const { setScreenIndex } = useAppContext();

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col gap-8',
      'items-center justify-center'
    )}>
      <span className='text-2xl lowercase'>Phew! Your mug is not empty!</span>

      <div className='w-full flex flex-col gap-4 items-center'>
        <span className='text-2xl lowercase'>How relieved do you feel?</span>
        <RangeInput />
      </div>
      
      <div className='w-full flex flex-row gap-8 items-center justify-center'>
        <Link href='#' onClick={() => setScreenIndex(0)}>
          <span className='text-base lowercase'>pour another?</span>
        </Link>
        <Link href='#' onClick={() => {}}>
          <span className='text-base lowercase'>view profile</span>
        </Link>
      </div>
    </div>
  );
}