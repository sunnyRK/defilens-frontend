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
  /**  Markets that the account is using as collateral  */
  _enabledCollaterals: Array<Market>;
  /**  Number of borrows this account made  */
  borrowCount: Scalars["Int"];
  /**  All borrow events of this account  */
  borrows: Array<Borrow>;
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars["Int"];
  /**  Number of deposits this account made  */
  depositCount: Scalars["Int"];
  /**  All deposit events of this account  */
  deposits: Array<Deposit>;
  /**  { Account address }  */
  id: Scalars["ID"];
  /**  Number of times this account liquidated a position  */
  liquidateCount: Scalars["Int"];
  /**  All liquidation events where this account was the liquidator  */
  liquidates: Array<Liquidate>;
  /**  Number of times this account has been liquidated  */
  liquidationCount: Scalars["Int"];
  /**  All liquidation events where this account got liquidated  */
  liquidations: Array<Liquidate>;
  /**  Number of open positions this account has  */
  openPositionCount: Scalars["Int"];
  /**  Number of positions this account has  */
  positionCount: Scalars["Int"];
  /**  All positions that belong to this account  */
  positions: Array<Position>;
  /**  Number of repays this account made  */
  repayCount: Scalars["Int"];
  /**  All repay events of this account  */
  repays: Array<Repay>;
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars["Int"];
  /**  All withdraw events of this account  */
  withdraws: Array<Withdraw>;
};

export type Account_EnabledCollateralsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Market_Filter>;
};

export type AccountBorrowsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type AccountDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type AccountLiquidatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Liquidate_Filter>;
};

export type AccountLiquidationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Liquidate_Filter>;
};

export type AccountPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Position_Filter>;
};

export type AccountRepaysArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
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
  _enabledCollaterals?: InputMaybe<Array<Scalars["String"]>>;
  _enabledCollaterals_?: InputMaybe<Market_Filter>;
  _enabledCollaterals_contains?: InputMaybe<Array<Scalars["String"]>>;
  _enabledCollaterals_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  _enabledCollaterals_not?: InputMaybe<Array<Scalars["String"]>>;
  _enabledCollaterals_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  _enabledCollaterals_not_contains_nocase?: InputMaybe<
    Array<Scalars["String"]>
  >;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  borrowCount?: InputMaybe<Scalars["Int"]>;
  borrowCount_gt?: InputMaybe<Scalars["Int"]>;
  borrowCount_gte?: InputMaybe<Scalars["Int"]>;
  borrowCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrowCount_lt?: InputMaybe<Scalars["Int"]>;
  borrowCount_lte?: InputMaybe<Scalars["Int"]>;
  borrowCount_not?: InputMaybe<Scalars["Int"]>;
  borrowCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrows_?: InputMaybe<Borrow_Filter>;
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidateCount?: InputMaybe<Scalars["Int"]>;
  liquidateCount_gt?: InputMaybe<Scalars["Int"]>;
  liquidateCount_gte?: InputMaybe<Scalars["Int"]>;
  liquidateCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidateCount_lt?: InputMaybe<Scalars["Int"]>;
  liquidateCount_lte?: InputMaybe<Scalars["Int"]>;
  liquidateCount_not?: InputMaybe<Scalars["Int"]>;
  liquidateCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidates_?: InputMaybe<Liquidate_Filter>;
  liquidationCount?: InputMaybe<Scalars["Int"]>;
  liquidationCount_gt?: InputMaybe<Scalars["Int"]>;
  liquidationCount_gte?: InputMaybe<Scalars["Int"]>;
  liquidationCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidationCount_lt?: InputMaybe<Scalars["Int"]>;
  liquidationCount_lte?: InputMaybe<Scalars["Int"]>;
  liquidationCount_not?: InputMaybe<Scalars["Int"]>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidations_?: InputMaybe<Liquidate_Filter>;
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
  repayCount?: InputMaybe<Scalars["Int"]>;
  repayCount_gt?: InputMaybe<Scalars["Int"]>;
  repayCount_gte?: InputMaybe<Scalars["Int"]>;
  repayCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  repayCount_lt?: InputMaybe<Scalars["Int"]>;
  repayCount_lte?: InputMaybe<Scalars["Int"]>;
  repayCount_not?: InputMaybe<Scalars["Int"]>;
  repayCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  repays_?: InputMaybe<Repay_Filter>;
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
  EnabledCollaterals = "_enabledCollaterals",
  BorrowCount = "borrowCount",
  Borrows = "borrows",
  ClosedPositionCount = "closedPositionCount",
  DepositCount = "depositCount",
  Deposits = "deposits",
  Id = "id",
  LiquidateCount = "liquidateCount",
  Liquidates = "liquidates",
  LiquidationCount = "liquidationCount",
  Liquidations = "liquidations",
  OpenPositionCount = "openPositionCount",
  PositionCount = "positionCount",
  Positions = "positions",
  RepayCount = "repayCount",
  Repays = "repays",
  WithdrawCount = "withdrawCount",
  Withdraws = "withdraws",
}

export type ActiveAccount = {
  __typename?: "ActiveAccount";
  /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
  id: Scalars["ID"];
};

export type ActiveAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ActiveAccount_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<ActiveAccount_Filter>>>;
};

export enum ActiveAccount_OrderBy {
  Id = "id",
}

export type ActorAccount = {
  __typename?: "ActorAccount";
  /**  { Actor type (Depositor / Borrower / Liquidator / Liquidatee) }-{ Account address }  */
  id: Scalars["ID"];
};

export type ActorAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ActorAccount_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<ActorAccount_Filter>>>;
};

export enum ActorAccount_OrderBy {
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

export type Borrow = {
  __typename?: "Borrow";
  /**  Account that borrowed/minted tokens  */
  account: Account;
  /**  Amount of token borrowed in native units  */
  amount: Scalars["BigInt"];
  /**  Amount of token borrowed in USD  */
  amountUSD: Scalars["BigDecimal"];
  /**  Token borrowed  */
  asset: Token;
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["String"];
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars["ID"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  The market tokens are borrowed/minted from  */
  market: Market;
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The user position changed by this event  */
  position: Position;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
};

export type Borrow_Filter = {
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
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Borrow_Filter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["String"]>;
  hash_contains?: InputMaybe<Scalars["String"]>;
  hash_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_ends_with?: InputMaybe<Scalars["String"]>;
  hash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_gt?: InputMaybe<Scalars["String"]>;
  hash_gte?: InputMaybe<Scalars["String"]>;
  hash_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_lt?: InputMaybe<Scalars["String"]>;
  hash_lte?: InputMaybe<Scalars["String"]>;
  hash_not?: InputMaybe<Scalars["String"]>;
  hash_not_contains?: InputMaybe<Scalars["String"]>;
  hash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_not_starts_with?: InputMaybe<Scalars["String"]>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_starts_with?: InputMaybe<Scalars["String"]>;
  hash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Borrow_Filter>>>;
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
};

export enum Borrow_OrderBy {
  Account = "account",
  AccountBorrowCount = "account__borrowCount",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountLiquidateCount = "account__liquidateCount",
  AccountLiquidationCount = "account__liquidationCount",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountRepayCount = "account__repayCount",
  AccountWithdrawCount = "account__withdrawCount",
  Amount = "amount",
  AmountUsd = "amountUSD",
  Asset = "asset",
  AssetType = "asset___type",
  AssetDecimals = "asset__decimals",
  AssetId = "asset__id",
  AssetLastPriceBlockNumber = "asset__lastPriceBlockNumber",
  AssetLastPriceUsd = "asset__lastPriceUSD",
  AssetName = "asset__name",
  AssetSymbol = "asset__symbol",
  BlockNumber = "blockNumber",
  Hash = "hash",
  Id = "id",
  LogIndex = "logIndex",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  Nonce = "nonce",
  Position = "position",
  PositionBalance = "position__balance",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionBorrowCount = "position__borrowCount",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionIsCollateral = "position__isCollateral",
  PositionLiquidationCount = "position__liquidationCount",
  PositionRepayCount = "position__repayCount",
  PositionSide = "position__side",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Timestamp = "timestamp",
}

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
  /**  Account that deposited tokens  */
  account: Account;
  /**  Amount of token deposited in native units  */
  amount: Scalars["BigInt"];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars["BigDecimal"];
  /**  Token deposited  */
  asset: Token;
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["String"];
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars["ID"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  The market tokens are deposited to  */
  market: Market;
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The user position changed by this event  */
  position: Position;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
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
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["String"]>;
  hash_contains?: InputMaybe<Scalars["String"]>;
  hash_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_ends_with?: InputMaybe<Scalars["String"]>;
  hash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_gt?: InputMaybe<Scalars["String"]>;
  hash_gte?: InputMaybe<Scalars["String"]>;
  hash_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_lt?: InputMaybe<Scalars["String"]>;
  hash_lte?: InputMaybe<Scalars["String"]>;
  hash_not?: InputMaybe<Scalars["String"]>;
  hash_not_contains?: InputMaybe<Scalars["String"]>;
  hash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_not_starts_with?: InputMaybe<Scalars["String"]>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_starts_with?: InputMaybe<Scalars["String"]>;
  hash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
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
};

export enum Deposit_OrderBy {
  Account = "account",
  AccountBorrowCount = "account__borrowCount",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountLiquidateCount = "account__liquidateCount",
  AccountLiquidationCount = "account__liquidationCount",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountRepayCount = "account__repayCount",
  AccountWithdrawCount = "account__withdrawCount",
  Amount = "amount",
  AmountUsd = "amountUSD",
  Asset = "asset",
  AssetType = "asset___type",
  AssetDecimals = "asset__decimals",
  AssetId = "asset__id",
  AssetLastPriceBlockNumber = "asset__lastPriceBlockNumber",
  AssetLastPriceUsd = "asset__lastPriceUSD",
  AssetName = "asset__name",
  AssetSymbol = "asset__symbol",
  BlockNumber = "blockNumber",
  Hash = "hash",
  Id = "id",
  LogIndex = "logIndex",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  Nonce = "nonce",
  Position = "position",
  PositionBalance = "position__balance",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionBorrowCount = "position__borrowCount",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionIsCollateral = "position__isCollateral",
  PositionLiquidationCount = "position__liquidationCount",
  PositionRepayCount = "position__repayCount",
  PositionSide = "position__side",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Timestamp = "timestamp",
}

export type FinancialsDailySnapshot = {
  __typename?: "FinancialsDailySnapshot";
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars["BigDecimal"];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets borrowed/minted on a given day, in USD.  */
  dailyBorrowUSD: Scalars["BigDecimal"];
  /**  Total assets deposited on a given day, in USD  */
  dailyDepositUSD: Scalars["BigDecimal"];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars["BigDecimal"];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars["BigDecimal"];
  /**  ID is # of days since Unix epoch time  */
  id: Scalars["ID"];
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Timestamp of this snapshot  */
  timestamp: Scalars["BigInt"];
  /**  Current balance of all borrowed/minted assets, in USD.  */
  totalBorrowBalanceUSD: Scalars["BigDecimal"];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars["BigDecimal"];
};

export type FinancialsDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  dailyBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyRepayUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyRepayUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  dailyWithdrawUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
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
  protocol_?: InputMaybe<LendingProtocol_Filter>;
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
  totalBorrowBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum FinancialsDailySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  CumulativeBorrowUsd = "cumulativeBorrowUSD",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeLiquidateUsd = "cumulativeLiquidateUSD",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  DailyBorrowUsd = "dailyBorrowUSD",
  DailyDepositUsd = "dailyDepositUSD",
  DailyLiquidateUsd = "dailyLiquidateUSD",
  DailyProtocolSideRevenueUsd = "dailyProtocolSideRevenueUSD",
  DailyRepayUsd = "dailyRepayUSD",
  DailySupplySideRevenueUsd = "dailySupplySideRevenueUSD",
  DailyTotalRevenueUsd = "dailyTotalRevenueUSD",
  DailyWithdrawUsd = "dailyWithdrawUSD",
  Id = "id",
  MintedTokenSupplies = "mintedTokenSupplies",
  Protocol = "protocol",
  ProtocolControlledValueUsd = "protocolControlledValueUSD",
  ProtocolPriceOracle = "protocol___priceOracle",
  ProtocolCumulativeBorrowUsd = "protocol__cumulativeBorrowUSD",
  ProtocolCumulativeDepositUsd = "protocol__cumulativeDepositUSD",
  ProtocolCumulativeLiquidateUsd = "protocol__cumulativeLiquidateUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueBorrowers = "protocol__cumulativeUniqueBorrowers",
  ProtocolCumulativeUniqueDepositors = "protocol__cumulativeUniqueDepositors",
  ProtocolCumulativeUniqueLiquidatees = "protocol__cumulativeUniqueLiquidatees",
  ProtocolCumulativeUniqueLiquidators = "protocol__cumulativeUniqueLiquidators",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolId = "protocol__id",
  ProtocolLendingType = "protocol__lendingType",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolRiskType = "protocol__riskType",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalBorrowBalanceUsd = "protocol__totalBorrowBalanceUSD",
  ProtocolTotalDepositBalanceUsd = "protocol__totalDepositBalanceUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  Timestamp = "timestamp",
  TotalBorrowBalanceUsd = "totalBorrowBalanceUSD",
  TotalDepositBalanceUsd = "totalDepositBalanceUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
}

export type InterestRate = {
  __typename?: "InterestRate";
  /**  Duration of the loan in days. Only applies to fixed term lending (e.g. Notional)  */
  duration?: Maybe<Scalars["Int"]>;
  /**  { Interest rate side }-{ Interest rate type }-{ Market ID }  */
  id: Scalars["ID"];
  /**  Maturity of the loan in block height. Only applies to fixed term lending (e.g. Notional)  */
  maturityBlock?: Maybe<Scalars["BigInt"]>;
  /**  Interest rate in percentage APY. E.g. 5.21% should be stored as 5.21  */
  rate: Scalars["BigDecimal"];
  /**  The party the interest is paid to / received from  */
  side: InterestRateSide;
  /**  The type of interest rate (e.g. stable, fixed, variable, etc)  */
  type: InterestRateType;
};

export enum InterestRateSide {
  /**  Interest rate paid by borrowers  */
  Borrower = "BORROWER",
  /**  Interest rate accrued by lenders  */
  Lender = "LENDER",
}

export enum InterestRateType {
  /**  Fixed interest rate (e.g. Notional)  */
  Fixed = "FIXED",
  /**  Stable interest rate (e.g. Aave)  */
  Stable = "STABLE",
  /**  Variable interest rate (e.g. Compound)  */
  Variable = "VARIABLE",
}

export type InterestRate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InterestRate_Filter>>>;
  duration?: InputMaybe<Scalars["Int"]>;
  duration_gt?: InputMaybe<Scalars["Int"]>;
  duration_gte?: InputMaybe<Scalars["Int"]>;
  duration_in?: InputMaybe<Array<Scalars["Int"]>>;
  duration_lt?: InputMaybe<Scalars["Int"]>;
  duration_lte?: InputMaybe<Scalars["Int"]>;
  duration_not?: InputMaybe<Scalars["Int"]>;
  duration_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maturityBlock?: InputMaybe<Scalars["BigInt"]>;
  maturityBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  maturityBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  maturityBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maturityBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  maturityBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  maturityBlock_not?: InputMaybe<Scalars["BigInt"]>;
  maturityBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<InterestRate_Filter>>>;
  rate?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  side?: InputMaybe<InterestRateSide>;
  side_in?: InputMaybe<Array<InterestRateSide>>;
  side_not?: InputMaybe<InterestRateSide>;
  side_not_in?: InputMaybe<Array<InterestRateSide>>;
  type?: InputMaybe<InterestRateType>;
  type_in?: InputMaybe<Array<InterestRateType>>;
  type_not?: InputMaybe<InterestRateType>;
  type_not_in?: InputMaybe<Array<InterestRateType>>;
};

