'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import type { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';

import { rainbowConfig } from '../lib/rainbow-config';

import '@rainbow-me/rainbowkit/styles.css';
import { ApolloWrapper } from './apollo-provider';

declare module 'wagmi' {
  interface Register {
    config: typeof rainbowConfig;
  }
}

type Props = {
  children: ReactNode;
  cookie: string | null;
};

const queryClient = new QueryClient();

export function Providers({ children, cookie }: Props) {
  return (
    <WagmiProvider config={rainbowConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#FF6B00',
            accentColorForeground: 'white',
            borderRadius: 'large',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <ApolloWrapper>{children}</ApolloWrapper>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
