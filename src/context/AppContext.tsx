'use client';

import { createContext, useContext, useState } from 'react';

import EmotionColors from '@/lib/colors.json';
import EmojiMap from '@/lib/emoji.json';


import { BaseEmotion, Emotion } from '@/lib/types';

interface AppContextType {
  screenIndex: number;
  setScreenIndex: (index: number) => void;

  baseEmotion: BaseEmotion | '';
  setBaseEmotion: (emotion: BaseEmotion | '') => void;

  getBackgroundColor: () => string;

  getEmoji: (emotion: Emotion) => string;
  getEmotionColor: (emotion: Emotion) => string;
}


export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  
  const [ screenIndex, setScreenIndex ] = useState(0);
  const [ baseEmotion, setBaseEmotion ] = useState<BaseEmotion | ''>('');
  
  
  function getEmotionColor(emotion: Emotion) {
    return EmotionColors[emotion as keyof typeof EmotionColors];
  }

  function getEmoji(emotion: Emotion) {
    return EmojiMap[emotion as keyof typeof EmojiMap];
  }

  function getBackgroundColor() {
    if (!baseEmotion) return 'var(--background)';
    
    const color = EmotionColors[baseEmotion as keyof typeof EmotionColors];
    
    // Convert hsl color to hsla with 0.1 opacity
    return color.replace('hsl', 'hsla').replace(')', ', 0.1)');
  }


  return (
    <AppContext.Provider value={{ 
      screenIndex, setScreenIndex,
      baseEmotion, setBaseEmotion,

      getEmoji,
      getEmotionColor,
      getBackgroundColor,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}