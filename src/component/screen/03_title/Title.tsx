'use client';

import { useAppContext } from '@/context/AppContext';

import TextInput from '@/component/primitive/TextInput';

export default function Title() {

  const { setTitle } = useAppContext();

  return <TextInput onChange={setTitle} />;
}