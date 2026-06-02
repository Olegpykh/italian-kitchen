import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/provider';
import Header from '@/components/UI/layout/header';
import { siteConfig } from '@/config/site.config';
import { layoutConfig } from '@/config/layout.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          <main
            className="flex flex-col w-full justify-start items-center"
            style={{
              height: `calc(100vh - ${layoutConfig.footerHeight} - ${layoutConfig.headerHeight})`,
            }}
          >
            {children}
          </main>
          <footer
            className="flex justify-center items-center"
            style={{ height: layoutConfig.footerHeight }}
          >
            <h1>{siteConfig.description}</h1>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