export enum InterestRate_OrderBy {
  Duration = "duration",
  Id = "id",
  MaturityBlock = "maturityBlock",
  Rate = "rate",
  Side = "side",
  Type = "type",
}

export type LendingProtocol = Protocol & {
  __typename?: "LendingProtocol";
  /**  A list of all markets in the snapshot  */
  _marketIDs: Array<Scalars["String"]>;
  /**  String of the address of the current price oracle on the protocol  */
  _priceOracle: Scalars["String"];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars["BigDecimal"];
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars["Int"];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Number of cumulative borrowers  */
  cumulativeUniqueBorrowers: Scalars["Int"];
  /**  Number of cumulative depositors  */
  cumulativeUniqueDepositors: Scalars["Int"];
  /**  Number of cumulative liquidatees (accounts that got liquidated)  */
  cumulativeUniqueLiquidatees: Scalars["Int"];
  /**  Number of cumulative liquidators (accounts that performed liquidation)  */
  cumulativeUniqueLiquidators: Scalars["Int"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars["ID"];
  /**  The specific lending protocol type  */
  lendingType?: Maybe<LendingType>;
  /**  All markets that belong to this protocol  */
  markets: Array<Market>;
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars["String"];
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Tokens that can be minted. Only applies to CDP  */
  mintedTokens?: Maybe<Array<Token>>;
  /**  Name of the protocol, including version. e.g. Aave v2  */
  name: Scalars["String"];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  Total number of open positions  */
  openPositionCount: Scalars["Int"];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<RiskType>;
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars["String"];
  /**  Slug of protocol, including version. e.g. aave-v2  */
  slug: Scalars["String"];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars["String"];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars["BigDecimal"];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars["BigDecimal"];
  /**  Total number of pools  */
  totalPoolCount: Scalars["Int"];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
};

export type LendingProtocolDailyUsageMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>;
};

export type LendingProtocolFinancialMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FinancialsDailySnapshot_Filter>;
};

export type LendingProtocolHourlyUsageMetricsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>;
};

export type LendingProtocolMarketsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Market_Filter>;
};

export type LendingProtocolMintedTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type LendingProtocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _marketIDs?: InputMaybe<Array<Scalars["String"]>>;
  _marketIDs_contains?: InputMaybe<Array<Scalars["String"]>>;
  _marketIDs_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  _marketIDs_not?: InputMaybe<Array<Scalars["String"]>>;
  _marketIDs_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  _marketIDs_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  _priceOracle?: InputMaybe<Scalars["String"]>;
  _priceOracle_contains?: InputMaybe<Scalars["String"]>;
  _priceOracle_contains_nocase?: InputMaybe<Scalars["String"]>;
  _priceOracle_ends_with?: InputMaybe<Scalars["String"]>;
  _priceOracle_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _priceOracle_gt?: InputMaybe<Scalars["String"]>;
  _priceOracle_gte?: InputMaybe<Scalars["String"]>;
  _priceOracle_in?: InputMaybe<Array<Scalars["String"]>>;
  _priceOracle_lt?: InputMaybe<Scalars["String"]>;
  _priceOracle_lte?: InputMaybe<Scalars["String"]>;
  _priceOracle_not?: InputMaybe<Scalars["String"]>;
  _priceOracle_not_contains?: InputMaybe<Scalars["String"]>;
  _priceOracle_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  _priceOracle_not_ends_with?: InputMaybe<Scalars["String"]>;
  _priceOracle_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _priceOracle_not_in?: InputMaybe<Array<Scalars["String"]>>;
  _priceOracle_not_starts_with?: InputMaybe<Scalars["String"]>;
  _priceOracle_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _priceOracle_starts_with?: InputMaybe<Scalars["String"]>;
  _priceOracle_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<LendingProtocol_Filter>>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  cumulativeUniqueBorrowers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueBorrowers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueDepositors?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueDepositors_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidatees?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidatees_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidators?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidators_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lendingType?: InputMaybe<LendingType>;
  lendingType_in?: InputMaybe<Array<LendingType>>;
  lendingType_not?: InputMaybe<LendingType>;
  lendingType_not_in?: InputMaybe<Array<LendingType>>;
  markets_?: InputMaybe<Market_Filter>;
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
  mintedTokenSupplies?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  mintedTokens?: InputMaybe<Array<Scalars["String"]>>;
  mintedTokens_?: InputMaybe<Token_Filter>;
  mintedTokens_contains?: InputMaybe<Array<Scalars["String"]>>;
  mintedTokens_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  mintedTokens_not?: InputMaybe<Array<Scalars["String"]>>;
  mintedTokens_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
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
  or?: InputMaybe<Array<InputMaybe<LendingProtocol_Filter>>>;
  protocolControlledValueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  riskType?: InputMaybe<RiskType>;
  riskType_in?: InputMaybe<Array<RiskType>>;
  riskType_not?: InputMaybe<RiskType>;
  riskType_not_in?: InputMaybe<Array<RiskType>>;
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
  totalBorrowBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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

export enum LendingProtocol_OrderBy {
  MarketIDs = "_marketIDs",
  PriceOracle = "_priceOracle",
  CumulativeBorrowUsd = "cumulativeBorrowUSD",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeLiquidateUsd = "cumulativeLiquidateUSD",
  CumulativePositionCount = "cumulativePositionCount",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  CumulativeUniqueBorrowers = "cumulativeUniqueBorrowers",
  CumulativeUniqueDepositors = "cumulativeUniqueDepositors",
  CumulativeUniqueLiquidatees = "cumulativeUniqueLiquidatees",
  CumulativeUniqueLiquidators = "cumulativeUniqueLiquidators",
  CumulativeUniqueUsers = "cumulativeUniqueUsers",
  DailyUsageMetrics = "dailyUsageMetrics",
  FinancialMetrics = "financialMetrics",
  HourlyUsageMetrics = "hourlyUsageMetrics",
  Id = "id",
  LendingType = "lendingType",
  Markets = "markets",
  MethodologyVersion = "methodologyVersion",
  MintedTokenSupplies = "mintedTokenSupplies",
  MintedTokens = "mintedTokens",
  Name = "name",
  Network = "network",
  OpenPositionCount = "openPositionCount",
  ProtocolControlledValueUsd = "protocolControlledValueUSD",
  RiskType = "riskType",
  SchemaVersion = "schemaVersion",
  Slug = "slug",
  SubgraphVersion = "subgraphVersion",
  TotalBorrowBalanceUsd = "totalBorrowBalanceUSD",
  TotalDepositBalanceUsd = "totalDepositBalanceUSD",
  TotalPoolCount = "totalPoolCount",
  TotalValueLockedUsd = "totalValueLockedUSD",
  Type = "type",
}

export enum LendingType {
  /**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
  Cdp = "CDP",
  /**  Pooled protocols pool all users assets into a single market  */
  Pooled = "POOLED",
}

export type Liquidate = {
  __typename?: "Liquidate";
  /**  Amount of collateral liquidated in native units  */
  amount: Scalars["BigInt"];
  /**  Amount of collateral liquidated in USD  */
  amountUSD: Scalars["BigDecimal"];
  /**  Asset repaid (borrowed)  */
  asset: Token;
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["String"];
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars["ID"];
  /**  Account that got liquidated  */
  liquidatee: Account;
  /**  Account that carried out the liquidation  */
  liquidator: Account;
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  The market of the collateral being used  */
  market: Market;
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The user position changed by this event  */
  position: Position;
  /**  Amount of profit from liquidation in USD  */
  profitUSD: Scalars["BigDecimal"];
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
};

