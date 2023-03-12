import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetcher } from "./auth-defi-fetcher";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  __typename?: "Account";
  _newUser?: Maybe<Scalars["Boolean"]>;
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars["Int"];
  /**  Number of deposits this account made  */
  depositCount: Scalars["Int"];
  /**  All deposit events of this account  */
  deposits: Array<Deposit>;
  /**  { Account address }  */
  id: Scalars["Bytes"];
  /**  Number of open positions this account has  */
  openPositionCount: Scalars["Int"];
  /**  Number of positions this account has  */
  positionCount: Scalars["Int"];
  /**  All positions that belong to this account  */
  positions: Array<Position>;
  /**  Number of times this account has traded/swapped */
  swapCount: Scalars["Int"];
  /**  All swap events of this account  */
  swaps: Array<Swap>;
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars["Int"];
  /**  All withdraw events of this account  */
  withdraws: Array<Withdraw>;
};

export type AccountDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type AccountPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Position_Filter>;
};

export type AccountSwapsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type AccountWithdrawsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _newUser?: InputMaybe<Scalars["Boolean"]>;
  _newUser_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _newUser_not?: InputMaybe<Scalars["Boolean"]>;
  _newUser_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  closedPositionCount?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  closedPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositCount?: InputMaybe<Scalars["Int"]>;
  depositCount_gt?: InputMaybe<Scalars["Int"]>;
  depositCount_gte?: InputMaybe<Scalars["Int"]>;
  depositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositCount_lt?: InputMaybe<Scalars["Int"]>;
  depositCount_lte?: InputMaybe<Scalars["Int"]>;
  depositCount_not?: InputMaybe<Scalars["Int"]>;
  depositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  deposits_?: InputMaybe<Deposit_Filter>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  openPositionCount?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  openPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  positionCount?: InputMaybe<Scalars["Int"]>;
  positionCount_gt?: InputMaybe<Scalars["Int"]>;
  positionCount_gte?: InputMaybe<Scalars["Int"]>;
  positionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  positionCount_lt?: InputMaybe<Scalars["Int"]>;
  positionCount_lte?: InputMaybe<Scalars["Int"]>;
  positionCount_not?: InputMaybe<Scalars["Int"]>;
  positionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  positions_?: InputMaybe<Position_Filter>;
  swapCount?: InputMaybe<Scalars["Int"]>;
  swapCount_gt?: InputMaybe<Scalars["Int"]>;
  swapCount_gte?: InputMaybe<Scalars["Int"]>;
  swapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  swapCount_lt?: InputMaybe<Scalars["Int"]>;
  swapCount_lte?: InputMaybe<Scalars["Int"]>;
  swapCount_not?: InputMaybe<Scalars["Int"]>;
  swapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  swaps_?: InputMaybe<Swap_Filter>;
  withdrawCount?: InputMaybe<Scalars["Int"]>;
  withdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  withdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  withdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  withdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  withdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  withdrawCount_not?: InputMaybe<Scalars["Int"]>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  withdraws_?: InputMaybe<Withdraw_Filter>;
};

export enum Account_OrderBy {
  NewUser = "_newUser",
  ClosedPositionCount = "closedPositionCount",
  DepositCount = "depositCount",
  Deposits = "deposits",
  Id = "id",
  OpenPositionCount = "openPositionCount",
  PositionCount = "positionCount",
  Positions = "positions",
  SwapCount = "swapCount",
  Swaps = "swaps",
  WithdrawCount = "withdrawCount",
  Withdraws = "withdraws",
}

export type ActiveAccount = {
  __typename?: "ActiveAccount";
  /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
  id: Scalars["Bytes"];
};

export type ActiveAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ActiveAccount_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<ActiveAccount_Filter>>>;
};

export enum ActiveAccount_OrderBy {
  Id = "id",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Deposit = {
  __typename?: "Deposit";
  /**  Account that emitted this event  */
  account: Account;
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
  amountUSD: Scalars["BigDecimal"];
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars["BigInt"]>;
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars["BigInt"]>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars["BigInt"]>;
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["Bytes"];
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars["Bytes"];
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars["BigInt"]>;
  /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
  inputTokens: Array<Token>;
  /**  Amount of liquidity minted  */
  liquidity: Scalars["BigInt"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The pool involving this event  */
  pool: LiquidityPool;
  /**  The user position changed by this event  */
  position?: Maybe<Position>;
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  lower tick of position  */
  tickLower?: Maybe<Scalars["BigInt"]>;
  /**  upper tick of position  */
  tickUpper?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
};

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type DepositInputTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  inputTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokens?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_?: InputMaybe<Token_Filter>;
  inputTokens_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  position_?: InputMaybe<Position_Filter>;
  position_contains?: InputMaybe<Scalars["String"]>;
  position_contains_nocase?: InputMaybe<Scalars["String"]>;
  position_ends_with?: InputMaybe<Scalars["String"]>;
  position_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  position_gt?: InputMaybe<Scalars["String"]>;
  position_gte?: InputMaybe<Scalars["String"]>;
  position_in?: InputMaybe<Array<Scalars["String"]>>;
  position_lt?: InputMaybe<Scalars["String"]>;
  position_lte?: InputMaybe<Scalars["String"]>;
  position_not?: InputMaybe<Scalars["String"]>;
  position_not_contains?: InputMaybe<Scalars["String"]>;
  position_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  position_not_ends_with?: InputMaybe<Scalars["String"]>;
  position_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  position_not_in?: InputMaybe<Array<Scalars["String"]>>;
  position_not_starts_with?: InputMaybe<Scalars["String"]>;
  position_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  position_starts_with?: InputMaybe<Scalars["String"]>;
  position_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tickLower?: InputMaybe<Scalars["BigInt"]>;
  tickLower_gt?: InputMaybe<Scalars["BigInt"]>;
  tickLower_gte?: InputMaybe<Scalars["BigInt"]>;
  tickLower_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tickLower_lt?: InputMaybe<Scalars["BigInt"]>;
  tickLower_lte?: InputMaybe<Scalars["BigInt"]>;
  tickLower_not?: InputMaybe<Scalars["BigInt"]>;
  tickLower_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tickUpper?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_gt?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_gte?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tickUpper_lt?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_lte?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_not?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Deposit_OrderBy {
  Account = "account",
  AccountNewUser = "account___newUser",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountSwapCount = "account__swapCount",
  AccountWithdrawCount = "account__withdrawCount",
  AmountUsd = "amountUSD",
  BlockNumber = "blockNumber",
  GasLimit = "gasLimit",
  GasPrice = "gasPrice",
  GasUsed = "gasUsed",
  Hash = "hash",
  Id = "id",
  InputTokenAmounts = "inputTokenAmounts",
  InputTokens = "inputTokens",
  Liquidity = "liquidity",
  LogIndex = "logIndex",
  Nonce = "nonce",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Position = "position",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionCumulativeDepositUsd = "position__cumulativeDepositUSD",
  PositionCumulativeWithdrawUsd = "position__cumulativeWithdrawUSD",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionLiquidity = "position__liquidity",
  PositionLiquidityTokenType = "position__liquidityTokenType",
  PositionLiquidityUsd = "position__liquidityUSD",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  TickLower = "tickLower",
  TickUpper = "tickUpper",
  Timestamp = "timestamp",
}

export type DexAmmProtocol = Protocol & {
  __typename?: "DexAmmProtocol";
  /**  This is a boolean to indicate whether or not the pools have been instantiated the were initialized before Optimism regenesis  */
  _regenesis: Scalars["Boolean"];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars["BigDecimal"];
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars["Int"];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Number of cumulative liquidity providers  */
  cumulativeUniqueLPs: Scalars["Int"];
  /**  Number of cumulative traders  */
  cumulativeUniqueTraders: Scalars["Int"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  All historical volume in USD  */
  cumulativeVolumeUSD: Scalars["BigDecimal"];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars["Bytes"];
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars["Int"];
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars["BigInt"];
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars["BigInt"];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars["String"];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars["String"];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  Total number of open positions  */
  openPositionCount: Scalars["Int"];
  /**  All pools that belong to this protocol  */
  pools: Array<LiquidityPool>;
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars["String"];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars["String"];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars["String"];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars["BigDecimal"];
  /**  Total number of pools  */
  totalPoolCount: Scalars["Int"];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedProtocolSideValueUSD: Scalars["BigDecimal"];
  /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedSupplySideValueUSD: Scalars["BigDecimal"];
};

export type DexAmmProtocolDailyUsageMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
};

export type DexAmmProtocolFinancialMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FinancialsDailySnapshot_Filter>;
};

export type DexAmmProtocolHourlyUsageMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
};

export type DexAmmProtocolPoolsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPool_Filter>;
};

export type DexAmmProtocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _regenesis?: InputMaybe<Scalars["Boolean"]>;
  _regenesis_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _regenesis_not?: InputMaybe<Scalars["Boolean"]>;
  _regenesis_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  activeLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<DexAmmProtocol_Filter>>>;
  cumulativePositionCount?: InputMaybe<Scalars["Int"]>;
  cumulativePositionCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativePositionCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativePositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativePositionCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativePositionCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativePositionCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativePositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeUniqueLPs?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLPs_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLPs_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLPs_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLPs_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLPs_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLPs_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLPs_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueTraders?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueTraders_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueTraders_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueTraders_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueTraders_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueTraders_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueTraders_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueTraders_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_Filter>;
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lastSnapshotDayID?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_gt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_gte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotDayID_lt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_lte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_not?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  methodologyVersion?: InputMaybe<Scalars["String"]>;
  methodologyVersion_contains?: InputMaybe<Scalars["String"]>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_ends_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_gt?: InputMaybe<Scalars["String"]>;
  methodologyVersion_gte?: InputMaybe<Scalars["String"]>;
  methodologyVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  methodologyVersion_lt?: InputMaybe<Scalars["String"]>;
  methodologyVersion_lte?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_contains?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_starts_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  network?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not?: InputMaybe<Network>;
  network_not_in?: InputMaybe<Array<Network>>;
  openPositionCount?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  openPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<DexAmmProtocol_Filter>>>;
  pools_?: InputMaybe<LiquidityPool_Filter>;
  protocolControlledValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  schemaVersion?: InputMaybe<Scalars["String"]>;
  schemaVersion_contains?: InputMaybe<Scalars["String"]>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_ends_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_gt?: InputMaybe<Scalars["String"]>;
  schemaVersion_gte?: InputMaybe<Scalars["String"]>;
  schemaVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  schemaVersion_lt?: InputMaybe<Scalars["String"]>;
  schemaVersion_lte?: InputMaybe<Scalars["String"]>;
  schemaVersion_not?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_contains?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_starts_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_contains_nocase?: InputMaybe<Scalars["String"]>;
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  slug_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  slug_gt?: InputMaybe<Scalars["String"]>;
  slug_gte?: InputMaybe<Scalars["String"]>;
  slug_in?: InputMaybe<Array<Scalars["String"]>>;
  slug_lt?: InputMaybe<Scalars["String"]>;
  slug_lte?: InputMaybe<Scalars["String"]>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<Scalars["String"]>>;
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  slug_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion?: InputMaybe<Scalars["String"]>;
  subgraphVersion_contains?: InputMaybe<Scalars["String"]>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_ends_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_gt?: InputMaybe<Scalars["String"]>;
  subgraphVersion_gte?: InputMaybe<Scalars["String"]>;
  subgraphVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  subgraphVersion_lt?: InputMaybe<Scalars["String"]>;
  subgraphVersion_lte?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_contains?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_starts_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalPoolCount?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_gt?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_gte?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalPoolCount_lt?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_lte?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_not?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  type?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not?: InputMaybe<ProtocolType>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  uncollectedProtocolSideValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
};

