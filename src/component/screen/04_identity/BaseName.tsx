// TODO: Integrate web3!!

'use client';

import { useAppContext } from '@/context/AppContext';

import TextInput from '@/component/primitive/TextInput';

export default function BaseName() {

  const { author, setAuthor } = useAppContext();

  return <TextInput value={author} onChange={setAuthor} />;
}