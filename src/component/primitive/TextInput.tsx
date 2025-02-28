'use client';

import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';


import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function TextInput({ value, onChange, className }: TextInputProps) {

  const { baseEmotion, getEmotionColor } = useAppContext();

  const [ content, setContent ] = useState(value ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <input 
      ref={inputRef}
      type='text' 
      value={content} 
      onChange={handleChange} 
      style={{
        '--selection-color': 'var(--background)',
        '--selection-background-color': getEmotionColor(baseEmotion as Emotion),
        caretColor: getEmotionColor(baseEmotion as Emotion),
        borderColor: getEmotionColor(baseEmotion as Emotion),
      } as React.CSSProperties}
      className={clsx(
        'w-3/5 h-auto px-3 md:px-4 py-2',
        'border-1 md:border-2 rounded-lg',
        'text-lg md:text-2xl selection:text-[var(--selection-color)]',
        'selection:bg-[var(--selection-background-color)]',
        'focus:outline-none focus:ring-0',
        className,
      )}
    />
  );
}