export enum DexAmmProtocol_OrderBy {
  Regenesis = "_regenesis",
  ActiveLiquidityUsd = "activeLiquidityUSD",
  CumulativePositionCount = "cumulativePositionCount",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeUniqueLPs = "cumulativeUniqueLPs",
  CumulativeUniqueTraders = "cumulativeUniqueTraders",
  CumulativeUniqueUsers = "cumulativeUniqueUsers",
  CumulativeVolumeUsd = "cumulativeVolumeUSD",
  DailyUsageMetrics = "dailyUsageMetrics",
  FinancialMetrics = "financialMetrics",
  HourlyUsageMetrics = "hourlyUsageMetrics",
  Id = "id",
  LastSnapshotDayId = "lastSnapshotDayID",
  LastUpdateBlockNumber = "lastUpdateBlockNumber",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  MethodologyVersion = "methodologyVersion",
  Name = "name",
  Network = "network",
  OpenPositionCount = "openPositionCount",
  Pools = "pools",
  ProtocolControlledValueUsd = "protocolControlledValueUSD",
  SchemaVersion = "schemaVersion",
  Slug = "slug",
  SubgraphVersion = "subgraphVersion",
  TotalLiquidityUsd = "totalLiquidityUSD",
  TotalPoolCount = "totalPoolCount",
  TotalValueLockedUsd = "totalValueLockedUSD",
  Type = "type",
  UncollectedProtocolSideValueUsd = "uncollectedProtocolSideValueUSD",
  UncollectedSupplySideValueUsd = "uncollectedSupplySideValueUSD",
}

export type FinancialsDailySnapshot = {
  __typename?: "FinancialsDailySnapshot";
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars["BigDecimal"];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All historical trade volume in USD  */
  cumulativeVolumeUSD: Scalars["BigDecimal"];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars["BigDecimal"];
  /**  Number of days since Unix epoch time  */
  day: Scalars["Int"];
  /**  ID is # of days since Unix epoch time  */
  id: Scalars["Bytes"];
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol;
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedProtocolSideValueUSD: Scalars["BigDecimal"];
  /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedSupplySideValueUSD: Scalars["BigDecimal"];
};

export type FinancialsDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  day?: InputMaybe<Scalars["Int"]>;
  day_gt?: InputMaybe<Scalars["Int"]>;
  day_gte?: InputMaybe<Scalars["Int"]>;
  day_in?: InputMaybe<Array<Scalars["Int"]>>;
  day_lt?: InputMaybe<Scalars["Int"]>;
  day_lte?: InputMaybe<Scalars["Int"]>;
  day_not?: InputMaybe<Scalars["Int"]>;
  day_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_Filter>>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocolControlledValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedProtocolSideValueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  uncollectedSupplySideValueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
};

export enum FinancialsDailySnapshot_OrderBy {
  ActiveLiquidityUsd = "activeLiquidityUSD",
  BlockNumber = "blockNumber",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeVolumeUsd = "cumulativeVolumeUSD",
  DailyProtocolSideRevenueUsd = "dailyProtocolSideRevenueUSD",
  DailySupplySideRevenueUsd = "dailySupplySideRevenueUSD",
  DailyTotalRevenueUsd = "dailyTotalRevenueUSD",
  DailyVolumeUsd = "dailyVolumeUSD",
  Day = "day",
  Id = "id",
  Protocol = "protocol",
  ProtocolControlledValueUsd = "protocolControlledValueUSD",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  Timestamp = "timestamp",
  TotalLiquidityUsd = "totalLiquidityUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
  UncollectedProtocolSideValueUsd = "uncollectedProtocolSideValueUSD",
  UncollectedSupplySideValueUsd = "uncollectedSupplySideValueUSD",
}

export type LiquidityPool = {
  __typename?: "LiquidityPool";
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars["BigInt"];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars["BigDecimal"];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars["Int"];
  /**  Creation block number  */
  createdBlockNumber: Scalars["BigInt"];
  /**  Creation timestamp  */
  createdTimestamp: Scalars["BigInt"];
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars["Int"];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars["Int"];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumesUSD: Array<Scalars["BigDecimal"]>;
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars["Int"];
  /**  Liquidity pool daily snapshots  */
  dailySnapshots: Array<LiquidityPoolDailySnapshot>;
  /**  All deposit (add liquidity) events occurred in this pool  */
  deposits: Array<Deposit>;
  /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
  fees: Array<LiquidityPoolFee>;
  /**  Liquidity pool hourly snapshots  */
  hourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
  /**  Smart contract address of the pool  */
  id: Scalars["Bytes"];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars["BigInt"]>;
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars["BigDecimal"]>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars["BigDecimal"]>;
  /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
  inputTokens: Array<Token>;
  /**  Whether this pool is single-sided (e.g. Bancor, Platypus's Alternative Pool). The specifics of the implementation depends on the protocol.  */
  isSingleSided: Scalars["Boolean"];
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars["Int"];
  /**  Hour ID of the most recent hourly snapshot  */
  lastSnapshotHourID: Scalars["Int"];
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars["BigInt"];
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars["BigInt"];
  /**  Token that is to represent ownership of liquidity  */
  liquidityToken?: Maybe<Token>;
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<TokenType>;
  /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
  name?: Maybe<Scalars["String"]>;
  /**  Number of open positions in this market  */
  openPositionCount: Scalars["Int"];
  /**  Number of positions in this market  */
  positionCount: Scalars["Int"];
  /**  All positions in this market  */
  positions: Array<Position>;
  /**  The protocol this pool belongs to  */
  protocol: DexAmmProtocol;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars["BigInt"]>;
  /**  All trade (swap) events occurred in this pool  */
  swaps: Array<Swap>;
  /**  Symbol of liquidity pool (e.g. 3CRV)  */
  symbol?: Maybe<Scalars["String"]>;
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars["BigInt"]>;
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars["BigInt"];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of this pool in USD  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars["BigDecimal"]>;
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars["BigDecimal"]>;
  /**  All withdraw (remove liquidity) events occurred in this pool  */
  withdraws: Array<Withdraw>;
};

export type LiquidityPoolDailySnapshotsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPoolDailySnapshot_Filter>;
};

export type LiquidityPoolDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type LiquidityPoolFeesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPoolFee_Filter>;
};

export type LiquidityPoolHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>;
};

export type LiquidityPoolInputTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type LiquidityPoolPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Position_Filter>;
};

export type LiquidityPoolRewardTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RewardToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RewardToken_Filter>;
};

export type LiquidityPoolSwapsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type LiquidityPoolWithdrawsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type LiquidityPoolDailySnapshot = {
  __typename?: "LiquidityPoolDailySnapshot";
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars["BigInt"];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars["BigDecimal"];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars["Int"];
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars["Int"];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars["Int"];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All trade volume , in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars["BigDecimal"];
  /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumesUSD: Array<Scalars["BigDecimal"]>;
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars["Int"];
  /**  Total number of deposits (add liquidity) in a day  */
  dailyDepositCount: Scalars["Int"];
  /**  Daily revenue generated by the liquidity pool, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Daily revenue generated by the liquidity pool, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Total number of trades (swaps) in a day  */
  dailySwapCount: Scalars["Int"];
  /**  Daily revenue generated by the liquidity pool.  */
  dailyTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred in a given day, in USD  */
  dailyTotalVolumeUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumesUSD: Array<Scalars["BigDecimal"]>;
  /**  Total number of withdrawals (remove liquidity) in a day  */
  dailyWithdrawCount: Scalars["Int"];
  /**  Number of days since Unix epoch time  */
  day: Scalars["Int"];
  /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
  id: Scalars["Bytes"];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars["BigInt"]>;
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars["BigDecimal"]>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars["BigDecimal"]>;
  /**  Number of open positions in this market  */
  openPositionCount: Scalars["Int"];
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool;
  /**  Number of positions in this market  */
  positionCount: Scalars["Int"];
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars["BigInt"]>;
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars["BigInt"];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars["BigDecimal"]>;
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars["BigDecimal"]>;
};

export type LiquidityPoolDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeLiquidity?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  activeLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closedPositionCount?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  closedPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeDepositCount?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSwapCount?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeSwapCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeVolumesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeWithdrawCount?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyDepositCount?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_not?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailySwapCount?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_gt?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_gte?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailySwapCount_lt?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_lte?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_not?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyTotalVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyTotalVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyTotalVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumeTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  dailyVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  dailyVolumeTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  dailyVolumeTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  dailyVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  dailyVolumeTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  dailyVolumesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyVolumesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  dailyWithdrawCount?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  day?: InputMaybe<Scalars["Int"]>;
  day_gt?: InputMaybe<Scalars["Int"]>;
  day_gte?: InputMaybe<Scalars["Int"]>;
  day_in?: InputMaybe<Array<Scalars["Int"]>>;
  day_lt?: InputMaybe<Scalars["Int"]>;
  day_lte?: InputMaybe<Scalars["Int"]>;
  day_not?: InputMaybe<Scalars["Int"]>;
  day_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  inputTokenBalances?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenWeights?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  openPositionCount?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  openPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  positionCount?: InputMaybe<Scalars["Int"]>;
  positionCount_gt?: InputMaybe<Scalars["Int"]>;
  positionCount_gte?: InputMaybe<Scalars["Int"]>;
  positionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  positionCount_lt?: InputMaybe<Scalars["Int"]>;
  positionCount_lte?: InputMaybe<Scalars["Int"]>;
  positionCount_not?: InputMaybe<Scalars["Int"]>;
  positionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  stakedOutputTokenAmount?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tick?: InputMaybe<Scalars["BigInt"]>;
  tick_gt?: InputMaybe<Scalars["BigInt"]>;
  tick_gte?: InputMaybe<Scalars["BigInt"]>;
  tick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tick_lt?: InputMaybe<Scalars["BigInt"]>;
  tick_lte?: InputMaybe<Scalars["BigInt"]>;
  tick_not?: InputMaybe<Scalars["BigInt"]>;
  tick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
};

export enum LiquidityPoolDailySnapshot_OrderBy {
  ActiveLiquidity = "activeLiquidity",
  ActiveLiquidityUsd = "activeLiquidityUSD",
  BlockNumber = "blockNumber",
  ClosedPositionCount = "closedPositionCount",
  CumulativeDepositCount = "cumulativeDepositCount",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeSwapCount = "cumulativeSwapCount",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeVolumeTokenAmounts = "cumulativeVolumeTokenAmounts",
  CumulativeVolumeUsd = "cumulativeVolumeUSD",
  CumulativeVolumesUsd = "cumulativeVolumesUSD",
  CumulativeWithdrawCount = "cumulativeWithdrawCount",
  DailyDepositCount = "dailyDepositCount",
  DailyProtocolSideRevenueUsd = "dailyProtocolSideRevenueUSD",
  DailySupplySideRevenueUsd = "dailySupplySideRevenueUSD",
  DailySwapCount = "dailySwapCount",
  DailyTotalRevenueUsd = "dailyTotalRevenueUSD",
  DailyTotalVolumeUsd = "dailyTotalVolumeUSD",
  DailyVolumeTokenAmounts = "dailyVolumeTokenAmounts",
  DailyVolumesUsd = "dailyVolumesUSD",
  DailyWithdrawCount = "dailyWithdrawCount",
  Day = "day",
  Id = "id",
  InputTokenBalances = "inputTokenBalances",
  InputTokenBalancesUsd = "inputTokenBalancesUSD",
  InputTokenWeights = "inputTokenWeights",
  OpenPositionCount = "openPositionCount",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  PositionCount = "positionCount",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  RewardTokenEmissionsAmount = "rewardTokenEmissionsAmount",
  RewardTokenEmissionsUsd = "rewardTokenEmissionsUSD",
  StakedOutputTokenAmount = "stakedOutputTokenAmount",
  Tick = "tick",
  Timestamp = "timestamp",
  TotalLiquidity = "totalLiquidity",
  TotalLiquidityUsd = "totalLiquidityUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
  UncollectedProtocolSideTokenAmounts = "uncollectedProtocolSideTokenAmounts",
  UncollectedProtocolSideValuesUsd = "uncollectedProtocolSideValuesUSD",
  UncollectedSupplySideTokenAmounts = "uncollectedSupplySideTokenAmounts",
  UncollectedSupplySideValuesUsd = "uncollectedSupplySideValuesUSD",
}

