'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { defineChain } from 'viem';
import { anvil, holesky } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  WALLET_CONNECTION_PROJECT_ID,
  RPC_URL,
  isTestnet,
} from '@/lib/constants';

const devnet = defineChain({
  id: 1337,
  name: 'Devnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [RPC_URL || ''],
    },
  },
});

export const rainbowConfig = getDefaultConfig({
  appName: 'WalletConnection',
  projectId: WALLET_CONNECTION_PROJECT_ID,
  chains: isTestnet ? [holesky] : [anvil, devnet, holesky],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: isTestnet
    ? {
        [holesky.id]: http(),
      }
    : {
        [holesky.id]: http(),
        [anvil.id]: http(),
        [devnet.id]: http(),
      },
});
