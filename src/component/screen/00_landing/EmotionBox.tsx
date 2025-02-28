'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { BaseEmotion } from '@/lib/types';
import { useAppContext } from '@/context/AppContext';

interface EmotionBoxProps {
  emotion: BaseEmotion;
}

export default function EmotionBox({ emotion }: EmotionBoxProps) {

  const [ isHovered, setIsHovered ] = useState(false);

  const { getEmotionColor, setBaseEmotion, setScreenIndex, getEmoji } = useAppContext();

  const handleClick= () => {
    setBaseEmotion(emotion);
    setScreenIndex(1);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div 
      style={{ backgroundColor: getEmotionColor(emotion) }}
      className={clsx(
        'p-2 h-24 w-24 rounded-md cursor-pointer',
        'flex items-center justify-center',
        'hover:scale-110 transition-all duration-300 ease-in-out'
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='hidden md:flex items-center justify-center'>
        {isHovered ? 
          <span className='text-2xl text-background/50'>{getEmoji(emotion)}</span> 
          : <span>&nbsp;</span>
        }
      </div>
      <span className='text-xl text-background/50 md:hidden'>{getEmoji(emotion)}</span>
    </div>
  );
}