export type LiquidityPoolFee = {
  __typename?: "LiquidityPoolFee";
  /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
  feePercentage?: Maybe<Scalars["BigDecimal"]>;
  /**  Type of fee this pool uses  */
  feeType: LiquidityPoolFeeType;
  /**  { Fee type }-{ Pool address }  */
  id: Scalars["Bytes"];
};

export enum LiquidityPoolFeeType {
  /**  One-time fee charged by the protocol during deposit, in percentages of the deposit token  */
  DepositFee = "DEPOSIT_FEE",
  /**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  DynamicLpFee = "DYNAMIC_LP_FEE",
  /**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  DynamicProtocolFee = "DYNAMIC_PROTOCOL_FEE",
  /**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  DynamicTradingFee = "DYNAMIC_TRADING_FEE",
  /**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
  FixedLpFee = "FIXED_LP_FEE",
  /**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
  FixedProtocolFee = "FIXED_PROTOCOL_FEE",
  /**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
  FixedTradingFee = "FIXED_TRADING_FEE",
  /**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
  TieredTradingFee = "TIERED_TRADING_FEE",
  /**  One-time fee charged by the protocol (e.g. Bancor v3) during withdrawal, in percentages of the withdrawal token  */
  WithdrawalFee = "WITHDRAWAL_FEE",
}

export type LiquidityPoolFee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_Filter>>>;
  feePercentage?: InputMaybe<Scalars["BigDecimal"]>;
  feePercentage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feePercentage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feePercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feePercentage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feePercentage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feePercentage_not?: InputMaybe<Scalars["BigDecimal"]>;
  feePercentage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feeType?: InputMaybe<LiquidityPoolFeeType>;
  feeType_in?: InputMaybe<Array<LiquidityPoolFeeType>>;
  feeType_not?: InputMaybe<LiquidityPoolFeeType>;
  feeType_not_in?: InputMaybe<Array<LiquidityPoolFeeType>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_Filter>>>;
};

export enum LiquidityPoolFee_OrderBy {
  FeePercentage = "feePercentage",
  FeeType = "feeType",
  Id = "id",
}

export type LiquidityPoolHourlySnapshot = {
  __typename?: "LiquidityPoolHourlySnapshot";
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars["BigInt"];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars["BigDecimal"];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars["Int"];
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars["Int"];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars["Int"];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All trade volume , in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars["BigDecimal"];
  /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumesUSD: Array<Scalars["BigDecimal"]>;
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars["Int"];
  /**  Number of hours since Unix epoch time  */
  hour: Scalars["Int"];
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars["Int"];
  /**  Hourly revenue generated by the liquidity pool, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Hourly revenue generated by the liquidity pool, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars["Int"];
  /**  Hourly revenue generated by the liquidity pool.  */
  hourlyTotalRevenueUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred in a given day, in USD  */
  hourlyTotalVolumeUSD: Scalars["BigDecimal"];
  /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumesUSD: Array<Scalars["BigDecimal"]>;
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars["Int"];
  /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
  id: Scalars["Bytes"];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars["BigInt"]>;
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars["BigDecimal"]>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars["BigDecimal"]>;
  /**  Number of open positions in this market  */
  openPositionCount: Scalars["Int"];
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool;
  /**  Number of positions in this market  */
  positionCount: Scalars["Int"];
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars["BigInt"]>;
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars["BigInt"];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars["BigDecimal"]>;
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars["BigInt"]>;
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars["BigDecimal"]>;
};

export type LiquidityPoolHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeLiquidity?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  activeLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closedPositionCount?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  closedPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeDepositCount?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSwapCount?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeSwapCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeVolumesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeWithdrawCount?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hour?: InputMaybe<Scalars["Int"]>;
  hour_gt?: InputMaybe<Scalars["Int"]>;
  hour_gte?: InputMaybe<Scalars["Int"]>;
  hour_in?: InputMaybe<Array<Scalars["Int"]>>;
  hour_lt?: InputMaybe<Scalars["Int"]>;
  hour_lte?: InputMaybe<Scalars["Int"]>;
  hour_not?: InputMaybe<Scalars["Int"]>;
  hour_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyDepositCount?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlySwapCount?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlySwapCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_not?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyTotalVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyTotalVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyVolumeTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  hourlyVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  hourlyVolumeTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  hourlyVolumeTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  hourlyVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  hourlyVolumeTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  hourlyVolumesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyVolumesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyVolumesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyVolumesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyVolumesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  hourlyWithdrawCount?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  inputTokenBalances?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenWeights?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  openPositionCount?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  openPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  positionCount?: InputMaybe<Scalars["Int"]>;
  positionCount_gt?: InputMaybe<Scalars["Int"]>;
  positionCount_gte?: InputMaybe<Scalars["Int"]>;
  positionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  positionCount_lt?: InputMaybe<Scalars["Int"]>;
  positionCount_lte?: InputMaybe<Scalars["Int"]>;
  positionCount_not?: InputMaybe<Scalars["Int"]>;
  positionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  stakedOutputTokenAmount?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tick?: InputMaybe<Scalars["BigInt"]>;
  tick_gt?: InputMaybe<Scalars["BigInt"]>;
  tick_gte?: InputMaybe<Scalars["BigInt"]>;
  tick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tick_lt?: InputMaybe<Scalars["BigInt"]>;
  tick_lte?: InputMaybe<Scalars["BigInt"]>;
  tick_not?: InputMaybe<Scalars["BigInt"]>;
  tick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
};

export enum LiquidityPoolHourlySnapshot_OrderBy {
  ActiveLiquidity = "activeLiquidity",
  ActiveLiquidityUsd = "activeLiquidityUSD",
  BlockNumber = "blockNumber",
  ClosedPositionCount = "closedPositionCount",
  CumulativeDepositCount = "cumulativeDepositCount",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeSwapCount = "cumulativeSwapCount",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeVolumeTokenAmounts = "cumulativeVolumeTokenAmounts",
  CumulativeVolumeUsd = "cumulativeVolumeUSD",
  CumulativeVolumesUsd = "cumulativeVolumesUSD",
  CumulativeWithdrawCount = "cumulativeWithdrawCount",
  Hour = "hour",
  HourlyDepositCount = "hourlyDepositCount",
  HourlyProtocolSideRevenueUsd = "hourlyProtocolSideRevenueUSD",
  HourlySupplySideRevenueUsd = "hourlySupplySideRevenueUSD",
  HourlySwapCount = "hourlySwapCount",
  HourlyTotalRevenueUsd = "hourlyTotalRevenueUSD",
  HourlyTotalVolumeUsd = "hourlyTotalVolumeUSD",
  HourlyVolumeTokenAmounts = "hourlyVolumeTokenAmounts",
  HourlyVolumesUsd = "hourlyVolumesUSD",
  HourlyWithdrawCount = "hourlyWithdrawCount",
  Id = "id",
  InputTokenBalances = "inputTokenBalances",
  InputTokenBalancesUsd = "inputTokenBalancesUSD",
  InputTokenWeights = "inputTokenWeights",
  OpenPositionCount = "openPositionCount",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  PositionCount = "positionCount",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  RewardTokenEmissionsAmount = "rewardTokenEmissionsAmount",
  RewardTokenEmissionsUsd = "rewardTokenEmissionsUSD",
  StakedOutputTokenAmount = "stakedOutputTokenAmount",
  Tick = "tick",
  Timestamp = "timestamp",
  TotalLiquidity = "totalLiquidity",
  TotalLiquidityUsd = "totalLiquidityUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
  UncollectedProtocolSideTokenAmounts = "uncollectedProtocolSideTokenAmounts",
  UncollectedProtocolSideValuesUsd = "uncollectedProtocolSideValuesUSD",
  UncollectedSupplySideTokenAmounts = "uncollectedSupplySideTokenAmounts",
  UncollectedSupplySideValuesUsd = "uncollectedSupplySideValuesUSD",
}

export type LiquidityPool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeLiquidity?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  activeLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  activeLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  activeLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPool_Filter>>>;
  closedPositionCount?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  closedPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not?: InputMaybe<Scalars["Int"]>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  createdBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositCount?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSwapCount?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeSwapCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeVolumeTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeVolumesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeVolumesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeWithdrawCount?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailySnapshots_?: InputMaybe<LiquidityPoolDailySnapshot_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  fees?: InputMaybe<Array<Scalars["String"]>>;
  fees_?: InputMaybe<LiquidityPoolFee_Filter>;
  fees_contains?: InputMaybe<Array<Scalars["String"]>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  fees_not?: InputMaybe<Array<Scalars["String"]>>;
  fees_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  hourlySnapshots_?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  inputTokenBalances?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenWeights?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokens?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_?: InputMaybe<Token_Filter>;
  inputTokens_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  isSingleSided?: InputMaybe<Scalars["Boolean"]>;
  isSingleSided_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isSingleSided_not?: InputMaybe<Scalars["Boolean"]>;
  isSingleSided_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lastSnapshotDayID?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_gt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_gte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotDayID_lt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_lte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_not?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotHourID?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_gt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_gte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotHourID_lt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_lte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_not?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityToken?: InputMaybe<Scalars["String"]>;
  liquidityTokenType?: InputMaybe<TokenType>;
  liquidityTokenType_in?: InputMaybe<Array<TokenType>>;
  liquidityTokenType_not?: InputMaybe<TokenType>;
  liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>;
  liquidityToken_?: InputMaybe<Token_Filter>;
  liquidityToken_contains?: InputMaybe<Scalars["String"]>;
  liquidityToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_ends_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_gt?: InputMaybe<Scalars["String"]>;
  liquidityToken_gte?: InputMaybe<Scalars["String"]>;
  liquidityToken_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidityToken_lt?: InputMaybe<Scalars["String"]>;
  liquidityToken_lte?: InputMaybe<Scalars["String"]>;
  liquidityToken_not?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_contains?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidityToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_starts_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openPositionCount?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  openPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  openPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not?: InputMaybe<Scalars["Int"]>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPool_Filter>>>;
  positionCount?: InputMaybe<Scalars["Int"]>;
  positionCount_gt?: InputMaybe<Scalars["Int"]>;
  positionCount_gte?: InputMaybe<Scalars["Int"]>;
  positionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  positionCount_lt?: InputMaybe<Scalars["Int"]>;
  positionCount_lte?: InputMaybe<Scalars["Int"]>;
  positionCount_not?: InputMaybe<Scalars["Int"]>;
  positionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  positions_?: InputMaybe<Position_Filter>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  rewardTokens?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokens_?: InputMaybe<RewardToken_Filter>;
  rewardTokens_contains?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokens_not?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars["BigInt"]>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swaps_?: InputMaybe<Swap_Filter>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick?: InputMaybe<Scalars["BigInt"]>;
  tick_gt?: InputMaybe<Scalars["BigInt"]>;
  tick_gte?: InputMaybe<Scalars["BigInt"]>;
  tick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tick_lt?: InputMaybe<Scalars["BigInt"]>;
  tick_lte?: InputMaybe<Scalars["BigInt"]>;
  tick_not?: InputMaybe<Scalars["BigInt"]>;
  tick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  withdraws_?: InputMaybe<Withdraw_Filter>;
};

