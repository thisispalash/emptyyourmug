'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

interface PromptProps {
  text: string;
  color: string;
  emotion: string;
}

export default function Prompt({ text, color, emotion }: PromptProps) {
  
  const [isHovered, setIsHovered] = useState(false);

  const { setScreenIndex, prompt, setPrompt, setSelectedEmotion, resetAll } = useAppContext();

  const handleClick = () => {
    // reset all the other fields on new selection
    if (text !== prompt) {
      resetAll();
      setPrompt(text);
      setSelectedEmotion(emotion as Emotion);
    }
    setScreenIndex(2);
  }
  
  return (
    <p 
      style={{ color: isHovered ? color : 'inherit' }}
      className={clsx(
        'w-full px-4 cursor-pointer',
        'text-lg text-foreground/80',
        'md:text-2xl md:text-center',
        'transition-colors duration-200',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </p>
  );
}