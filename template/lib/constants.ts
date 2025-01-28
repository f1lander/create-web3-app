const getAlchemyRpcUrl = (network: 'mainnet' | 'sepolia' | 'holesky') => {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  if (!apiKey) {
    return `https://ethereum-${network}-rpc.publicnode.com`;
  }
  return `https://eth-${network}.g.alchemy.com/v2/${apiKey}`;
};

export const CONTRACT_ADDRESSES = {
  faucet_controller:
    process.env.NEXT_PUBLIC_FAUCET_ADDRESS ||
    '0x52978F4Ed728CBE74e575A8dbFaCd7bB5f727A46',
} as const;

export const NETWORK = {
  MAINNET: {
    chainId: 1,
    rpcUrl: getAlchemyRpcUrl('mainnet'),
  },
  SEPOLIA: {
    chainId: 11155111,
    rpcUrl: getAlchemyRpcUrl('sepolia'),
  },
  HOLESKY: {
    chainId: 17000,
    rpcUrl: getAlchemyRpcUrl('holesky'),
  },
  ANVIL: {
    chainId: 31337,
    rpcUrl: 'http://localhost:8545',
  },
  DEVNET: {
    chainId: 1337,
    rpcUrl: 'http://localhost:8545',
  },
} as const;

export type NETWORK_TYPE = (typeof NETWORK)[keyof typeof NETWORK];
export type NETWORK_NAME = keyof typeof NETWORK;

export const CHAIN_ID: NETWORK_TYPE['chainId'] =
  (Number(process.env.NEXT_PUBLIC_CHAIN_ID) as NETWORK_TYPE['chainId']) ||
  NETWORK.HOLESKY['chainId'];

  export const DEFAULT_NETWORK_NAME = (
    Object.entries(NETWORK).find(
      ([, id]) => id.chainId === CHAIN_ID,
    )?.[0] || ''
  ).toLowerCase() as Lowercase<NETWORK_NAME>;

export const WALLET_CONNECTION_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLET_CONNECTION_PROJECT_ID || '';

export const PRIVATE_WALLET_KEY = (process.env.PRIVATE_WALLET_KEY ||
  '0x...') as `0x${string}`;

export const RPC_URL = (() => {
  if (process.env.NEXT_PUBLIC_RPC_URL) {
    return process.env.NEXT_PUBLIC_RPC_URL;
  }

  // Default to the RPC_URL of the selected network
  const selectedNetwork = Object.values(NETWORK).find(
    (network) => network.chainId === CHAIN_ID,
  );
  return selectedNetwork ? selectedNetwork.rpcUrl : undefined;
})();

export const isTestnet = (() => {
  switch (CHAIN_ID) {
    case NETWORK.HOLESKY.chainId:
    default:
      return false;
  }
})();

export const EXPLORER_BASE_URL = process.env.NEXT_PUBLIC_EXPLORER_BASE_URL
  ? process.env.NEXT_PUBLIC_EXPLORER_BASE_URL
  : 'https://etherscan.io';

export const featureFlags = {} as const;

export const GOOGLE_ANALYTICS_TOKEN =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '';
