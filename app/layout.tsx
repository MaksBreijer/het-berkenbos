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
  title: 'Het Berkenbos — Bijzonder overnachten in Hauwert',
  description: 'Een warm, persoonlijk verblijf van Selma Cool met een grote tuin, klein berkenbos en workshops in Hauwert.',
  openGraph: {
    title: 'Het Berkenbos — Vier seizoenen. Eén plek om te blijven.',
    description: 'Een warm, persoonlijk verblijf van Selma Cool tussen de berken in Hauwert.',
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: '/og.jpg', width: 1440, height: 1800, alt: 'Het landschap bij Het Berkenbos in Hauwert' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Het Berkenbos — Vier seizoenen. Eén plek om te blijven.',
    description: 'Een warm, persoonlijk verblijf van Selma Cool tussen de berken in Hauwert.',
    images: ['/og.jpg'],
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
