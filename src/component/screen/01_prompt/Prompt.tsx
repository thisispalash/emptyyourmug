'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { useAppContext } from '@/context/AppContext';

interface PromptProps {
  text: string;
  color: string;
}

export default function Prompt({ text, color }: PromptProps) {
  
  const [isHovered, setIsHovered] = useState(false);

  const { setScreenIndex, setPrompt } = useAppContext();

  const handleClick = () => {
    setPrompt(text);
    setScreenIndex(2);
  }
  
  return (
    <p 
      style={{ color: isHovered ? color : 'inherit' }}
      className={clsx(
        'w-full px-4 cursor-pointer',
        'text-center text-2xl',
        'transition-colors duration-200'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </p>
  );
}