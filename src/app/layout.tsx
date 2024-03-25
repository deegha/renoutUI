import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Rentouts',
    default: 'Rentouts'
  },
  description: 'Find your next rental property'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
