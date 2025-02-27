'use client';

import { useAppContext } from '@/context/AppContext';

import LandingScreen from '@/component/screen/00_landing/main';
import PromptScreen from '@/component/screen/01_prompt/main';
import EditorScreen from '@/component/screen/02_editor/main';
import TitleScreen from '@/component/screen/03_title/main';
import IdentityScreen from '@/component/screen/04_identity/main';
import PublishScreen from '@/component/screen/05_publish/main';
import ReliefScreen from '@/component/screen/06_relief/main';

export default function Home() {

  const { screenIndex } = useAppContext();

  switch (screenIndex) {
    case 0: return <LandingScreen />;
    case 1: return <PromptScreen />;
    case 2: return <EditorScreen />;
    case 3: return <TitleScreen />;
    case 4: return <IdentityScreen />;
    case 5: return <PublishScreen />;
    case 6: return <ReliefScreen />;
    default: return <LandingScreen />;
  }

  // return (
  //   <main className={clsx(
  //     'w-full h-screen p-8',
  //     'flex flex-col items-center justify-center gap-8'
  //   )}>

  //   </main>
  // );
}
