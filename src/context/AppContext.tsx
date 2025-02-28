'use client';

import { createContext, useContext, useState } from 'react';

import EmotionColors from '@/lib/colors.json';
import EmojiMap from '@/lib/emoji.json';
import Prompts from '@/lib/prompts.json';


import { BaseEmotion, Emotion, IndependentEmotion, MixedEmotion } from '@/lib/types';

type Prompt = {
  text: string;
  color: string;
}

interface AppContextType {
  screenIndex: number;
  setScreenIndex: (index: number) => void;

  baseEmotion: BaseEmotion | '';
  setBaseEmotion: (emotion: BaseEmotion | '') => void;

  getBackgroundColor: () => string;

  getEmoji: (emotion: Emotion) => string;
  getEmotionColor: (emotion: Emotion) => string;

  getPrompt: (emotion: Emotion) => string;
  getPromptGrid: () => { left: Prompt, stack: Prompt[], right: Prompt };

  prompt: string;
  setPrompt: (prompt: string) => void;

  story: string;  
  setStory: (story: string) => void;

  title: string;
  setTitle: (title: string) => void;

  author: string;
  setAuthor: (author: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  
  const [ screenIndex, setScreenIndex ] = useState(0);
  const [ baseEmotion, setBaseEmotion ] = useState<BaseEmotion | ''>('');
  const [ prompt, setPrompt ] = useState('');
  
  const [ story, setStory ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  
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

  function getPrompt(emotion: Emotion) {
    return Prompts[emotion as keyof typeof Prompts];
  }

  function getPromptGrid() {
    let leftEmotion: MixedEmotion, rightEmotion: MixedEmotion, 
      highEmotion: IndependentEmotion, lowEmotion: IndependentEmotion;

    switch (baseEmotion) {
      case 'anger':
        leftEmotion = 'contempt';
        rightEmotion = 'aggressiveness';
        highEmotion = 'rage';
        lowEmotion = 'annoyance';
        break;
      case 'anticipation':
        leftEmotion = 'aggressiveness';
        rightEmotion = 'optimism';
        highEmotion = 'vigilance';
        lowEmotion = 'interest';
        break;
      case 'joy':
        leftEmotion = 'optimism';
        rightEmotion = 'love';
        highEmotion = 'ecstacy';
        lowEmotion = 'serenity';
        break;
      case 'trust':
        leftEmotion = 'love';
        rightEmotion = 'submission';
        highEmotion = 'admiration';
        lowEmotion = 'acceptance';
        break;
      case 'fear':
        leftEmotion = 'submission';
        rightEmotion = 'awe';
        highEmotion = 'terror';
        lowEmotion = 'apprehension';
        break;
      case 'surprise':
        leftEmotion = 'awe';
        rightEmotion = 'disapproval';
        highEmotion = 'amazement';
        lowEmotion = 'distraction';
        break;
      case 'sadness':
        leftEmotion = 'disapproval';
        rightEmotion = 'remorse';
        highEmotion = 'grief';
        lowEmotion = 'pensiveness';
        break;
      case 'disgust':
        leftEmotion = 'remorse';
        rightEmotion = 'contempt';
        highEmotion = 'loathing';
        lowEmotion = 'boredom';
        break;
      default:
        return { left: { text: '', color: '' }, stack: [], right: { text: '', color: '' } };
    }

    const leftPrompt = getPrompt(leftEmotion);
    const rightPrompt = getPrompt(rightEmotion);
    const highPrompt = getPrompt(highEmotion);
    const basePrompt = getPrompt(baseEmotion);
    const lowPrompt = getPrompt(lowEmotion);


    return {
      left: { text: leftPrompt, color: getEmotionColor(leftEmotion) },
      stack: [
        { text: lowPrompt, color: getEmotionColor(lowEmotion) },
        { text: basePrompt, color: getEmotionColor(baseEmotion) },
        { text: highPrompt, color: getEmotionColor(highEmotion) },
      ],
      right: { text: rightPrompt, color: getEmotionColor(rightEmotion) },
    };
  }


  return (
    <AppContext.Provider value={{ 
      screenIndex, setScreenIndex,
      
      baseEmotion, setBaseEmotion,
      prompt, setPrompt,
      story, setStory,
      title, setTitle,
      author, setAuthor,
      
      getEmoji,
      getEmotionColor,
      getBackgroundColor,

      getPrompt,
      getPromptGrid,
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