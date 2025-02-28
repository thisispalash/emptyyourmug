'use client';

import { useAppContext } from '@/context/AppContext';

import TextInput from '@/component/primitive/TextInput';

export default function Title() {

  const { title, setTitle } = useAppContext();

  return <TextInput value={title} onChange={setTitle} />;
}