export type Liquidate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Liquidate_Filter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["String"]>;
  hash_contains?: InputMaybe<Scalars["String"]>;
  hash_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_ends_with?: InputMaybe<Scalars["String"]>;
  hash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_gt?: InputMaybe<Scalars["String"]>;
  hash_gte?: InputMaybe<Scalars["String"]>;
  hash_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_lt?: InputMaybe<Scalars["String"]>;
  hash_lte?: InputMaybe<Scalars["String"]>;
  hash_not?: InputMaybe<Scalars["String"]>;
  hash_not_contains?: InputMaybe<Scalars["String"]>;
  hash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_not_starts_with?: InputMaybe<Scalars["String"]>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_starts_with?: InputMaybe<Scalars["String"]>;
  hash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidatee?: InputMaybe<Scalars["String"]>;
  liquidatee_?: InputMaybe<Account_Filter>;
  liquidatee_contains?: InputMaybe<Scalars["String"]>;
  liquidatee_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_ends_with?: InputMaybe<Scalars["String"]>;
  liquidatee_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_gt?: InputMaybe<Scalars["String"]>;
  liquidatee_gte?: InputMaybe<Scalars["String"]>;
  liquidatee_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidatee_lt?: InputMaybe<Scalars["String"]>;
  liquidatee_lte?: InputMaybe<Scalars["String"]>;
  liquidatee_not?: InputMaybe<Scalars["String"]>;
  liquidatee_not_contains?: InputMaybe<Scalars["String"]>;
  liquidatee_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidatee_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidatee_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidatee_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_starts_with?: InputMaybe<Scalars["String"]>;
  liquidatee_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidator?: InputMaybe<Scalars["String"]>;
  liquidator_?: InputMaybe<Account_Filter>;
  liquidator_contains?: InputMaybe<Scalars["String"]>;
  liquidator_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidator_ends_with?: InputMaybe<Scalars["String"]>;
  liquidator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidator_gt?: InputMaybe<Scalars["String"]>;
  liquidator_gte?: InputMaybe<Scalars["String"]>;
  liquidator_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidator_lt?: InputMaybe<Scalars["String"]>;
  liquidator_lte?: InputMaybe<Scalars["String"]>;
  liquidator_not?: InputMaybe<Scalars["String"]>;
  liquidator_not_contains?: InputMaybe<Scalars["String"]>;
  liquidator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidator_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidator_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidator_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidator_starts_with?: InputMaybe<Scalars["String"]>;
  liquidator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Liquidate_Filter>>>;
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
  profitUSD?: InputMaybe<Scalars["BigDecimal"]>;
  profitUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  profitUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  profitUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  profitUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  profitUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  profitUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  profitUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Liquidate_OrderBy {
  Amount = "amount",
  AmountUsd = "amountUSD",
  Asset = "asset",
  AssetType = "asset___type",
  AssetDecimals = "asset__decimals",
  AssetId = "asset__id",
  AssetLastPriceBlockNumber = "asset__lastPriceBlockNumber",
  AssetLastPriceUsd = "asset__lastPriceUSD",
  AssetName = "asset__name",
  AssetSymbol = "asset__symbol",
  BlockNumber = "blockNumber",
  Hash = "hash",
  Id = "id",
  Liquidatee = "liquidatee",
  LiquidateeBorrowCount = "liquidatee__borrowCount",
  LiquidateeClosedPositionCount = "liquidatee__closedPositionCount",
  LiquidateeDepositCount = "liquidatee__depositCount",
  LiquidateeId = "liquidatee__id",
  LiquidateeLiquidateCount = "liquidatee__liquidateCount",
  LiquidateeLiquidationCount = "liquidatee__liquidationCount",
  LiquidateeOpenPositionCount = "liquidatee__openPositionCount",
  LiquidateePositionCount = "liquidatee__positionCount",
  LiquidateeRepayCount = "liquidatee__repayCount",
  LiquidateeWithdrawCount = "liquidatee__withdrawCount",
  Liquidator = "liquidator",
  LiquidatorBorrowCount = "liquidator__borrowCount",
  LiquidatorClosedPositionCount = "liquidator__closedPositionCount",
  LiquidatorDepositCount = "liquidator__depositCount",
  LiquidatorId = "liquidator__id",
  LiquidatorLiquidateCount = "liquidator__liquidateCount",
  LiquidatorLiquidationCount = "liquidator__liquidationCount",
  LiquidatorOpenPositionCount = "liquidator__openPositionCount",
  LiquidatorPositionCount = "liquidator__positionCount",
  LiquidatorRepayCount = "liquidator__repayCount",
  LiquidatorWithdrawCount = "liquidator__withdrawCount",
  LogIndex = "logIndex",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  Nonce = "nonce",
  Position = "position",
  PositionBalance = "position__balance",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionBorrowCount = "position__borrowCount",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionIsCollateral = "position__isCollateral",
  PositionLiquidationCount = "position__liquidationCount",
  PositionRepayCount = "position__repayCount",
  PositionSide = "position__side",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  ProfitUsd = "profitUSD",
  Timestamp = "timestamp",
}

export type Market = {
  __typename?: "Market";
  /**  Aux: Timestamp of the last time rewards were calculated for this market.  */
  _lastRewardsUpdated?: Maybe<Scalars["BigInt"]>;
  /**  An aggregate metric of the average borrow rate across all borrows  */
  _liquidityIndex: Scalars["BigInt"];
  /**  The state of the protocol prior to being paused (isActive / canUseAsCollateral / canBorrowFrom)  */
  _prePauseState: Array<Scalars["Boolean"]>;
  /**  The reserve factor as a percentage  */
  _reserveFactor: Scalars["BigDecimal"];
  /**  The stable debt token address correlated to the reserve asset  */
  _sToken?: Maybe<Token>;
  /**  The variable debt token address correlated to the reserve asset  */
  _vToken?: Maybe<Token>;
  /**  Number of borrowing positions in this market  */
  borrowingPositionCount: Scalars["Int"];
  /**  All borrows from this market  */
  borrows: Array<Borrow>;
  /**  Can you borrow from this market  */
  canBorrowFrom: Scalars["Boolean"];
  /**  Can you use the output token as collateral  */
  canUseAsCollateral: Scalars["Boolean"];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars["Int"];
  /**  Creation block number  */
  createdBlockNumber: Scalars["BigInt"];
  /**  Creation timestamp  */
  createdTimestamp: Scalars["BigInt"];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Market daily snapshots  */
  dailySnapshots: Array<MarketDailySnapshot>;
  /**  All deposits made to this market  */
  deposits: Array<Deposit>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars["BigDecimal"]>;
  /**  Market hourly snapshots  */
  hourlySnapshots: Array<MarketHourlySnapshot>;
  /**  Smart contract address of the market  */
  id: Scalars["ID"];
  /**  Token that need to be deposited to take a position in protocol  */
  inputToken: Token;
  /**  Amount of input tokens in the market  */
  inputTokenBalance: Scalars["BigInt"];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars["BigDecimal"];
  /**  Is this market active or is it frozen  */
  isActive: Scalars["Boolean"];
  /**  Number of lending positions in this market  */
  lendingPositionCount: Scalars["Int"];
  /**  All liquidations made to this market  */
  liquidates: Array<Liquidate>;
  /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
  liquidationPenalty: Scalars["BigDecimal"];
  /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
  liquidationThreshold: Scalars["BigDecimal"];
  /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
  maximumLTV: Scalars["BigDecimal"];
  /**  Name of market  */
  name?: Maybe<Scalars["String"]>;
  /**  Number of open positions in this market  */
  openPositionCount: Scalars["Int"];
  /**  Token that is minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist  */
  outputToken?: Maybe<Token>;
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars["BigDecimal"];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars["BigInt"];
  /**  Number of positions in this market  */
  positionCount: Scalars["Int"];
  /**  All positions in this market  */
  positions: Array<Position>;
  /**  The protocol this pool belongs to  */
  protocol: LendingProtocol;
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  All repayments to this market  */
  repays: Array<Repay>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>;
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD  */
  totalBorrowBalanceUSD: Scalars["BigDecimal"];
  /**  Current balance of all deposited assets (not historical cumulative), in USD  */
  totalDepositBalanceUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars["BigDecimal"];
  /**  All withdrawals made from this market  */
  withdraws: Array<Withdraw>;
};

export type MarketBorrowsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type MarketDailySnapshotsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MarketDailySnapshot_Filter>;
};

export type MarketDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type MarketHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MarketHourlySnapshot_Filter>;
};

export type MarketLiquidatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Liquidate_Filter>;
};

export type MarketPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Position_Filter>;
};

export type MarketRatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<InterestRate_Filter>;
};

export type MarketRepaysArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
};

export type MarketRewardTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RewardToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RewardToken_Filter>;
};

export type MarketWithdrawsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type MarketDailySnapshot = {
  __typename?: "MarketDailySnapshot";
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Sum of all borrows/mints made on a given day, in USD  */
  dailyBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all deposits made on a given day, in USD  */
  dailyDepositUSD: Scalars["BigDecimal"];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars["BigDecimal"];
  /**  Daily revenue generated by the market, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars["BigDecimal"];
  /**  Daily revenue generated by the market, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Daily revenue generated by the market.  */
  dailyTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars["BigDecimal"];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars["BigDecimal"]>;
  /**  { Smart contract address of the market }-{ # of days since Unix epoch time }  */
  id: Scalars["ID"];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars["BigInt"];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars["BigDecimal"];
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars["BigDecimal"];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars["BigInt"];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  Timestamp of this snapshot  */
  timestamp: Scalars["BigInt"];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars["BigDecimal"];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars["BigDecimal"];
};

export type MarketDailySnapshotRatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<InterestRate_Filter>;
};

export type MarketDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketDailySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  dailyBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyRepayUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyRepayUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  dailyWithdrawUSD?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangeRate?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangeRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  inputTokenBalance?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<MarketDailySnapshot_Filter>>>;
  outputTokenPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  outputTokenSupply?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  outputTokenSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_not?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<LendingProtocol_Filter>;
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
  rates?: InputMaybe<Array<Scalars["String"]>>;
  rates_?: InputMaybe<InterestRate_Filter>;
  rates_contains?: InputMaybe<Array<Scalars["String"]>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  rates_not?: InputMaybe<Array<Scalars["String"]>>;
  rates_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
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
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum MarketDailySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  CumulativeBorrowUsd = "cumulativeBorrowUSD",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeLiquidateUsd = "cumulativeLiquidateUSD",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  DailyBorrowUsd = "dailyBorrowUSD",
  DailyDepositUsd = "dailyDepositUSD",
  DailyLiquidateUsd = "dailyLiquidateUSD",
  DailyProtocolSideRevenueUsd = "dailyProtocolSideRevenueUSD",
  DailyRepayUsd = "dailyRepayUSD",
  DailySupplySideRevenueUsd = "dailySupplySideRevenueUSD",
  DailyTotalRevenueUsd = "dailyTotalRevenueUSD",
  DailyWithdrawUsd = "dailyWithdrawUSD",
  ExchangeRate = "exchangeRate",
  Id = "id",
  InputTokenBalance = "inputTokenBalance",
  InputTokenPriceUsd = "inputTokenPriceUSD",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  OutputTokenPriceUsd = "outputTokenPriceUSD",
  OutputTokenSupply = "outputTokenSupply",
  Protocol = "protocol",
  ProtocolPriceOracle = "protocol___priceOracle",
  ProtocolCumulativeBorrowUsd = "protocol__cumulativeBorrowUSD",
  ProtocolCumulativeDepositUsd = "protocol__cumulativeDepositUSD",
  ProtocolCumulativeLiquidateUsd = "protocol__cumulativeLiquidateUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueBorrowers = "protocol__cumulativeUniqueBorrowers",
  ProtocolCumulativeUniqueDepositors = "protocol__cumulativeUniqueDepositors",
  ProtocolCumulativeUniqueLiquidatees = "protocol__cumulativeUniqueLiquidatees",
  ProtocolCumulativeUniqueLiquidators = "protocol__cumulativeUniqueLiquidators",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolId = "protocol__id",
  ProtocolLendingType = "protocol__lendingType",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolRiskType = "protocol__riskType",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalBorrowBalanceUsd = "protocol__totalBorrowBalanceUSD",
  ProtocolTotalDepositBalanceUsd = "protocol__totalDepositBalanceUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  Rates = "rates",
  RewardTokenEmissionsAmount = "rewardTokenEmissionsAmount",
  RewardTokenEmissionsUsd = "rewardTokenEmissionsUSD",
  Timestamp = "timestamp",
  TotalBorrowBalanceUsd = "totalBorrowBalanceUSD",
  TotalDepositBalanceUsd = "totalDepositBalanceUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
}