export enum LiquidityPool_OrderBy {
  ActiveLiquidity = "activeLiquidity",
  ActiveLiquidityUsd = "activeLiquidityUSD",
  ClosedPositionCount = "closedPositionCount",
  CreatedBlockNumber = "createdBlockNumber",
  CreatedTimestamp = "createdTimestamp",
  CumulativeDepositCount = "cumulativeDepositCount",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeSwapCount = "cumulativeSwapCount",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeVolumeTokenAmounts = "cumulativeVolumeTokenAmounts",
  CumulativeVolumeUsd = "cumulativeVolumeUSD",
  CumulativeVolumesUsd = "cumulativeVolumesUSD",
  CumulativeWithdrawCount = "cumulativeWithdrawCount",
  DailySnapshots = "dailySnapshots",
  Deposits = "deposits",
  Fees = "fees",
  HourlySnapshots = "hourlySnapshots",
  Id = "id",
  InputTokenBalances = "inputTokenBalances",
  InputTokenBalancesUsd = "inputTokenBalancesUSD",
  InputTokenWeights = "inputTokenWeights",
  InputTokens = "inputTokens",
  IsSingleSided = "isSingleSided",
  LastSnapshotDayId = "lastSnapshotDayID",
  LastSnapshotHourId = "lastSnapshotHourID",
  LastUpdateBlockNumber = "lastUpdateBlockNumber",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  LiquidityToken = "liquidityToken",
  LiquidityTokenType = "liquidityTokenType",
  LiquidityTokenDecimals = "liquidityToken__decimals",
  LiquidityTokenId = "liquidityToken__id",
  LiquidityTokenLastPriceBlockNumber = "liquidityToken__lastPriceBlockNumber",
  LiquidityTokenLastPriceUsd = "liquidityToken__lastPriceUSD",
  LiquidityTokenName = "liquidityToken__name",
  LiquidityTokenSymbol = "liquidityToken__symbol",
  Name = "name",
  OpenPositionCount = "openPositionCount",
  PositionCount = "positionCount",
  Positions = "positions",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  RewardTokenEmissionsAmount = "rewardTokenEmissionsAmount",
  RewardTokenEmissionsUsd = "rewardTokenEmissionsUSD",
  RewardTokens = "rewardTokens",
  StakedOutputTokenAmount = "stakedOutputTokenAmount",
  Swaps = "swaps",
  Symbol = "symbol",
  Tick = "tick",
  TotalLiquidity = "totalLiquidity",
  TotalLiquidityUsd = "totalLiquidityUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
  UncollectedProtocolSideTokenAmounts = "uncollectedProtocolSideTokenAmounts",
  UncollectedProtocolSideValuesUsd = "uncollectedProtocolSideValuesUSD",
  UncollectedSupplySideTokenAmounts = "uncollectedSupplySideTokenAmounts",
  UncollectedSupplySideValuesUsd = "uncollectedSupplySideValuesUSD",
  Withdraws = "withdraws",
}

export enum Network {
  ArbitrumOne = "ARBITRUM_ONE",
  ArweaveMainnet = "ARWEAVE_MAINNET",
  Aurora = "AURORA",
  Avalanche = "AVALANCHE",
  Boba = "BOBA",
  Bsc = "BSC",
  Celo = "CELO",
  Cosmos = "COSMOS",
  Cronos = "CRONOS",
  Fantom = "FANTOM",
  Fuse = "FUSE",
  Harmony = "HARMONY",
  Juno = "JUNO",
  Mainnet = "MAINNET",
  Matic = "MATIC",
  Moonbeam = "MOONBEAM",
  Moonriver = "MOONRIVER",
  NearMainnet = "NEAR_MAINNET",
  Optimism = "OPTIMISM",
  Osmosis = "OSMOSIS",
  Xdai = "XDAI",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Position = {
  __typename?: "Position";
  /**  Account that owns this position  */
  account: Account;
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars["BigInt"]>;
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars["BigInt"];
  /**  amount of tokens ever deposited to position  */
  cumulativeDepositTokenAmounts: Array<Scalars["BigInt"]>;
  /**  amount of tokens in USD deposited to position  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Total reward token accumulated under this position, in USD  */
  cumulativeRewardUSD?: Maybe<Array<Scalars["BigInt"]>>;
  /**  amount of tokens ever withdrawn from position (without fees)  */
  cumulativeWithdrawTokenAmounts: Array<Scalars["BigInt"]>;
  /**  amount of tokens in USD withdrawn from position (without fees)  */
  cumulativeWithdrawUSD: Scalars["BigDecimal"];
  /**  Number of deposits related to this position  */
  depositCount: Scalars["Int"];
  /**  All deposit events of this position  */
  deposits: Array<Deposit>;
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars["Bytes"]>;
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars["Bytes"];
  /**  { Account address }-{ Market address }-{ Count }  */
  id: Scalars["Bytes"];
  /**  total position liquidity  */
  liquidity: Scalars["BigInt"];
  /**  Token that is to represent ownership of liquidity  */
  liquidityToken?: Maybe<Token>;
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<TokenType>;
  /**  total position liquidity in USD  */
  liquidityUSD: Scalars["BigDecimal"];
  /**  The liquidity pool in which this position was opened  */
  pool: LiquidityPool;
  /**  Position daily snapshots for open positions  */
  snapshots: Array<PositionSnapshot>;
  /**  lower tick of the position  */
  tickLower?: Maybe<Tick>;
  /**  upper tick of the position  */
  tickUpper?: Maybe<Tick>;
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars["BigInt"];
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars["Int"];
  /**  All withdraw events of this position  */
  withdraws: Array<Withdraw>;
};

export type PositionDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type PositionSnapshotsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PositionSnapshot_Filter>;
};

export type PositionWithdrawsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type PositionSnapshot = {
  __typename?: "PositionSnapshot";
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  amount of tokens ever deposited to position  */
  cumulativeDepositTokenAmounts: Array<Scalars["BigInt"]>;
  /**  amount of tokens in USD deposited to position  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Total reward token accumulated under this position, in native amounts  */
  cumulativeRewardTokenAmounts?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Total reward token accumulated under this position, in USD  */
  cumulativeRewardUSD?: Maybe<Array<Scalars["BigInt"]>>;
  /**  amount of tokens ever withdrawn from position (without fees)  */
  cumulativeWithdrawTokenAmounts: Array<Scalars["BigInt"]>;
  /**  amount of tokens in USD withdrawn from position (without fees)  */
  cumulativeWithdrawUSD: Scalars["BigDecimal"];
  /**  Number of deposits related to this position  */
  depositCount: Scalars["Int"];
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars["Bytes"];
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars["Bytes"];
  /**  total position liquidity  */
  liquidity?: Maybe<Scalars["BigInt"]>;
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<TokenType>;
  /**  total position liquidity in USD  */
  liquidityUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars["BigInt"];
  /**  Position of this snapshot  */
  position: Position;
  /**  Timestamp of this snapshot  */
  timestamp: Scalars["BigInt"];
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars["Int"];
};

export type PositionSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeDepositTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeRewardTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeRewardTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeRewardTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeRewardUSD?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeWithdrawTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeWithdrawUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  depositCount?: InputMaybe<Scalars["Int"]>;
  depositCount_gt?: InputMaybe<Scalars["Int"]>;
  depositCount_gte?: InputMaybe<Scalars["Int"]>;
  depositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositCount_lt?: InputMaybe<Scalars["Int"]>;
  depositCount_lte?: InputMaybe<Scalars["Int"]>;
  depositCount_not?: InputMaybe<Scalars["Int"]>;
  depositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidityTokenType?: InputMaybe<TokenType>;
  liquidityTokenType_in?: InputMaybe<Array<TokenType>>;
  liquidityTokenType_not?: InputMaybe<TokenType>;
  liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>;
  liquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>;
  position?: InputMaybe<Scalars["String"]>;
  position_?: InputMaybe<Position_Filter>;
  position_contains?: InputMaybe<Scalars["String"]>;
  position_contains_nocase?: InputMaybe<Scalars["String"]>;
  position_ends_with?: InputMaybe<Scalars["String"]>;
  position_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  position_gt?: InputMaybe<Scalars["String"]>;
  position_gte?: InputMaybe<Scalars["String"]>;
  position_in?: InputMaybe<Array<Scalars["String"]>>;
  position_lt?: InputMaybe<Scalars["String"]>;
  position_lte?: InputMaybe<Scalars["String"]>;
  position_not?: InputMaybe<Scalars["String"]>;
  position_not_contains?: InputMaybe<Scalars["String"]>;
  position_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  position_not_ends_with?: InputMaybe<Scalars["String"]>;
  position_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  position_not_in?: InputMaybe<Array<Scalars["String"]>>;
  position_not_starts_with?: InputMaybe<Scalars["String"]>;
  position_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  position_starts_with?: InputMaybe<Scalars["String"]>;
  position_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  withdrawCount?: InputMaybe<Scalars["Int"]>;
  withdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  withdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  withdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  withdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  withdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  withdrawCount_not?: InputMaybe<Scalars["Int"]>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum PositionSnapshot_OrderBy {
  BlockNumber = "blockNumber",
  CumulativeDepositTokenAmounts = "cumulativeDepositTokenAmounts",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeRewardTokenAmounts = "cumulativeRewardTokenAmounts",
  CumulativeRewardUsd = "cumulativeRewardUSD",
  CumulativeWithdrawTokenAmounts = "cumulativeWithdrawTokenAmounts",
  CumulativeWithdrawUsd = "cumulativeWithdrawUSD",
  DepositCount = "depositCount",
  Hash = "hash",
  Id = "id",
  Liquidity = "liquidity",
  LiquidityTokenType = "liquidityTokenType",
  LiquidityUsd = "liquidityUSD",
  LogIndex = "logIndex",
  Nonce = "nonce",
  Position = "position",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionCumulativeDepositUsd = "position__cumulativeDepositUSD",
  PositionCumulativeWithdrawUsd = "position__cumulativeWithdrawUSD",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionLiquidity = "position__liquidity",
  PositionLiquidityTokenType = "position__liquidityTokenType",
  PositionLiquidityUsd = "position__liquidityUSD",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Timestamp = "timestamp",
  WithdrawCount = "withdrawCount",
}

