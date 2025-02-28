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

  const { setScreenIndex, prompt, setPrompt } = useAppContext();
  const { setStory, setTitle, setAuthor } = useAppContext();

  const handleClick = () => {
    // reset all the other fields on new selection
    if (text !== prompt) {
      setPrompt(text);
      setStory('');
      setTitle('');
      setAuthor('');
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