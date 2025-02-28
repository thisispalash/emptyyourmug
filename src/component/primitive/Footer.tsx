'use client';

import clsx from 'clsx';

import NavButton from './nav/base';

interface FooterProps {
  dir: 'f' | 'b' | 'fb' | '';
  onBack?: () => void;
  onForward?: () => void;
  isBackDisabled?: boolean;
  isForwardDisabled?: boolean;
}

export default function Footer({ dir, onBack, onForward, isBackDisabled, isForwardDisabled }: FooterProps) {
  return (
    <div className={clsx(
      'px-6 py-2 w-full h-auto',
      'fixed bottom-0 left-0 right-0',
      'flex flex-row items-center justify-between'
    )}>
      {dir.includes('b') && <NavButton dir='b' onClick={onBack} isDisabled={isBackDisabled} />}
      {dir.includes('f') && <NavButton dir='f' onClick={onForward} isDisabled={isForwardDisabled} />}
    </div>
  );
}