export type Position_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  blockNumberClosed?: InputMaybe<Scalars["BigInt"]>;
  blockNumberClosed_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberClosed_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberClosed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberClosed_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberClosed_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberClosed_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberClosed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberOpened?: InputMaybe<Scalars["BigInt"]>;
  blockNumberOpened_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberOpened_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberOpened_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberOpened_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberOpened_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberOpened_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberOpened_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeDepositTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeDepositTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeRewardUSD?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeRewardUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeWithdrawTokenAmounts_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  cumulativeWithdrawUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeWithdrawUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeWithdrawUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  depositCount?: InputMaybe<Scalars["Int"]>;
  depositCount_gt?: InputMaybe<Scalars["Int"]>;
  depositCount_gte?: InputMaybe<Scalars["Int"]>;
  depositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositCount_lt?: InputMaybe<Scalars["Int"]>;
  depositCount_lte?: InputMaybe<Scalars["Int"]>;
  depositCount_not?: InputMaybe<Scalars["Int"]>;
  depositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  deposits_?: InputMaybe<Deposit_Filter>;
  hashClosed?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_contains?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_gt?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_gte?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hashClosed_lt?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_lte?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_not?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hashClosed_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hashOpened?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_contains?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_gt?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_gte?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hashOpened_lt?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_lte?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_not?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hashOpened_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidityToken?: InputMaybe<Scalars["String"]>;
  liquidityTokenType?: InputMaybe<TokenType>;
  liquidityTokenType_in?: InputMaybe<Array<TokenType>>;
  liquidityTokenType_not?: InputMaybe<TokenType>;
  liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>;
  liquidityToken_?: InputMaybe<Token_Filter>;
  liquidityToken_contains?: InputMaybe<Scalars["String"]>;
  liquidityToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_ends_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_gt?: InputMaybe<Scalars["String"]>;
  liquidityToken_gte?: InputMaybe<Scalars["String"]>;
  liquidityToken_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidityToken_lt?: InputMaybe<Scalars["String"]>;
  liquidityToken_lte?: InputMaybe<Scalars["String"]>;
  liquidityToken_not?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_contains?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidityToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityToken_starts_with?: InputMaybe<Scalars["String"]>;
  liquidityToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidityUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshots_?: InputMaybe<PositionSnapshot_Filter>;
  tickLower?: InputMaybe<Scalars["String"]>;
  tickLower_?: InputMaybe<Tick_Filter>;
  tickLower_contains?: InputMaybe<Scalars["String"]>;
  tickLower_contains_nocase?: InputMaybe<Scalars["String"]>;
  tickLower_ends_with?: InputMaybe<Scalars["String"]>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tickLower_gt?: InputMaybe<Scalars["String"]>;
  tickLower_gte?: InputMaybe<Scalars["String"]>;
  tickLower_in?: InputMaybe<Array<Scalars["String"]>>;
  tickLower_lt?: InputMaybe<Scalars["String"]>;
  tickLower_lte?: InputMaybe<Scalars["String"]>;
  tickLower_not?: InputMaybe<Scalars["String"]>;
  tickLower_not_contains?: InputMaybe<Scalars["String"]>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tickLower_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tickLower_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tickLower_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tickLower_starts_with?: InputMaybe<Scalars["String"]>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tickUpper?: InputMaybe<Scalars["String"]>;
  tickUpper_?: InputMaybe<Tick_Filter>;
  tickUpper_contains?: InputMaybe<Scalars["String"]>;
  tickUpper_contains_nocase?: InputMaybe<Scalars["String"]>;
  tickUpper_ends_with?: InputMaybe<Scalars["String"]>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tickUpper_gt?: InputMaybe<Scalars["String"]>;
  tickUpper_gte?: InputMaybe<Scalars["String"]>;
  tickUpper_in?: InputMaybe<Array<Scalars["String"]>>;
  tickUpper_lt?: InputMaybe<Scalars["String"]>;
  tickUpper_lte?: InputMaybe<Scalars["String"]>;
  tickUpper_not?: InputMaybe<Scalars["String"]>;
  tickUpper_not_contains?: InputMaybe<Scalars["String"]>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tickUpper_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tickUpper_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tickUpper_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tickUpper_starts_with?: InputMaybe<Scalars["String"]>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestampClosed?: InputMaybe<Scalars["BigInt"]>;
  timestampClosed_gt?: InputMaybe<Scalars["BigInt"]>;
  timestampClosed_gte?: InputMaybe<Scalars["BigInt"]>;
  timestampClosed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestampClosed_lt?: InputMaybe<Scalars["BigInt"]>;
  timestampClosed_lte?: InputMaybe<Scalars["BigInt"]>;
  timestampClosed_not?: InputMaybe<Scalars["BigInt"]>;
  timestampClosed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestampOpened?: InputMaybe<Scalars["BigInt"]>;
  timestampOpened_gt?: InputMaybe<Scalars["BigInt"]>;
  timestampOpened_gte?: InputMaybe<Scalars["BigInt"]>;
  timestampOpened_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestampOpened_lt?: InputMaybe<Scalars["BigInt"]>;
  timestampOpened_lte?: InputMaybe<Scalars["BigInt"]>;
  timestampOpened_not?: InputMaybe<Scalars["BigInt"]>;
  timestampOpened_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  withdrawCount?: InputMaybe<Scalars["Int"]>;
  withdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  withdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  withdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  withdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  withdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  withdrawCount_not?: InputMaybe<Scalars["Int"]>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  withdraws_?: InputMaybe<Withdraw_Filter>;
};

export enum Position_OrderBy {
  Account = "account",
  AccountNewUser = "account___newUser",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountSwapCount = "account__swapCount",
  AccountWithdrawCount = "account__withdrawCount",
  BlockNumberClosed = "blockNumberClosed",
  BlockNumberOpened = "blockNumberOpened",
  CumulativeDepositTokenAmounts = "cumulativeDepositTokenAmounts",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeRewardUsd = "cumulativeRewardUSD",
  CumulativeWithdrawTokenAmounts = "cumulativeWithdrawTokenAmounts",
  CumulativeWithdrawUsd = "cumulativeWithdrawUSD",
  DepositCount = "depositCount",
  Deposits = "deposits",
  HashClosed = "hashClosed",
  HashOpened = "hashOpened",
  Id = "id",
  Liquidity = "liquidity",
  LiquidityToken = "liquidityToken",
  LiquidityTokenType = "liquidityTokenType",
  LiquidityTokenDecimals = "liquidityToken__decimals",
  LiquidityTokenId = "liquidityToken__id",
  LiquidityTokenLastPriceBlockNumber = "liquidityToken__lastPriceBlockNumber",
  LiquidityTokenLastPriceUsd = "liquidityToken__lastPriceUSD",
  LiquidityTokenName = "liquidityToken__name",
  LiquidityTokenSymbol = "liquidityToken__symbol",
  LiquidityUsd = "liquidityUSD",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Snapshots = "snapshots",
  TickLower = "tickLower",
  TickLowerCreatedBlockNumber = "tickLower__createdBlockNumber",
  TickLowerCreatedTimestamp = "tickLower__createdTimestamp",
  TickLowerId = "tickLower__id",
  TickLowerIndex = "tickLower__index",
  TickLowerLastSnapshotDayId = "tickLower__lastSnapshotDayID",
  TickLowerLastSnapshotHourId = "tickLower__lastSnapshotHourID",
  TickLowerLastUpdateBlockNumber = "tickLower__lastUpdateBlockNumber",
  TickLowerLastUpdateTimestamp = "tickLower__lastUpdateTimestamp",
  TickLowerLiquidityGross = "tickLower__liquidityGross",
  TickLowerLiquidityGrossUsd = "tickLower__liquidityGrossUSD",
  TickLowerLiquidityNet = "tickLower__liquidityNet",
  TickLowerLiquidityNetUsd = "tickLower__liquidityNetUSD",
  TickUpper = "tickUpper",
  TickUpperCreatedBlockNumber = "tickUpper__createdBlockNumber",
  TickUpperCreatedTimestamp = "tickUpper__createdTimestamp",
  TickUpperId = "tickUpper__id",
  TickUpperIndex = "tickUpper__index",
  TickUpperLastSnapshotDayId = "tickUpper__lastSnapshotDayID",
  TickUpperLastSnapshotHourId = "tickUpper__lastSnapshotHourID",
  TickUpperLastUpdateBlockNumber = "tickUpper__lastUpdateBlockNumber",
  TickUpperLastUpdateTimestamp = "tickUpper__lastUpdateTimestamp",
  TickUpperLiquidityGross = "tickUpper__liquidityGross",
  TickUpperLiquidityGrossUsd = "tickUpper__liquidityGrossUSD",
  TickUpperLiquidityNet = "tickUpper__liquidityNet",
  TickUpperLiquidityNetUsd = "tickUpper__liquidityNetUSD",
  TimestampClosed = "timestampClosed",
  TimestampOpened = "timestampOpened",
  WithdrawCount = "withdrawCount",
  Withdraws = "withdraws",
}

export type Protocol = {
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars["Bytes"];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars["String"];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars["String"];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars["String"];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars["String"];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars["String"];
  /**  Total number of pools  */
  totalPoolCount: Scalars["Int"];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
};

export type ProtocolDailyUsageMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
};

export type ProtocolFinancialMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FinancialsDailySnapshot_Filter>;
};

export type ProtocolHourlyUsageMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
};

export enum ProtocolType {
  Bridge = "BRIDGE",
  Exchange = "EXCHANGE",
  Generic = "GENERIC",
  Lending = "LENDING",
  Yield = "YIELD",
}

export type Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Protocol_Filter>>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_Filter>;
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  methodologyVersion?: InputMaybe<Scalars["String"]>;
  methodologyVersion_contains?: InputMaybe<Scalars["String"]>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_ends_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_gt?: InputMaybe<Scalars["String"]>;
  methodologyVersion_gte?: InputMaybe<Scalars["String"]>;
  methodologyVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  methodologyVersion_lt?: InputMaybe<Scalars["String"]>;
  methodologyVersion_lte?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_contains?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  methodologyVersion_starts_with?: InputMaybe<Scalars["String"]>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  network?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not?: InputMaybe<Network>;
  network_not_in?: InputMaybe<Array<Network>>;
  or?: InputMaybe<Array<InputMaybe<Protocol_Filter>>>;
  protocolControlledValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  schemaVersion?: InputMaybe<Scalars["String"]>;
  schemaVersion_contains?: InputMaybe<Scalars["String"]>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_ends_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_gt?: InputMaybe<Scalars["String"]>;
  schemaVersion_gte?: InputMaybe<Scalars["String"]>;
  schemaVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  schemaVersion_lt?: InputMaybe<Scalars["String"]>;
  schemaVersion_lte?: InputMaybe<Scalars["String"]>;
  schemaVersion_not?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_contains?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  schemaVersion_starts_with?: InputMaybe<Scalars["String"]>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_contains_nocase?: InputMaybe<Scalars["String"]>;
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  slug_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  slug_gt?: InputMaybe<Scalars["String"]>;
  slug_gte?: InputMaybe<Scalars["String"]>;
  slug_in?: InputMaybe<Array<Scalars["String"]>>;
  slug_lt?: InputMaybe<Scalars["String"]>;
  slug_lte?: InputMaybe<Scalars["String"]>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<Scalars["String"]>>;
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  slug_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion?: InputMaybe<Scalars["String"]>;
  subgraphVersion_contains?: InputMaybe<Scalars["String"]>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_ends_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_gt?: InputMaybe<Scalars["String"]>;
  subgraphVersion_gte?: InputMaybe<Scalars["String"]>;
  subgraphVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  subgraphVersion_lt?: InputMaybe<Scalars["String"]>;
  subgraphVersion_lte?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_contains?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  subgraphVersion_starts_with?: InputMaybe<Scalars["String"]>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalPoolCount?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_gt?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_gte?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalPoolCount_lt?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_lte?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_not?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  type?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not?: InputMaybe<ProtocolType>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
};

export enum Protocol_OrderBy {
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeUniqueUsers = "cumulativeUniqueUsers",
  DailyUsageMetrics = "dailyUsageMetrics",
  FinancialMetrics = "financialMetrics",
  HourlyUsageMetrics = "hourlyUsageMetrics",
  Id = "id",
  MethodologyVersion = "methodologyVersion",
  Name = "name",
  Network = "network",
  ProtocolControlledValueUsd = "protocolControlledValueUSD",
  SchemaVersion = "schemaVersion",
  Slug = "slug",
  SubgraphVersion = "subgraphVersion",
  TotalPoolCount = "totalPoolCount",
  TotalValueLockedUsd = "totalValueLockedUSD",
  Type = "type",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  dexAmmProtocol?: Maybe<DexAmmProtocol>;
  dexAmmProtocols: Array<DexAmmProtocol>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  helperStore?: Maybe<_HelperStore>;
  helperStores: Array<_HelperStore>;
  liquidityPool?: Maybe<LiquidityPool>;
  liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>;
  liquidityPoolAmounts: Array<_LiquidityPoolAmount>;
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>;
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>;
  liquidityPoolFee?: Maybe<LiquidityPoolFee>;
  liquidityPoolFees: Array<LiquidityPoolFee>;
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>;
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
  liquidityPools: Array<LiquidityPool>;
  position?: Maybe<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  positions: Array<Position>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tick?: Maybe<Tick>;
  tickDailySnapshot?: Maybe<TickDailySnapshot>;
  tickDailySnapshots: Array<TickDailySnapshot>;
  tickHourlySnapshot?: Maybe<TickHourlySnapshot>;
  tickHourlySnapshots: Array<TickHourlySnapshot>;
  ticks: Array<Tick>;
  token?: Maybe<Token>;
  tokenWhitelist?: Maybe<_TokenWhitelist>;
  tokenWhitelists: Array<_TokenWhitelist>;
  tokens: Array<Token>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type QueryActiveAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryActiveAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ActiveAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ActiveAccount_Filter>;
};

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type QueryDexAmmProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDexAmmProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DexAmmProtocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DexAmmProtocol_Filter>;
};

