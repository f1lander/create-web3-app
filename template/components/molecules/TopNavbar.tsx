import { DEFAULT_NETWORK_NAME } from '@/lib/constants';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function TopNavbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between gap-4 px-4 md:px-6">
      <p className="w-[1/2] font-mono text-sm font-bold text-drosera md:w-full md:text-lg">
        Dro App
      </p>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="inline-flex items-center rounded-full border border-solid border-drosera px-2 py-1 text-sm text-drosera">
          {DEFAULT_NETWORK_NAME}
        </div>
        <ConnectButton chainStatus={'none'} />
      </div>
    </header>
  );
}
