'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

import { BaseEmotion, Emotion } from '@/lib/types';

import AppProvider, { useAppContext } from '@/context/AppContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  return (
    <AppProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </AppProvider>
  );
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {

  const { getBackgroundColor } = useAppContext();
  const { setScreenIndex, setBaseEmotion, setPrompt, setSelectedEmotion, setStory, setTitle, setAuthor } = useAppContext();

  useEffect(() => {
    
    const screenIndex = localStorage.getItem('screenIndex');
    const baseEmotion = localStorage.getItem('baseEmotion');
    const prompt = localStorage.getItem('prompt');
    const selectedEmotion = localStorage.getItem('selectedEmotion');
    const story = localStorage.getItem('story');
    const title = localStorage.getItem('title');
    const author = localStorage.getItem('author');

    if (screenIndex) { setScreenIndex(parseInt(screenIndex)); }
    if (baseEmotion) { setBaseEmotion(baseEmotion as BaseEmotion); }
    if (prompt) { setPrompt(prompt); }
    if (selectedEmotion) { setSelectedEmotion(selectedEmotion as Emotion); }
    if (story) { setStory(story); }
    if (title) { setTitle(title); }
    if (author) { setAuthor(author); }

  }, []);

  return (
    <main 
      style={{ backgroundColor: getBackgroundColor() }}
      className={clsx(
        'w-full h-screen p-8',
        'flex flex-col items-center justify-center gap-8',
        'transition-all duration-500',
        // isLoading ? 'opacity-0' : 'opacity-100',
      )}
    >
      <div className={clsx(
        'w-full h-full',
        'flex flex-col items-center justify-center gap-8',
        'transition-opacity duration-500',
        // isLoading ? 'opacity-0' : 'opacity-100',
      )}>
        {children}
      </div>
    </main>
  );
}