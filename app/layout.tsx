import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'next-tailwind-starter',
  description: 'A Next.js + TypeScript + Tailwind starter by @linkai101',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
