import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { Providers } from '@/providers/providers';
import { TopNavbar } from '@/components/molecules/TopNavbar';
import { GOOGLE_ANALYTICS_TOKEN } from '@/lib/constants';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/theme-provider';
import { WavyBackground } from '@/components/ui/wavy-background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Web3 App',
  description: 'A template for creating web3 apps with Next.js, viem, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers cookie={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col bg-black font-mono">
              <WavyBackground
                className="mx-auto max-w-4xl pb-40"
                waveOpacity={1}
                blur={10}
                colors={['#FF6B00', '#FFF']}
              >
                <TopNavbar />
                <div className="flex flex-col gap-4 py-4">
                  <main className="main flex flex-col gap-4 px-2 pt-16 md:px-8">
                    {children}
                    <Toaster />
                  </main>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <p className="text-lg text-foreground ">Powered by</p>
                    <a href='https://github.com/f1lander' target='_blank' className="text-lg text-foreground">f1lander</a>
                  </div>
                </div>
              </WavyBackground>
            </div>
          </ThemeProvider>
        </Providers>
        {/*
        If you need to add Google Analytics, uncomment the following line and add your GA ID to the .env.local file, check constants.ts for more info
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_TOKEN} /> 
        */}
        <Toaster />
      </body>
    </html>
  );
}
