export type BaseEmotion = 
  'anger' | 
  'anticipation' | 
  'joy' | 
  'trust' | 
  'fear' | 
  'surprise' | 
  'sadness' | 
  'disgust';

export type AngerEmotion = 'rage' | 'anger' | 'annoyance';
export type AnticipationEmotion = 'vigilance' | 'anticipation' | 'interest';
export type JoyEmotion = 'ecstacy' | 'joy' | 'serenity';
export type TrustEmotion = 'admiration' | 'trust' | 'acceptance';
export type FearEmotion = 'terror' | 'fear' | 'apprehension';
export type SurpriseEmotion = 'amazement' | 'surprise' | 'distraction';
export type SadnessEmotion = 'grief' | 'sadness' | 'pensiveness';
export type DisgustEmotion = 'loathing' | 'disgust' | 'boredom';

export type IndependentEmotion = 
  AngerEmotion |
  AnticipationEmotion |
  JoyEmotion |
  TrustEmotion |
  FearEmotion |
  SurpriseEmotion |
  SadnessEmotion |
  DisgustEmotion;

export type MixedEmotion =
  'aggressiveness' |
  'optimism' |
  'love' |
  'submission' |
  'awe' |
  'disapproval' |
  'remorse' |
  'contempt';

export type Emotion = IndependentEmotion | MixedEmotion;
