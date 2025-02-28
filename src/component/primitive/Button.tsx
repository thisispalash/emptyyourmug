'use client';

import clsx from 'clsx';

import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {

  const { baseEmotion, getEmotionColor } = useAppContext();

  return (
    <button
      onClick={onClick}
      style={{
        borderColor: getEmotionColor(baseEmotion as Emotion),
        '--hover-bg': getEmotionColor(baseEmotion as Emotion),
        '--hover-color': 'var(--background)',
      } as React.CSSProperties}
      className={clsx(
        'px-3 md:px-6 py-2 cursor-pointer',
        'text-lg md:text-2xl',
        'border-1 md:border-2 rounded-lg',
        'hover:bg-[var(--hover-bg)] hover:text-[var(--hover-color)]',
        className,
      )}
    >
      {children}
    </button>
  );
}