export type MarketHourlySnapshot = {
  __typename?: "MarketHourlySnapshot";
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars["BigDecimal"];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars["BigDecimal"]>;
  /**  Sum of all borrows/mints made in a given hour, in USD  */
  hourlyBorrowUSD: Scalars["BigDecimal"];
  /**  Sum of all deposits made in a given hour, in USD  */
  hourlyDepositUSD: Scalars["BigDecimal"];
  /**  Total assets liquidated in a given hour, in USD.  */
  hourlyLiquidateUSD: Scalars["BigDecimal"];
  /**  Hourly revenue generated by the market, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets repaid on a given hour, in USD.  */
  hourlyRepayUSD: Scalars["BigDecimal"];
  /**  Hourly revenue generated by the market, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars["BigDecimal"];
  /**  Hourly revenue generated by the market.  */
  hourlyTotalRevenueUSD: Scalars["BigDecimal"];
  /**  Total assets withdrawn on a given hour, in USD.  */
  hourlyWithdrawUSD: Scalars["BigDecimal"];
  /**  { Smart contract address of the market }-{ # of hours since Unix epoch time }  */
  id: Scalars["ID"];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars["BigInt"];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars["BigDecimal"];
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars["BigDecimal"];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars["BigInt"];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars["BigInt"]>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars["BigDecimal"]>>;
  /**  Timestamp of this snapshot  */
  timestamp: Scalars["BigInt"];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars["BigDecimal"];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars["BigDecimal"];
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars["BigDecimal"];
};

export type MarketHourlySnapshotRatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<InterestRate_Filter>;
};

export type MarketHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketHourlySnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  exchangeRate?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangeRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  hourlyRepayUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyRepayUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyRepayUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyRepayUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyRepayUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyRepayUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyRepayUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyRepayUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyWithdrawUSD?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyWithdrawUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyWithdrawUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyWithdrawUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlyWithdrawUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyWithdrawUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyWithdrawUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  hourlyWithdrawUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  inputTokenBalance?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<MarketHourlySnapshot_Filter>>>;
  outputTokenPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  outputTokenSupply?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  outputTokenSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_not?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<LendingProtocol_Filter>;
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
  rates?: InputMaybe<Array<Scalars["String"]>>;
  rates_?: InputMaybe<InterestRate_Filter>;
  rates_contains?: InputMaybe<Array<Scalars["String"]>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  rates_not?: InputMaybe<Array<Scalars["String"]>>;
  rates_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
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
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum MarketHourlySnapshot_OrderBy {
  BlockNumber = "blockNumber",
  CumulativeBorrowUsd = "cumulativeBorrowUSD",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeLiquidateUsd = "cumulativeLiquidateUSD",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  ExchangeRate = "exchangeRate",
  HourlyBorrowUsd = "hourlyBorrowUSD",
  HourlyDepositUsd = "hourlyDepositUSD",
  HourlyLiquidateUsd = "hourlyLiquidateUSD",
  HourlyProtocolSideRevenueUsd = "hourlyProtocolSideRevenueUSD",
  HourlyRepayUsd = "hourlyRepayUSD",
  HourlySupplySideRevenueUsd = "hourlySupplySideRevenueUSD",
  HourlyTotalRevenueUsd = "hourlyTotalRevenueUSD",
  HourlyWithdrawUsd = "hourlyWithdrawUSD",
  Id = "id",
  InputTokenBalance = "inputTokenBalance",
  InputTokenPriceUsd = "inputTokenPriceUSD",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  OutputTokenPriceUsd = "outputTokenPriceUSD",
  OutputTokenSupply = "outputTokenSupply",
  Protocol = "protocol",
  ProtocolPriceOracle = "protocol___priceOracle",
  ProtocolCumulativeBorrowUsd = "protocol__cumulativeBorrowUSD",
  ProtocolCumulativeDepositUsd = "protocol__cumulativeDepositUSD",
  ProtocolCumulativeLiquidateUsd = "protocol__cumulativeLiquidateUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueBorrowers = "protocol__cumulativeUniqueBorrowers",
  ProtocolCumulativeUniqueDepositors = "protocol__cumulativeUniqueDepositors",
  ProtocolCumulativeUniqueLiquidatees = "protocol__cumulativeUniqueLiquidatees",
  ProtocolCumulativeUniqueLiquidators = "protocol__cumulativeUniqueLiquidators",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolId = "protocol__id",
  ProtocolLendingType = "protocol__lendingType",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolRiskType = "protocol__riskType",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalBorrowBalanceUsd = "protocol__totalBorrowBalanceUSD",
  ProtocolTotalDepositBalanceUsd = "protocol__totalDepositBalanceUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  Rates = "rates",
  RewardTokenEmissionsAmount = "rewardTokenEmissionsAmount",
  RewardTokenEmissionsUsd = "rewardTokenEmissionsUSD",
  Timestamp = "timestamp",
  TotalBorrowBalanceUsd = "totalBorrowBalanceUSD",
  TotalDepositBalanceUsd = "totalDepositBalanceUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
}

export type Market_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _lastRewardsUpdated?: InputMaybe<Scalars["BigInt"]>;
  _lastRewardsUpdated_gt?: InputMaybe<Scalars["BigInt"]>;
  _lastRewardsUpdated_gte?: InputMaybe<Scalars["BigInt"]>;
  _lastRewardsUpdated_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  _lastRewardsUpdated_lt?: InputMaybe<Scalars["BigInt"]>;
  _lastRewardsUpdated_lte?: InputMaybe<Scalars["BigInt"]>;
  _lastRewardsUpdated_not?: InputMaybe<Scalars["BigInt"]>;
  _lastRewardsUpdated_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  _liquidityIndex?: InputMaybe<Scalars["BigInt"]>;
  _liquidityIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  _liquidityIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  _liquidityIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  _liquidityIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  _liquidityIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  _liquidityIndex_not?: InputMaybe<Scalars["BigInt"]>;
  _liquidityIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  _prePauseState?: InputMaybe<Array<Scalars["Boolean"]>>;
  _prePauseState_contains?: InputMaybe<Array<Scalars["Boolean"]>>;
  _prePauseState_contains_nocase?: InputMaybe<Array<Scalars["Boolean"]>>;
  _prePauseState_not?: InputMaybe<Array<Scalars["Boolean"]>>;
  _prePauseState_not_contains?: InputMaybe<Array<Scalars["Boolean"]>>;
  _prePauseState_not_contains_nocase?: InputMaybe<Array<Scalars["Boolean"]>>;
  _reserveFactor?: InputMaybe<Scalars["BigDecimal"]>;
  _reserveFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  _reserveFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  _reserveFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  _reserveFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  _reserveFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  _reserveFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  _reserveFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  _sToken?: InputMaybe<Scalars["String"]>;
  _sToken_?: InputMaybe<Token_Filter>;
  _sToken_contains?: InputMaybe<Scalars["String"]>;
  _sToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  _sToken_ends_with?: InputMaybe<Scalars["String"]>;
  _sToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _sToken_gt?: InputMaybe<Scalars["String"]>;
  _sToken_gte?: InputMaybe<Scalars["String"]>;
  _sToken_in?: InputMaybe<Array<Scalars["String"]>>;
  _sToken_lt?: InputMaybe<Scalars["String"]>;
  _sToken_lte?: InputMaybe<Scalars["String"]>;
  _sToken_not?: InputMaybe<Scalars["String"]>;
  _sToken_not_contains?: InputMaybe<Scalars["String"]>;
  _sToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  _sToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  _sToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _sToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  _sToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  _sToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _sToken_starts_with?: InputMaybe<Scalars["String"]>;
  _sToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _vToken?: InputMaybe<Scalars["String"]>;
  _vToken_?: InputMaybe<Token_Filter>;
  _vToken_contains?: InputMaybe<Scalars["String"]>;
  _vToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  _vToken_ends_with?: InputMaybe<Scalars["String"]>;
  _vToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _vToken_gt?: InputMaybe<Scalars["String"]>;
  _vToken_gte?: InputMaybe<Scalars["String"]>;
  _vToken_in?: InputMaybe<Array<Scalars["String"]>>;
  _vToken_lt?: InputMaybe<Scalars["String"]>;
  _vToken_lte?: InputMaybe<Scalars["String"]>;
  _vToken_not?: InputMaybe<Scalars["String"]>;
  _vToken_not_contains?: InputMaybe<Scalars["String"]>;
  _vToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  _vToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  _vToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _vToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  _vToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  _vToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _vToken_starts_with?: InputMaybe<Scalars["String"]>;
  _vToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  borrowingPositionCount?: InputMaybe<Scalars["Int"]>;
  borrowingPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  borrowingPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  borrowingPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrowingPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  borrowingPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  borrowingPositionCount_not?: InputMaybe<Scalars["Int"]>;
  borrowingPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrows_?: InputMaybe<Borrow_Filter>;
  canBorrowFrom?: InputMaybe<Scalars["Boolean"]>;
  canBorrowFrom_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  canBorrowFrom_not?: InputMaybe<Scalars["Boolean"]>;
  canBorrowFrom_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  canUseAsCollateral?: InputMaybe<Scalars["Boolean"]>;
  canUseAsCollateral_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  canUseAsCollateral_not?: InputMaybe<Scalars["Boolean"]>;
  canUseAsCollateral_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
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
  cumulativeBorrowUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  dailySnapshots_?: InputMaybe<MarketDailySnapshot_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  exchangeRate?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangeRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  hourlySnapshots_?: InputMaybe<MarketHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  inputToken?: InputMaybe<Scalars["String"]>;
  inputTokenBalance?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  inputTokenPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  inputToken_?: InputMaybe<Token_Filter>;
  inputToken_contains?: InputMaybe<Scalars["String"]>;
  inputToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  inputToken_ends_with?: InputMaybe<Scalars["String"]>;
  inputToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  inputToken_gt?: InputMaybe<Scalars["String"]>;
  inputToken_gte?: InputMaybe<Scalars["String"]>;
  inputToken_in?: InputMaybe<Array<Scalars["String"]>>;
  inputToken_lt?: InputMaybe<Scalars["String"]>;
  inputToken_lte?: InputMaybe<Scalars["String"]>;
  inputToken_not?: InputMaybe<Scalars["String"]>;
  inputToken_not_contains?: InputMaybe<Scalars["String"]>;
  inputToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  inputToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  inputToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  inputToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  inputToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  inputToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  inputToken_starts_with?: InputMaybe<Scalars["String"]>;
  inputToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lendingPositionCount?: InputMaybe<Scalars["Int"]>;
  lendingPositionCount_gt?: InputMaybe<Scalars["Int"]>;
  lendingPositionCount_gte?: InputMaybe<Scalars["Int"]>;
  lendingPositionCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  lendingPositionCount_lt?: InputMaybe<Scalars["Int"]>;
  lendingPositionCount_lte?: InputMaybe<Scalars["Int"]>;
  lendingPositionCount_not?: InputMaybe<Scalars["Int"]>;
  lendingPositionCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidates_?: InputMaybe<Liquidate_Filter>;
  liquidationPenalty?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationPenalty_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationPenalty_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationPenalty_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidationPenalty_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationPenalty_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationPenalty_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationPenalty_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidationThreshold?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationThreshold_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationThreshold_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidationThreshold_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationThreshold_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationThreshold_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  maximumLTV?: InputMaybe<Scalars["BigDecimal"]>;
  maximumLTV_gt?: InputMaybe<Scalars["BigDecimal"]>;
  maximumLTV_gte?: InputMaybe<Scalars["BigDecimal"]>;
  maximumLTV_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  maximumLTV_lt?: InputMaybe<Scalars["BigDecimal"]>;
  maximumLTV_lte?: InputMaybe<Scalars["BigDecimal"]>;
  maximumLTV_not?: InputMaybe<Scalars["BigDecimal"]>;
  maximumLTV_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  or?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  outputToken?: InputMaybe<Scalars["String"]>;
  outputTokenPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  outputTokenSupply?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  outputTokenSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_not?: InputMaybe<Scalars["BigInt"]>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  outputToken_?: InputMaybe<Token_Filter>;
  outputToken_contains?: InputMaybe<Scalars["String"]>;
  outputToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  outputToken_ends_with?: InputMaybe<Scalars["String"]>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  outputToken_gt?: InputMaybe<Scalars["String"]>;
  outputToken_gte?: InputMaybe<Scalars["String"]>;
  outputToken_in?: InputMaybe<Array<Scalars["String"]>>;
  outputToken_lt?: InputMaybe<Scalars["String"]>;
  outputToken_lte?: InputMaybe<Scalars["String"]>;
  outputToken_not?: InputMaybe<Scalars["String"]>;
  outputToken_not_contains?: InputMaybe<Scalars["String"]>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  outputToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  outputToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  outputToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  outputToken_starts_with?: InputMaybe<Scalars["String"]>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  protocol_?: InputMaybe<LendingProtocol_Filter>;
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
  rates?: InputMaybe<Array<Scalars["String"]>>;
  rates_?: InputMaybe<InterestRate_Filter>;
  rates_contains?: InputMaybe<Array<Scalars["String"]>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  rates_not?: InputMaybe<Array<Scalars["String"]>>;
  rates_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  repays_?: InputMaybe<Repay_Filter>;
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
  totalBorrowBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  withdraws_?: InputMaybe<Withdraw_Filter>;
};

