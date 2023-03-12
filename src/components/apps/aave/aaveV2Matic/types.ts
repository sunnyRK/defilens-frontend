export type user = {
  id: string;
};

export type reserve = {
  id: string;
  symbol: string;
  name: string;
  decimals: string;
};

export type Deposits = {
  id: string;
  amount: string;
  userData: user;
  reserveData: reserve;
};

export type AaveV2MaticAttributes = {
  chainName?: string;
  chainId?: string;
  appName?: string;
  version?: string;
  action?: string;
  inputTokens?: string[];
  outputTokens?: string[];
  amountsIn?: string[];
  amountsOut?: string[];
  txHash?: string;
};

export type AaveV2MaticAttributesWithdraw = {
  chainName?: string;
  chainId?: string;
  appName?: string;
  version?: string;
  action?: string;
  aTokens?: string[];
  reserveTokens?: string[];
  aTokensAmount?: string[];
  reserveAmountOut?: string[];
  txHash?: string;
};
