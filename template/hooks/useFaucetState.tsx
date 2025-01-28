import { useReadContract } from 'wagmi';
import { CONTRACT_ADDRESSES } from '@/lib/constants';
import faucetControllerAbi from '@/lib/blockchain/abis/faucetcontroller.json';
import { Address } from 'viem';
import { get } from 'lodash';

export const useFaucetState = (blockNumber: any) => {
  const result = useReadContract({
    abi: faucetControllerAbi,
    address: CONTRACT_ADDRESSES.faucet_controller as Address,
    functionName: 'getUnhandledAccounts',
    blockNumber: blockNumber,
    args: [],
  });

  return {
    isPending: result.isPending,
    unhandledAccountData: result.data as Address[],
  };
};
