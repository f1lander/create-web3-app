import { useWriteContract, useAccount } from 'wagmi';
import { CONTRACT_ADDRESSES } from '@/lib/constants';
import faucetControllerAbi from '@/lib/blockchain/abis/faucetcontroller.json';
import { Address } from 'viem';

export const useRequestForGas = () => {
  const {
    data: hash,
    writeContract,
    error: writeContractError,
    isPending,
    isSuccess,
  } = useWriteContract();

  const requestForGas = async (toAddress: readonly [`0x${string}`]) => {
    try {
      console.log('toAddress', toAddress);
      writeContract({
        address: CONTRACT_ADDRESSES.faucet_controller as Address,
        abi: faucetControllerAbi,
        functionName: 'requestGas',
        args: toAddress,
      });

      if (writeContractError) {
        console.error('Error writing contract for mint:', writeContractError);
      }
    } catch (error) {
      console.error('Error performing mint:', error);
    }
  };

  return {
    hash,
    isSuccess,
    isTxPending: isPending,
    requestForGas,
    error: writeContractError,
  };
};
