'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

import ForwardArrow from './ForwardArrow';
import BackArrow from './BackArrow';


interface NavButtonProps {
  dir: 'f' | 'b';
  onClick?: () => void;
  isDisabled?: boolean;
}

export default function NavButton({ dir, onClick, isDisabled }: NavButtonProps) {

  const [isHovered, setIsHovered] = useState(false);

  const { screenIndex, setScreenIndex } = useAppContext();
  const { baseEmotion, getEmotionColor } = useAppContext();

  const handleClick = () => {
    if (isDisabled) return;
    if (dir === 'f') {
      setScreenIndex((screenIndex + 1) % 7);
    } else {
      setScreenIndex((screenIndex - 1 + 7) % 7);
    }
    onClick?.();
  }

  return (
    <div 
      style={{ 
        backgroundColor: isHovered ? getEmotionColor(baseEmotion as Emotion) : 'transparent',
        color: isHovered ? 'var(--background)' : getEmotionColor(baseEmotion as Emotion)
      }}
      className={clsx(
        'cursor-pointer',
        'text-2xl px-3 py-2 rounded-full',
        isDisabled && 'opacity-50'
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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