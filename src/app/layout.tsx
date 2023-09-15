import Header from '@/components/Header';
import './globals.css';
import React from 'react';

export const metadata = {
  title: '홈페이지 템플릿',
  description: '홈페이지 템플릿 만들기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
