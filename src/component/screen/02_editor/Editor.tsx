'use client';

import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';

import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

export default function Editor() {

  const { prompt, story, setStory } = useAppContext();
  const { baseEmotion, getEmotionColor } = useAppContext();
  
  const [ content, setContent ] = useState(prompt + ' ');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }

    const length = textAreaRef.current?.value.length;
    textAreaRef.current?.setSelectionRange(length ?? 0, length ?? 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setStory(e.target.value);
  }

  return (
    <textarea
      ref={textAreaRef}
      style={{
        '--selection-color': 'var(--background)',
        '--selection-background-color': getEmotionColor(baseEmotion as Emotion),
        caretColor: getEmotionColor(baseEmotion as Emotion)
      } as React.CSSProperties}
      className={clsx(
        'w-full h-9/10 p-2 rounded-lg',
        'text-lg selection:text-[var(--selection-color)]',
        'selection:bg-[var(--selection-background-color)]',
        'focus:outline-none focus:ring-0',
      )}
      value={content}
      onChange={handleChange}
      placeholder={prompt}
    />
  );
}