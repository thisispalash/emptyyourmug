'use client';

import clsx from 'clsx';

import { useAppContext } from '@/context/AppContext';

import ForwardArrow from './ForwardArrow';
import BackArrow from './BackArrow';

export default function NavButton({ dir }: { dir: 'f' | 'b'}) {

  const { screenIndex, setScreenIndex } = useAppContext();

  const handleClick = () => {
    console.log('clicked');
    if (dir === 'f') {
      setScreenIndex((screenIndex + 1) % 7);
    } else {
      setScreenIndex((screenIndex - 1 + 7) % 7);
    }
  }

  return (
    <div 
      className={clsx(
        'cursor-pointer',
        'text-2xl p-3 rounded-full',
        'hover:border hover:border-foreground',
      )}
      onClick={handleClick}
    >
      {
        {
          'f': <ForwardArrow />,
          'b': <BackArrow />
        }[dir]
      }
    </div>
  );
}