/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { config } from 'dotenv-flow';
const APP_ENV = process.env.APP_ENV || 'holesky';

config({
  node_env: APP_ENV,
  allow_empty_values: false,
});

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
