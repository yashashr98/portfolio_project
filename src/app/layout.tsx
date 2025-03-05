import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'A minimalist portfolio inspired by Notion',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}