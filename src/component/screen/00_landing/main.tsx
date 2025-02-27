'use client';

import clsx from 'clsx';

import { BaseEmotion } from '@/lib/types';

import EmotionBox from './EmotionBox';

const emotions: BaseEmotion[] = [
  'anger',
  'anticipation',
  'joy',
  'trust',
  'fear',
  'surprise',
  'sadness',
  'disgust',
];

export default function LandingScreen() {

  const rowOne = emotions.slice(0, 4);
  const rowTwo = emotions.slice(4).reverse();

  return (
    <div className={clsx(
      'flex flex-col gap-8'
    )}>
      <div className='grid grid-cols-4 gap-4'>
        {rowOne.map((emotion) => (
          <EmotionBox key={emotion} emotion={emotion} />
        ))}
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {rowTwo.map((emotion) => (
          <EmotionBox key={emotion} emotion={emotion} />
        ))}
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-2xl lowercase'>pick a color..</h1>
      </div>
    </div>
  );
}