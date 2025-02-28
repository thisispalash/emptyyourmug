'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Button from '@/component/primitive/Button';
import Footer from '@/component/primitive/Footer';

export default function PublishScreen() {

  const { author, setScreenIndex } = useAppContext();

  const message = `welcome to the network ${author}!`;

  const handleSubmit = () => {
    setScreenIndex(6);
  }

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col gap-8',
      'items-center justify-center'
    )}>
      <div className='flex flex-col gap-2 items-center'>
        <span className='text-2xl lowercase'>
          {message}
        </span>
        <span className='text-2xl lowercase'>
          pour the mug?
        </span>
      </div>
      <Button onClick={handleSubmit}>
        pour my mug!
      </Button>
      
      <Footer dir='b' />
    </div>
  );
}