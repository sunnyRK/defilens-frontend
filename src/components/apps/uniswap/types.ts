export type user = {
  id: string;
};

export type token = {
  id: string;
  name: string;
  symbol: string;
  decimals: string;
  lastPriceUSD: string;
  lastPriceBlockNumber: string;
};

export type common = {
  chainName?: string;
  chainId?: string;
  appName?: string;
  version?: string;
  action?: string;
};

export type UniV3Swap = {
  account: user;
  metaData: common;
  amountIn: string;
  amountInUSD: string;
  amountOut: string;
  amountOutUSD: string;
  hash: string;
  blockNumber: string;
  timestamp: string;
  logIndex: string;
  tokenIn: token;
  tokenOut: token;
};