export enum Market_OrderBy {
  LastRewardsUpdated = "_lastRewardsUpdated",
  LiquidityIndex = "_liquidityIndex",
  PrePauseState = "_prePauseState",
  ReserveFactor = "_reserveFactor",
  SToken = "_sToken",
  STokenType = "_sToken___type",
  STokenDecimals = "_sToken__decimals",
  STokenId = "_sToken__id",
  STokenLastPriceBlockNumber = "_sToken__lastPriceBlockNumber",
  STokenLastPriceUsd = "_sToken__lastPriceUSD",
  STokenName = "_sToken__name",
  STokenSymbol = "_sToken__symbol",
  VToken = "_vToken",
  VTokenType = "_vToken___type",
  VTokenDecimals = "_vToken__decimals",
  VTokenId = "_vToken__id",
  VTokenLastPriceBlockNumber = "_vToken__lastPriceBlockNumber",
  VTokenLastPriceUsd = "_vToken__lastPriceUSD",
  VTokenName = "_vToken__name",
  VTokenSymbol = "_vToken__symbol",
  BorrowingPositionCount = "borrowingPositionCount",
  Borrows = "borrows",
  CanBorrowFrom = "canBorrowFrom",
  CanUseAsCollateral = "canUseAsCollateral",
  ClosedPositionCount = "closedPositionCount",
  CreatedBlockNumber = "createdBlockNumber",
  CreatedTimestamp = "createdTimestamp",
  CumulativeBorrowUsd = "cumulativeBorrowUSD",
  CumulativeDepositUsd = "cumulativeDepositUSD",
  CumulativeLiquidateUsd = "cumulativeLiquidateUSD",
  CumulativeProtocolSideRevenueUsd = "cumulativeProtocolSideRevenueUSD",
  CumulativeSupplySideRevenueUsd = "cumulativeSupplySideRevenueUSD",
  CumulativeTotalRevenueUsd = "cumulativeTotalRevenueUSD",
  DailySnapshots = "dailySnapshots",
  Deposits = "deposits",
  ExchangeRate = "exchangeRate",
  HourlySnapshots = "hourlySnapshots",
  Id = "id",
  InputToken = "inputToken",
  InputTokenBalance = "inputTokenBalance",
  InputTokenPriceUsd = "inputTokenPriceUSD",
  InputTokenType = "inputToken___type",
  InputTokenDecimals = "inputToken__decimals",
  InputTokenId = "inputToken__id",
  InputTokenLastPriceBlockNumber = "inputToken__lastPriceBlockNumber",
  InputTokenLastPriceUsd = "inputToken__lastPriceUSD",
  InputTokenName = "inputToken__name",
  InputTokenSymbol = "inputToken__symbol",
  IsActive = "isActive",
  LendingPositionCount = "lendingPositionCount",
  Liquidates = "liquidates",
  LiquidationPenalty = "liquidationPenalty",
  LiquidationThreshold = "liquidationThreshold",
  MaximumLtv = "maximumLTV",
  Name = "name",
  OpenPositionCount = "openPositionCount",
  OutputToken = "outputToken",
  OutputTokenPriceUsd = "outputTokenPriceUSD",
  OutputTokenSupply = "outputTokenSupply",
  OutputTokenType = "outputToken___type",
  OutputTokenDecimals = "outputToken__decimals",
  OutputTokenId = "outputToken__id",
  OutputTokenLastPriceBlockNumber = "outputToken__lastPriceBlockNumber",
  OutputTokenLastPriceUsd = "outputToken__lastPriceUSD",
  OutputTokenName = "outputToken__name",
  OutputTokenSymbol = "outputToken__symbol",
  PositionCount = "positionCount",
  Positions = "positions",
  Protocol = "protocol",
  ProtocolPriceOracle = "protocol___priceOracle",
  ProtocolCumulativeBorrowUsd = "protocol__cumulativeBorrowUSD",
  ProtocolCumulativeDepositUsd = "protocol__cumulativeDepositUSD",
  ProtocolCumulativeLiquidateUsd = "protocol__cumulativeLiquidateUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueBorrowers = "protocol__cumulativeUniqueBorrowers",
  ProtocolCumulativeUniqueDepositors = "protocol__cumulativeUniqueDepositors",
  ProtocolCumulativeUniqueLiquidatees = "protocol__cumulativeUniqueLiquidatees",
  ProtocolCumulativeUniqueLiquidators = "protocol__cumulativeUniqueLiquidators",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolId = "protocol__id",
  ProtocolLendingType = "protocol__lendingType",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolRiskType = "protocol__riskType",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalBorrowBalanceUsd = "protocol__totalBorrowBalanceUSD",
  ProtocolTotalDepositBalanceUsd = "protocol__totalDepositBalanceUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  Rates = "rates",
  Repays = "repays",
  RewardTokenEmissionsAmount = "rewardTokenEmissionsAmount",
  RewardTokenEmissionsUsd = "rewardTokenEmissionsUSD",
  RewardTokens = "rewardTokens",
  TotalBorrowBalanceUsd = "totalBorrowBalanceUSD",
  TotalDepositBalanceUsd = "totalDepositBalanceUSD",
  TotalValueLockedUsd = "totalValueLockedUSD",
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
  /**  Token balance in this position, in native amounts  */
  balance: Scalars["BigInt"];
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars["BigInt"]>;
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars["BigInt"];
  /**  Number of borrows related to this position  */
  borrowCount: Scalars["Int"];
  /**  All borrow events of this position  */
  borrows: Array<Borrow>;
  /**  Number of deposits related to this position  */
  depositCount: Scalars["Int"];
  /**  All deposit events of this position  */
  deposits: Array<Deposit>;
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars["String"]>;
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars["String"];
  /**  { Account address }-{ Market address }-{ Position Side }-{ Counter }  */
  id: Scalars["ID"];
  /**  Whether this position is being used as a collateral (only applies to LENDER positions)  */
  isCollateral?: Maybe<Scalars["Boolean"]>;
  /**  Number of liquidations related to this position  */
  liquidationCount: Scalars["Int"];
  /**  Liquidation event related to this position (if exists)  */
  liquidations: Array<Liquidate>;
  /**  The market in which this position was opened  */
  market: Market;
  /**  Number of repays related to this position  */
  repayCount: Scalars["Int"];
  /**  All repay events of this position  */
  repays: Array<Repay>;
  /**  Side of the position (either lender or borrower)  */
  side: PositionSide;
  /**  Position daily snapshots for open positions  */
  snapshots: Array<PositionSnapshot>;
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars["BigInt"]>;
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars["BigInt"];
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars["Int"];
  /**  All withdraw events of this position  */
  withdraws: Array<Withdraw>;
};

export type PositionBorrowsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type PositionDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type PositionLiquidationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Liquidate_Filter>;
};

export type PositionRepaysArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
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

export type PositionCounter = {
  __typename?: "PositionCounter";
  /**  { Account address }-{ Market address }-{ Position Side }  */
  id: Scalars["ID"];
  /**  Next count  */
  nextCount: Scalars["Int"];
};

export type PositionCounter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionCounter_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  nextCount?: InputMaybe<Scalars["Int"]>;
  nextCount_gt?: InputMaybe<Scalars["Int"]>;
  nextCount_gte?: InputMaybe<Scalars["Int"]>;
  nextCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  nextCount_lt?: InputMaybe<Scalars["Int"]>;
  nextCount_lte?: InputMaybe<Scalars["Int"]>;
  nextCount_not?: InputMaybe<Scalars["Int"]>;
  nextCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<PositionCounter_Filter>>>;
};

export enum PositionCounter_OrderBy {
  Id = "id",
  NextCount = "nextCount",
}

export enum PositionSide {
  /**  Position opened as a borrower  */
  Borrower = "BORROWER",
  /**  Position opened as a lender  */
  Lender = "LENDER",
}

