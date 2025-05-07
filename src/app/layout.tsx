import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Уведомления',
  description: 'Тестовое задание для Frontend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
