export type TrapWithOperator = {
  trap: `0x${string}`;
  operators: readonly `0x${string}`[];
  index: bigint;
};

export type Traps = readonly {
  trap: `0x${string}`;
  operators: readonly `0x${string}`[];
  index: bigint;
}[];

export interface TrapItem {
  bloomBoost: 0 | 1 | 2 | 3 | 4 | 5;
  bloomBoostBalance: string;
  operators: number;
  trapConfig: `0x${string}`;
  owner: `0x${string}`;
  hydrationStreams: number;
  totalRewards: number;
  rewardsReleased: number;
}

export interface RawTrapItem {
  id: `0x${string}`;
  trapCreatorAddress: `0x${string}` | null;
  trapRewardAddress: `0x${string}` | null;
  operatorTraps: readonly {
    id: `0x${string}`;
    operator: `0x${string}`;
    isActive: boolean;
    operatorTrapLogs: readonly {
      id: `0x${string}`;
      actionAt: string;
      action: string;
    }[];
  }[];
}

export type HydrationStreamPayload = {
  token: `0x${string}`;
  vestingStart: bigint;
  total: bigint;
  released: bigint;
};
export interface TrapWithConfigPayload {
  configData: {
    trapHash: `0x${string}`;
    outputSignatureHash: `0x${string}`;
    responseContract: `0x${string}`;
    cooldownPeriodBlocks: number;
    minNumberOfOperators: number;
    maxNumberOfOperators: number;
    blockSampleSize: number;
    responseFunction: string;
    seedNodeDNR: `0x${string}`;
    privateTrap?: boolean;
    trapLevelWhitelist?: readonly `0x${string}`[];
  };
  bonusReward: bigint;
  hydrationStreams: HydrationStreamPayload[] | undefined;
  bloomBoost: bigint;
  trap: `0x${string}`;
  operators: readonly `0x${string}`[];
  owner: `0x${string}`;
  index: bigint;
}

export interface HydrationStream {
  total: number;
  released: number;
  vestingStart: string;
  token: string;
}

export interface Beneficiary {
  address: string;
  share: number;
}

export interface TrapDetailItem {
  bloomBoost: 0 | 1 | 2 | 3 | 4 | 5;
  bloomBoostBalance: string;
  operators: number;
  trapConfig: `0x${string}`;
  owner: `0x${string}`;
  rewards: string;
  minOperators: number;
  maxOperators: number;
  cooldownPeriodBlocks: number;
  blockSampleSize: number;
  emergencyContractAddress: string;
  emergencyFunctionName: string;
  bonusReward: string;
  hydrationStreams: HydrationStream[] | undefined;
  beneficiaries: Beneficiary[];
  trapRewardAddress: `0x${string}`;
}

export type WidgetsData = {
  activeOperators: number;
  totalRewards: number;
};

export type Filters = {
  withTrapsOwned: boolean;
  withHydrationStreams: boolean;
  withOperators: boolean;
};

export type ClaimPageFilters = {
  claimed: boolean;
  unClaimed: boolean;
};

export type TrapCardItemDetailsMetadata = Pick<
  TrapItem,
  'bloomBoostBalance' | 'totalRewards' | 'rewardsReleased'
> & {
  id: `0x${string}`;
  operators: readonly `0x${string}`[];
  hydrationStreams: HydrationStreamPayload[] | undefined;
  configData: TrapWithConfigPayload['configData'];
  bloomBoost: bigint;
  bonusReward: bigint;
  trapCreatorAddress: `0x${string}`;
  trapRewardAddress: `0x${string}`;
};

export type TrapCardItemMetadata = Pick<
  TrapItem,
  | 'bloomBoostBalance'
  | 'operators'
  | 'hydrationStreams'
  | 'totalRewards'
  | 'rewardsReleased'
> & {
  bloomBoost: bigint;
  trapCreatorAddress: `0x${string}`;
  trapRewardAddress: `0x${string}`;
};
