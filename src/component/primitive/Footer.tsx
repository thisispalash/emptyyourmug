'use client';

import clsx from 'clsx';

import NavButton from './nav/base';

export default function Footer() {
  return (
    <div className={clsx(
      'px-6 py-2 w-full h-auto',
      'fixed bottom-0 left-0 right-0',
      'flex flex-row items-center justify-between'
    )}>
      <NavButton dir='b' />
      <NavButton dir='f' />
    </div>
  );
}