export type QueryFinancialsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFinancialsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FinancialsDailySnapshot_Filter>;
};

export type QueryHelperStoreArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryHelperStoresArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_HelperStore_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_HelperStore_Filter>;
};

export type QueryLiquidityPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPoolAmountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPoolAmountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_LiquidityPoolAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_LiquidityPoolAmount_Filter>;
};

export type QueryLiquidityPoolDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPoolDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPoolDailySnapshot_Filter>;
};

export type QueryLiquidityPoolFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPoolFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPoolFee_Filter>;
};

export type QueryLiquidityPoolHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPoolHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>;
};

export type QueryLiquidityPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPool_Filter>;
};

export type QueryPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionSnapshot_Filter>;
};

export type QueryPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};

export type QueryProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};

export type QueryRewardTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRewardTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RewardToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardToken_Filter>;
};

export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};

export type QueryTickArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTickDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTickDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TickDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickDailySnapshot_Filter>;
};

export type QueryTickHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTickHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TickHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickHourlySnapshot_Filter>;
};

export type QueryTicksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tick_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenWhitelistArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenWhitelistsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_TokenWhitelist_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_TokenWhitelist_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryUsageMetricsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsageMetricsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
};

export type QueryUsageMetricsHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsageMetricsHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
};

export type QueryWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdraw_Filter>;
};

export type RewardToken = {
  __typename?: "RewardToken";
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars["Bytes"];
  /**  Reference to the actual token  */
  token: Token;
  /**  The type of the reward token  */
  type: RewardTokenType;
};

export enum RewardTokenType {
  /**  For reward tokens awarded to borrowers  */
  Borrow = "BORROW",
  /**  For reward tokens awarded to LPs/lenders  */
  Deposit = "DEPOSIT",
}

export type RewardToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardToken_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<RewardToken_Filter>>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<RewardTokenType>;
  type_in?: InputMaybe<Array<RewardTokenType>>;
  type_not?: InputMaybe<RewardTokenType>;
  type_not_in?: InputMaybe<Array<RewardTokenType>>;
};

export enum RewardToken_OrderBy {
  Id = "id",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenLastPriceBlockNumber = "token__lastPriceBlockNumber",
  TokenLastPriceUsd = "token__lastPriceUSD",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  Type = "type",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  dexAmmProtocol?: Maybe<DexAmmProtocol>;
  dexAmmProtocols: Array<DexAmmProtocol>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  helperStore?: Maybe<_HelperStore>;
  helperStores: Array<_HelperStore>;
  liquidityPool?: Maybe<LiquidityPool>;
  liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>;
  liquidityPoolAmounts: Array<_LiquidityPoolAmount>;
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>;
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>;
  liquidityPoolFee?: Maybe<LiquidityPoolFee>;
  liquidityPoolFees: Array<LiquidityPoolFee>;
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>;
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
  liquidityPools: Array<LiquidityPool>;
  position?: Maybe<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  positions: Array<Position>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tick?: Maybe<Tick>;
  tickDailySnapshot?: Maybe<TickDailySnapshot>;
  tickDailySnapshots: Array<TickDailySnapshot>;
  tickHourlySnapshot?: Maybe<TickHourlySnapshot>;
  tickHourlySnapshots: Array<TickHourlySnapshot>;
  ticks: Array<Tick>;
  token?: Maybe<Token>;
  tokenWhitelist?: Maybe<_TokenWhitelist>;
  tokenWhitelists: Array<_TokenWhitelist>;
  tokens: Array<Token>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type SubscriptionActiveAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionActiveAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ActiveAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ActiveAccount_Filter>;
};

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type SubscriptionDexAmmProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDexAmmProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DexAmmProtocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DexAmmProtocol_Filter>;
};

export type SubscriptionFinancialsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFinancialsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FinancialsDailySnapshot_Filter>;
};

export type SubscriptionHelperStoreArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionHelperStoresArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_HelperStore_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_HelperStore_Filter>;
};

export type SubscriptionLiquidityPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPoolAmountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPoolAmountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_LiquidityPoolAmount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_LiquidityPoolAmount_Filter>;
};

export type SubscriptionLiquidityPoolDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPoolDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPoolDailySnapshot_Filter>;
};

export type SubscriptionLiquidityPoolFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPoolFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPoolFee_Filter>;
};

export type SubscriptionLiquidityPoolHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPoolHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>;
};

export type SubscriptionLiquidityPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPool_Filter>;
};

export type SubscriptionPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionSnapshot_Filter>;
};

export type SubscriptionPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};

export type SubscriptionProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};

export type SubscriptionRewardTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRewardTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RewardToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardToken_Filter>;
};

export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};

export type SubscriptionTickArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTickDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTickDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TickDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickDailySnapshot_Filter>;
};

export type SubscriptionTickHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTickHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TickHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickHourlySnapshot_Filter>;
};

export type SubscriptionTicksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tick_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenWhitelistArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenWhitelistsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<_TokenWhitelist_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_TokenWhitelist_Filter>;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionUsageMetricsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsageMetricsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
};

export type SubscriptionUsageMetricsHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsageMetricsHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
};

export type SubscriptionWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Swap = {
  __typename?: "Swap";
  /**  Account that emitted this event  */
  account: Account;
  /**  Amount of token deposited into pool in native units  */
  amountIn: Scalars["BigInt"];
  /**  Amount of token deposited into pool in USD  */
  amountInUSD: Scalars["BigDecimal"];
  /**  Amount of token withdrawn from pool in native units  */
  amountOut: Scalars["BigInt"];
  /**  Amount of token withdrawn from pool in USD  */
  amountOutUSD: Scalars["BigDecimal"];
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars["BigInt"]>;
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars["BigInt"]>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars["BigInt"]>;
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["Bytes"];
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars["Bytes"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The pool involving this event  */
  pool: LiquidityPool;
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  the tick after the swap  */
  tick?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
  /**  Token deposited into pool  */
  tokenIn: Token;
  /**  Token withdrawn from pool  */
  tokenOut: Token;
};

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  amountIn?: InputMaybe<Scalars["BigInt"]>;
  amountInUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountInUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountInUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountInUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountInUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountInUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountInUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountInUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountIn_gt?: InputMaybe<Scalars["BigInt"]>;
  amountIn_gte?: InputMaybe<Scalars["BigInt"]>;
  amountIn_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amountIn_lt?: InputMaybe<Scalars["BigInt"]>;
  amountIn_lte?: InputMaybe<Scalars["BigInt"]>;
  amountIn_not?: InputMaybe<Scalars["BigInt"]>;
  amountIn_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amountOut?: InputMaybe<Scalars["BigInt"]>;
  amountOutUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountOutUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountOutUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountOutUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountOutUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountOutUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountOutUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountOutUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountOut_gt?: InputMaybe<Scalars["BigInt"]>;
  amountOut_gte?: InputMaybe<Scalars["BigInt"]>;
  amountOut_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amountOut_lt?: InputMaybe<Scalars["BigInt"]>;
  amountOut_lte?: InputMaybe<Scalars["BigInt"]>;
  amountOut_not?: InputMaybe<Scalars["BigInt"]>;
  amountOut_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick?: InputMaybe<Scalars["BigInt"]>;
  tick_gt?: InputMaybe<Scalars["BigInt"]>;
  tick_gte?: InputMaybe<Scalars["BigInt"]>;
  tick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tick_lt?: InputMaybe<Scalars["BigInt"]>;
  tick_lte?: InputMaybe<Scalars["BigInt"]>;
  tick_not?: InputMaybe<Scalars["BigInt"]>;
  tick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIn?: InputMaybe<Scalars["String"]>;
  tokenIn_?: InputMaybe<Token_Filter>;
  tokenIn_contains?: InputMaybe<Scalars["String"]>;
  tokenIn_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenIn_ends_with?: InputMaybe<Scalars["String"]>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIn_gt?: InputMaybe<Scalars["String"]>;
  tokenIn_gte?: InputMaybe<Scalars["String"]>;
  tokenIn_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenIn_lt?: InputMaybe<Scalars["String"]>;
  tokenIn_lte?: InputMaybe<Scalars["String"]>;
  tokenIn_not?: InputMaybe<Scalars["String"]>;
  tokenIn_not_contains?: InputMaybe<Scalars["String"]>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenIn_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIn_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenIn_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIn_starts_with?: InputMaybe<Scalars["String"]>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut?: InputMaybe<Scalars["String"]>;
  tokenOut_?: InputMaybe<Token_Filter>;
  tokenOut_contains?: InputMaybe<Scalars["String"]>;
  tokenOut_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut_ends_with?: InputMaybe<Scalars["String"]>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut_gt?: InputMaybe<Scalars["String"]>;
  tokenOut_gte?: InputMaybe<Scalars["String"]>;
  tokenOut_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenOut_lt?: InputMaybe<Scalars["String"]>;
  tokenOut_lte?: InputMaybe<Scalars["String"]>;
  tokenOut_not?: InputMaybe<Scalars["String"]>;
  tokenOut_not_contains?: InputMaybe<Scalars["String"]>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenOut_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut_starts_with?: InputMaybe<Scalars["String"]>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Swap_OrderBy {
  Account = "account",
  AccountNewUser = "account___newUser",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountSwapCount = "account__swapCount",
  AccountWithdrawCount = "account__withdrawCount",
  AmountIn = "amountIn",
  AmountInUsd = "amountInUSD",
  AmountOut = "amountOut",
  AmountOutUsd = "amountOutUSD",
  BlockNumber = "blockNumber",
  GasLimit = "gasLimit",
  GasPrice = "gasPrice",
  GasUsed = "gasUsed",
  Hash = "hash",
  Id = "id",
  LogIndex = "logIndex",
  Nonce = "nonce",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  Tick = "tick",
  Timestamp = "timestamp",
  TokenIn = "tokenIn",
  TokenInDecimals = "tokenIn__decimals",
  TokenInId = "tokenIn__id",
  TokenInLastPriceBlockNumber = "tokenIn__lastPriceBlockNumber",
  TokenInLastPriceUsd = "tokenIn__lastPriceUSD",
  TokenInName = "tokenIn__name",
  TokenInSymbol = "tokenIn__symbol",
  TokenOut = "tokenOut",
  TokenOutDecimals = "tokenOut__decimals",
  TokenOutId = "tokenOut__id",
  TokenOutLastPriceBlockNumber = "tokenOut__lastPriceBlockNumber",
  TokenOutLastPriceUsd = "tokenOut__lastPriceUSD",
  TokenOutName = "tokenOut__name",
  TokenOutSymbol = "tokenOut__symbol",
}

export type Tick = {
  __typename?: "Tick";
  /**  Creation block number  */
  createdBlockNumber: Scalars["BigInt"];
  /**  Creation timestamp  */
  createdTimestamp: Scalars["BigInt"];
  /**  { pool address }-{ tick index }  */
  id: Scalars["Bytes"];
  /**  tick index  */
  index: Scalars["BigInt"];
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars["Int"];
  /**  Hour ID of the most recent hourly snapshot  */
  lastSnapshotHourID: Scalars["Int"];
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars["BigInt"];
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars["BigInt"];
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars["BigInt"];
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars["BigDecimal"];
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars["BigInt"];
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars["BigDecimal"];
  /**  Liquidity pool this tick belongs to  */
  pool: LiquidityPool;
  /**  calculated price of token0 of tick within this pool - constant  */
  prices: Array<Scalars["BigDecimal"]>;
};

export type TickDailySnapshot = {
  __typename?: "TickDailySnapshot";
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Number of days since Unix epoch time  */
  day: Scalars["Int"];
  /**  { pool address }-{ tick index }-{ day ID }  */
  id: Scalars["Bytes"];
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars["BigInt"];
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars["BigDecimal"];
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars["BigInt"];
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars["BigDecimal"];
  /**  liquidity pool this tick belongs to  */
  pool: LiquidityPool;
  /**  tick index  */
  tick: Tick;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
};

export type TickDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TickDailySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  day?: InputMaybe<Scalars["Int"]>;
  day_gt?: InputMaybe<Scalars["Int"]>;
  day_gte?: InputMaybe<Scalars["Int"]>;
  day_in?: InputMaybe<Array<Scalars["Int"]>>;
  day_lt?: InputMaybe<Scalars["Int"]>;
  day_lte?: InputMaybe<Scalars["Int"]>;
  day_not?: InputMaybe<Scalars["Int"]>;
  day_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidityGross?: InputMaybe<Scalars["BigInt"]>;
  liquidityGrossUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityGrossUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityGross_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityGross_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityNet?: InputMaybe<Scalars["BigInt"]>;
  liquidityNetUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityNetUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityNet_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityNet_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<TickDailySnapshot_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum TickDailySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  Day = "day",
  Id = "id",
  LiquidityGross = "liquidityGross",
  LiquidityGrossUsd = "liquidityGrossUSD",
  LiquidityNet = "liquidityNet",
  LiquidityNetUsd = "liquidityNetUSD",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Tick = "tick",
  TickCreatedBlockNumber = "tick__createdBlockNumber",
  TickCreatedTimestamp = "tick__createdTimestamp",
  TickId = "tick__id",
  TickIndex = "tick__index",
  TickLastSnapshotDayId = "tick__lastSnapshotDayID",
  TickLastSnapshotHourId = "tick__lastSnapshotHourID",
  TickLastUpdateBlockNumber = "tick__lastUpdateBlockNumber",
  TickLastUpdateTimestamp = "tick__lastUpdateTimestamp",
  TickLiquidityGross = "tick__liquidityGross",
  TickLiquidityGrossUsd = "tick__liquidityGrossUSD",
  TickLiquidityNet = "tick__liquidityNet",
  TickLiquidityNetUsd = "tick__liquidityNetUSD",
  Timestamp = "timestamp",
}

