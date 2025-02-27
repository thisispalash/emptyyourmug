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

  const { getEmotionColor, setBaseEmotion, setScreenIndex } = useAppContext();

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
        'hover:scale-110 transition-all duration-300 ease-in-out'
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      &nbsp;
    </div>
  );
}
