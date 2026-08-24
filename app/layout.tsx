import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Het Berkenbos — Bijzonder overnachten in Huarte',
  description: 'Een warm, persoonlijk verblijf van Selma Kool tussen de berken in Huarte, Navarra.',
  openGraph: {
    title: 'Het Berkenbos — Vier seizoenen. Eén plek om te blijven.',
    description: 'Een warm, persoonlijk verblijf van Selma Kool tussen de berken in Huarte.',
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Het Berkenbos in Huarte' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Het Berkenbos — Vier seizoenen. Eén plek om te blijven.',
    description: 'Een warm, persoonlijk verblijf van Selma Kool tussen de berken in Huarte.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
