import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/provider';
import Header from '@/components/UI/layout/header';
import { siteConfig } from '@/config/site.config';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth/auth';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SessionProvider session={session}>
          <Providers>
            <Header />
            <main className="flex flex-col w-full justify-start items-center flex-1">
              {children}
            </main>
            <footer className="flex justify-center items-center border-t h-[60px]">
              <p className="text-sm text-gray-500">{siteConfig.description}</p>
            </footer>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
