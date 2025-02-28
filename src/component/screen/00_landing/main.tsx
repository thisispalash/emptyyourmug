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

  const mobileRowOne = emotions.slice(0,2);
  const mobileRowTwo = emotions.slice(2,4).reverse();
  const mobileRowThree = emotions.slice(4,6);
  const mobileRowFour = emotions.slice(6).reverse();

  return (
    <>
      {/* Mobile */}
      <div className={clsx(
        'flex flex-col gap-8',
        'md:hidden'
      )}>
        
        <div className='w-full flex items-center justify-center'>
          <h1 className='text-2xl lowercase'>pick a color..</h1>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {mobileRowOne.map((emotion) => (
            <EmotionBox key={emotion} emotion={emotion} />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {mobileRowTwo.map((emotion) => (
            <EmotionBox key={emotion} emotion={emotion} />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {mobileRowThree.map((emotion) => (
            <EmotionBox key={emotion} emotion={emotion} />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {mobileRowFour.map((emotion) => (
            <EmotionBox key={emotion} emotion={emotion} />
          ))}
        </div>

      </div>
    
      <div className={clsx(
        'hidden md:flex flex-col gap-8'
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
    </>
  );
}