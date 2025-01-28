import { createPublicClient, http, Chain } from 'viem';

import { mainnet, holesky, sepolia, anvil, localhost } from 'viem/chains';
import { NETWORK_TYPE, NETWORK, RPC_URL, CHAIN_ID } from '@/lib/constants';

export const CHAINS: Record<NETWORK_TYPE['chainId'], Chain> = {
  [NETWORK.MAINNET['chainId']]: mainnet,
  [NETWORK.SEPOLIA['chainId']]: sepolia,
  [NETWORK.HOLESKY['chainId']]: holesky,
  [NETWORK.ANVIL['chainId']]: anvil,
  [NETWORK.DEVNET['chainId']]: localhost,
};

const client = createPublicClient({
  chain: CHAINS[CHAIN_ID],
  transport: http(RPC_URL),
});

export default client;