export type PositionSnapshot = {
  __typename?: "PositionSnapshot";
  /**  Token balance in this position, in native amounts  */
  balance: Scalars["BigInt"];
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars["String"];
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars["ID"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars["BigInt"];
  /**  Position of this snapshot  */
  position: Position;
  /**  Timestamp of this snapshot  */
  timestamp: Scalars["BigInt"];
};

export type PositionSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>;
  balance?: InputMaybe<Scalars["BigInt"]>;
  balance_gt?: InputMaybe<Scalars["BigInt"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["String"]>;
  hash_contains?: InputMaybe<Scalars["String"]>;
  hash_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_ends_with?: InputMaybe<Scalars["String"]>;
  hash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_gt?: InputMaybe<Scalars["String"]>;
  hash_gte?: InputMaybe<Scalars["String"]>;
  hash_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_lt?: InputMaybe<Scalars["String"]>;
  hash_lte?: InputMaybe<Scalars["String"]>;
  hash_not?: InputMaybe<Scalars["String"]>;
  hash_not_contains?: InputMaybe<Scalars["String"]>;
  hash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_not_starts_with?: InputMaybe<Scalars["String"]>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_starts_with?: InputMaybe<Scalars["String"]>;
  hash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
};

export enum PositionSnapshot_OrderBy {
  Balance = "balance",
  BlockNumber = "blockNumber",
  Hash = "hash",
  Id = "id",
  LogIndex = "logIndex",
  Nonce = "nonce",
  Position = "position",
  PositionBalance = "position__balance",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionBorrowCount = "position__borrowCount",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionIsCollateral = "position__isCollateral",
  PositionLiquidationCount = "position__liquidationCount",
  PositionRepayCount = "position__repayCount",
  PositionSide = "position__side",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Timestamp = "timestamp",
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
  balance?: InputMaybe<Scalars["BigInt"]>;
  balance_gt?: InputMaybe<Scalars["BigInt"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  borrowCount?: InputMaybe<Scalars["Int"]>;
  borrowCount_gt?: InputMaybe<Scalars["Int"]>;
  borrowCount_gte?: InputMaybe<Scalars["Int"]>;
  borrowCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrowCount_lt?: InputMaybe<Scalars["Int"]>;
  borrowCount_lte?: InputMaybe<Scalars["Int"]>;
  borrowCount_not?: InputMaybe<Scalars["Int"]>;
  borrowCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrows_?: InputMaybe<Borrow_Filter>;
  depositCount?: InputMaybe<Scalars["Int"]>;
  depositCount_gt?: InputMaybe<Scalars["Int"]>;
  depositCount_gte?: InputMaybe<Scalars["Int"]>;
  depositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositCount_lt?: InputMaybe<Scalars["Int"]>;
  depositCount_lte?: InputMaybe<Scalars["Int"]>;
  depositCount_not?: InputMaybe<Scalars["Int"]>;
  depositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  deposits_?: InputMaybe<Deposit_Filter>;
  hashClosed?: InputMaybe<Scalars["String"]>;
  hashClosed_contains?: InputMaybe<Scalars["String"]>;
  hashClosed_contains_nocase?: InputMaybe<Scalars["String"]>;
  hashClosed_ends_with?: InputMaybe<Scalars["String"]>;
  hashClosed_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hashClosed_gt?: InputMaybe<Scalars["String"]>;
  hashClosed_gte?: InputMaybe<Scalars["String"]>;
  hashClosed_in?: InputMaybe<Array<Scalars["String"]>>;
  hashClosed_lt?: InputMaybe<Scalars["String"]>;
  hashClosed_lte?: InputMaybe<Scalars["String"]>;
  hashClosed_not?: InputMaybe<Scalars["String"]>;
  hashClosed_not_contains?: InputMaybe<Scalars["String"]>;
  hashClosed_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hashClosed_not_ends_with?: InputMaybe<Scalars["String"]>;
  hashClosed_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hashClosed_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hashClosed_not_starts_with?: InputMaybe<Scalars["String"]>;
  hashClosed_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hashClosed_starts_with?: InputMaybe<Scalars["String"]>;
  hashClosed_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hashOpened?: InputMaybe<Scalars["String"]>;
  hashOpened_contains?: InputMaybe<Scalars["String"]>;
  hashOpened_contains_nocase?: InputMaybe<Scalars["String"]>;
  hashOpened_ends_with?: InputMaybe<Scalars["String"]>;
  hashOpened_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hashOpened_gt?: InputMaybe<Scalars["String"]>;
  hashOpened_gte?: InputMaybe<Scalars["String"]>;
  hashOpened_in?: InputMaybe<Array<Scalars["String"]>>;
  hashOpened_lt?: InputMaybe<Scalars["String"]>;
  hashOpened_lte?: InputMaybe<Scalars["String"]>;
  hashOpened_not?: InputMaybe<Scalars["String"]>;
  hashOpened_not_contains?: InputMaybe<Scalars["String"]>;
  hashOpened_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hashOpened_not_ends_with?: InputMaybe<Scalars["String"]>;
  hashOpened_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hashOpened_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hashOpened_not_starts_with?: InputMaybe<Scalars["String"]>;
  hashOpened_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hashOpened_starts_with?: InputMaybe<Scalars["String"]>;
  hashOpened_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isCollateral?: InputMaybe<Scalars["Boolean"]>;
  isCollateral_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isCollateral_not?: InputMaybe<Scalars["Boolean"]>;
  isCollateral_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  liquidationCount?: InputMaybe<Scalars["Int"]>;
  liquidationCount_gt?: InputMaybe<Scalars["Int"]>;
  liquidationCount_gte?: InputMaybe<Scalars["Int"]>;
  liquidationCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidationCount_lt?: InputMaybe<Scalars["Int"]>;
  liquidationCount_lte?: InputMaybe<Scalars["Int"]>;
  liquidationCount_not?: InputMaybe<Scalars["Int"]>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidations_?: InputMaybe<Liquidate_Filter>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  repayCount?: InputMaybe<Scalars["Int"]>;
  repayCount_gt?: InputMaybe<Scalars["Int"]>;
  repayCount_gte?: InputMaybe<Scalars["Int"]>;
  repayCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  repayCount_lt?: InputMaybe<Scalars["Int"]>;
  repayCount_lte?: InputMaybe<Scalars["Int"]>;
  repayCount_not?: InputMaybe<Scalars["Int"]>;
  repayCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  repays_?: InputMaybe<Repay_Filter>;
  side?: InputMaybe<PositionSide>;
  side_in?: InputMaybe<Array<PositionSide>>;
  side_not?: InputMaybe<PositionSide>;
  side_not_in?: InputMaybe<Array<PositionSide>>;
  snapshots_?: InputMaybe<PositionSnapshot_Filter>;
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
  AccountBorrowCount = "account__borrowCount",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountLiquidateCount = "account__liquidateCount",
  AccountLiquidationCount = "account__liquidationCount",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountRepayCount = "account__repayCount",
  AccountWithdrawCount = "account__withdrawCount",
  Balance = "balance",
  BlockNumberClosed = "blockNumberClosed",
  BlockNumberOpened = "blockNumberOpened",
  BorrowCount = "borrowCount",
  Borrows = "borrows",
  DepositCount = "depositCount",
  Deposits = "deposits",
  HashClosed = "hashClosed",
  HashOpened = "hashOpened",
  Id = "id",
  IsCollateral = "isCollateral",
  LiquidationCount = "liquidationCount",
  Liquidations = "liquidations",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  RepayCount = "repayCount",
  Repays = "repays",
  Side = "side",
  Snapshots = "snapshots",
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
  id: Scalars["ID"];
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  actorAccount?: Maybe<ActorAccount>;
  actorAccounts: Array<ActorAccount>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  market?: Maybe<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  markets: Array<Market>;
  position?: Maybe<Position>;
  positionCounter?: Maybe<PositionCounter>;
  positionCounters: Array<PositionCounter>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  positions: Array<Position>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  token?: Maybe<Token>;
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

export type QueryActorAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryActorAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ActorAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ActorAccount_Filter>;
};

export type QueryBorrowArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBorrowsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Borrow_Filter>;
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

export type QueryInterestRateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryInterestRatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InterestRate_Filter>;
};

export type QueryLendingProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLendingProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LendingProtocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LendingProtocol_Filter>;
};

export type QueryLiquidateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Liquidate_Filter>;
};

export type QueryMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketDailySnapshot_Filter>;
};

export type QueryMarketHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketHourlySnapshot_Filter>;
};

export type QueryMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};

export type QueryPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionCounter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionCounter_Filter>;
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

export type QueryRepayArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRepaysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Repay_Filter>;
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

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
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

