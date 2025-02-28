'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import Prompt from './Prompt';
import Footer from '@/component/primitive/Footer';

export default function PromptScreen() {

  const { getPromptGrid, setBaseEmotion } = useAppContext();

  const { left, stack, right } = getPromptGrid();

  return (
    <div className={clsx(
      'h-full w-full py-16',
      'flex flex-col gap-8',
      'text-foreground/80'
    )}>
      <div className={clsx(
        'grid grid-cols-3 gap-8',
        'flex-grow'
      )}>
        <div className={clsx(
          'flex items-center justify-center',
          'h-full'
        )}>
          <Prompt text={left.text} color={left.color} />
        </div>
        
        <div className={clsx(
          'flex flex-col',
          'h-full'
        )}>
          {stack.map((item, index) => (
            <div key={index} className={clsx(
              'flex items-center justify-center',
              'h-1/3'
            )}>
              <Prompt text={item.text} color={item.color} />
            </div>
          ))}
        </div>
        
        <div className={clsx(
          'flex items-center justify-center',
          'h-full'
        )}>
          <Prompt text={right.text} color={right.color} />
        </div>
      </div>
      <Footer dir='b' onBack={() => setBaseEmotion('')} />
    </div>
  );
}