export type TickHourlySnapshot = {
  __typename?: "TickHourlySnapshot";
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Number of hours since Unix epoch time  */
  hour: Scalars["Int"];
  /**  { pool address }-{ tick index }-{ hour ID }  */
  id: Scalars["Bytes"];
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars["BigInt"];
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars["BigDecimal"];
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars["BigInt"];
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars["BigDecimal"];
  /**  liquidity pool this tick belongs to  */
  pool: LiquidityPool;
  /**  tick index  */
  tick: Tick;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
};

export type TickHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TickHourlySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hour?: InputMaybe<Scalars["Int"]>;
  hour_gt?: InputMaybe<Scalars["Int"]>;
  hour_gte?: InputMaybe<Scalars["Int"]>;
  hour_in?: InputMaybe<Array<Scalars["Int"]>>;
  hour_lt?: InputMaybe<Scalars["Int"]>;
  hour_lte?: InputMaybe<Scalars["Int"]>;
  hour_not?: InputMaybe<Scalars["Int"]>;
  hour_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidityGross?: InputMaybe<Scalars["BigInt"]>;
  liquidityGrossUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityGrossUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityGross_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityGross_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityNet?: InputMaybe<Scalars["BigInt"]>;
  liquidityNetUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityNetUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityNet_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityNet_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<TickHourlySnapshot_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum TickHourlySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  Hour = "hour",
  Id = "id",
  LiquidityGross = "liquidityGross",
  LiquidityGrossUsd = "liquidityGrossUSD",
  LiquidityNet = "liquidityNet",
  LiquidityNetUsd = "liquidityNetUSD",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Tick = "tick",
  TickCreatedBlockNumber = "tick__createdBlockNumber",
  TickCreatedTimestamp = "tick__createdTimestamp",
  TickId = "tick__id",
  TickIndex = "tick__index",
  TickLastSnapshotDayId = "tick__lastSnapshotDayID",
  TickLastSnapshotHourId = "tick__lastSnapshotHourID",
  TickLastUpdateBlockNumber = "tick__lastUpdateBlockNumber",
  TickLastUpdateTimestamp = "tick__lastUpdateTimestamp",
  TickLiquidityGross = "tick__liquidityGross",
  TickLiquidityGrossUsd = "tick__liquidityGrossUSD",
  TickLiquidityNet = "tick__liquidityNet",
  TickLiquidityNetUsd = "tick__liquidityNetUSD",
  Timestamp = "timestamp",
}

export type Tick_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tick_Filter>>>;
  createdBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastSnapshotDayID?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_gt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_gte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotDayID_lt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_lte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_not?: InputMaybe<Scalars["Int"]>;
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotHourID?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_gt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_gte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastSnapshotHourID_lt?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_lte?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_not?: InputMaybe<Scalars["Int"]>;
  lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityGross?: InputMaybe<Scalars["BigInt"]>;
  liquidityGrossUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityGrossUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityGross_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityGross_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityNet?: InputMaybe<Scalars["BigInt"]>;
  liquidityNetUSD?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityNetUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidityNet_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityNet_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Tick_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  prices?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  prices_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  prices_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  prices_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  prices_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  prices_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Tick_OrderBy {
  CreatedBlockNumber = "createdBlockNumber",
  CreatedTimestamp = "createdTimestamp",
  Id = "id",
  Index = "index",
  LastSnapshotDayId = "lastSnapshotDayID",
  LastSnapshotHourId = "lastSnapshotHourID",
  LastUpdateBlockNumber = "lastUpdateBlockNumber",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  LiquidityGross = "liquidityGross",
  LiquidityGrossUsd = "liquidityGrossUSD",
  LiquidityNet = "liquidityNet",
  LiquidityNetUsd = "liquidityNetUSD",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Prices = "prices",
}

export type Token = {
  __typename?: "Token";
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars["Int"];
  /**  Smart contract address of the token  */
  id: Scalars["Bytes"];
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars["BigInt"]>;
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars["String"];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars["String"];
};

export enum TokenType {
  Bep20 = "BEP20",
  Bep721 = "BEP721",
  Bep1155 = "BEP1155",
  Erc20 = "ERC20",
  Erc721 = "ERC721",
  Erc1155 = "ERC1155",
  Multiple = "MULTIPLE",
  Unknown = "UNKNOWN",
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lastPriceBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  lastPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lastPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lastPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lastPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lastPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Token_OrderBy {
  Decimals = "decimals",
  Id = "id",
  LastPriceBlockNumber = "lastPriceBlockNumber",
  LastPriceUsd = "lastPriceUSD",
  Name = "name",
  Symbol = "symbol",
}

export type UsageMetricsDailySnapshot = {
  __typename?: "UsageMetricsDailySnapshot";
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  Number of unique daily active users  */
  dailyActiveUsers: Scalars["Int"];
  /**  Total number of deposits (add liquidity) in an day  */
  dailyDepositCount: Scalars["Int"];
  /**  Total number of trades (swaps) in an day  */
  dailySwapCount: Scalars["Int"];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars["Int"];
  /**  Total number of withdrawals (remove liquidity) in an day  */
  dailyWithdrawCount: Scalars["Int"];
  /**  Number of days since Unix epoch time  */
  day: Scalars["Int"];
  /**  ID is # of days since Unix epoch time  */
  id: Scalars["Bytes"];
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
  /**  Total number of pools  */
  totalPoolCount: Scalars["Int"];
};

export type UsageMetricsDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveUsers?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_gt?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_gte?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveUsers_lt?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_lte?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_not?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyDepositCount?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_not?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailySwapCount?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_gt?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_gte?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailySwapCount_lt?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_lte?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_not?: InputMaybe<Scalars["Int"]>;
  dailySwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyTransactionCount?: InputMaybe<Scalars["Int"]>;
  dailyTransactionCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyTransactionCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyTransactionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyTransactionCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyTransactionCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyTransactionCount_not?: InputMaybe<Scalars["Int"]>;
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyWithdrawCount?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  day?: InputMaybe<Scalars["Int"]>;
  day_gt?: InputMaybe<Scalars["Int"]>;
  day_gte?: InputMaybe<Scalars["Int"]>;
  day_in?: InputMaybe<Array<Scalars["Int"]>>;
  day_lt?: InputMaybe<Scalars["Int"]>;
  day_lte?: InputMaybe<Scalars["Int"]>;
  day_not?: InputMaybe<Scalars["Int"]>;
  day_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_Filter>>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalPoolCount?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_gt?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_gte?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalPoolCount_lt?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_lte?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_not?: InputMaybe<Scalars["Int"]>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum UsageMetricsDailySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  CumulativeUniqueUsers = "cumulativeUniqueUsers",
  DailyActiveUsers = "dailyActiveUsers",
  DailyDepositCount = "dailyDepositCount",
  DailySwapCount = "dailySwapCount",
  DailyTransactionCount = "dailyTransactionCount",
  DailyWithdrawCount = "dailyWithdrawCount",
  Day = "day",
  Id = "id",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  Timestamp = "timestamp",
  TotalPoolCount = "totalPoolCount",
}

export type UsageMetricsHourlySnapshot = {
  __typename?: "UsageMetricsHourlySnapshot";
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars["BigInt"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  Number of hours since Unix epoch time  */
  hour: Scalars["Int"];
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars["Int"];
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars["Int"];
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars["Int"];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars["Int"];
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars["Int"];
  /**  { # of hours since Unix epoch time }  */
  id: Scalars["Bytes"];
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol;
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars["BigInt"];
};

export type UsageMetricsHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hour?: InputMaybe<Scalars["Int"]>;
  hour_gt?: InputMaybe<Scalars["Int"]>;
  hour_gte?: InputMaybe<Scalars["Int"]>;
  hour_in?: InputMaybe<Array<Scalars["Int"]>>;
  hour_lt?: InputMaybe<Scalars["Int"]>;
  hour_lte?: InputMaybe<Scalars["Int"]>;
  hour_not?: InputMaybe<Scalars["Int"]>;
  hour_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyActiveUsers?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_not?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyDepositCount?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlySwapCount?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlySwapCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_not?: InputMaybe<Scalars["Int"]>;
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyTransactionCount?: InputMaybe<Scalars["Int"]>;
  hourlyTransactionCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyTransactionCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyTransactionCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyTransactionCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyTransactionCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyWithdrawCount?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_Filter>>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum UsageMetricsHourlySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  CumulativeUniqueUsers = "cumulativeUniqueUsers",
  Hour = "hour",
  HourlyActiveUsers = "hourlyActiveUsers",
  HourlyDepositCount = "hourlyDepositCount",
  HourlySwapCount = "hourlySwapCount",
  HourlyTransactionCount = "hourlyTransactionCount",
  HourlyWithdrawCount = "hourlyWithdrawCount",
  Id = "id",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  Timestamp = "timestamp",
}