export type Repay = {
  __typename?: "Repay";
  /**  Account that repaid/burned tokens  */
  account: Account;
  /**  Amount of token repaid/burned in native units  */
  amount: Scalars["BigInt"];
  /**  Amount of token repaid/burned in USD  */
  amountUSD: Scalars["BigDecimal"];
  /**  Token repaid/burned  */
  asset: Token;
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["String"];
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars["ID"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  The market tokens are repaid/burned to  */
  market: Market;
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The user position changed by this event  */
  position: Position;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
};

export type Repay_Filter = {
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
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Repay_Filter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["String"]>;
  hash_contains?: InputMaybe<Scalars["String"]>;
  hash_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_ends_with?: InputMaybe<Scalars["String"]>;
  hash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_gt?: InputMaybe<Scalars["String"]>;
  hash_gte?: InputMaybe<Scalars["String"]>;
  hash_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_lt?: InputMaybe<Scalars["String"]>;
  hash_lte?: InputMaybe<Scalars["String"]>;
  hash_not?: InputMaybe<Scalars["String"]>;
  hash_not_contains?: InputMaybe<Scalars["String"]>;
  hash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_not_starts_with?: InputMaybe<Scalars["String"]>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_starts_with?: InputMaybe<Scalars["String"]>;
  hash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Repay_Filter>>>;
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
};

export enum Repay_OrderBy {
  Account = "account",
  AccountBorrowCount = "account__borrowCount",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountLiquidateCount = "account__liquidateCount",
  AccountLiquidationCount = "account__liquidationCount",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountRepayCount = "account__repayCount",
  AccountWithdrawCount = "account__withdrawCount",
  Amount = "amount",
  AmountUsd = "amountUSD",
  Asset = "asset",
  AssetType = "asset___type",
  AssetDecimals = "asset__decimals",
  AssetId = "asset__id",
  AssetLastPriceBlockNumber = "asset__lastPriceBlockNumber",
  AssetLastPriceUsd = "asset__lastPriceUSD",
  AssetName = "asset__name",
  AssetSymbol = "asset__symbol",
  BlockNumber = "blockNumber",
  Hash = "hash",
  Id = "id",
  LogIndex = "logIndex",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  Nonce = "nonce",
  Position = "position",
  PositionBalance = "position__balance",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionBorrowCount = "position__borrowCount",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionIsCollateral = "position__isCollateral",
  PositionLiquidationCount = "position__liquidationCount",
  PositionRepayCount = "position__repayCount",
  PositionSide = "position__side",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
  Timestamp = "timestamp",
}

export type RewardToken = {
  __typename?: "RewardToken";
  _distributionEnd?: Maybe<Scalars["BigInt"]>;
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars["ID"];
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
  _distributionEnd?: InputMaybe<Scalars["BigInt"]>;
  _distributionEnd_gt?: InputMaybe<Scalars["BigInt"]>;
  _distributionEnd_gte?: InputMaybe<Scalars["BigInt"]>;
  _distributionEnd_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  _distributionEnd_lt?: InputMaybe<Scalars["BigInt"]>;
  _distributionEnd_lte?: InputMaybe<Scalars["BigInt"]>;
  _distributionEnd_not?: InputMaybe<Scalars["BigInt"]>;
  _distributionEnd_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<RewardToken_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  DistributionEnd = "_distributionEnd",
  Id = "id",
  Token = "token",
  TokenType = "token___type",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenLastPriceBlockNumber = "token__lastPriceBlockNumber",
  TokenLastPriceUsd = "token__lastPriceUSD",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  Type = "type",
}

export enum RiskType {
  /**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
  Global = "GLOBAL",
  /**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
  Isolated = "ISOLATED",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  actorAccount?: Maybe<ActorAccount>;
  actorAccounts: Array<ActorAccount>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  market?: Maybe<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  markets: Array<Market>;
  position?: Maybe<Position>;
  positionCounter?: Maybe<PositionCounter>;
  positionCounters: Array<PositionCounter>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  positions: Array<Position>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  token?: Maybe<Token>;
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

export type SubscriptionActorAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionActorAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ActorAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ActorAccount_Filter>;
};

export type SubscriptionBorrowArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBorrowsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Borrow_Filter>;
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

export type SubscriptionInterestRateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionInterestRatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InterestRate_Filter>;
};

export type SubscriptionLendingProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLendingProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LendingProtocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LendingProtocol_Filter>;
};

export type SubscriptionLiquidateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Liquidate_Filter>;
};

export type SubscriptionMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketDailySnapshot_Filter>;
};

export type SubscriptionMarketHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketHourlySnapshot_Filter>;
};

export type SubscriptionMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};

export type SubscriptionPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionCounter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionCounter_Filter>;
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

export type SubscriptionRepayArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRepaysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Repay_Filter>;
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

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
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

export type Token = {
  __typename?: "Token";
  /**  the market ID for underlying/asset token, aToken, vToken and sToken */
  _market?: Maybe<Market>;
  /**  type of token: aToken, inputToken, sToken, or vToken  */
  _type?: Maybe<Scalars["String"]>;
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars["Int"];
  /**  Smart contract address of the token  */
  id: Scalars["ID"];
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars["BigInt"]>;
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars["BigDecimal"]>;
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars["String"];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars["String"];
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _market?: InputMaybe<Scalars["String"]>;
  _market_?: InputMaybe<Market_Filter>;
  _market_contains?: InputMaybe<Scalars["String"]>;
  _market_contains_nocase?: InputMaybe<Scalars["String"]>;
  _market_ends_with?: InputMaybe<Scalars["String"]>;
  _market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _market_gt?: InputMaybe<Scalars["String"]>;
  _market_gte?: InputMaybe<Scalars["String"]>;
  _market_in?: InputMaybe<Array<Scalars["String"]>>;
  _market_lt?: InputMaybe<Scalars["String"]>;
  _market_lte?: InputMaybe<Scalars["String"]>;
  _market_not?: InputMaybe<Scalars["String"]>;
  _market_not_contains?: InputMaybe<Scalars["String"]>;
  _market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  _market_not_ends_with?: InputMaybe<Scalars["String"]>;
  _market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  _market_not_starts_with?: InputMaybe<Scalars["String"]>;
  _market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _market_starts_with?: InputMaybe<Scalars["String"]>;
  _market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _type?: InputMaybe<Scalars["String"]>;
  _type_contains?: InputMaybe<Scalars["String"]>;
  _type_contains_nocase?: InputMaybe<Scalars["String"]>;
  _type_ends_with?: InputMaybe<Scalars["String"]>;
  _type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _type_gt?: InputMaybe<Scalars["String"]>;
  _type_gte?: InputMaybe<Scalars["String"]>;
  _type_in?: InputMaybe<Array<Scalars["String"]>>;
  _type_lt?: InputMaybe<Scalars["String"]>;
  _type_lte?: InputMaybe<Scalars["String"]>;
  _type_not?: InputMaybe<Scalars["String"]>;
  _type_not_contains?: InputMaybe<Scalars["String"]>;
  _type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  _type_not_ends_with?: InputMaybe<Scalars["String"]>;
  _type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  _type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  _type_not_starts_with?: InputMaybe<Scalars["String"]>;
  _type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  _type_starts_with?: InputMaybe<Scalars["String"]>;
  _type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  Market = "_market",
  MarketLastRewardsUpdated = "_market___lastRewardsUpdated",
  MarketLiquidityIndex = "_market___liquidityIndex",
  MarketReserveFactor = "_market___reserveFactor",
  MarketBorrowingPositionCount = "_market__borrowingPositionCount",
  MarketCanBorrowFrom = "_market__canBorrowFrom",
  MarketCanUseAsCollateral = "_market__canUseAsCollateral",
  MarketClosedPositionCount = "_market__closedPositionCount",
  MarketCreatedBlockNumber = "_market__createdBlockNumber",
  MarketCreatedTimestamp = "_market__createdTimestamp",
  MarketCumulativeBorrowUsd = "_market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "_market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "_market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "_market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "_market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "_market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "_market__exchangeRate",
  MarketId = "_market__id",
  MarketInputTokenBalance = "_market__inputTokenBalance",
  MarketInputTokenPriceUsd = "_market__inputTokenPriceUSD",
  MarketIsActive = "_market__isActive",
  MarketLendingPositionCount = "_market__lendingPositionCount",
  MarketLiquidationPenalty = "_market__liquidationPenalty",
  MarketLiquidationThreshold = "_market__liquidationThreshold",
  MarketMaximumLtv = "_market__maximumLTV",
  MarketName = "_market__name",
  MarketOpenPositionCount = "_market__openPositionCount",
  MarketOutputTokenPriceUsd = "_market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "_market__outputTokenSupply",
  MarketPositionCount = "_market__positionCount",
  MarketTotalBorrowBalanceUsd = "_market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "_market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "_market__totalValueLockedUSD",
  Type = "_type",
  Decimals = "decimals",
  Id = "id",
  LastPriceBlockNumber = "lastPriceBlockNumber",
  LastPriceUsd = "lastPriceUSD",
  Name = "name",
  Symbol = "symbol",
}

export type UsageMetricsDailySnapshot = {
  __typename?: "UsageMetricsDailySnapshot";
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  Number of cumulative borrowers  */
  cumulativeUniqueBorrowers: Scalars["Int"];
  /**  Number of cumulative depositors  */
  cumulativeUniqueDepositors: Scalars["Int"];
  /**  Number of cumulative liquidatees (accounts that got liquidated)  */
  cumulativeUniqueLiquidatees: Scalars["Int"];
  /**  Number of cumulative liquidators (accounts that performed liquidation)  */
  cumulativeUniqueLiquidators: Scalars["Int"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  Number of unique daily borrowers  */
  dailyActiveBorrowers: Scalars["Int"];
  /**  Number of unique daily depositors  */
  dailyActiveDepositors: Scalars["Int"];
  /**  Number of unique daily liquidatees (accounts that got liquidated)  */
  dailyActiveLiquidatees: Scalars["Int"];
  /**  Number of unique daily liquidators (accounts that performed liquidation)  */
  dailyActiveLiquidators: Scalars["Int"];
  /**  Number of unique daily active users  */
  dailyActiveUsers: Scalars["Int"];
  /**  Total number of borrows/mints in a day  */
  dailyBorrowCount: Scalars["Int"];
  /**  Total number of deposits in a day  */
  dailyDepositCount: Scalars["Int"];
  /**  Total number of liquidations in a day  */
  dailyLiquidateCount: Scalars["Int"];
  /**  Total number of repayments/burns in a day  */
  dailyRepayCount: Scalars["Int"];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars["Int"];
  /**  Total number of withdrawals in a day  */
  dailyWithdrawCount: Scalars["Int"];
  /**  ID is # of days since Unix epoch time  */
  id: Scalars["ID"];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Timestamp of this snapshot  */
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
  cumulativeUniqueBorrowers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueBorrowers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueBorrowers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueDepositors?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueDepositors_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueDepositors_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidatees?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidatees_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidatees_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidators?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueLiquidators_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueLiquidators_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars["Int"]>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveBorrowers?: InputMaybe<Scalars["Int"]>;
  dailyActiveBorrowers_gt?: InputMaybe<Scalars["Int"]>;
  dailyActiveBorrowers_gte?: InputMaybe<Scalars["Int"]>;
  dailyActiveBorrowers_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveBorrowers_lt?: InputMaybe<Scalars["Int"]>;
  dailyActiveBorrowers_lte?: InputMaybe<Scalars["Int"]>;
  dailyActiveBorrowers_not?: InputMaybe<Scalars["Int"]>;
  dailyActiveBorrowers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveDepositors?: InputMaybe<Scalars["Int"]>;
  dailyActiveDepositors_gt?: InputMaybe<Scalars["Int"]>;
  dailyActiveDepositors_gte?: InputMaybe<Scalars["Int"]>;
  dailyActiveDepositors_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveDepositors_lt?: InputMaybe<Scalars["Int"]>;
  dailyActiveDepositors_lte?: InputMaybe<Scalars["Int"]>;
  dailyActiveDepositors_not?: InputMaybe<Scalars["Int"]>;
  dailyActiveDepositors_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveLiquidatees?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidatees_gt?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidatees_gte?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidatees_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveLiquidatees_lt?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidatees_lte?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidatees_not?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidatees_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveLiquidators?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidators_gt?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidators_gte?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidators_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveLiquidators_lt?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidators_lte?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidators_not?: InputMaybe<Scalars["Int"]>;
  dailyActiveLiquidators_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveUsers?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_gt?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_gte?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyActiveUsers_lt?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_lte?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_not?: InputMaybe<Scalars["Int"]>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyBorrowCount?: InputMaybe<Scalars["Int"]>;
  dailyBorrowCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyBorrowCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyBorrowCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyBorrowCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyBorrowCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyBorrowCount_not?: InputMaybe<Scalars["Int"]>;
  dailyBorrowCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyDepositCount?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_not?: InputMaybe<Scalars["Int"]>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyLiquidateCount?: InputMaybe<Scalars["Int"]>;
  dailyLiquidateCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyLiquidateCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyLiquidateCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyLiquidateCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyLiquidateCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyLiquidateCount_not?: InputMaybe<Scalars["Int"]>;
  dailyLiquidateCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyRepayCount?: InputMaybe<Scalars["Int"]>;
  dailyRepayCount_gt?: InputMaybe<Scalars["Int"]>;
  dailyRepayCount_gte?: InputMaybe<Scalars["Int"]>;
  dailyRepayCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  dailyRepayCount_lt?: InputMaybe<Scalars["Int"]>;
  dailyRepayCount_lte?: InputMaybe<Scalars["Int"]>;
  dailyRepayCount_not?: InputMaybe<Scalars["Int"]>;
  dailyRepayCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_Filter>>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<LendingProtocol_Filter>;
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
  CumulativeUniqueBorrowers = "cumulativeUniqueBorrowers",
  CumulativeUniqueDepositors = "cumulativeUniqueDepositors",
  CumulativeUniqueLiquidatees = "cumulativeUniqueLiquidatees",
  CumulativeUniqueLiquidators = "cumulativeUniqueLiquidators",
  CumulativeUniqueUsers = "cumulativeUniqueUsers",
  DailyActiveBorrowers = "dailyActiveBorrowers",
  DailyActiveDepositors = "dailyActiveDepositors",
  DailyActiveLiquidatees = "dailyActiveLiquidatees",
  DailyActiveLiquidators = "dailyActiveLiquidators",
  DailyActiveUsers = "dailyActiveUsers",
  DailyBorrowCount = "dailyBorrowCount",
  DailyDepositCount = "dailyDepositCount",
  DailyLiquidateCount = "dailyLiquidateCount",
  DailyRepayCount = "dailyRepayCount",
  DailyTransactionCount = "dailyTransactionCount",
  DailyWithdrawCount = "dailyWithdrawCount",
  Id = "id",
  Protocol = "protocol",
  ProtocolPriceOracle = "protocol___priceOracle",
  ProtocolCumulativeBorrowUsd = "protocol__cumulativeBorrowUSD",
  ProtocolCumulativeDepositUsd = "protocol__cumulativeDepositUSD",
  ProtocolCumulativeLiquidateUsd = "protocol__cumulativeLiquidateUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueBorrowers = "protocol__cumulativeUniqueBorrowers",
  ProtocolCumulativeUniqueDepositors = "protocol__cumulativeUniqueDepositors",
  ProtocolCumulativeUniqueLiquidatees = "protocol__cumulativeUniqueLiquidatees",
  ProtocolCumulativeUniqueLiquidators = "protocol__cumulativeUniqueLiquidators",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolId = "protocol__id",
  ProtocolLendingType = "protocol__lendingType",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolRiskType = "protocol__riskType",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalBorrowBalanceUsd = "protocol__totalBorrowBalanceUSD",
  ProtocolTotalDepositBalanceUsd = "protocol__totalDepositBalanceUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  Timestamp = "timestamp",
  TotalPoolCount = "totalPoolCount",
}

export type UsageMetricsHourlySnapshot = {
  __typename?: "UsageMetricsHourlySnapshot";
  /**  Block number of this snapshot  */
  blockNumber: Scalars["BigInt"];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars["Int"];
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars["Int"];
  /**  Total number of borrows/mints in an hour  */
  hourlyBorrowCount: Scalars["Int"];
  /**  Total number of deposits in an hour  */
  hourlyDepositCount: Scalars["Int"];
  /**  Total number of liquidations in an hour  */
  hourlyLiquidateCount: Scalars["Int"];
  /**  Total number of repayments/burns in an hour  */
  hourlyRepayCount: Scalars["Int"];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars["Int"];
  /**  Total number of withdrawals in an hour  */
  hourlyWithdrawCount: Scalars["Int"];
  /**  { # of hours since Unix epoch time }  */
  id: Scalars["ID"];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Timestamp of this snapshot  */
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
  hourlyActiveUsers?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_not?: InputMaybe<Scalars["Int"]>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyBorrowCount?: InputMaybe<Scalars["Int"]>;
  hourlyBorrowCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyBorrowCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyBorrowCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyBorrowCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyBorrowCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyBorrowCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyBorrowCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyDepositCount?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyDepositCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyLiquidateCount?: InputMaybe<Scalars["Int"]>;
  hourlyLiquidateCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyLiquidateCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyLiquidateCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyLiquidateCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyLiquidateCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyLiquidateCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyLiquidateCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyRepayCount?: InputMaybe<Scalars["Int"]>;
  hourlyRepayCount_gt?: InputMaybe<Scalars["Int"]>;
  hourlyRepayCount_gte?: InputMaybe<Scalars["Int"]>;
  hourlyRepayCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  hourlyRepayCount_lt?: InputMaybe<Scalars["Int"]>;
  hourlyRepayCount_lte?: InputMaybe<Scalars["Int"]>;
  hourlyRepayCount_not?: InputMaybe<Scalars["Int"]>;
  hourlyRepayCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_Filter>>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<LendingProtocol_Filter>;
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
  HourlyActiveUsers = "hourlyActiveUsers",
  HourlyBorrowCount = "hourlyBorrowCount",
  HourlyDepositCount = "hourlyDepositCount",
  HourlyLiquidateCount = "hourlyLiquidateCount",
  HourlyRepayCount = "hourlyRepayCount",
  HourlyTransactionCount = "hourlyTransactionCount",
  HourlyWithdrawCount = "hourlyWithdrawCount",
  Id = "id",
  Protocol = "protocol",
  ProtocolPriceOracle = "protocol___priceOracle",
  ProtocolCumulativeBorrowUsd = "protocol__cumulativeBorrowUSD",
  ProtocolCumulativeDepositUsd = "protocol__cumulativeDepositUSD",
  ProtocolCumulativeLiquidateUsd = "protocol__cumulativeLiquidateUSD",
  ProtocolCumulativePositionCount = "protocol__cumulativePositionCount",
  ProtocolCumulativeProtocolSideRevenueUsd = "protocol__cumulativeProtocolSideRevenueUSD",
  ProtocolCumulativeSupplySideRevenueUsd = "protocol__cumulativeSupplySideRevenueUSD",
  ProtocolCumulativeTotalRevenueUsd = "protocol__cumulativeTotalRevenueUSD",
  ProtocolCumulativeUniqueBorrowers = "protocol__cumulativeUniqueBorrowers",
  ProtocolCumulativeUniqueDepositors = "protocol__cumulativeUniqueDepositors",
  ProtocolCumulativeUniqueLiquidatees = "protocol__cumulativeUniqueLiquidatees",
  ProtocolCumulativeUniqueLiquidators = "protocol__cumulativeUniqueLiquidators",
  ProtocolCumulativeUniqueUsers = "protocol__cumulativeUniqueUsers",
  ProtocolId = "protocol__id",
  ProtocolLendingType = "protocol__lendingType",
  ProtocolMethodologyVersion = "protocol__methodologyVersion",
  ProtocolName = "protocol__name",
  ProtocolNetwork = "protocol__network",
  ProtocolOpenPositionCount = "protocol__openPositionCount",
  ProtocolProtocolControlledValueUsd = "protocol__protocolControlledValueUSD",
  ProtocolRiskType = "protocol__riskType",
  ProtocolSchemaVersion = "protocol__schemaVersion",
  ProtocolSlug = "protocol__slug",
  ProtocolSubgraphVersion = "protocol__subgraphVersion",
  ProtocolTotalBorrowBalanceUsd = "protocol__totalBorrowBalanceUSD",
  ProtocolTotalDepositBalanceUsd = "protocol__totalDepositBalanceUSD",
  ProtocolTotalPoolCount = "protocol__totalPoolCount",
  ProtocolTotalValueLockedUsd = "protocol__totalValueLockedUSD",
  ProtocolType = "protocol__type",
  Timestamp = "timestamp",
}

export type Withdraw = {
  __typename?: "Withdraw";
  /**  Account that withdrew tokens  */
  account: Account;
  /**  Amount of token withdrawn in native units  */
  amount: Scalars["BigInt"];
  /**  Amount of token withdrawn in USD  */
  amountUSD: Scalars["BigDecimal"];
  /**  Token withdrawn  */
  asset: Token;
  /**  Block number of this event  */
  blockNumber: Scalars["BigInt"];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars["String"];
  /**  { Transaction hash }-{ Log index } */
  id: Scalars["ID"];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars["Int"];
  /**  The market tokens are withdrew from  */
  market: Market;
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars["BigInt"];
  /**  The user position changed by this event  */
  position: Position;
  /**  Timestamp of this event  */
  timestamp: Scalars["BigInt"];
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
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountUSD?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_Filter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["String"]>;
  hash_contains?: InputMaybe<Scalars["String"]>;
  hash_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_ends_with?: InputMaybe<Scalars["String"]>;
  hash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_gt?: InputMaybe<Scalars["String"]>;
  hash_gte?: InputMaybe<Scalars["String"]>;
  hash_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_lt?: InputMaybe<Scalars["String"]>;
  hash_lte?: InputMaybe<Scalars["String"]>;
  hash_not?: InputMaybe<Scalars["String"]>;
  hash_not_contains?: InputMaybe<Scalars["String"]>;
  hash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with?: InputMaybe<Scalars["String"]>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  hash_not_starts_with?: InputMaybe<Scalars["String"]>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash_starts_with?: InputMaybe<Scalars["String"]>;
  hash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nonce?: InputMaybe<Scalars["BigInt"]>;
  nonce_gt?: InputMaybe<Scalars["BigInt"]>;
  nonce_gte?: InputMaybe<Scalars["BigInt"]>;
  nonce_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonce_lt?: InputMaybe<Scalars["BigInt"]>;
  nonce_lte?: InputMaybe<Scalars["BigInt"]>;
  nonce_not?: InputMaybe<Scalars["BigInt"]>;
  nonce_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_Filter>>>;
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
};

export enum Withdraw_OrderBy {
  Account = "account",
  AccountBorrowCount = "account__borrowCount",
  AccountClosedPositionCount = "account__closedPositionCount",
  AccountDepositCount = "account__depositCount",
  AccountId = "account__id",
  AccountLiquidateCount = "account__liquidateCount",
  AccountLiquidationCount = "account__liquidationCount",
  AccountOpenPositionCount = "account__openPositionCount",
  AccountPositionCount = "account__positionCount",
  AccountRepayCount = "account__repayCount",
  AccountWithdrawCount = "account__withdrawCount",
  Amount = "amount",
  AmountUsd = "amountUSD",
  Asset = "asset",
  AssetType = "asset___type",
  AssetDecimals = "asset__decimals",
  AssetId = "asset__id",
  AssetLastPriceBlockNumber = "asset__lastPriceBlockNumber",
  AssetLastPriceUsd = "asset__lastPriceUSD",
  AssetName = "asset__name",
  AssetSymbol = "asset__symbol",
  BlockNumber = "blockNumber",
  Hash = "hash",
  Id = "id",
  LogIndex = "logIndex",
  Market = "market",
  MarketLastRewardsUpdated = "market___lastRewardsUpdated",
  MarketLiquidityIndex = "market___liquidityIndex",
  MarketReserveFactor = "market___reserveFactor",
  MarketBorrowingPositionCount = "market__borrowingPositionCount",
  MarketCanBorrowFrom = "market__canBorrowFrom",
  MarketCanUseAsCollateral = "market__canUseAsCollateral",
  MarketClosedPositionCount = "market__closedPositionCount",
  MarketCreatedBlockNumber = "market__createdBlockNumber",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketCumulativeBorrowUsd = "market__cumulativeBorrowUSD",
  MarketCumulativeDepositUsd = "market__cumulativeDepositUSD",
  MarketCumulativeLiquidateUsd = "market__cumulativeLiquidateUSD",
  MarketCumulativeProtocolSideRevenueUsd = "market__cumulativeProtocolSideRevenueUSD",
  MarketCumulativeSupplySideRevenueUsd = "market__cumulativeSupplySideRevenueUSD",
  MarketCumulativeTotalRevenueUsd = "market__cumulativeTotalRevenueUSD",
  MarketExchangeRate = "market__exchangeRate",
  MarketId = "market__id",
  MarketInputTokenBalance = "market__inputTokenBalance",
  MarketInputTokenPriceUsd = "market__inputTokenPriceUSD",
  MarketIsActive = "market__isActive",
  MarketLendingPositionCount = "market__lendingPositionCount",
  MarketLiquidationPenalty = "market__liquidationPenalty",
  MarketLiquidationThreshold = "market__liquidationThreshold",
  MarketMaximumLtv = "market__maximumLTV",
  MarketName = "market__name",
  MarketOpenPositionCount = "market__openPositionCount",
  MarketOutputTokenPriceUsd = "market__outputTokenPriceUSD",
  MarketOutputTokenSupply = "market__outputTokenSupply",
  MarketPositionCount = "market__positionCount",
  MarketTotalBorrowBalanceUsd = "market__totalBorrowBalanceUSD",
  MarketTotalDepositBalanceUsd = "market__totalDepositBalanceUSD",
  MarketTotalValueLockedUsd = "market__totalValueLockedUSD",
  Nonce = "nonce",
  Position = "position",
  PositionBalance = "position__balance",
  PositionBlockNumberClosed = "position__blockNumberClosed",
  PositionBlockNumberOpened = "position__blockNumberOpened",
  PositionBorrowCount = "position__borrowCount",
  PositionDepositCount = "position__depositCount",
  PositionHashClosed = "position__hashClosed",
  PositionHashOpened = "position__hashOpened",
  PositionId = "position__id",
  PositionIsCollateral = "position__isCollateral",
  PositionLiquidationCount = "position__liquidationCount",
  PositionRepayCount = "position__repayCount",
  PositionSide = "position__side",
  PositionTimestampClosed = "position__timestampClosed",
  PositionTimestampOpened = "position__timestampOpened",
  PositionWithdrawCount = "position__withdrawCount",
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

export type DepositsQueryVariables = Exact<{
  user?: InputMaybe<Scalars["String"]>;
}>;

export type DepositsQuery = {
  __typename?: "Query";
  deposits: Array<{
    __typename?: "Deposit";
    id: string;
    account: { __typename?: "Account"; id: string };
  }>;
};

export const DepositsDocument = `
    query deposits($user: String) {
  deposits(where: {account: $user}) {
    id
    account {
      id
    }
  }
}
    `;
export const useDepositsQuery = <TData = DepositsQuery, TError = unknown>(
  variables?: DepositsQueryVariables,
  options?: UseQueryOptions<DepositsQuery, TError, TData>
) =>
  useQuery<DepositsQuery, TError, TData>(
    variables === undefined ? ["deposits"] : ["deposits", variables],
    fetcher<DepositsQuery, DepositsQueryVariables>(DepositsDocument, variables),
    options
  );

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Protocol: ["LendingProtocol"],
  },
};
export default result;
