'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Emotion } from '@/lib/types';

import { useAppContext } from '@/context/AppContext';

export default function RangeInput() {

  const { baseEmotion, getEmotionColor } = useAppContext();

  const [ value, setValue ] = useState(37);

  return (
    <input
      type='range'
      min={0}
      max={100}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      style={{
        '--range-color': getEmotionColor(baseEmotion as Emotion)
      } as React.CSSProperties}
      className={clsx(
        'w-5/6 py-2 px-6',
        'flex flex-col gap-2',
        'accent-[var(--range-color)]'
      )}
    />
  );
}
