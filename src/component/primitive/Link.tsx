'use client';

import clsx from 'clsx';

import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Link({ href, children, onClick, className }: LinkProps) {

  const { baseEmotion, getEmotionColor } = useAppContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === '#') {
      e.preventDefault();
    }
    onClick?.();
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        '--hover-color': getEmotionColor(baseEmotion as Emotion),
      } as React.CSSProperties}
      className={clsx(
        'hover:scale-105 transition-all duration-300',
        'hover:text-[var(--hover-color)]',
        className,
      )}
    >
      {children}
    </a>
  );
}