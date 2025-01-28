# create-nextjs-dapp

![image 9](https://github.com/user-attachments/assets/9bc99dab-54ab-4553-ba19-807d555e2cbf)

A modern Web3 project generator for creating Next.js applications with built-in blockchain integration, featuring RainbowKit, Wagmi, and shadcn/ui components.

## 🚀 Quick Start

You can create a new application using any of these package managers:

```bash
# Using npm
npx create-web3-app my-app

# Using yarn
yarn create web3-app my-app

# Using pnpm
pnpm create web3-app my-app

# Using bun
bunx create-web3-app my-app
```

## ✨ What's Included

The generator creates a complete Next.js application with:

- ⚡ **Next.js 14** with App Router
- 🌈 **RainbowKit** pre-configured for wallet connections
- ⛓️ **Wagmi & Viem** setup for blockchain interactions
- 🎨 **Tailwind CSS & shadcn/ui** for styled components
- 🌙 **Dark/Light Mode** out of the box
- 📱 **Responsive Design** templates
- 🔧 **Atomic Design Pattern** structure
- 🪝 **Custom React Hooks** for blockchain interactions
- 📄 **GitHub Pages** deployment ready

## 📦 Generated Project Structure

```
my-app/
├── components/          # Pre-built components using Atomic Design
│   ├── atoms/          # Basic components (icons, buttons)
│   ├── molecules/      # Compound components
│   ├── backgrounds/    # Background patterns
│   └── ui/            # shadcn/ui components
├── hooks/              # Ready-to-use custom hooks
│   ├── use-toast.ts
│   ├── useFaucetState.tsx    # Blockchain state management
│   └── useRequestForGas.tsx  # Gas request handling
├── lib/               # Core utilities
│   ├── blockchain/    # Blockchain configuration
│   │   ├── abis/     # Example contract ABIs
│   │   ├── client.ts # Viem client setup
│   │   └── constants.ts
│   └── utils.ts
└── ...
```

## 🛠️ After Installation

Once your project is generated:

1. Navigate to your project:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

3. Set up your environment variables:
```bash
cp .env.example .env.local
```

4. Start developing:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🔑 Environment Setup

Required environment variables:

```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_BASE_PATH=
```

Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

## 🌐 Included Features

### Pre-configured Blockchain Components
- Wallet connection button
- Network switcher
- Transaction notifications
- Basic contract interactions

### UI Components
- Responsive navigation
- Theme switcher
- Loading states
- Toast notifications
- Card layouts
- Modal components

### Custom Hooks
- Contract interaction hooks
- Blockchain state management
- Toast notifications
- Theme management

## 📤 Deployment

### GitHub Pages

The template includes a pre-configured GitHub Actions workflow. To deploy:

1. Push your code to GitHub
2. Enable GitHub Pages in your repository settings
3. The Action will automatically build and deploy your site

The workflow file is already included at `.github/workflows/deploy.yml`

## ⚙️ Constants and Configuration

### Network Configuration System

The template includes a robust constants system for managing network configurations and environmental variables:

```typescript
// lib/constants.ts

// RPC URL Generation with Fallback
const getAlchemyRpcUrl = (network: 'mainnet' | 'sepolia' | 'holesky') => {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  return apiKey 
    ? `https://eth-${network}.g.alchemy.com/v2/${apiKey}`
    : `https://ethereum-${network}-rpc.publicnode.com`;
};

// Network Configurations
export const NETWORK = {
  MAINNET: {
    chainId: 1,
    rpcUrl: getAlchemyRpcUrl('mainnet'),
  },
  SEPOLIA: {
    chainId: 11155111,
    rpcUrl: getAlchemyRpcUrl('sepolia'),
  },
  // ... other networks
} as const;
```

Key features:
- Type-safe network configurations
- Fallback RPC URLs (Alchemy → Public Nodes)
- Environment variable integration
- Local development network support (Anvil/Devnet)

### Feature Flags System

The template includes a feature flags system for managing feature releases and toggles:

```typescript
// lib/constants.ts
export const featureFlags = {
  NEW_FEATURE: process.env.NEXT_PUBLIC_ENABLE_NEW_FEATURE === 'true',
  BETA_FEATURE: process.env.NEXT_PUBLIC_ENABLE_BETA === 'true',
} as const;

// Types and Utilities
export type FeatureFlags = keyof typeof featureFlags;

export const isFeatureEnabled = (feature: FeatureFlags) =>
  featureFlags[feature];
```

#### Feature Flag Component
```typescript
// components/FeatureFlag.tsx
export interface FeatureFlagProps {
  name: FeatureFlags;
  children: React.ReactNode;
}

