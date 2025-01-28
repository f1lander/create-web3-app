'use client';
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import client from '@/lib/blockchain/client';
import ColourfulText from '@/components/ui/colourful-text';

const BlockchainAnimation = () => (
  <div className="h-[200px] w-[200px] animate-pulse flex items-center justify-center">
    <div className="text-6xl">🔗</div>
  </div>
);

export default function Page() {
  const [blockNumber, setBlockNumber] = useState<bigint>();
  const [lastAction, setLastAction] = useState<string>('');
  const { isConnected, address } = useAccount();

  client.watchBlockNumber({
    onBlockNumber: (num) => {
      setBlockNumber(num);
    },
  });

  // Example blockchain interaction
  const handleBlockchainAction = async () => {
    try {
      // This is where you would put your blockchain interaction
      // For example: contract calls, transactions, etc.
      setLastAction(`Action initiated at block ${blockNumber}`);
    } catch (error) {
      console.error('Error:', error);
      setLastAction('Action failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <Card className="w-full max-w-2xl bg-background/80 shadow-xl backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center">
            <h1 className="z-2 relative text-2xl font-bold md:text-5xl">
              <ColourfulText text="Create web3 app" />
            </h1>

            <BlockchainAnimation />
          </div>

          <Card className="bg-card/50 shadow-md backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="text-lg">
                  {isConnected ? (
                    <p className="text-green-500">
                      Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                  ) : (
                    <p className="text-red-500">Not Connected</p>
                  )}
                </div>

                <Button
                  className="w-full"
                  disabled={!isConnected}
                  onClick={handleBlockchainAction}
                >
                  Perform Action
                </Button>

                {lastAction && (
                  <p className="text-sm text-muted-foreground">{lastAction}</p>
                )}
              </div>
            </CardContent>
          </Card>        
        </CardContent>
      </Card>
    </div>
  );
}