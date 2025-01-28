import * as React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { HomeIcon, Telescope } from 'lucide-react';
import { CustomLink } from '@/components/ui/custom-link';
import { DotBackground } from '@/components/backgrounds/patterns';
import ThemeSwitch from '@/components/molecules/ThemeSwitch';

export const metadata: Metadata = {
  title: 'Create Web3 App',
  description: 'A template for creating web3 apps with Next.js, viem, and Tailwind CSS',
};

export default function SideBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      href: '/',
      label: 'Home',
      icon: <HomeIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex h-full flex-col items-center gap-4 px-2 py-4">
          <div className="flex flex-grow flex-col items-center gap-4">
            <div className="flex">
              <a
                className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto"
                href="/"
                rel="noopener noreferrer"
              >
                Create web3 App
              </a>
            </div>
            <TooltipProvider>
              {links.map(({ href, label, icon }, index) => (
                <Tooltip key={`${label}::${index}`}>
                  <TooltipTrigger asChild>
                    <CustomLink href={href}>
                      {icon}
                      <span className="sr-only">{label}</span>
                    </CustomLink>
                  </TooltipTrigger>
                  <TooltipContent side="right">{label}</TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
          <ThemeSwitch />
        </nav>
      </aside>
      <DotBackground>
        <div className="flex min-h-screen flex-col gap-4 py-4 pl-14">
          <div className="mb-16 flex w-full items-center justify-end px-[8rem] pt-8">
            <ConnectButton />
          </div>
          <main className="main flex flex-col gap-4 px-8">{children}</main>
        </div>
      </DotBackground>
    </div>
  );
}