export type Withdraw = {
  __typename?: "Withdraw";
  /**  Account that emitted this event  */
  account: Account;
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
  amountUSD: Scalars["BigDecimal"];
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars["BigInt"]>;
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars["BigInt"]>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars["BigInt"]>;
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["Bytes"];
  /**  { Transaction hash }-{ Log index } */
  id: Scalars["Bytes"];
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars["BigInt"]>;
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>;
  /**  Amount of liquidity burned  */
  liquidity: Scalars["BigInt"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The pool involving this event  */
  pool: LiquidityPool;
  /**  The user position changed by this event  */
  position?: Maybe<Position>;
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  lower tick of position  */
  tickLower?: Maybe<Scalars["BigInt"]>;
  /**  upper tick of position  */
  tickUpper?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
};

export type WithdrawInputTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type Withdraw_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  inputTokenAmounts?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokens?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_?: InputMaybe<Token_Filter>;
  inputTokens_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<LiquidityPool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  position_?: InputMaybe<Position_Filter>;
  position_contains?: InputMaybe<Scalars["String"]>;
  position_contains_nocase?: InputMaybe<Scalars["String"]>;
  position_ends_with?: InputMaybe<Scalars["String"]>;
  position_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  position_gt?: InputMaybe<Scalars["String"]>;
  position_gte?: InputMaybe<Scalars["String"]>;
  position_in?: InputMaybe<Array<Scalars["String"]>>;
  position_lt?: InputMaybe<Scalars["String"]>;
  position_lte?: InputMaybe<Scalars["String"]>;
  position_not?: InputMaybe<Scalars["String"]>;
  position_not_contains?: InputMaybe<Scalars["String"]>;
  position_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  position_not_ends_with?: InputMaybe<Scalars["String"]>;
  position_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  position_not_in?: InputMaybe<Array<Scalars["String"]>>;
  position_not_starts_with?: InputMaybe<Scalars["String"]>;
  position_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  position_starts_with?: InputMaybe<Scalars["String"]>;
  position_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<DexAmmProtocol_Filter>;
  protocol_contains?: InputMaybe<Scalars["String"]>;
  protocol_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_gt?: InputMaybe<Scalars["String"]>;
  protocol_gte?: InputMaybe<Scalars["String"]>;
  protocol_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_lt?: InputMaybe<Scalars["String"]>;
  protocol_lte?: InputMaybe<Scalars["String"]>;
  protocol_not?: InputMaybe<Scalars["String"]>;
  protocol_not_contains?: InputMaybe<Scalars["String"]>;
  protocol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocol_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocol_starts_with?: InputMaybe<Scalars["String"]>;
  protocol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tickLower?: InputMaybe<Scalars["BigInt"]>;
  tickLower_gt?: InputMaybe<Scalars["BigInt"]>;
  tickLower_gte?: InputMaybe<Scalars["BigInt"]>;
  tickLower_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tickLower_lt?: InputMaybe<Scalars["BigInt"]>;
  tickLower_lte?: InputMaybe<Scalars["BigInt"]>;
  tickLower_not?: InputMaybe<Scalars["BigInt"]>;
  tickLower_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tickUpper?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_gt?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_gte?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tickUpper_lt?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_lte?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_not?: InputMaybe<Scalars["BigInt"]>;
  tickUpper_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Withdraw_OrderBy {
  Account = "account",
  AccountNewUser = "account___newUser",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountSwapCount = "account__swapCount",
  AccountWithdrawCount = "account__withdrawCount",
  AmountUsd = "amountUSD",
  BlockNumber = "blockNumber",
  GasLimit = "gasLimit",
  GasPrice = "gasPrice",
  GasUsed = "gasUsed",
  Hash = "hash",
  Id = "id",
  InputTokenAmounts = "inputTokenAmounts",
  InputTokens = "inputTokens",
  Liquidity = "liquidity",
  LogIndex = "logIndex",
  Nonce = "nonce",
  Pool = "pool",
  PoolActiveLiquidity = "pool__activeLiquidity",
  PoolActiveLiquidityUsd = "pool__activeLiquidityUSD",
  PoolClosedPositionCount = "pool__closedPositionCount",
  PoolCreatedBlockNumber = "pool__createdBlockNumber",
  PoolCreatedTimestamp = "pool__createdTimestamp",
  PoolCumulativeDepositCount = "pool__cumulativeDepositCount",
  PoolCumulativeProtocolSideRevenueUsd = "pool__cumulativeProtocolSideRevenueUSD",
  PoolCumulativeSupplySideRevenueUsd = "pool__cumulativeSupplySideRevenueUSD",
  PoolCumulativeSwapCount = "pool__cumulativeSwapCount",
  PoolCumulativeTotalRevenueUsd = "pool__cumulativeTotalRevenueUSD",
  PoolCumulativeVolumeUsd = "pool__cumulativeVolumeUSD",
  PoolCumulativeWithdrawCount = "pool__cumulativeWithdrawCount",
  PoolId = "pool__id",
  PoolIsSingleSided = "pool__isSingleSided",
  PoolLastSnapshotDayId = "pool__lastSnapshotDayID",
  PoolLastSnapshotHourId = "pool__lastSnapshotHourID",
  PoolLastUpdateBlockNumber = "pool__lastUpdateBlockNumber",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLiquidityTokenType = "pool__liquidityTokenType",
  PoolName = "pool__name",
  PoolOpenPositionCount = "pool__openPositionCount",
  PoolPositionCount = "pool__positionCount",
  PoolStakedOutputTokenAmount = "pool__stakedOutputTokenAmount",
  PoolSymbol = "pool__symbol",
  PoolTick = "pool__tick",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquidityUsd = "pool__totalLiquidityUSD",
  PoolTotalValueLockedUsd = "pool__totalValueLockedUSD",
  Position = "position",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionCumulativeDepositUsd = "position__cumulativeDepositUSD",
  PositionCumulativeWithdrawUsd = "position__cumulativeWithdrawUSD",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionLiquidity = "position__liquidity",
  PositionLiquidityTokenType = "position__liquidityTokenType",
  PositionLiquidityUsd = "position__liquidityUSD",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Protocol = "protocol",
  ProtocolRegenesis = "protocol___regenesis",
  ProtocolActiveLiquidityUsd = "protocol__activeLiquidityUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueLPs = "protocol__cumulativeUniqueLPs",
  ProtocolCumulativeUniqueTraders = "protocol__cumulativeUniqueTraders",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolCumulativeVolumeUsd = "protocol__cumulativeVolumeUSD",
  ProtocolId = "protocol__id",
  ProtocolLastSnapshotDayId = "protocol__lastSnapshotDayID",
  ProtocolLastUpdateBlockNumber = "protocol__lastUpdateBlockNumber",
  ProtocolLastUpdateTimestamp = "protocol__lastUpdateTimestamp",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalLiquidityUsd = "protocol__totalLiquidityUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  ProtocolUncollectedProtocolSideValueUsd = "protocol__uncollectedProtocolSideValueUSD",
  ProtocolUncollectedSupplySideValueUsd = "protocol__uncollectedSupplySideValueUSD",
  TickLower = "tickLower",
  TickUpper = "tickUpper",
  Timestamp = "timestamp",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/**   Used to keep track of the price of Ether/TVL in USD, pool deposit count, and total unique users  */
export type _HelperStore = {
  __typename?: "_HelperStore";
  id: Scalars["Bytes"];
  /**  price of ETH/TVL in USD  */
  valueDecimal?: Maybe<Scalars["BigDecimal"]>;
  /**  Token Prices  */
  valueDecimalList?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  # of deposits, # of unique users  */
  valueInt?: Maybe<Scalars["Int"]>;
};

export type _HelperStore_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_HelperStore_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<_HelperStore_Filter>>>;
  valueDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  valueDecimalList?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueDecimalList_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueDecimalList_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueDecimalList_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueDecimalList_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueDecimalList_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  valueDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  valueDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  valueDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  valueDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  valueDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  valueDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueInt?: InputMaybe<Scalars["Int"]>;
  valueInt_gt?: InputMaybe<Scalars["Int"]>;
  valueInt_gte?: InputMaybe<Scalars["Int"]>;
  valueInt_in?: InputMaybe<Array<Scalars["Int"]>>;
  valueInt_lt?: InputMaybe<Scalars["Int"]>;
  valueInt_lte?: InputMaybe<Scalars["Int"]>;
  valueInt_not?: InputMaybe<Scalars["Int"]>;
  valueInt_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum _HelperStore_OrderBy {
  Id = "id",
  ValueDecimal = "valueDecimal",
  ValueDecimalList = "valueDecimalList",
  ValueInt = "valueInt",
}

export type _LiquidityPoolAmount = {
  __typename?: "_LiquidityPoolAmount";
  /**  Smart contract address of the pool  */
  id: Scalars["Bytes"];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars["BigDecimal"]>;
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>;
  tokenPrices: Array<Scalars["BigDecimal"]>;
};

export type _LiquidityPoolAmountInputTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type _LiquidityPoolAmount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  inputTokenBalances?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  inputTokens?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_?: InputMaybe<Token_Filter>;
  inputTokens_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  or?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_Filter>>>;
  tokenPrices?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenPrices_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenPrices_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenPrices_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenPrices_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenPrices_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum _LiquidityPoolAmount_OrderBy {
  Id = "id",
  InputTokenBalances = "inputTokenBalances",
  InputTokens = "inputTokens",
  TokenPrices = "tokenPrices",
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelist = {
  __typename?: "_TokenWhitelist";
  /**  Token Address  */
  id: Scalars["Bytes"];
  /**  pools token is in that are white listed for USD pricing  */
  whitelistPools: Array<LiquidityPool>;
};

/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelistWhitelistPoolsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidityPool_Filter>;
};

export type _TokenWhitelist_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_TokenWhitelist_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<_TokenWhitelist_Filter>>>;
  whitelistPools?: InputMaybe<Array<Scalars["String"]>>;
  whitelistPools_?: InputMaybe<LiquidityPool_Filter>;
  whitelistPools_contains?: InputMaybe<Array<Scalars["String"]>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  whitelistPools_not?: InputMaybe<Array<Scalars["String"]>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
};

export enum _TokenWhitelist_OrderBy {
  Id = "id",
  WhitelistPools = "whitelistPools",
}

export type SwapsQueryVariables = Exact<{
  account?: InputMaybe<Scalars["String"]>;
}>;

export type SwapsQuery = {
  __typename?: "Query";
  swaps: Array<{
    __typename?: "Swap";
    amountIn: any;
    amountInUSD: any;
    amountOut: any;
    amountOutUSD: any;
    hash: any;
    blockNumber: any;
    timestamp: any;
    logIndex: number;
    account: { __typename?: "Account"; id: any };
    tokenIn: {
      __typename?: "Token";
      id: any;
      name: string;
      symbol: string;
      decimals: number;
      lastPriceUSD?: any | null;
      lastPriceBlockNumber?: any | null;
    };
    tokenOut: {
      __typename?: "Token";
      id: any;
      name: string;
      symbol: string;
      decimals: number;
      lastPriceUSD?: any | null;
      lastPriceBlockNumber?: any | null;
    };
  }>;
};

export const SwapsDocument = `
    query swaps($account: String) {
  swaps(where: {account: $account}) {
    account {
      id
    }
    amountIn
    amountInUSD
    amountOut
    amountOutUSD
    hash
    blockNumber
    timestamp
    logIndex
    tokenIn {
      id
      name
      symbol
      decimals
      lastPriceUSD
      lastPriceBlockNumber
    }
    tokenOut {
      id
      name
      symbol
      decimals
      lastPriceUSD
      lastPriceBlockNumber
    }
  }
}
    `;
export const useSwapsQuery = <TData = SwapsQuery, TError = unknown>(
  variables?: SwapsQueryVariables,
  options?: UseQueryOptions<SwapsQuery, TError, TData>
) =>
  useQuery<SwapsQuery, TError, TData>(
    variables === undefined ? ["swaps"] : ["swaps", variables],
    fetcher<SwapsQuery, SwapsQueryVariables>(SwapsDocument, variables),
    options
  );

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Protocol: ["DexAmmProtocol"],
  },
};
export default result;
