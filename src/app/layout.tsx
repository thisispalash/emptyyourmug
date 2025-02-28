import type { Metadata } from 'next';
import { Kalam, Comic_Neue } from 'next/font/google';
import './globals.css';

import ClientLayout from '@/component/ClientLayout';

const kalam = Kalam({
  variable: '--font-kalam',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const comicNeue = Comic_Neue({
  variable: '--font-comic-neue',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Empty Your Mug',
  description: 'Addressing the loneliness epidemic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/arms-400.png" />
      </head>
      <body
        className={`
          ${kalam.variable}
          ${comicNeue.variable}
          antialiased
          font-kalam
          text-3xl
        `}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