export const FeatureFlag: React.FC<FeatureFlagProps> = ({ name, children }) => {
  const isEnabled = isFeatureEnabled(name);
  return isEnabled ? <>{children}</> : null;
};
```

Usage example:
```tsx
<FeatureFlag name="NEW_FEATURE">
  <NewComponent />
</FeatureFlag>
```

### Environment Management System

The template uses a sophisticated environment variable management system that supports different network configurations through separate environment files.

#### Environment File Structure
```
my-app/
├── .env                  # Base environment variables
├── .env.local           # Local secrets (git-ignored)
├── .env.holesky         # Holesky testnet configuration
├── .env.sepolia         # Sepolia testnet configuration
├── .env.mainnet         # Mainnet configuration
└── .env.[network]       # Other network configurations
```

#### Next.js Configuration
```typescript
// next.config.mjs
import { config } from 'dotenv-flow';

// Default to Holesky if APP_ENV is not specified
const APP_ENV = process.env.APP_ENV || 'holesky';

// Load environment variables based on APP_ENV
config({
  node_env: APP_ENV,
  allow_empty_values: false,
});

// Filter and pass through NEXT_PUBLIC_ variables
const env = {};
for (const [key, value] of Object.entries(process.env)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    env[key] = value;
  }
}

const nextConfig = {
  env,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

#### Usage

1. Development with different networks:
```bash
# Run with Holesky configuration
APP_ENV=holesky pnpm dev

# Run with Sepolia configuration
APP_ENV=sepolia pnpm dev

# Run with Mainnet configuration
APP_ENV=mainnet pnpm dev
```

2. Build for specific network:
```bash
APP_ENV=holesky pnpm build
```

#### Environment Files Example

`.env.holesky`:
```env
NEXT_PUBLIC_CHAIN_ID=17000
NEXT_PUBLIC_EXPLORER_BASE_URL=https://holesky.etherscan.io
NEXT_PUBLIC_DEFAULT_NETWORK=holesky
```

`.env.sepolia`:
```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_EXPLORER_BASE_URL=https://sepolia.etherscan.io
NEXT_PUBLIC_DEFAULT_NETWORK=sepolia
```

`.env.local`:
```env
# Secrets (git-ignored)
NEXT_PUBLIC_ALCHEMY_API_KEY=your-api-key
NEXT_PUBLIC_WALLET_CONNECTION_PROJECT_ID=your-project-id
```

### Environment Variables

Required variables for the constants system:

```env
# Network Configuration
NEXT_PUBLIC_CHAIN_ID=17000
NEXT_PUBLIC_RPC_URL=https://your-rpc-url
NEXT_PUBLIC_ALCHEMY_API_KEY=your-alchemy-key

# Contract Addresses
NEXT_PUBLIC_FAUCET_ADDRESS=0x...

# Feature Flags
NEXT_PUBLIC_ENABLE_NEW_FEATURE=true
NEXT_PUBLIC_ENABLE_BETA=false

# Additional Configuration
NEXT_PUBLIC_EXPLORER_BASE_URL=https://etherscan.io
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-token
```

### Network Types and Utilities

The system includes TypeScript types for type-safe network handling:

```typescript
export type NETWORK_TYPE = (typeof NETWORK)[keyof typeof NETWORK];
export type NETWORK_NAME = keyof typeof NETWORK;

// Automatic network detection based on chain ID
export const DEFAULT_NETWORK_NAME = (
  Object.entries(NETWORK).find(
    ([, id]) => id.chainId === CHAIN_ID,
  )?.[0] || ''
).toLowerCase() as Lowercase<NETWORK_NAME>;

// RPC URL resolution
export const RPC_URL = (() => {
  if (process.env.NEXT_PUBLIC_RPC_URL) {
    return process.env.NEXT_PUBLIC_RPC_URL;
  }
  return Object.values(NETWORK).find(
    (network) => network.chainId === CHAIN_ID,
  )?.rpcUrl;
})();
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update global styles in `app/globals.css`
- Customize shadcn/ui components in `components/ui`

### Blockchain Configuration
- Update networks in `lib/blockchain/constants.ts`
- Modify contract ABIs in `lib/blockchain/abis`
- Customize hooks in `hooks` directory

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [Wagmi Documentation](https://wagmi.sh)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🙏 Thanks

Special thanks to [Drosera.io](https://drosera.io) for their inspiration with their design system and brand color <span style="color: #FF5D0A">■</span>. Their innovative approach to blockchain interfaces helped shape many of the design decisions in this template.

The signature orange color (#FF5D0A) can be found in the template's design tokens and can be customized in the Tailwind configuration.


## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

MIT © Edax Uclés

## 🙋‍♂️ Support

For issues and questions, please [open an issue](https://github.com/yourusername/create-web3-app/issues) on GitHub.
