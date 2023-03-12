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

export type AToken = {
  __typename?: "AToken";
  /**
   * AToken address
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  tokenContractImpl: Scalars["Bytes"];
  underlyingAssetAddress: Scalars["Bytes"];
  underlyingAssetDecimals: Scalars["Int"];
};

export type ATokenBalanceHistoryItem = {
  __typename?: "ATokenBalanceHistoryItem";
  currentATokenBalance: Scalars["BigInt"];
  /**
   * userReserve + txHash
   *
   */
  id: Scalars["ID"];
  index: Scalars["BigInt"];
  scaledATokenBalance: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  userReserve: UserReserve;
};

export type ATokenBalanceHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ATokenBalanceHistoryItem_Filter>>>;
  currentATokenBalance?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentATokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<ATokenBalanceHistoryItem_Filter>>>;
  scaledATokenBalance?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  scaledATokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ATokenBalanceHistoryItem_OrderBy {
  CurrentATokenBalance = "currentATokenBalance",
  Id = "id",
  Index = "index",
  ScaledATokenBalance = "scaledATokenBalance",
  Timestamp = "timestamp",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
}

export type AToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AToken_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<AToken_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  tokenContractImpl?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenContractImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetDecimals?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum AToken_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  TokenContractImpl = "tokenContractImpl",
  UnderlyingAssetAddress = "underlyingAssetAddress",
  UnderlyingAssetDecimals = "underlyingAssetDecimals",
}

export enum Action {
  Borrow = "Borrow",
  Deposit = "Deposit",
  LiquidationCall = "LiquidationCall",
  RebalanceStableBorrowRate = "RebalanceStableBorrowRate",
  RedeemUnderlying = "RedeemUnderlying",
  Repay = "Repay",
  Swap = "Swap",
  UsageAsCollateral = "UsageAsCollateral",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type Borrow = UserTransaction & {
  __typename?: "Borrow";
  action: Action;
  amount: Scalars["BigInt"];
  assetPriceUSD: Scalars["BigDecimal"];
  borrowRate: Scalars["BigInt"];
  borrowRateMode: BorrowRateMode;
  caller: User;
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  referrer?: Maybe<Referrer>;
  reserve: Reserve;
  stableTokenDebt: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
  variableTokenDebt: Scalars["BigInt"];
};

export enum BorrowRateMode {
  None = "None",
  Stable = "Stable",
  Variable = "Variable",
}

export type Borrow_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Borrow_Filter>>>;
  assetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  assetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  borrowRate?: InputMaybe<Scalars["BigInt"]>;
  borrowRateMode?: InputMaybe<BorrowRateMode>;
  borrowRateMode_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateMode_not?: InputMaybe<BorrowRateMode>;
  borrowRateMode_not_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  borrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  borrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  borrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  borrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  borrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["String"]>;
  caller_?: InputMaybe<User_Filter>;
  caller_contains?: InputMaybe<Scalars["String"]>;
  caller_contains_nocase?: InputMaybe<Scalars["String"]>;
  caller_ends_with?: InputMaybe<Scalars["String"]>;
  caller_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  caller_gt?: InputMaybe<Scalars["String"]>;
  caller_gte?: InputMaybe<Scalars["String"]>;
  caller_in?: InputMaybe<Array<Scalars["String"]>>;
  caller_lt?: InputMaybe<Scalars["String"]>;
  caller_lte?: InputMaybe<Scalars["String"]>;
  caller_not?: InputMaybe<Scalars["String"]>;
  caller_not_contains?: InputMaybe<Scalars["String"]>;
  caller_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  caller_not_ends_with?: InputMaybe<Scalars["String"]>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  caller_not_in?: InputMaybe<Array<Scalars["String"]>>;
  caller_not_starts_with?: InputMaybe<Scalars["String"]>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  caller_starts_with?: InputMaybe<Scalars["String"]>;
  caller_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Borrow_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  referrer?: InputMaybe<Scalars["String"]>;
  referrer_?: InputMaybe<Referrer_Filter>;
  referrer_contains?: InputMaybe<Scalars["String"]>;
  referrer_contains_nocase?: InputMaybe<Scalars["String"]>;
  referrer_ends_with?: InputMaybe<Scalars["String"]>;
  referrer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referrer_gt?: InputMaybe<Scalars["String"]>;
  referrer_gte?: InputMaybe<Scalars["String"]>;
  referrer_in?: InputMaybe<Array<Scalars["String"]>>;
  referrer_lt?: InputMaybe<Scalars["String"]>;
  referrer_lte?: InputMaybe<Scalars["String"]>;
  referrer_not?: InputMaybe<Scalars["String"]>;
  referrer_not_contains?: InputMaybe<Scalars["String"]>;
  referrer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  referrer_not_ends_with?: InputMaybe<Scalars["String"]>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referrer_not_in?: InputMaybe<Array<Scalars["String"]>>;
  referrer_not_starts_with?: InputMaybe<Scalars["String"]>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  referrer_starts_with?: InputMaybe<Scalars["String"]>;
  referrer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stableTokenDebt?: InputMaybe<Scalars["BigInt"]>;
  stableTokenDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  stableTokenDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  stableTokenDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableTokenDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  stableTokenDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  stableTokenDebt_not?: InputMaybe<Scalars["BigInt"]>;
  stableTokenDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  variableTokenDebt?: InputMaybe<Scalars["BigInt"]>;
  variableTokenDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  variableTokenDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  variableTokenDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableTokenDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  variableTokenDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  variableTokenDebt_not?: InputMaybe<Scalars["BigInt"]>;
  variableTokenDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Borrow_OrderBy {
  Action = "action",
  Amount = "amount",
  AssetPriceUsd = "assetPriceUSD",
  BorrowRate = "borrowRate",
  BorrowRateMode = "borrowRateMode",
  Caller = "caller",
  CallerBorrowedReservesCount = "caller__borrowedReservesCount",
  CallerId = "caller__id",
  CallerIncentivesLastUpdated = "caller__incentivesLastUpdated",
  CallerLifetimeRewards = "caller__lifetimeRewards",
  CallerUnclaimedRewards = "caller__unclaimedRewards",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Referrer = "referrer",
  ReferrerId = "referrer__id",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  StableTokenDebt = "stableTokenDebt",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
  VariableTokenDebt = "variableTokenDebt",
}

export type ChainlinkAggregator = {
  __typename?: "ChainlinkAggregator";
  id: Scalars["ID"];
  oracleAsset: PriceOracleAsset;
};

export type ChainlinkAggregator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChainlinkAggregator_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<ChainlinkAggregator_Filter>>>;
  oracleAsset?: InputMaybe<Scalars["String"]>;
  oracleAsset_?: InputMaybe<PriceOracleAsset_Filter>;
  oracleAsset_contains?: InputMaybe<Scalars["String"]>;
  oracleAsset_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracleAsset_ends_with?: InputMaybe<Scalars["String"]>;
  oracleAsset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracleAsset_gt?: InputMaybe<Scalars["String"]>;
  oracleAsset_gte?: InputMaybe<Scalars["String"]>;
  oracleAsset_in?: InputMaybe<Array<Scalars["String"]>>;
  oracleAsset_lt?: InputMaybe<Scalars["String"]>;
  oracleAsset_lte?: InputMaybe<Scalars["String"]>;
  oracleAsset_not?: InputMaybe<Scalars["String"]>;
  oracleAsset_not_contains?: InputMaybe<Scalars["String"]>;
  oracleAsset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracleAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  oracleAsset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracleAsset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  oracleAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  oracleAsset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oracleAsset_starts_with?: InputMaybe<Scalars["String"]>;
  oracleAsset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ChainlinkAggregator_OrderBy {
  Id = "id",
  OracleAsset = "oracleAsset",
  OracleAssetFromChainlinkSourcesRegistry = "oracleAsset__fromChainlinkSourcesRegistry",
  OracleAssetId = "oracleAsset__id",
  OracleAssetIsFallbackRequired = "oracleAsset__isFallbackRequired",
  OracleAssetLastUpdateTimestamp = "oracleAsset__lastUpdateTimestamp",
  OracleAssetPlatform = "oracleAsset__platform",
  OracleAssetPriceInEth = "oracleAsset__priceInEth",
  OracleAssetPriceSource = "oracleAsset__priceSource",
  OracleAssetType = "oracleAsset__type",
}

export type ChainlinkEns = {
  __typename?: "ChainlinkENS";
  /** address of the aggregator */
  aggregatorAddress: Scalars["Bytes"];
  /** id is the node hash */
  id: Scalars["ID"];
  /** symbol of the token represented on the aggregator */
  symbol: Scalars["String"];
  /** token address represented with this aggregator */
  underlyingAddress: Scalars["Bytes"];
};

export type ChainlinkEns_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aggregatorAddress?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  aggregatorAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_not?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  aggregatorAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<ChainlinkEns_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<ChainlinkEns_Filter>>>;
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
  underlyingAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum ChainlinkEns_OrderBy {
  AggregatorAddress = "aggregatorAddress",
  Id = "id",
  Symbol = "symbol",
  UnderlyingAddress = "underlyingAddress",
}

export type ClaimIncentiveCall = {
  __typename?: "ClaimIncentiveCall";
  amount: Scalars["BigInt"];
  /**
   * txHash
   *
   */
  id: Scalars["ID"];
  incentivesController: IncentivesController;
  user: User;
};

export type ClaimIncentiveCall_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<ClaimIncentiveCall_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  incentivesController?: InputMaybe<Scalars["String"]>;
  incentivesController_?: InputMaybe<IncentivesController_Filter>;
  incentivesController_contains?: InputMaybe<Scalars["String"]>;
  incentivesController_contains_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_ends_with?: InputMaybe<Scalars["String"]>;
  incentivesController_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_gt?: InputMaybe<Scalars["String"]>;
  incentivesController_gte?: InputMaybe<Scalars["String"]>;
  incentivesController_in?: InputMaybe<Array<Scalars["String"]>>;
  incentivesController_lt?: InputMaybe<Scalars["String"]>;
  incentivesController_lte?: InputMaybe<Scalars["String"]>;
  incentivesController_not?: InputMaybe<Scalars["String"]>;
  incentivesController_not_contains?: InputMaybe<Scalars["String"]>;
  incentivesController_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_not_ends_with?: InputMaybe<Scalars["String"]>;
  incentivesController_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_not_in?: InputMaybe<Array<Scalars["String"]>>;
  incentivesController_not_starts_with?: InputMaybe<Scalars["String"]>;
  incentivesController_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_starts_with?: InputMaybe<Scalars["String"]>;
  incentivesController_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<ClaimIncentiveCall_Filter>>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ClaimIncentiveCall_OrderBy {
  Amount = "amount",
  Id = "id",
  IncentivesController = "incentivesController",
  IncentivesControllerEmissionEndTimestamp = "incentivesController__emissionEndTimestamp",
  IncentivesControllerId = "incentivesController__id",
  IncentivesControllerPrecision = "incentivesController__precision",
  IncentivesControllerRewardToken = "incentivesController__rewardToken",
  IncentivesControllerRewardTokenDecimals = "incentivesController__rewardTokenDecimals",
  IncentivesControllerRewardTokenSymbol = "incentivesController__rewardTokenSymbol",
  User = "user",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type ContractToPoolMapping = {
  __typename?: "ContractToPoolMapping";
  id: Scalars["ID"];
  pool: Pool;
};

export type ContractToPoolMapping_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContractToPoolMapping_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<ContractToPoolMapping_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
};

export enum ContractToPoolMapping_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
}

export type Deposit = UserTransaction & {
  __typename?: "Deposit";
  action: Action;
  amount: Scalars["BigInt"];
  assetPriceUSD: Scalars["BigDecimal"];
  caller: User;
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  referrer?: Maybe<Referrer>;
  reserve: Reserve;
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  assetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  assetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  caller?: InputMaybe<Scalars["String"]>;
  caller_?: InputMaybe<User_Filter>;
  caller_contains?: InputMaybe<Scalars["String"]>;
  caller_contains_nocase?: InputMaybe<Scalars["String"]>;
  caller_ends_with?: InputMaybe<Scalars["String"]>;
  caller_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  caller_gt?: InputMaybe<Scalars["String"]>;
  caller_gte?: InputMaybe<Scalars["String"]>;
  caller_in?: InputMaybe<Array<Scalars["String"]>>;
  caller_lt?: InputMaybe<Scalars["String"]>;
  caller_lte?: InputMaybe<Scalars["String"]>;
  caller_not?: InputMaybe<Scalars["String"]>;
  caller_not_contains?: InputMaybe<Scalars["String"]>;
  caller_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  caller_not_ends_with?: InputMaybe<Scalars["String"]>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  caller_not_in?: InputMaybe<Array<Scalars["String"]>>;
  caller_not_starts_with?: InputMaybe<Scalars["String"]>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  caller_starts_with?: InputMaybe<Scalars["String"]>;
  caller_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  referrer?: InputMaybe<Scalars["String"]>;
  referrer_?: InputMaybe<Referrer_Filter>;
  referrer_contains?: InputMaybe<Scalars["String"]>;
  referrer_contains_nocase?: InputMaybe<Scalars["String"]>;
  referrer_ends_with?: InputMaybe<Scalars["String"]>;
  referrer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referrer_gt?: InputMaybe<Scalars["String"]>;
  referrer_gte?: InputMaybe<Scalars["String"]>;
  referrer_in?: InputMaybe<Array<Scalars["String"]>>;
  referrer_lt?: InputMaybe<Scalars["String"]>;
  referrer_lte?: InputMaybe<Scalars["String"]>;
  referrer_not?: InputMaybe<Scalars["String"]>;
  referrer_not_contains?: InputMaybe<Scalars["String"]>;
  referrer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  referrer_not_ends_with?: InputMaybe<Scalars["String"]>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referrer_not_in?: InputMaybe<Array<Scalars["String"]>>;
  referrer_not_starts_with?: InputMaybe<Scalars["String"]>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  referrer_starts_with?: InputMaybe<Scalars["String"]>;
  referrer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Deposit_OrderBy {
  Action = "action",
  Amount = "amount",
  AssetPriceUsd = "assetPriceUSD",
  Caller = "caller",
  CallerBorrowedReservesCount = "caller__borrowedReservesCount",
  CallerId = "caller__id",
  CallerIncentivesLastUpdated = "caller__incentivesLastUpdated",
  CallerLifetimeRewards = "caller__lifetimeRewards",
  CallerUnclaimedRewards = "caller__unclaimedRewards",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Referrer = "referrer",
  ReferrerId = "referrer__id",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type FlashLoan = {
  __typename?: "FlashLoan";
  amount: Scalars["BigInt"];
  assetPriceUSD: Scalars["BigDecimal"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  initiator: User;
  pool: Pool;
  reserve: Reserve;
  target: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  totalFee: Scalars["BigInt"];
};

export type FlashLoan_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<FlashLoan_Filter>>>;
  assetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  assetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  initiator?: InputMaybe<Scalars["String"]>;
  initiator_?: InputMaybe<User_Filter>;
  initiator_contains?: InputMaybe<Scalars["String"]>;
  initiator_contains_nocase?: InputMaybe<Scalars["String"]>;
  initiator_ends_with?: InputMaybe<Scalars["String"]>;
  initiator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  initiator_gt?: InputMaybe<Scalars["String"]>;
  initiator_gte?: InputMaybe<Scalars["String"]>;
  initiator_in?: InputMaybe<Array<Scalars["String"]>>;
  initiator_lt?: InputMaybe<Scalars["String"]>;
  initiator_lte?: InputMaybe<Scalars["String"]>;
  initiator_not?: InputMaybe<Scalars["String"]>;
  initiator_not_contains?: InputMaybe<Scalars["String"]>;
  initiator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  initiator_not_ends_with?: InputMaybe<Scalars["String"]>;
  initiator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  initiator_not_in?: InputMaybe<Array<Scalars["String"]>>;
  initiator_not_starts_with?: InputMaybe<Scalars["String"]>;
  initiator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  initiator_starts_with?: InputMaybe<Scalars["String"]>;
  initiator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<FlashLoan_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  target?: InputMaybe<Scalars["Bytes"]>;
  target_contains?: InputMaybe<Scalars["Bytes"]>;
  target_gt?: InputMaybe<Scalars["Bytes"]>;
  target_gte?: InputMaybe<Scalars["Bytes"]>;
  target_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  target_lt?: InputMaybe<Scalars["Bytes"]>;
  target_lte?: InputMaybe<Scalars["Bytes"]>;
  target_not?: InputMaybe<Scalars["Bytes"]>;
  target_not_contains?: InputMaybe<Scalars["Bytes"]>;
  target_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalFee?: InputMaybe<Scalars["BigInt"]>;
  totalFee_gt?: InputMaybe<Scalars["BigInt"]>;
  totalFee_gte?: InputMaybe<Scalars["BigInt"]>;
  totalFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalFee_lt?: InputMaybe<Scalars["BigInt"]>;
  totalFee_lte?: InputMaybe<Scalars["BigInt"]>;
  totalFee_not?: InputMaybe<Scalars["BigInt"]>;
  totalFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum FlashLoan_OrderBy {
  Amount = "amount",
  AssetPriceUsd = "assetPriceUSD",
  Id = "id",
  Initiator = "initiator",
  InitiatorBorrowedReservesCount = "initiator__borrowedReservesCount",
  InitiatorId = "initiator__id",
  InitiatorIncentivesLastUpdated = "initiator__incentivesLastUpdated",
  InitiatorLifetimeRewards = "initiator__lifetimeRewards",
  InitiatorUnclaimedRewards = "initiator__unclaimedRewards",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  Target = "target",
  Timestamp = "timestamp",
  TotalFee = "totalFee",
}

export type IncentivesController = {
  __typename?: "IncentivesController";
  claimIncentives: Array<ClaimIncentiveCall>;
  emissionEndTimestamp: Scalars["Int"];
  /**
   * address of the incentives controller
   *
   */
  id: Scalars["ID"];
  incentivizedActions: Array<IncentivizedAction>;
  precision: Scalars["Int"];
  rewardToken: Scalars["Bytes"];
  rewardTokenDecimals: Scalars["Int"];
  rewardTokenSymbol: Scalars["String"];
};

export type IncentivesControllerClaimIncentivesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimIncentiveCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ClaimIncentiveCall_Filter>;
};

export type IncentivesControllerIncentivizedActionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IncentivizedAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<IncentivizedAction_Filter>;
};

export type IncentivesController_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IncentivesController_Filter>>>;
  claimIncentives_?: InputMaybe<ClaimIncentiveCall_Filter>;
  emissionEndTimestamp?: InputMaybe<Scalars["Int"]>;
  emissionEndTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  emissionEndTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  emissionEndTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  emissionEndTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  emissionEndTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  emissionEndTimestamp_not?: InputMaybe<Scalars["Int"]>;
  emissionEndTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  incentivizedActions_?: InputMaybe<IncentivizedAction_Filter>;
  or?: InputMaybe<Array<InputMaybe<IncentivesController_Filter>>>;
  precision?: InputMaybe<Scalars["Int"]>;
  precision_gt?: InputMaybe<Scalars["Int"]>;
  precision_gte?: InputMaybe<Scalars["Int"]>;
  precision_in?: InputMaybe<Array<Scalars["Int"]>>;
  precision_lt?: InputMaybe<Scalars["Int"]>;
  precision_lte?: InputMaybe<Scalars["Int"]>;
  precision_not?: InputMaybe<Scalars["Int"]>;
  precision_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  rewardToken?: InputMaybe<Scalars["Bytes"]>;
  rewardTokenDecimals?: InputMaybe<Scalars["Int"]>;
  rewardTokenDecimals_gt?: InputMaybe<Scalars["Int"]>;
  rewardTokenDecimals_gte?: InputMaybe<Scalars["Int"]>;
  rewardTokenDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  rewardTokenDecimals_lt?: InputMaybe<Scalars["Int"]>;
  rewardTokenDecimals_lte?: InputMaybe<Scalars["Int"]>;
  rewardTokenDecimals_not?: InputMaybe<Scalars["Int"]>;
  rewardTokenDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  rewardTokenSymbol?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_contains?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_ends_with?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_gt?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_gte?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokenSymbol_lt?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_lte?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not_contains?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardTokenSymbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_starts_with?: InputMaybe<Scalars["String"]>;
  rewardTokenSymbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_gt?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_gte?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_lt?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_lte?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum IncentivesController_OrderBy {
  ClaimIncentives = "claimIncentives",
  EmissionEndTimestamp = "emissionEndTimestamp",
  Id = "id",
  IncentivizedActions = "incentivizedActions",
  Precision = "precision",
  RewardToken = "rewardToken",
  RewardTokenDecimals = "rewardTokenDecimals",
  RewardTokenSymbol = "rewardTokenSymbol",
}

export type IncentivizedAction = {
  __typename?: "IncentivizedAction";
  amount: Scalars["BigInt"];
  /**
   * txHash
   *
   */
  id: Scalars["ID"];
  incentivesController: IncentivesController;
  user: User;
};

export type IncentivizedAction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<IncentivizedAction_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  incentivesController?: InputMaybe<Scalars["String"]>;
  incentivesController_?: InputMaybe<IncentivesController_Filter>;
  incentivesController_contains?: InputMaybe<Scalars["String"]>;
  incentivesController_contains_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_ends_with?: InputMaybe<Scalars["String"]>;
  incentivesController_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_gt?: InputMaybe<Scalars["String"]>;
  incentivesController_gte?: InputMaybe<Scalars["String"]>;
  incentivesController_in?: InputMaybe<Array<Scalars["String"]>>;
  incentivesController_lt?: InputMaybe<Scalars["String"]>;
  incentivesController_lte?: InputMaybe<Scalars["String"]>;
  incentivesController_not?: InputMaybe<Scalars["String"]>;
  incentivesController_not_contains?: InputMaybe<Scalars["String"]>;
  incentivesController_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_not_ends_with?: InputMaybe<Scalars["String"]>;
  incentivesController_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_not_in?: InputMaybe<Array<Scalars["String"]>>;
  incentivesController_not_starts_with?: InputMaybe<Scalars["String"]>;
  incentivesController_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  incentivesController_starts_with?: InputMaybe<Scalars["String"]>;
  incentivesController_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<IncentivizedAction_Filter>>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum IncentivizedAction_OrderBy {
  Amount = "amount",
  Id = "id",
  IncentivesController = "incentivesController",
  IncentivesControllerEmissionEndTimestamp = "incentivesController__emissionEndTimestamp",
  IncentivesControllerId = "incentivesController__id",
  IncentivesControllerPrecision = "incentivesController__precision",
  IncentivesControllerRewardToken = "incentivesController__rewardToken",
  IncentivesControllerRewardTokenDecimals = "incentivesController__rewardTokenDecimals",
  IncentivesControllerRewardTokenSymbol = "incentivesController__rewardTokenSymbol",
  User = "user",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type LiquidationCall = UserTransaction & {
  __typename?: "LiquidationCall";
  action: Action;
  borrowAssetPriceUSD: Scalars["BigDecimal"];
  collateralAmount: Scalars["BigInt"];
  collateralAssetPriceUSD: Scalars["BigDecimal"];
  collateralReserve: Reserve;
  collateralUserReserve: UserReserve;
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  liquidator: Scalars["Bytes"];
  pool: Pool;
  principalAmount: Scalars["BigInt"];
  principalReserve: Reserve;
  principalUserReserve: UserReserve;
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
};

export type LiquidationCall_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  and?: InputMaybe<Array<InputMaybe<LiquidationCall_Filter>>>;
  borrowAssetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  borrowAssetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  borrowAssetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  borrowAssetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  borrowAssetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  borrowAssetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  borrowAssetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  borrowAssetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralAmount?: InputMaybe<Scalars["BigInt"]>;
  collateralAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  collateralAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  collateralAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  collateralAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  collateralAmount_not?: InputMaybe<Scalars["BigInt"]>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralAssetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  collateralAssetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralAssetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralAssetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralAssetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralAssetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralAssetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateralAssetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralReserve?: InputMaybe<Scalars["String"]>;
  collateralReserve_?: InputMaybe<Reserve_Filter>;
  collateralReserve_contains?: InputMaybe<Scalars["String"]>;
  collateralReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralReserve_ends_with?: InputMaybe<Scalars["String"]>;
  collateralReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralReserve_gt?: InputMaybe<Scalars["String"]>;
  collateralReserve_gte?: InputMaybe<Scalars["String"]>;
  collateralReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralReserve_lt?: InputMaybe<Scalars["String"]>;
  collateralReserve_lte?: InputMaybe<Scalars["String"]>;
  collateralReserve_not?: InputMaybe<Scalars["String"]>;
  collateralReserve_not_contains?: InputMaybe<Scalars["String"]>;
  collateralReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralReserve_starts_with?: InputMaybe<Scalars["String"]>;
  collateralReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralUserReserve?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_?: InputMaybe<UserReserve_Filter>;
  collateralUserReserve_contains?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_ends_with?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_gt?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_gte?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralUserReserve_lt?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_lte?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not_contains?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralUserReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_starts_with?: InputMaybe<Scalars["String"]>;
  collateralUserReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidator?: InputMaybe<Scalars["Bytes"]>;
  liquidator_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidator_gt?: InputMaybe<Scalars["Bytes"]>;
  liquidator_gte?: InputMaybe<Scalars["Bytes"]>;
  liquidator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidator_lt?: InputMaybe<Scalars["Bytes"]>;
  liquidator_lte?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<LiquidationCall_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  principalAmount?: InputMaybe<Scalars["BigInt"]>;
  principalAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  principalAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  principalAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  principalAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  principalAmount_not?: InputMaybe<Scalars["BigInt"]>;
  principalAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalReserve?: InputMaybe<Scalars["String"]>;
  principalReserve_?: InputMaybe<Reserve_Filter>;
  principalReserve_contains?: InputMaybe<Scalars["String"]>;
  principalReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  principalReserve_ends_with?: InputMaybe<Scalars["String"]>;
  principalReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  principalReserve_gt?: InputMaybe<Scalars["String"]>;
  principalReserve_gte?: InputMaybe<Scalars["String"]>;
  principalReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  principalReserve_lt?: InputMaybe<Scalars["String"]>;
  principalReserve_lte?: InputMaybe<Scalars["String"]>;
  principalReserve_not?: InputMaybe<Scalars["String"]>;
  principalReserve_not_contains?: InputMaybe<Scalars["String"]>;
  principalReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  principalReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  principalReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  principalReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  principalReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  principalReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  principalReserve_starts_with?: InputMaybe<Scalars["String"]>;
  principalReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  principalUserReserve?: InputMaybe<Scalars["String"]>;
  principalUserReserve_?: InputMaybe<UserReserve_Filter>;
  principalUserReserve_contains?: InputMaybe<Scalars["String"]>;
  principalUserReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  principalUserReserve_ends_with?: InputMaybe<Scalars["String"]>;
  principalUserReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  principalUserReserve_gt?: InputMaybe<Scalars["String"]>;
  principalUserReserve_gte?: InputMaybe<Scalars["String"]>;
  principalUserReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  principalUserReserve_lt?: InputMaybe<Scalars["String"]>;
  principalUserReserve_lte?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not_contains?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  principalUserReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  principalUserReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  principalUserReserve_starts_with?: InputMaybe<Scalars["String"]>;
  principalUserReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum LiquidationCall_OrderBy {
  Action = "action",
  BorrowAssetPriceUsd = "borrowAssetPriceUSD",
  CollateralAmount = "collateralAmount",
  CollateralAssetPriceUsd = "collateralAssetPriceUSD",
  CollateralReserve = "collateralReserve",
  CollateralReserveAEmissionPerSecond = "collateralReserve__aEmissionPerSecond",
  CollateralReserveAIncentivesLastUpdateTimestamp = "collateralReserve__aIncentivesLastUpdateTimestamp",
  CollateralReserveATokenIncentivesIndex = "collateralReserve__aTokenIncentivesIndex",
  CollateralReserveAvailableLiquidity = "collateralReserve__availableLiquidity",
  CollateralReserveAverageStableRate = "collateralReserve__averageStableRate",
  CollateralReserveBaseLtVasCollateral = "collateralReserve__baseLTVasCollateral",
  CollateralReserveBaseVariableBorrowRate = "collateralReserve__baseVariableBorrowRate",
  CollateralReserveBorrowingEnabled = "collateralReserve__borrowingEnabled",
  CollateralReserveDecimals = "collateralReserve__decimals",
  CollateralReserveId = "collateralReserve__id",
  CollateralReserveIsActive = "collateralReserve__isActive",
  CollateralReserveIsFrozen = "collateralReserve__isFrozen",
  CollateralReserveLastUpdateTimestamp = "collateralReserve__lastUpdateTimestamp",
  CollateralReserveLifetimeBorrows = "collateralReserve__lifetimeBorrows",
  CollateralReserveLifetimeCurrentVariableDebt = "collateralReserve__lifetimeCurrentVariableDebt",
  CollateralReserveLifetimeDepositorsInterestEarned = "collateralReserve__lifetimeDepositorsInterestEarned",
  CollateralReserveLifetimeFlashLoanPremium = "collateralReserve__lifetimeFlashLoanPremium",
  CollateralReserveLifetimeFlashLoans = "collateralReserve__lifetimeFlashLoans",
  CollateralReserveLifetimeLiquidated = "collateralReserve__lifetimeLiquidated",
  CollateralReserveLifetimeLiquidity = "collateralReserve__lifetimeLiquidity",
  CollateralReserveLifetimePrincipalStableDebt = "collateralReserve__lifetimePrincipalStableDebt",
  CollateralReserveLifetimeRepayments = "collateralReserve__lifetimeRepayments",
  CollateralReserveLifetimeReserveFactorAccrued = "collateralReserve__lifetimeReserveFactorAccrued",
  CollateralReserveLifetimeScaledVariableDebt = "collateralReserve__lifetimeScaledVariableDebt",
  CollateralReserveLifetimeWithdrawals = "collateralReserve__lifetimeWithdrawals",
  CollateralReserveLiquidityIndex = "collateralReserve__liquidityIndex",
  CollateralReserveLiquidityRate = "collateralReserve__liquidityRate",
  CollateralReserveName = "collateralReserve__name",
  CollateralReserveOptimalUtilisationRate = "collateralReserve__optimalUtilisationRate",
  CollateralReserveReserveFactor = "collateralReserve__reserveFactor",
  CollateralReserveReserveInterestRateStrategy = "collateralReserve__reserveInterestRateStrategy",
  CollateralReserveReserveLiquidationBonus = "collateralReserve__reserveLiquidationBonus",
  CollateralReserveReserveLiquidationThreshold = "collateralReserve__reserveLiquidationThreshold",
  CollateralReserveSEmissionPerSecond = "collateralReserve__sEmissionPerSecond",
  CollateralReserveSIncentivesLastUpdateTimestamp = "collateralReserve__sIncentivesLastUpdateTimestamp",
  CollateralReserveSTokenIncentivesIndex = "collateralReserve__sTokenIncentivesIndex",
  CollateralReserveStableBorrowRate = "collateralReserve__stableBorrowRate",
  CollateralReserveStableBorrowRateEnabled = "collateralReserve__stableBorrowRateEnabled",
  CollateralReserveStableDebtLastUpdateTimestamp = "collateralReserve__stableDebtLastUpdateTimestamp",
  CollateralReserveStableRateSlope1 = "collateralReserve__stableRateSlope1",
  CollateralReserveStableRateSlope2 = "collateralReserve__stableRateSlope2",
  CollateralReserveSymbol = "collateralReserve__symbol",
  CollateralReserveTotalATokenSupply = "collateralReserve__totalATokenSupply",
  CollateralReserveTotalCurrentVariableDebt = "collateralReserve__totalCurrentVariableDebt",
  CollateralReserveTotalDeposits = "collateralReserve__totalDeposits",
  CollateralReserveTotalLiquidity = "collateralReserve__totalLiquidity",
  CollateralReserveTotalLiquidityAsCollateral = "collateralReserve__totalLiquidityAsCollateral",
  CollateralReserveTotalPrincipalStableDebt = "collateralReserve__totalPrincipalStableDebt",
  CollateralReserveTotalScaledVariableDebt = "collateralReserve__totalScaledVariableDebt",
  CollateralReserveUnderlyingAsset = "collateralReserve__underlyingAsset",
  CollateralReserveUsageAsCollateralEnabled = "collateralReserve__usageAsCollateralEnabled",
  CollateralReserveUtilizationRate = "collateralReserve__utilizationRate",
  CollateralReserveVEmissionPerSecond = "collateralReserve__vEmissionPerSecond",
  CollateralReserveVIncentivesLastUpdateTimestamp = "collateralReserve__vIncentivesLastUpdateTimestamp",
  CollateralReserveVTokenIncentivesIndex = "collateralReserve__vTokenIncentivesIndex",
  CollateralReserveVariableBorrowIndex = "collateralReserve__variableBorrowIndex",
  CollateralReserveVariableBorrowRate = "collateralReserve__variableBorrowRate",
  CollateralReserveVariableRateSlope1 = "collateralReserve__variableRateSlope1",
  CollateralReserveVariableRateSlope2 = "collateralReserve__variableRateSlope2",
  CollateralUserReserve = "collateralUserReserve",
  CollateralUserReserveAIncentivesLastUpdateTimestamp = "collateralUserReserve__aIncentivesLastUpdateTimestamp",
  CollateralUserReserveATokenincentivesUserIndex = "collateralUserReserve__aTokenincentivesUserIndex",
  CollateralUserReserveCurrentATokenBalance = "collateralUserReserve__currentATokenBalance",
  CollateralUserReserveCurrentStableDebt = "collateralUserReserve__currentStableDebt",
  CollateralUserReserveCurrentTotalDebt = "collateralUserReserve__currentTotalDebt",
  CollateralUserReserveCurrentVariableDebt = "collateralUserReserve__currentVariableDebt",
  CollateralUserReserveId = "collateralUserReserve__id",
  CollateralUserReserveLastUpdateTimestamp = "collateralUserReserve__lastUpdateTimestamp",
  CollateralUserReserveLiquidityRate = "collateralUserReserve__liquidityRate",
  CollateralUserReserveOldStableBorrowRate = "collateralUserReserve__oldStableBorrowRate",
  CollateralUserReservePrincipalStableDebt = "collateralUserReserve__principalStableDebt",
  CollateralUserReserveSIncentivesLastUpdateTimestamp = "collateralUserReserve__sIncentivesLastUpdateTimestamp",
  CollateralUserReserveSTokenincentivesUserIndex = "collateralUserReserve__sTokenincentivesUserIndex",
  CollateralUserReserveScaledATokenBalance = "collateralUserReserve__scaledATokenBalance",
  CollateralUserReserveScaledVariableDebt = "collateralUserReserve__scaledVariableDebt",
  CollateralUserReserveStableBorrowLastUpdateTimestamp = "collateralUserReserve__stableBorrowLastUpdateTimestamp",
  CollateralUserReserveStableBorrowRate = "collateralUserReserve__stableBorrowRate",
  CollateralUserReserveUsageAsCollateralEnabledOnUser = "collateralUserReserve__usageAsCollateralEnabledOnUser",
  CollateralUserReserveVIncentivesLastUpdateTimestamp = "collateralUserReserve__vIncentivesLastUpdateTimestamp",
  CollateralUserReserveVTokenincentivesUserIndex = "collateralUserReserve__vTokenincentivesUserIndex",
  CollateralUserReserveVariableBorrowIndex = "collateralUserReserve__variableBorrowIndex",
  Id = "id",
  Liquidator = "liquidator",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  PrincipalAmount = "principalAmount",
  PrincipalReserve = "principalReserve",
  PrincipalReserveAEmissionPerSecond = "principalReserve__aEmissionPerSecond",
  PrincipalReserveAIncentivesLastUpdateTimestamp = "principalReserve__aIncentivesLastUpdateTimestamp",
  PrincipalReserveATokenIncentivesIndex = "principalReserve__aTokenIncentivesIndex",
  PrincipalReserveAvailableLiquidity = "principalReserve__availableLiquidity",
  PrincipalReserveAverageStableRate = "principalReserve__averageStableRate",
  PrincipalReserveBaseLtVasCollateral = "principalReserve__baseLTVasCollateral",
  PrincipalReserveBaseVariableBorrowRate = "principalReserve__baseVariableBorrowRate",
  PrincipalReserveBorrowingEnabled = "principalReserve__borrowingEnabled",
  PrincipalReserveDecimals = "principalReserve__decimals",
  PrincipalReserveId = "principalReserve__id",
  PrincipalReserveIsActive = "principalReserve__isActive",
  PrincipalReserveIsFrozen = "principalReserve__isFrozen",
  PrincipalReserveLastUpdateTimestamp = "principalReserve__lastUpdateTimestamp",
  PrincipalReserveLifetimeBorrows = "principalReserve__lifetimeBorrows",
  PrincipalReserveLifetimeCurrentVariableDebt = "principalReserve__lifetimeCurrentVariableDebt",
  PrincipalReserveLifetimeDepositorsInterestEarned = "principalReserve__lifetimeDepositorsInterestEarned",
  PrincipalReserveLifetimeFlashLoanPremium = "principalReserve__lifetimeFlashLoanPremium",
  PrincipalReserveLifetimeFlashLoans = "principalReserve__lifetimeFlashLoans",
  PrincipalReserveLifetimeLiquidated = "principalReserve__lifetimeLiquidated",
  PrincipalReserveLifetimeLiquidity = "principalReserve__lifetimeLiquidity",
  PrincipalReserveLifetimePrincipalStableDebt = "principalReserve__lifetimePrincipalStableDebt",
  PrincipalReserveLifetimeRepayments = "principalReserve__lifetimeRepayments",
  PrincipalReserveLifetimeReserveFactorAccrued = "principalReserve__lifetimeReserveFactorAccrued",
  PrincipalReserveLifetimeScaledVariableDebt = "principalReserve__lifetimeScaledVariableDebt",
  PrincipalReserveLifetimeWithdrawals = "principalReserve__lifetimeWithdrawals",
  PrincipalReserveLiquidityIndex = "principalReserve__liquidityIndex",
  PrincipalReserveLiquidityRate = "principalReserve__liquidityRate",
  PrincipalReserveName = "principalReserve__name",
  PrincipalReserveOptimalUtilisationRate = "principalReserve__optimalUtilisationRate",
  PrincipalReserveReserveFactor = "principalReserve__reserveFactor",
  PrincipalReserveReserveInterestRateStrategy = "principalReserve__reserveInterestRateStrategy",
  PrincipalReserveReserveLiquidationBonus = "principalReserve__reserveLiquidationBonus",
  PrincipalReserveReserveLiquidationThreshold = "principalReserve__reserveLiquidationThreshold",
  PrincipalReserveSEmissionPerSecond = "principalReserve__sEmissionPerSecond",
  PrincipalReserveSIncentivesLastUpdateTimestamp = "principalReserve__sIncentivesLastUpdateTimestamp",
  PrincipalReserveSTokenIncentivesIndex = "principalReserve__sTokenIncentivesIndex",
  PrincipalReserveStableBorrowRate = "principalReserve__stableBorrowRate",
  PrincipalReserveStableBorrowRateEnabled = "principalReserve__stableBorrowRateEnabled",
  PrincipalReserveStableDebtLastUpdateTimestamp = "principalReserve__stableDebtLastUpdateTimestamp",
  PrincipalReserveStableRateSlope1 = "principalReserve__stableRateSlope1",
  PrincipalReserveStableRateSlope2 = "principalReserve__stableRateSlope2",
  PrincipalReserveSymbol = "principalReserve__symbol",
  PrincipalReserveTotalATokenSupply = "principalReserve__totalATokenSupply",
  PrincipalReserveTotalCurrentVariableDebt = "principalReserve__totalCurrentVariableDebt",
  PrincipalReserveTotalDeposits = "principalReserve__totalDeposits",
  PrincipalReserveTotalLiquidity = "principalReserve__totalLiquidity",
  PrincipalReserveTotalLiquidityAsCollateral = "principalReserve__totalLiquidityAsCollateral",
  PrincipalReserveTotalPrincipalStableDebt = "principalReserve__totalPrincipalStableDebt",
  PrincipalReserveTotalScaledVariableDebt = "principalReserve__totalScaledVariableDebt",
  PrincipalReserveUnderlyingAsset = "principalReserve__underlyingAsset",
  PrincipalReserveUsageAsCollateralEnabled = "principalReserve__usageAsCollateralEnabled",
  PrincipalReserveUtilizationRate = "principalReserve__utilizationRate",
  PrincipalReserveVEmissionPerSecond = "principalReserve__vEmissionPerSecond",
  PrincipalReserveVIncentivesLastUpdateTimestamp = "principalReserve__vIncentivesLastUpdateTimestamp",
  PrincipalReserveVTokenIncentivesIndex = "principalReserve__vTokenIncentivesIndex",
  PrincipalReserveVariableBorrowIndex = "principalReserve__variableBorrowIndex",
  PrincipalReserveVariableBorrowRate = "principalReserve__variableBorrowRate",
  PrincipalReserveVariableRateSlope1 = "principalReserve__variableRateSlope1",
  PrincipalReserveVariableRateSlope2 = "principalReserve__variableRateSlope2",
  PrincipalUserReserve = "principalUserReserve",
  PrincipalUserReserveAIncentivesLastUpdateTimestamp = "principalUserReserve__aIncentivesLastUpdateTimestamp",
  PrincipalUserReserveATokenincentivesUserIndex = "principalUserReserve__aTokenincentivesUserIndex",
  PrincipalUserReserveCurrentATokenBalance = "principalUserReserve__currentATokenBalance",
  PrincipalUserReserveCurrentStableDebt = "principalUserReserve__currentStableDebt",
  PrincipalUserReserveCurrentTotalDebt = "principalUserReserve__currentTotalDebt",
  PrincipalUserReserveCurrentVariableDebt = "principalUserReserve__currentVariableDebt",
  PrincipalUserReserveId = "principalUserReserve__id",
  PrincipalUserReserveLastUpdateTimestamp = "principalUserReserve__lastUpdateTimestamp",
  PrincipalUserReserveLiquidityRate = "principalUserReserve__liquidityRate",
  PrincipalUserReserveOldStableBorrowRate = "principalUserReserve__oldStableBorrowRate",
  PrincipalUserReservePrincipalStableDebt = "principalUserReserve__principalStableDebt",
  PrincipalUserReserveSIncentivesLastUpdateTimestamp = "principalUserReserve__sIncentivesLastUpdateTimestamp",
  PrincipalUserReserveSTokenincentivesUserIndex = "principalUserReserve__sTokenincentivesUserIndex",
  PrincipalUserReserveScaledATokenBalance = "principalUserReserve__scaledATokenBalance",
  PrincipalUserReserveScaledVariableDebt = "principalUserReserve__scaledVariableDebt",
  PrincipalUserReserveStableBorrowLastUpdateTimestamp = "principalUserReserve__stableBorrowLastUpdateTimestamp",
  PrincipalUserReserveStableBorrowRate = "principalUserReserve__stableBorrowRate",
  PrincipalUserReserveUsageAsCollateralEnabledOnUser = "principalUserReserve__usageAsCollateralEnabledOnUser",
  PrincipalUserReserveVIncentivesLastUpdateTimestamp = "principalUserReserve__vIncentivesLastUpdateTimestamp",
  PrincipalUserReserveVTokenincentivesUserIndex = "principalUserReserve__vTokenincentivesUserIndex",
  PrincipalUserReserveVariableBorrowIndex = "principalUserReserve__variableBorrowIndex",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type MapAssetPool = {
  __typename?: "MapAssetPool";
  /**
   * address of a /s /v token
   *
   */
  id: Scalars["ID"];
  pool: Scalars["String"];
  underlyingAsset: Scalars["Bytes"];
};

export type MapAssetPool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MapAssetPool_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<MapAssetPool_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
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
  underlyingAsset?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAsset_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum MapAssetPool_OrderBy {
  Id = "id",
  Pool = "pool",
  UnderlyingAsset = "underlyingAsset",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Pool = {
  __typename?: "Pool";
  active: Scalars["Boolean"];
  borrowHistory: Array<Borrow>;
  configurationAdmin?: Maybe<Scalars["Bytes"]>;
  depositHistory: Array<Deposit>;
  emergencyAdmin?: Maybe<Scalars["Bytes"]>;
  ethereumAddress?: Maybe<Scalars["Bytes"]>;
  flashLoanHistory: Array<FlashLoan>;
  history: Array<PoolConfigurationHistoryItem>;
  id: Scalars["ID"];
  lastUpdateTimestamp: Scalars["Int"];
  lendingPool?: Maybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager?: Maybe<Scalars["Bytes"]>;
  lendingPoolConfigurator?: Maybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl?: Maybe<Scalars["Bytes"]>;
  lendingPoolImpl?: Maybe<Scalars["Bytes"]>;
  lendingRateOracle?: Maybe<Scalars["Bytes"]>;
  liquidationCallHistory: Array<LiquidationCall>;
  paused: Scalars["Boolean"];
  protocol: Protocol;
  proxyPriceProvider?: Maybe<Scalars["Bytes"]>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  repayHistory: Array<Repay>;
  reserves: Array<Reserve>;
  swapHistory: Array<Swap>;
  usageAsCollateralHistory: Array<UsageAsCollateral>;
};

export type PoolBorrowHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type PoolDepositHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type PoolFlashLoanHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FlashLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FlashLoan_Filter>;
};

export type PoolHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolConfigurationHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolConfigurationHistoryItem_Filter>;
};

export type PoolLiquidationCallHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidationCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidationCall_Filter>;
};

export type PoolRebalanceStableBorrowRateHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RebalanceStableBorrowRate_Filter>;
};

export type PoolRedeemUnderlyingHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RedeemUnderlying_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RedeemUnderlying_Filter>;
};

export type PoolRepayHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
};

export type PoolReservesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Reserve_Filter>;
};

export type PoolSwapHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type PoolUsageAsCollateralHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageAsCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageAsCollateral_Filter>;
};

export type PoolConfigurationHistoryItem = {
  __typename?: "PoolConfigurationHistoryItem";
  active?: Maybe<Scalars["Boolean"]>;
  configurationAdmin?: Maybe<Scalars["Bytes"]>;
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  lendingPool?: Maybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager?: Maybe<Scalars["Bytes"]>;
  lendingPoolConfigurator?: Maybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl?: Maybe<Scalars["Bytes"]>;
  lendingPoolImpl?: Maybe<Scalars["Bytes"]>;
  lendingRateOracle?: Maybe<Scalars["Bytes"]>;
  pool: Pool;
  proxyPriceProvider?: Maybe<Scalars["Bytes"]>;
  timestamp: Scalars["Int"];
};

export type PoolConfigurationHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  active_not?: InputMaybe<Scalars["Boolean"]>;
  active_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  and?: InputMaybe<Array<InputMaybe<PoolConfigurationHistoryItem_Filter>>>;
  configurationAdmin?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_contains?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_gt?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_gte?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  configurationAdmin_lt?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_lte?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_not?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lendingPool?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolCollateralManager_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfigurator?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfiguratorImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfigurator_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfigurator_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolImpl?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPool_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPool_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingRateOracle?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingRateOracle_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_not?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolConfigurationHistoryItem_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  proxyPriceProvider?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_contains?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_gt?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_gte?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  proxyPriceProvider_lt?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_lte?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum PoolConfigurationHistoryItem_OrderBy {
  Active = "active",
  ConfigurationAdmin = "configurationAdmin",
  Id = "id",
  LendingPool = "lendingPool",
  LendingPoolCollateralManager = "lendingPoolCollateralManager",
  LendingPoolConfigurator = "lendingPoolConfigurator",
  LendingPoolConfiguratorImpl = "lendingPoolConfiguratorImpl",
  LendingPoolImpl = "lendingPoolImpl",
  LendingRateOracle = "lendingRateOracle",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  ProxyPriceProvider = "proxyPriceProvider",
  Timestamp = "timestamp",
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  active_not?: InputMaybe<Scalars["Boolean"]>;
  active_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  borrowHistory_?: InputMaybe<Borrow_Filter>;
  configurationAdmin?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_contains?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_gt?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_gte?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  configurationAdmin_lt?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_lte?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_not?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  configurationAdmin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  depositHistory_?: InputMaybe<Deposit_Filter>;
  emergencyAdmin?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_contains?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_gt?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_gte?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  emergencyAdmin_lt?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_lte?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_not?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_not_contains?: InputMaybe<Scalars["Bytes"]>;
  emergencyAdmin_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  ethereumAddress?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  ethereumAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_not?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  ethereumAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  flashLoanHistory_?: InputMaybe<FlashLoan_Filter>;
  history_?: InputMaybe<PoolConfigurationHistoryItem_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lendingPool?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolCollateralManager_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolCollateralManager_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfigurator?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfiguratorImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfiguratorImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfigurator_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolConfigurator_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolConfigurator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolImpl?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPoolImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPoolImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPool_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingPool_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_not?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingPool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingRateOracle?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_gt?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_gte?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lendingRateOracle_lt?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_lte?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_not?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_not_contains?: InputMaybe<Scalars["Bytes"]>;
  lendingRateOracle_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_Filter>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  paused?: InputMaybe<Scalars["Boolean"]>;
  paused_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  paused_not?: InputMaybe<Scalars["Boolean"]>;
  paused_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  protocol?: InputMaybe<Scalars["String"]>;
  protocol_?: InputMaybe<Protocol_Filter>;
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
  proxyPriceProvider?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_contains?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_gt?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_gte?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  proxyPriceProvider_lt?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_lte?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_Filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_Filter>;
  repayHistory_?: InputMaybe<Repay_Filter>;
  reserves_?: InputMaybe<Reserve_Filter>;
  swapHistory_?: InputMaybe<Swap_Filter>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_Filter>;
};

export enum Pool_OrderBy {
  Active = "active",
  BorrowHistory = "borrowHistory",
  ConfigurationAdmin = "configurationAdmin",
  DepositHistory = "depositHistory",
  EmergencyAdmin = "emergencyAdmin",
  EthereumAddress = "ethereumAddress",
  FlashLoanHistory = "flashLoanHistory",
  History = "history",
  Id = "id",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  LendingPool = "lendingPool",
  LendingPoolCollateralManager = "lendingPoolCollateralManager",
  LendingPoolConfigurator = "lendingPoolConfigurator",
  LendingPoolConfiguratorImpl = "lendingPoolConfiguratorImpl",
  LendingPoolImpl = "lendingPoolImpl",
  LendingRateOracle = "lendingRateOracle",
  LiquidationCallHistory = "liquidationCallHistory",
  Paused = "paused",
  Protocol = "protocol",
  ProtocolId = "protocol__id",
  ProxyPriceProvider = "proxyPriceProvider",
  RebalanceStableBorrowRateHistory = "rebalanceStableBorrowRateHistory",
  RedeemUnderlyingHistory = "redeemUnderlyingHistory",
  RepayHistory = "repayHistory",
  Reserves = "reserves",
  SwapHistory = "swapHistory",
  UsageAsCollateralHistory = "usageAsCollateralHistory",
}

export type PriceHistoryItem = {
  __typename?: "PriceHistoryItem";
  asset: PriceOracleAsset;
  id: Scalars["ID"];
  price: Scalars["BigInt"];
  timestamp: Scalars["Int"];
};

export type PriceHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceHistoryItem_Filter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<PriceOracleAsset_Filter>;
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceHistoryItem_Filter>>>;
  price?: InputMaybe<Scalars["BigInt"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]>;
  price_not?: InputMaybe<Scalars["BigInt"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum PriceHistoryItem_OrderBy {
  Asset = "asset",
  AssetFromChainlinkSourcesRegistry = "asset__fromChainlinkSourcesRegistry",
  AssetId = "asset__id",
  AssetIsFallbackRequired = "asset__isFallbackRequired",
  AssetLastUpdateTimestamp = "asset__lastUpdateTimestamp",
  AssetPlatform = "asset__platform",
  AssetPriceInEth = "asset__priceInEth",
  AssetPriceSource = "asset__priceSource",
  AssetType = "asset__type",
  Id = "id",
  Price = "price",
  Timestamp = "timestamp",
}

export type PriceOracle = {
  __typename?: "PriceOracle";
  baseCurrency?: Maybe<Scalars["Bytes"]>;
  baseCurrencyUnit?: Maybe<Scalars["BigInt"]>;
  fallbackPriceOracle: Scalars["Bytes"];
  id: Scalars["ID"];
  lastUpdateTimestamp: Scalars["Int"];
  proxyPriceProvider: Scalars["Bytes"];
  tokens: Array<PriceOracleAsset>;
  tokensWithFallback: Array<PriceOracleAsset>;
  usdDependentAssets: Array<PriceOracleAsset>;
  usdPriceEth: Scalars["BigInt"];
  usdPriceEthFallbackRequired: Scalars["Boolean"];
  usdPriceEthHistory: Array<UsdEthPriceHistoryItem>;
  usdPriceEthMainSource: Scalars["Bytes"];
  version: Scalars["Int"];
};

export type PriceOracleTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracleAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PriceOracleAsset_Filter>;
};

export type PriceOracleTokensWithFallbackArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracleAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PriceOracleAsset_Filter>;
};

export type PriceOracleUsdDependentAssetsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracleAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PriceOracleAsset_Filter>;
};

export type PriceOracleUsdPriceEthHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsdEthPriceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsdEthPriceHistoryItem_Filter>;
};

export type PriceOracleAsset = {
  __typename?: "PriceOracleAsset";
  dependentAssets: Array<PriceOracleAsset>;
  fromChainlinkSourcesRegistry: Scalars["Boolean"];
  id: Scalars["ID"];
  isFallbackRequired: Scalars["Boolean"];
  lastUpdateTimestamp: Scalars["Int"];
  oracle: PriceOracle;
  platform: PriceOracleAssetPlatform;
  priceHistory: Array<PriceHistoryItem>;
  priceInEth: Scalars["BigInt"];
  priceSource: Scalars["Bytes"];
  type: PriceOracleAssetType;
};

export type PriceOracleAssetDependentAssetsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracleAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PriceOracleAsset_Filter>;
};

export type PriceOracleAssetPriceHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PriceHistoryItem_Filter>;
};

export enum PriceOracleAssetPlatform {
  Simple = "Simple",
  Uniswap = "Uniswap",
}

export enum PriceOracleAssetType {
  Composite = "Composite",
  Simple = "Simple",
}

export type PriceOracleAsset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceOracleAsset_Filter>>>;
  dependentAssets?: InputMaybe<Array<Scalars["String"]>>;
  dependentAssets_?: InputMaybe<PriceOracleAsset_Filter>;
  dependentAssets_contains?: InputMaybe<Array<Scalars["String"]>>;
  dependentAssets_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  dependentAssets_not?: InputMaybe<Array<Scalars["String"]>>;
  dependentAssets_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  dependentAssets_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  fromChainlinkSourcesRegistry?: InputMaybe<Scalars["Boolean"]>;
  fromChainlinkSourcesRegistry_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  fromChainlinkSourcesRegistry_not?: InputMaybe<Scalars["Boolean"]>;
  fromChainlinkSourcesRegistry_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isFallbackRequired?: InputMaybe<Scalars["Boolean"]>;
  isFallbackRequired_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isFallbackRequired_not?: InputMaybe<Scalars["Boolean"]>;
  isFallbackRequired_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceOracleAsset_Filter>>>;
  oracle?: InputMaybe<Scalars["String"]>;
  oracle_?: InputMaybe<PriceOracle_Filter>;
  oracle_contains?: InputMaybe<Scalars["String"]>;
  oracle_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracle_ends_with?: InputMaybe<Scalars["String"]>;
  oracle_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_gt?: InputMaybe<Scalars["String"]>;
  oracle_gte?: InputMaybe<Scalars["String"]>;
  oracle_in?: InputMaybe<Array<Scalars["String"]>>;
  oracle_lt?: InputMaybe<Scalars["String"]>;
  oracle_lte?: InputMaybe<Scalars["String"]>;
  oracle_not?: InputMaybe<Scalars["String"]>;
  oracle_not_contains?: InputMaybe<Scalars["String"]>;
  oracle_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracle_not_ends_with?: InputMaybe<Scalars["String"]>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_not_in?: InputMaybe<Array<Scalars["String"]>>;
  oracle_not_starts_with?: InputMaybe<Scalars["String"]>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_starts_with?: InputMaybe<Scalars["String"]>;
  oracle_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  platform?: InputMaybe<PriceOracleAssetPlatform>;
  platform_in?: InputMaybe<Array<PriceOracleAssetPlatform>>;
  platform_not?: InputMaybe<PriceOracleAssetPlatform>;
  platform_not_in?: InputMaybe<Array<PriceOracleAssetPlatform>>;
  priceHistory_?: InputMaybe<PriceHistoryItem_Filter>;
  priceInEth?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_gt?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_gte?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceInEth_lt?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_lte?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_not?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceSource?: InputMaybe<Scalars["Bytes"]>;
  priceSource_contains?: InputMaybe<Scalars["Bytes"]>;
  priceSource_gt?: InputMaybe<Scalars["Bytes"]>;
  priceSource_gte?: InputMaybe<Scalars["Bytes"]>;
  priceSource_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  priceSource_lt?: InputMaybe<Scalars["Bytes"]>;
  priceSource_lte?: InputMaybe<Scalars["Bytes"]>;
  priceSource_not?: InputMaybe<Scalars["Bytes"]>;
  priceSource_not_contains?: InputMaybe<Scalars["Bytes"]>;
  priceSource_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  type?: InputMaybe<PriceOracleAssetType>;
  type_in?: InputMaybe<Array<PriceOracleAssetType>>;
  type_not?: InputMaybe<PriceOracleAssetType>;
  type_not_in?: InputMaybe<Array<PriceOracleAssetType>>;
};

export enum PriceOracleAsset_OrderBy {
  DependentAssets = "dependentAssets",
  FromChainlinkSourcesRegistry = "fromChainlinkSourcesRegistry",
  Id = "id",
  IsFallbackRequired = "isFallbackRequired",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  Oracle = "oracle",
  OracleBaseCurrency = "oracle__baseCurrency",
  OracleBaseCurrencyUnit = "oracle__baseCurrencyUnit",
  OracleFallbackPriceOracle = "oracle__fallbackPriceOracle",
  OracleId = "oracle__id",
  OracleLastUpdateTimestamp = "oracle__lastUpdateTimestamp",
  OracleProxyPriceProvider = "oracle__proxyPriceProvider",
  OracleUsdPriceEth = "oracle__usdPriceEth",
  OracleUsdPriceEthFallbackRequired = "oracle__usdPriceEthFallbackRequired",
  OracleUsdPriceEthMainSource = "oracle__usdPriceEthMainSource",
  OracleVersion = "oracle__version",
  Platform = "platform",
  PriceHistory = "priceHistory",
  PriceInEth = "priceInEth",
  PriceSource = "priceSource",
  Type = "type",
}

export type PriceOracle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceOracle_Filter>>>;
  baseCurrency?: InputMaybe<Scalars["Bytes"]>;
  baseCurrencyUnit?: InputMaybe<Scalars["BigInt"]>;
  baseCurrencyUnit_gt?: InputMaybe<Scalars["BigInt"]>;
  baseCurrencyUnit_gte?: InputMaybe<Scalars["BigInt"]>;
  baseCurrencyUnit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseCurrencyUnit_lt?: InputMaybe<Scalars["BigInt"]>;
  baseCurrencyUnit_lte?: InputMaybe<Scalars["BigInt"]>;
  baseCurrencyUnit_not?: InputMaybe<Scalars["BigInt"]>;
  baseCurrencyUnit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseCurrency_contains?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_gt?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_gte?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseCurrency_lt?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_lte?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_not?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseCurrency_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  fallbackPriceOracle?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_contains?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_gt?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_gte?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  fallbackPriceOracle_lt?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_lte?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_not?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_not_contains?: InputMaybe<Scalars["Bytes"]>;
  fallbackPriceOracle_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceOracle_Filter>>>;
  proxyPriceProvider?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_contains?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_gt?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_gte?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  proxyPriceProvider_lt?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_lte?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not_contains?: InputMaybe<Scalars["Bytes"]>;
  proxyPriceProvider_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokensWithFallback?: InputMaybe<Array<Scalars["String"]>>;
  tokensWithFallback_?: InputMaybe<PriceOracleAsset_Filter>;
  tokensWithFallback_contains?: InputMaybe<Array<Scalars["String"]>>;
  tokensWithFallback_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  tokensWithFallback_not?: InputMaybe<Array<Scalars["String"]>>;
  tokensWithFallback_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  tokensWithFallback_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  tokens_?: InputMaybe<PriceOracleAsset_Filter>;
  usdDependentAssets?: InputMaybe<Array<Scalars["String"]>>;
  usdDependentAssets_?: InputMaybe<PriceOracleAsset_Filter>;
  usdDependentAssets_contains?: InputMaybe<Array<Scalars["String"]>>;
  usdDependentAssets_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  usdDependentAssets_not?: InputMaybe<Array<Scalars["String"]>>;
  usdDependentAssets_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  usdDependentAssets_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  usdPriceEth?: InputMaybe<Scalars["BigInt"]>;
  usdPriceEthFallbackRequired?: InputMaybe<Scalars["Boolean"]>;
  usdPriceEthFallbackRequired_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usdPriceEthFallbackRequired_not?: InputMaybe<Scalars["Boolean"]>;
  usdPriceEthFallbackRequired_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usdPriceEthHistory_?: InputMaybe<UsdEthPriceHistoryItem_Filter>;
  usdPriceEthMainSource?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_contains?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_gt?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_gte?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  usdPriceEthMainSource_lt?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_lte?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_not?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_not_contains?: InputMaybe<Scalars["Bytes"]>;
  usdPriceEthMainSource_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  usdPriceEth_gt?: InputMaybe<Scalars["BigInt"]>;
  usdPriceEth_gte?: InputMaybe<Scalars["BigInt"]>;
  usdPriceEth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  usdPriceEth_lt?: InputMaybe<Scalars["BigInt"]>;
  usdPriceEth_lte?: InputMaybe<Scalars["BigInt"]>;
  usdPriceEth_not?: InputMaybe<Scalars["BigInt"]>;
  usdPriceEth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  version?: InputMaybe<Scalars["Int"]>;
  version_gt?: InputMaybe<Scalars["Int"]>;
  version_gte?: InputMaybe<Scalars["Int"]>;
  version_in?: InputMaybe<Array<Scalars["Int"]>>;
  version_lt?: InputMaybe<Scalars["Int"]>;
  version_lte?: InputMaybe<Scalars["Int"]>;
  version_not?: InputMaybe<Scalars["Int"]>;
  version_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum PriceOracle_OrderBy {
  BaseCurrency = "baseCurrency",
  BaseCurrencyUnit = "baseCurrencyUnit",
  FallbackPriceOracle = "fallbackPriceOracle",
  Id = "id",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  ProxyPriceProvider = "proxyPriceProvider",
  Tokens = "tokens",
  TokensWithFallback = "tokensWithFallback",
  UsdDependentAssets = "usdDependentAssets",
  UsdPriceEth = "usdPriceEth",
  UsdPriceEthFallbackRequired = "usdPriceEthFallbackRequired",
  UsdPriceEthHistory = "usdPriceEthHistory",
  UsdPriceEthMainSource = "usdPriceEthMainSource",
  Version = "version",
}

export type Protocol = {
  __typename?: "Protocol";
  id: Scalars["ID"];
  pools: Array<Pool>;
};

export type ProtocolPoolsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Pool_Filter>;
};

export type Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Protocol_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Protocol_Filter>>>;
  pools_?: InputMaybe<Pool_Filter>;
};

export enum Protocol_OrderBy {
  Id = "id",
  Pools = "pools",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  atoken?: Maybe<AToken>;
  atokenBalanceHistoryItem?: Maybe<ATokenBalanceHistoryItem>;
  atokenBalanceHistoryItems: Array<ATokenBalanceHistoryItem>;
  atokens: Array<AToken>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  chainlinkENS?: Maybe<ChainlinkEns>;
  chainlinkENSs: Array<ChainlinkEns>;
  claimIncentiveCall?: Maybe<ClaimIncentiveCall>;
  claimIncentiveCalls: Array<ClaimIncentiveCall>;
  contractToPoolMapping?: Maybe<ContractToPoolMapping>;
  contractToPoolMappings: Array<ContractToPoolMapping>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  incentivesController?: Maybe<IncentivesController>;
  incentivesControllers: Array<IncentivesController>;
  incentivizedAction?: Maybe<IncentivizedAction>;
  incentivizedActions: Array<IncentivizedAction>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  mapAssetPool?: Maybe<MapAssetPool>;
  mapAssetPools: Array<MapAssetPool>;
  pool?: Maybe<Pool>;
  poolConfigurationHistoryItem?: Maybe<PoolConfigurationHistoryItem>;
  poolConfigurationHistoryItems: Array<PoolConfigurationHistoryItem>;
  pools: Array<Pool>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracles: Array<PriceOracle>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  reserve?: Maybe<Reserve>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  reserves: Array<Reserve>;
  stableDebtToken?: Maybe<StableDebtToken>;
  stableDebtTokens: Array<StableDebtToken>;
  stableTokenDelegatedAllowance?: Maybe<StableTokenDelegatedAllowance>;
  stableTokenDelegatedAllowances: Array<StableTokenDelegatedAllowance>;
  stoken?: Maybe<SToken>;
  stokenBalanceHistoryItem?: Maybe<STokenBalanceHistoryItem>;
  stokenBalanceHistoryItems: Array<STokenBalanceHistoryItem>;
  stokens: Array<SToken>;
  swap?: Maybe<Swap>;
  swapHistories: Array<SwapHistory>;
  swapHistory?: Maybe<SwapHistory>;
  swaps: Array<Swap>;
  usageAsCollateral?: Maybe<UsageAsCollateral>;
  usageAsCollaterals: Array<UsageAsCollateral>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  user?: Maybe<User>;
  userReserve?: Maybe<UserReserve>;
  userReserves: Array<UserReserve>;
  userTransaction?: Maybe<UserTransaction>;
  userTransactions: Array<UserTransaction>;
  users: Array<User>;
  variableDebtToken?: Maybe<VariableDebtToken>;
  variableDebtTokens: Array<VariableDebtToken>;
  variableTokenDelegatedAllowance?: Maybe<VariableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowances: Array<VariableTokenDelegatedAllowance>;
  vtoken?: Maybe<VToken>;
  vtokenBalanceHistoryItem?: Maybe<VTokenBalanceHistoryItem>;
  vtokenBalanceHistoryItems: Array<VTokenBalanceHistoryItem>;
  vtokens: Array<VToken>;
  wethreserve?: Maybe<WethReserve>;
  wethreserves: Array<WethReserve>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtokenBalanceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtokenBalanceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ATokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ATokenBalanceHistoryItem_Filter>;
};

export type QueryAtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AToken_Filter>;
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

export type QueryChainlinkAggregatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryChainlinkAggregatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ChainlinkAggregator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChainlinkAggregator_Filter>;
};

export type QueryChainlinkEnsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryChainlinkEnSsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ChainlinkEns_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChainlinkEns_Filter>;
};

export type QueryClaimIncentiveCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClaimIncentiveCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimIncentiveCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClaimIncentiveCall_Filter>;
};

export type QueryContractToPoolMappingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContractToPoolMappingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContractToPoolMapping_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractToPoolMapping_Filter>;
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

export type QueryFlashLoanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFlashLoansArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FlashLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlashLoan_Filter>;
};

export type QueryIncentivesControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryIncentivesControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IncentivesController_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IncentivesController_Filter>;
};

export type QueryIncentivizedActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryIncentivizedActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IncentivizedAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IncentivizedAction_Filter>;
};

export type QueryLiquidationCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidationCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidationCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidationCall_Filter>;
};

export type QueryMapAssetPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMapAssetPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MapAssetPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MapAssetPool_Filter>;
};

export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolConfigurationHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolConfigurationHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolConfigurationHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolConfigurationHistoryItem_Filter>;
};

export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type QueryPriceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceHistoryItem_Filter>;
};

export type QueryPriceOracleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceOracleAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceOracleAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracleAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceOracleAsset_Filter>;
};

export type QueryPriceOraclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceOracle_Filter>;
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

export type QueryRebalanceStableBorrowRateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRebalanceStableBorrowRatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceStableBorrowRate_Filter>;
};

export type QueryRedeemUnderlyingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRedeemUnderlyingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RedeemUnderlying_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RedeemUnderlying_Filter>;
};

export type QueryReferrerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReferrersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Referrer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Referrer_Filter>;
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

export type QueryReserveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReserveConfigurationHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReserveConfigurationHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveConfigurationHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReserveConfigurationHistoryItem_Filter>;
};

export type QueryReserveParamsHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReserveParamsHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveParamsHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReserveParamsHistoryItem_Filter>;
};

export type QueryReservesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reserve_Filter>;
};

export type QueryStableDebtTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStableDebtTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StableDebtToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StableDebtToken_Filter>;
};

export type QueryStableTokenDelegatedAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStableTokenDelegatedAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StableTokenDelegatedAllowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StableTokenDelegatedAllowance_Filter>;
};

export type QueryStokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStokenBalanceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStokenBalanceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<STokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<STokenBalanceHistoryItem_Filter>;
};

export type QueryStokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SToken_Filter>;
};

export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySwapHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SwapHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapHistory_Filter>;
};

export type QuerySwapHistoryArgs = {
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

export type QueryUsageAsCollateralArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsageAsCollateralsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageAsCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsageAsCollateral_Filter>;
};

export type QueryUsdEthPriceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsdEthPriceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsdEthPriceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsdEthPriceHistoryItem_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserReserveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserReservesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserReserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserReserve_Filter>;
};

export type QueryUserTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserTransaction_Filter>;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type QueryVariableDebtTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVariableDebtTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VariableDebtToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VariableDebtToken_Filter>;
};

export type QueryVariableTokenDelegatedAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVariableTokenDelegatedAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VariableTokenDelegatedAllowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VariableTokenDelegatedAllowance_Filter>;
};

export type QueryVtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVtokenBalanceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVtokenBalanceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VTokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VTokenBalanceHistoryItem_Filter>;
};

export type QueryVtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VToken_Filter>;
};

export type QueryWethreserveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWethreservesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WethReserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WethReserve_Filter>;
};

export type RebalanceStableBorrowRate = UserTransaction & {
  __typename?: "RebalanceStableBorrowRate";
  action: Action;
  borrowRateFrom: Scalars["BigInt"];
  borrowRateTo: Scalars["BigInt"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  reserve: Reserve;
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
};

export type RebalanceStableBorrowRate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  and?: InputMaybe<Array<InputMaybe<RebalanceStableBorrowRate_Filter>>>;
  borrowRateFrom?: InputMaybe<Scalars["BigInt"]>;
  borrowRateFrom_gt?: InputMaybe<Scalars["BigInt"]>;
  borrowRateFrom_gte?: InputMaybe<Scalars["BigInt"]>;
  borrowRateFrom_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrowRateFrom_lt?: InputMaybe<Scalars["BigInt"]>;
  borrowRateFrom_lte?: InputMaybe<Scalars["BigInt"]>;
  borrowRateFrom_not?: InputMaybe<Scalars["BigInt"]>;
  borrowRateFrom_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrowRateTo?: InputMaybe<Scalars["BigInt"]>;
  borrowRateTo_gt?: InputMaybe<Scalars["BigInt"]>;
  borrowRateTo_gte?: InputMaybe<Scalars["BigInt"]>;
  borrowRateTo_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrowRateTo_lt?: InputMaybe<Scalars["BigInt"]>;
  borrowRateTo_lte?: InputMaybe<Scalars["BigInt"]>;
  borrowRateTo_not?: InputMaybe<Scalars["BigInt"]>;
  borrowRateTo_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceStableBorrowRate_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum RebalanceStableBorrowRate_OrderBy {
  Action = "action",
  BorrowRateFrom = "borrowRateFrom",
  BorrowRateTo = "borrowRateTo",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type RedeemUnderlying = UserTransaction & {
  __typename?: "RedeemUnderlying";
  action: Action;
  amount: Scalars["BigInt"];
  assetPriceUSD: Scalars["BigDecimal"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  reserve: Reserve;
  timestamp: Scalars["Int"];
  to: User;
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
};

export type RedeemUnderlying_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<RedeemUnderlying_Filter>>>;
  assetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  assetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<RedeemUnderlying_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<User_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum RedeemUnderlying_OrderBy {
  Action = "action",
  Amount = "amount",
  AssetPriceUsd = "assetPriceUSD",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  Timestamp = "timestamp",
  To = "to",
  ToBorrowedReservesCount = "to__borrowedReservesCount",
  ToId = "to__id",
  ToIncentivesLastUpdated = "to__incentivesLastUpdated",
  ToLifetimeRewards = "to__lifetimeRewards",
  ToUnclaimedRewards = "to__unclaimedRewards",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type Referrer = {
  __typename?: "Referrer";
  borrows: Array<Borrow>;
  deposits: Array<Deposit>;
  id: Scalars["ID"];
};

export type ReferrerBorrowsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type ReferrerDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type Referrer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Referrer_Filter>>>;
  borrows_?: InputMaybe<Borrow_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Referrer_Filter>>>;
};

export enum Referrer_OrderBy {
  Borrows = "borrows",
  Deposits = "deposits",
  Id = "id",
}

export type Repay = UserTransaction & {
  __typename?: "Repay";
  action: Action;
  amount: Scalars["BigInt"];
  assetPriceUSD: Scalars["BigDecimal"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  repayer: User;
  reserve: Reserve;
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
};

export type Repay_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Repay_Filter>>>;
  assetPriceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  assetPriceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  assetPriceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Repay_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  repayer?: InputMaybe<Scalars["String"]>;
  repayer_?: InputMaybe<User_Filter>;
  repayer_contains?: InputMaybe<Scalars["String"]>;
  repayer_contains_nocase?: InputMaybe<Scalars["String"]>;
  repayer_ends_with?: InputMaybe<Scalars["String"]>;
  repayer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  repayer_gt?: InputMaybe<Scalars["String"]>;
  repayer_gte?: InputMaybe<Scalars["String"]>;
  repayer_in?: InputMaybe<Array<Scalars["String"]>>;
  repayer_lt?: InputMaybe<Scalars["String"]>;
  repayer_lte?: InputMaybe<Scalars["String"]>;
  repayer_not?: InputMaybe<Scalars["String"]>;
  repayer_not_contains?: InputMaybe<Scalars["String"]>;
  repayer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  repayer_not_ends_with?: InputMaybe<Scalars["String"]>;
  repayer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  repayer_not_in?: InputMaybe<Array<Scalars["String"]>>;
  repayer_not_starts_with?: InputMaybe<Scalars["String"]>;
  repayer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  repayer_starts_with?: InputMaybe<Scalars["String"]>;
  repayer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Repay_OrderBy {
  Action = "action",
  Amount = "amount",
  AssetPriceUsd = "assetPriceUSD",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Repayer = "repayer",
  RepayerBorrowedReservesCount = "repayer__borrowedReservesCount",
  RepayerId = "repayer__id",
  RepayerIncentivesLastUpdated = "repayer__incentivesLastUpdated",
  RepayerLifetimeRewards = "repayer__lifetimeRewards",
  RepayerUnclaimedRewards = "repayer__unclaimedRewards",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type Reserve = {
  __typename?: "Reserve";
  aEmissionPerSecond: Scalars["BigInt"];
  aIncentivesLastUpdateTimestamp: Scalars["Int"];
  aToken: AToken;
  aTokenIncentivesIndex: Scalars["BigInt"];
  availableLiquidity: Scalars["BigInt"];
  averageStableRate: Scalars["BigInt"];
  baseLTVasCollateral: Scalars["BigInt"];
  baseVariableBorrowRate: Scalars["BigInt"];
  borrowHistory: Array<Borrow>;
  borrowingEnabled: Scalars["Boolean"];
  configurationHistory: Array<ReserveConfigurationHistoryItem>;
  decimals: Scalars["Int"];
  depositHistory: Array<Deposit>;
  deposits: Array<Deposit>;
  flashLoanHistory: Array<FlashLoan>;
  /**
   * Reserve address
   *
   */
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  isFrozen: Scalars["Boolean"];
  lastUpdateTimestamp: Scalars["Int"];
  lifetimeBorrows: Scalars["BigInt"];
  lifetimeCurrentVariableDebt: Scalars["BigInt"];
  lifetimeDepositorsInterestEarned: Scalars["BigInt"];
  lifetimeFlashLoanPremium: Scalars["BigInt"];
  lifetimeFlashLoans: Scalars["BigInt"];
  lifetimeLiquidated: Scalars["BigInt"];
  lifetimeLiquidity: Scalars["BigInt"];
  lifetimePrincipalStableDebt: Scalars["BigInt"];
  lifetimeRepayments: Scalars["BigInt"];
  lifetimeReserveFactorAccrued: Scalars["BigInt"];
  lifetimeScaledVariableDebt: Scalars["BigInt"];
  lifetimeWithdrawals: Scalars["BigInt"];
  liquidationCallHistory: Array<LiquidationCall>;
  liquidityIndex: Scalars["BigInt"];
  liquidityRate: Scalars["BigInt"];
  name: Scalars["String"];
  optimalUtilisationRate: Scalars["BigInt"];
  paramsHistory: Array<ReserveParamsHistoryItem>;
  pool: Pool;
  price: PriceOracleAsset;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  repayHistory: Array<Repay>;
  reserveFactor: Scalars["BigInt"];
  reserveInterestRateStrategy: Scalars["Bytes"];
  reserveLiquidationBonus: Scalars["BigInt"];
  reserveLiquidationThreshold: Scalars["BigInt"];
  sEmissionPerSecond: Scalars["BigInt"];
  sIncentivesLastUpdateTimestamp: Scalars["Int"];
  sToken: SToken;
  sTokenIncentivesIndex: Scalars["BigInt"];
  stableBorrowRate: Scalars["BigInt"];
  stableBorrowRateEnabled: Scalars["Boolean"];
  stableDebtLastUpdateTimestamp: Scalars["Int"];
  stableRateSlope1: Scalars["BigInt"];
  stableRateSlope2: Scalars["BigInt"];
  swapHistory: Array<Swap>;
  symbol: Scalars["String"];
  totalATokenSupply: Scalars["BigInt"];
  totalCurrentVariableDebt: Scalars["BigInt"];
  totalDeposits: Scalars["BigInt"];
  totalLiquidity: Scalars["BigInt"];
  totalLiquidityAsCollateral: Scalars["BigInt"];
  totalPrincipalStableDebt: Scalars["BigInt"];
  totalScaledVariableDebt: Scalars["BigInt"];
  underlyingAsset: Scalars["Bytes"];
  usageAsCollateralEnabled: Scalars["Boolean"];
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  userReserves: Array<UserReserve>;
  utilizationRate: Scalars["BigDecimal"];
  vEmissionPerSecond: Scalars["BigInt"];
  vIncentivesLastUpdateTimestamp: Scalars["Int"];
  vToken: VToken;
  vTokenIncentivesIndex: Scalars["BigInt"];
  variableBorrowIndex: Scalars["BigInt"];
  variableBorrowRate: Scalars["BigInt"];
  variableRateSlope1: Scalars["BigInt"];
  variableRateSlope2: Scalars["BigInt"];
};

export type ReserveBorrowHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type ReserveConfigurationHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveConfigurationHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReserveConfigurationHistoryItem_Filter>;
};

export type ReserveDepositHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type ReserveDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type ReserveFlashLoanHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FlashLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FlashLoan_Filter>;
};

export type ReserveLiquidationCallHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidationCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidationCall_Filter>;
};

export type ReserveParamsHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveParamsHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReserveParamsHistoryItem_Filter>;
};

export type ReserveRebalanceStableBorrowRateHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RebalanceStableBorrowRate_Filter>;
};

export type ReserveRedeemUnderlyingHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RedeemUnderlying_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RedeemUnderlying_Filter>;
};

export type ReserveRepayHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
};

export type ReserveSwapHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type ReserveUsageAsCollateralHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageAsCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageAsCollateral_Filter>;
};

export type ReserveUserReservesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserReserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserReserve_Filter>;
};

export type ReserveConfigurationHistoryItem = {
  __typename?: "ReserveConfigurationHistoryItem";
  baseLTVasCollateral: Scalars["BigInt"];
  borrowingEnabled: Scalars["Boolean"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  isFrozen: Scalars["Boolean"];
  reserve: Reserve;
  reserveInterestRateStrategy: Scalars["Bytes"];
  reserveLiquidationBonus: Scalars["BigInt"];
  reserveLiquidationThreshold: Scalars["BigInt"];
  stableBorrowRateEnabled: Scalars["Boolean"];
  timestamp: Scalars["Int"];
  usageAsCollateralEnabled: Scalars["Boolean"];
};

export type ReserveConfigurationHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReserveConfigurationHistoryItem_Filter>>>;
  baseLTVasCollateral?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_gt?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_gte?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseLTVasCollateral_lt?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_lte?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_not?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrowingEnabled?: InputMaybe<Scalars["Boolean"]>;
  borrowingEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  borrowingEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  borrowingEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isFrozen?: InputMaybe<Scalars["Boolean"]>;
  isFrozen_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isFrozen_not?: InputMaybe<Scalars["Boolean"]>;
  isFrozen_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  or?: InputMaybe<Array<InputMaybe<ReserveConfigurationHistoryItem_Filter>>>;
  reserve?: InputMaybe<Scalars["String"]>;
  reserveInterestRateStrategy?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_gt?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_gte?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveInterestRateStrategy_lt?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_lte?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_not?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_not_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveLiquidationBonus?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveLiquidationBonus_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_not?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveLiquidationThreshold?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveLiquidationThreshold_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_not?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stableBorrowRateEnabled?: InputMaybe<Scalars["Boolean"]>;
  stableBorrowRateEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  stableBorrowRateEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  stableBorrowRateEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  usageAsCollateralEnabled?: InputMaybe<Scalars["Boolean"]>;
  usageAsCollateralEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usageAsCollateralEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  usageAsCollateralEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
};

export enum ReserveConfigurationHistoryItem_OrderBy {
  BaseLtVasCollateral = "baseLTVasCollateral",
  BorrowingEnabled = "borrowingEnabled",
  Id = "id",
  IsActive = "isActive",
  IsFrozen = "isFrozen",
  Reserve = "reserve",
  ReserveInterestRateStrategy = "reserveInterestRateStrategy",
  ReserveLiquidationBonus = "reserveLiquidationBonus",
  ReserveLiquidationThreshold = "reserveLiquidationThreshold",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  StableBorrowRateEnabled = "stableBorrowRateEnabled",
  Timestamp = "timestamp",
  UsageAsCollateralEnabled = "usageAsCollateralEnabled",
}

export type ReserveParamsHistoryItem = {
  __typename?: "ReserveParamsHistoryItem";
  availableLiquidity: Scalars["BigInt"];
  averageStableBorrowRate: Scalars["BigInt"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  lifetimeBorrows: Scalars["BigInt"];
  lifetimeCurrentVariableDebt: Scalars["BigInt"];
  lifetimeDepositorsInterestEarned: Scalars["BigInt"];
  lifetimeFlashLoanPremium: Scalars["BigInt"];
  lifetimeFlashLoans: Scalars["BigInt"];
  lifetimeLiquidated: Scalars["BigInt"];
  lifetimeLiquidity: Scalars["BigInt"];
  lifetimePrincipalStableDebt: Scalars["BigInt"];
  lifetimeRepayments: Scalars["BigInt"];
  lifetimeReserveFactorAccrued: Scalars["BigInt"];
  lifetimeScaledVariableDebt: Scalars["BigInt"];
  lifetimeWithdrawals: Scalars["BigInt"];
  liquidityIndex: Scalars["BigInt"];
  liquidityRate: Scalars["BigInt"];
  priceInEth: Scalars["BigInt"];
  priceInUsd: Scalars["BigDecimal"];
  reserve: Reserve;
  stableBorrowRate: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  totalATokenSupply: Scalars["BigInt"];
  totalCurrentVariableDebt: Scalars["BigInt"];
  totalLiquidity: Scalars["BigInt"];
  totalLiquidityAsCollateral: Scalars["BigInt"];
  totalPrincipalStableDebt: Scalars["BigInt"];
  totalScaledVariableDebt: Scalars["BigInt"];
  utilizationRate: Scalars["BigDecimal"];
  variableBorrowIndex: Scalars["BigInt"];
  variableBorrowRate: Scalars["BigInt"];
};

export type ReserveParamsHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReserveParamsHistoryItem_Filter>>>;
  availableLiquidity?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  availableLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  averageStableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  averageStableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  averageStableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  averageStableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  averageStableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  averageStableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  averageStableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  averageStableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lifetimeBorrows?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeBorrows_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeCurrentVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeCurrentVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeDepositorsInterestEarned?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeDepositorsInterestEarned_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_not_in?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  lifetimeFlashLoanPremium?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeFlashLoanPremium_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeFlashLoans?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeFlashLoans_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidated?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidated_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidity?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimePrincipalStableDebt?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimePrincipalStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeRepayments?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeRepayments_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeReserveFactorAccrued?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeReserveFactorAccrued_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeScaledVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeScaledVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeWithdrawals?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeWithdrawals_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityIndex?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityRate?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityRate_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<ReserveParamsHistoryItem_Filter>>>;
  priceInEth?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_gt?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_gte?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceInEth_lt?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_lte?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_not?: InputMaybe<Scalars["BigInt"]>;
  priceInEth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceInUsd?: InputMaybe<Scalars["BigDecimal"]>;
  priceInUsd_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceInUsd_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceInUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceInUsd_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceInUsd_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceInUsd_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceInUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalATokenSupply?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalATokenSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalCurrentVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalCurrentVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityAsCollateral_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalPrincipalStableDebt?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalPrincipalStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalScaledVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalScaledVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  utilizationRate?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  utilizationRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  variableBorrowIndex?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_not?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum ReserveParamsHistoryItem_OrderBy {
  AvailableLiquidity = "availableLiquidity",
  AverageStableBorrowRate = "averageStableBorrowRate",
  Id = "id",
  LifetimeBorrows = "lifetimeBorrows",
  LifetimeCurrentVariableDebt = "lifetimeCurrentVariableDebt",
  LifetimeDepositorsInterestEarned = "lifetimeDepositorsInterestEarned",
  LifetimeFlashLoanPremium = "lifetimeFlashLoanPremium",
  LifetimeFlashLoans = "lifetimeFlashLoans",
  LifetimeLiquidated = "lifetimeLiquidated",
  LifetimeLiquidity = "lifetimeLiquidity",
  LifetimePrincipalStableDebt = "lifetimePrincipalStableDebt",
  LifetimeRepayments = "lifetimeRepayments",
  LifetimeReserveFactorAccrued = "lifetimeReserveFactorAccrued",
  LifetimeScaledVariableDebt = "lifetimeScaledVariableDebt",
  LifetimeWithdrawals = "lifetimeWithdrawals",
  LiquidityIndex = "liquidityIndex",
  LiquidityRate = "liquidityRate",
  PriceInEth = "priceInEth",
  PriceInUsd = "priceInUsd",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  StableBorrowRate = "stableBorrowRate",
  Timestamp = "timestamp",
  TotalATokenSupply = "totalATokenSupply",
  TotalCurrentVariableDebt = "totalCurrentVariableDebt",
  TotalLiquidity = "totalLiquidity",
  TotalLiquidityAsCollateral = "totalLiquidityAsCollateral",
  TotalPrincipalStableDebt = "totalPrincipalStableDebt",
  TotalScaledVariableDebt = "totalScaledVariableDebt",
  UtilizationRate = "utilizationRate",
  VariableBorrowIndex = "variableBorrowIndex",
  VariableBorrowRate = "variableBorrowRate",
}

export type Reserve_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aEmissionPerSecond?: InputMaybe<Scalars["BigInt"]>;
  aEmissionPerSecond_gt?: InputMaybe<Scalars["BigInt"]>;
  aEmissionPerSecond_gte?: InputMaybe<Scalars["BigInt"]>;
  aEmissionPerSecond_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  aEmissionPerSecond_lt?: InputMaybe<Scalars["BigInt"]>;
  aEmissionPerSecond_lte?: InputMaybe<Scalars["BigInt"]>;
  aEmissionPerSecond_not?: InputMaybe<Scalars["BigInt"]>;
  aEmissionPerSecond_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  aIncentivesLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  aIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  aToken?: InputMaybe<Scalars["String"]>;
  aTokenIncentivesIndex?: InputMaybe<Scalars["BigInt"]>;
  aTokenIncentivesIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  aTokenIncentivesIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  aTokenIncentivesIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  aTokenIncentivesIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  aTokenIncentivesIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  aTokenIncentivesIndex_not?: InputMaybe<Scalars["BigInt"]>;
  aTokenIncentivesIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  aToken_?: InputMaybe<AToken_Filter>;
  aToken_contains?: InputMaybe<Scalars["String"]>;
  aToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  aToken_ends_with?: InputMaybe<Scalars["String"]>;
  aToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  aToken_gt?: InputMaybe<Scalars["String"]>;
  aToken_gte?: InputMaybe<Scalars["String"]>;
  aToken_in?: InputMaybe<Array<Scalars["String"]>>;
  aToken_lt?: InputMaybe<Scalars["String"]>;
  aToken_lte?: InputMaybe<Scalars["String"]>;
  aToken_not?: InputMaybe<Scalars["String"]>;
  aToken_not_contains?: InputMaybe<Scalars["String"]>;
  aToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  aToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  aToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  aToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  aToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  aToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  aToken_starts_with?: InputMaybe<Scalars["String"]>;
  aToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<Reserve_Filter>>>;
  availableLiquidity?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  availableLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  availableLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  averageStableRate?: InputMaybe<Scalars["BigInt"]>;
  averageStableRate_gt?: InputMaybe<Scalars["BigInt"]>;
  averageStableRate_gte?: InputMaybe<Scalars["BigInt"]>;
  averageStableRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  averageStableRate_lt?: InputMaybe<Scalars["BigInt"]>;
  averageStableRate_lte?: InputMaybe<Scalars["BigInt"]>;
  averageStableRate_not?: InputMaybe<Scalars["BigInt"]>;
  averageStableRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseLTVasCollateral?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_gt?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_gte?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseLTVasCollateral_lt?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_lte?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_not?: InputMaybe<Scalars["BigInt"]>;
  baseLTVasCollateral_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseVariableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  baseVariableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  baseVariableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  baseVariableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseVariableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  baseVariableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  baseVariableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  baseVariableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrowHistory_?: InputMaybe<Borrow_Filter>;
  borrowingEnabled?: InputMaybe<Scalars["Boolean"]>;
  borrowingEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  borrowingEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  borrowingEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  configurationHistory_?: InputMaybe<ReserveConfigurationHistoryItem_Filter>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositHistory_?: InputMaybe<Deposit_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  flashLoanHistory_?: InputMaybe<FlashLoan_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isFrozen?: InputMaybe<Scalars["Boolean"]>;
  isFrozen_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isFrozen_not?: InputMaybe<Scalars["Boolean"]>;
  isFrozen_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  lifetimeBorrows?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeBorrows_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeBorrows_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeCurrentVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeCurrentVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeDepositorsInterestEarned?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeDepositorsInterestEarned_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeDepositorsInterestEarned_not_in?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  lifetimeFlashLoanPremium?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeFlashLoanPremium_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoanPremium_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeFlashLoans?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeFlashLoans_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeFlashLoans_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidated?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidated_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidated_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidity?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimePrincipalStableDebt?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimePrincipalStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimePrincipalStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeRepayments?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeRepayments_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRepayments_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeReserveFactorAccrued?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeReserveFactorAccrued_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeReserveFactorAccrued_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeScaledVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeScaledVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeScaledVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeWithdrawals?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeWithdrawals_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeWithdrawals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_Filter>;
  liquidityIndex?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityRate?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityRate_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  optimalUtilisationRate?: InputMaybe<Scalars["BigInt"]>;
  optimalUtilisationRate_gt?: InputMaybe<Scalars["BigInt"]>;
  optimalUtilisationRate_gte?: InputMaybe<Scalars["BigInt"]>;
  optimalUtilisationRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  optimalUtilisationRate_lt?: InputMaybe<Scalars["BigInt"]>;
  optimalUtilisationRate_lte?: InputMaybe<Scalars["BigInt"]>;
  optimalUtilisationRate_not?: InputMaybe<Scalars["BigInt"]>;
  optimalUtilisationRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Reserve_Filter>>>;
  paramsHistory_?: InputMaybe<ReserveParamsHistoryItem_Filter>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  price?: InputMaybe<Scalars["String"]>;
  price_?: InputMaybe<PriceOracleAsset_Filter>;
  price_contains?: InputMaybe<Scalars["String"]>;
  price_contains_nocase?: InputMaybe<Scalars["String"]>;
  price_ends_with?: InputMaybe<Scalars["String"]>;
  price_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  price_gt?: InputMaybe<Scalars["String"]>;
  price_gte?: InputMaybe<Scalars["String"]>;
  price_in?: InputMaybe<Array<Scalars["String"]>>;
  price_lt?: InputMaybe<Scalars["String"]>;
  price_lte?: InputMaybe<Scalars["String"]>;
  price_not?: InputMaybe<Scalars["String"]>;
  price_not_contains?: InputMaybe<Scalars["String"]>;
  price_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  price_not_ends_with?: InputMaybe<Scalars["String"]>;
  price_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  price_not_in?: InputMaybe<Array<Scalars["String"]>>;
  price_not_starts_with?: InputMaybe<Scalars["String"]>;
  price_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  price_starts_with?: InputMaybe<Scalars["String"]>;
  price_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_Filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_Filter>;
  repayHistory_?: InputMaybe<Repay_Filter>;
  reserveFactor?: InputMaybe<Scalars["BigInt"]>;
  reserveFactor_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveFactor_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveFactor_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveFactor_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveFactor_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveFactor_not?: InputMaybe<Scalars["BigInt"]>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveInterestRateStrategy?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_gt?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_gte?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveInterestRateStrategy_lt?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_lte?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_not?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_not_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveInterestRateStrategy_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveLiquidationBonus?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveLiquidationBonus_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_not?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationBonus_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveLiquidationThreshold?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveLiquidationThreshold_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_not?: InputMaybe<Scalars["BigInt"]>;
  reserveLiquidationThreshold_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sEmissionPerSecond?: InputMaybe<Scalars["BigInt"]>;
  sEmissionPerSecond_gt?: InputMaybe<Scalars["BigInt"]>;
  sEmissionPerSecond_gte?: InputMaybe<Scalars["BigInt"]>;
  sEmissionPerSecond_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sEmissionPerSecond_lt?: InputMaybe<Scalars["BigInt"]>;
  sEmissionPerSecond_lte?: InputMaybe<Scalars["BigInt"]>;
  sEmissionPerSecond_not?: InputMaybe<Scalars["BigInt"]>;
  sEmissionPerSecond_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sIncentivesLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  sIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  sToken?: InputMaybe<Scalars["String"]>;
  sTokenIncentivesIndex?: InputMaybe<Scalars["BigInt"]>;
  sTokenIncentivesIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  sTokenIncentivesIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  sTokenIncentivesIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sTokenIncentivesIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  sTokenIncentivesIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  sTokenIncentivesIndex_not?: InputMaybe<Scalars["BigInt"]>;
  sTokenIncentivesIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sToken_?: InputMaybe<SToken_Filter>;
  sToken_contains?: InputMaybe<Scalars["String"]>;
  sToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  sToken_ends_with?: InputMaybe<Scalars["String"]>;
  sToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sToken_gt?: InputMaybe<Scalars["String"]>;
  sToken_gte?: InputMaybe<Scalars["String"]>;
  sToken_in?: InputMaybe<Array<Scalars["String"]>>;
  sToken_lt?: InputMaybe<Scalars["String"]>;
  sToken_lte?: InputMaybe<Scalars["String"]>;
  sToken_not?: InputMaybe<Scalars["String"]>;
  sToken_not_contains?: InputMaybe<Scalars["String"]>;
  sToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  sToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  sToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sToken_starts_with?: InputMaybe<Scalars["String"]>;
  sToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRateEnabled?: InputMaybe<Scalars["Boolean"]>;
  stableBorrowRateEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  stableBorrowRateEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  stableBorrowRateEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  stableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableDebtLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  stableDebtLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  stableDebtLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  stableDebtLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  stableDebtLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  stableDebtLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  stableDebtLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  stableDebtLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  stableRateSlope1?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope1_gt?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope1_gte?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope1_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableRateSlope1_lt?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope1_lte?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope1_not?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope1_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableRateSlope2?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope2_gt?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope2_gte?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope2_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableRateSlope2_lt?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope2_lte?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope2_not?: InputMaybe<Scalars["BigInt"]>;
  stableRateSlope2_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapHistory_?: InputMaybe<Swap_Filter>;
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
  totalATokenSupply?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalATokenSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalATokenSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalCurrentVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalCurrentVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  totalCurrentVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalDeposits?: InputMaybe<Scalars["BigInt"]>;
  totalDeposits_gt?: InputMaybe<Scalars["BigInt"]>;
  totalDeposits_gte?: InputMaybe<Scalars["BigInt"]>;
  totalDeposits_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalDeposits_lt?: InputMaybe<Scalars["BigInt"]>;
  totalDeposits_lte?: InputMaybe<Scalars["BigInt"]>;
  totalDeposits_not?: InputMaybe<Scalars["BigInt"]>;
  totalDeposits_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityAsCollateral_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityAsCollateral_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalPrincipalStableDebt?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalPrincipalStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  totalPrincipalStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalScaledVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalScaledVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  totalScaledVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingAsset?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAsset_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  usageAsCollateralEnabled?: InputMaybe<Scalars["Boolean"]>;
  usageAsCollateralEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usageAsCollateralEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  usageAsCollateralEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_Filter>;
  userReserves_?: InputMaybe<UserReserve_Filter>;
  utilizationRate?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  utilizationRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  utilizationRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  vEmissionPerSecond?: InputMaybe<Scalars["BigInt"]>;
  vEmissionPerSecond_gt?: InputMaybe<Scalars["BigInt"]>;
  vEmissionPerSecond_gte?: InputMaybe<Scalars["BigInt"]>;
  vEmissionPerSecond_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vEmissionPerSecond_lt?: InputMaybe<Scalars["BigInt"]>;
  vEmissionPerSecond_lte?: InputMaybe<Scalars["BigInt"]>;
  vEmissionPerSecond_not?: InputMaybe<Scalars["BigInt"]>;
  vEmissionPerSecond_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vIncentivesLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  vIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vToken?: InputMaybe<Scalars["String"]>;
  vTokenIncentivesIndex?: InputMaybe<Scalars["BigInt"]>;
  vTokenIncentivesIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  vTokenIncentivesIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  vTokenIncentivesIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vTokenIncentivesIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  vTokenIncentivesIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  vTokenIncentivesIndex_not?: InputMaybe<Scalars["BigInt"]>;
  vTokenIncentivesIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vToken_?: InputMaybe<VToken_Filter>;
  vToken_contains?: InputMaybe<Scalars["String"]>;
  vToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  vToken_ends_with?: InputMaybe<Scalars["String"]>;
  vToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vToken_gt?: InputMaybe<Scalars["String"]>;
  vToken_gte?: InputMaybe<Scalars["String"]>;
  vToken_in?: InputMaybe<Array<Scalars["String"]>>;
  vToken_lt?: InputMaybe<Scalars["String"]>;
  vToken_lte?: InputMaybe<Scalars["String"]>;
  vToken_not?: InputMaybe<Scalars["String"]>;
  vToken_not_contains?: InputMaybe<Scalars["String"]>;
  vToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  vToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  vToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vToken_starts_with?: InputMaybe<Scalars["String"]>;
  vToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  variableBorrowIndex?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_not?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableRateSlope1?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope1_gt?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope1_gte?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope1_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableRateSlope1_lt?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope1_lte?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope1_not?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope1_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableRateSlope2?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope2_gt?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope2_gte?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope2_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableRateSlope2_lt?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope2_lte?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope2_not?: InputMaybe<Scalars["BigInt"]>;
  variableRateSlope2_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Reserve_OrderBy {
  AEmissionPerSecond = "aEmissionPerSecond",
  AIncentivesLastUpdateTimestamp = "aIncentivesLastUpdateTimestamp",
  AToken = "aToken",
  ATokenIncentivesIndex = "aTokenIncentivesIndex",
  ATokenId = "aToken__id",
  ATokenTokenContractImpl = "aToken__tokenContractImpl",
  ATokenUnderlyingAssetAddress = "aToken__underlyingAssetAddress",
  ATokenUnderlyingAssetDecimals = "aToken__underlyingAssetDecimals",
  AvailableLiquidity = "availableLiquidity",
  AverageStableRate = "averageStableRate",
  BaseLtVasCollateral = "baseLTVasCollateral",
  BaseVariableBorrowRate = "baseVariableBorrowRate",
  BorrowHistory = "borrowHistory",
  BorrowingEnabled = "borrowingEnabled",
  ConfigurationHistory = "configurationHistory",
  Decimals = "decimals",
  DepositHistory = "depositHistory",
  Deposits = "deposits",
  FlashLoanHistory = "flashLoanHistory",
  Id = "id",
  IsActive = "isActive",
  IsFrozen = "isFrozen",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  LifetimeBorrows = "lifetimeBorrows",
  LifetimeCurrentVariableDebt = "lifetimeCurrentVariableDebt",
  LifetimeDepositorsInterestEarned = "lifetimeDepositorsInterestEarned",
  LifetimeFlashLoanPremium = "lifetimeFlashLoanPremium",
  LifetimeFlashLoans = "lifetimeFlashLoans",
  LifetimeLiquidated = "lifetimeLiquidated",
  LifetimeLiquidity = "lifetimeLiquidity",
  LifetimePrincipalStableDebt = "lifetimePrincipalStableDebt",
  LifetimeRepayments = "lifetimeRepayments",
  LifetimeReserveFactorAccrued = "lifetimeReserveFactorAccrued",
  LifetimeScaledVariableDebt = "lifetimeScaledVariableDebt",
  LifetimeWithdrawals = "lifetimeWithdrawals",
  LiquidationCallHistory = "liquidationCallHistory",
  LiquidityIndex = "liquidityIndex",
  LiquidityRate = "liquidityRate",
  Name = "name",
  OptimalUtilisationRate = "optimalUtilisationRate",
  ParamsHistory = "paramsHistory",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Price = "price",
  PriceFromChainlinkSourcesRegistry = "price__fromChainlinkSourcesRegistry",
  PriceId = "price__id",
  PriceIsFallbackRequired = "price__isFallbackRequired",
  PriceLastUpdateTimestamp = "price__lastUpdateTimestamp",
  PricePlatform = "price__platform",
  PricePriceInEth = "price__priceInEth",
  PricePriceSource = "price__priceSource",
  PriceType = "price__type",
  RebalanceStableBorrowRateHistory = "rebalanceStableBorrowRateHistory",
  RedeemUnderlyingHistory = "redeemUnderlyingHistory",
  RepayHistory = "repayHistory",
  ReserveFactor = "reserveFactor",
  ReserveInterestRateStrategy = "reserveInterestRateStrategy",
  ReserveLiquidationBonus = "reserveLiquidationBonus",
  ReserveLiquidationThreshold = "reserveLiquidationThreshold",
  SEmissionPerSecond = "sEmissionPerSecond",
  SIncentivesLastUpdateTimestamp = "sIncentivesLastUpdateTimestamp",
  SToken = "sToken",
  STokenIncentivesIndex = "sTokenIncentivesIndex",
  STokenId = "sToken__id",
  STokenTokenContractImpl = "sToken__tokenContractImpl",
  STokenUnderlyingAssetAddress = "sToken__underlyingAssetAddress",
  STokenUnderlyingAssetDecimals = "sToken__underlyingAssetDecimals",
  StableBorrowRate = "stableBorrowRate",
  StableBorrowRateEnabled = "stableBorrowRateEnabled",
  StableDebtLastUpdateTimestamp = "stableDebtLastUpdateTimestamp",
  StableRateSlope1 = "stableRateSlope1",
  StableRateSlope2 = "stableRateSlope2",
  SwapHistory = "swapHistory",
  Symbol = "symbol",
  TotalATokenSupply = "totalATokenSupply",
  TotalCurrentVariableDebt = "totalCurrentVariableDebt",
  TotalDeposits = "totalDeposits",
  TotalLiquidity = "totalLiquidity",
  TotalLiquidityAsCollateral = "totalLiquidityAsCollateral",
  TotalPrincipalStableDebt = "totalPrincipalStableDebt",
  TotalScaledVariableDebt = "totalScaledVariableDebt",
  UnderlyingAsset = "underlyingAsset",
  UsageAsCollateralEnabled = "usageAsCollateralEnabled",
  UsageAsCollateralHistory = "usageAsCollateralHistory",
  UserReserves = "userReserves",
  UtilizationRate = "utilizationRate",
  VEmissionPerSecond = "vEmissionPerSecond",
  VIncentivesLastUpdateTimestamp = "vIncentivesLastUpdateTimestamp",
  VToken = "vToken",
  VTokenIncentivesIndex = "vTokenIncentivesIndex",
  VTokenId = "vToken__id",
  VTokenTokenContractImpl = "vToken__tokenContractImpl",
  VTokenUnderlyingAssetAddress = "vToken__underlyingAssetAddress",
  VTokenUnderlyingAssetDecimals = "vToken__underlyingAssetDecimals",
  VariableBorrowIndex = "variableBorrowIndex",
  VariableBorrowRate = "variableBorrowRate",
  VariableRateSlope1 = "variableRateSlope1",
  VariableRateSlope2 = "variableRateSlope2",
}

export type SToken = {
  __typename?: "SToken";
  /**
   * SToken address
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  tokenContractImpl: Scalars["Bytes"];
  underlyingAssetAddress: Scalars["Bytes"];
  underlyingAssetDecimals: Scalars["Int"];
};

export type STokenBalanceHistoryItem = {
  __typename?: "STokenBalanceHistoryItem";
  avgStableBorrowRate: Scalars["BigInt"];
  currentStableDebt: Scalars["BigInt"];
  /**
   * userReserve + txHash
   *
   */
  id: Scalars["ID"];
  principalStableDebt: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  userReserve: UserReserve;
};

export type STokenBalanceHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<STokenBalanceHistoryItem_Filter>>>;
  avgStableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  avgStableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  avgStableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  avgStableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  avgStableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  avgStableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  avgStableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  avgStableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentStableDebt?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<STokenBalanceHistoryItem_Filter>>>;
  principalStableDebt?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum STokenBalanceHistoryItem_OrderBy {
  AvgStableBorrowRate = "avgStableBorrowRate",
  CurrentStableDebt = "currentStableDebt",
  Id = "id",
  PrincipalStableDebt = "principalStableDebt",
  Timestamp = "timestamp",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
}

export type SToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SToken_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<SToken_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  tokenContractImpl?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenContractImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetDecimals?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum SToken_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  TokenContractImpl = "tokenContractImpl",
  UnderlyingAssetAddress = "underlyingAssetAddress",
  UnderlyingAssetDecimals = "underlyingAssetDecimals",
}

export type StableDebtToken = {
  __typename?: "StableDebtToken";
  /**
   * StableDebtToken address
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  underlyingAssetAddress: Scalars["Bytes"];
  underlyingAssetDecimals: Scalars["Int"];
};

export type StableDebtToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StableDebtToken_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<StableDebtToken_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  underlyingAssetAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetDecimals?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum StableDebtToken_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  UnderlyingAssetAddress = "underlyingAssetAddress",
  UnderlyingAssetDecimals = "underlyingAssetDecimals",
}

export type StableTokenDelegatedAllowance = {
  __typename?: "StableTokenDelegatedAllowance";
  amountAllowed: Scalars["BigInt"];
  fromUser: User;
  /**
   * stable + fromuser address + touser address+ reserve address
   *
   */
  id: Scalars["ID"];
  toUser: User;
  userReserve: UserReserve;
};

export type StableTokenDelegatedAllowance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountAllowed?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_gt?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_gte?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amountAllowed_lt?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_lte?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_not?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<StableTokenDelegatedAllowance_Filter>>>;
  fromUser?: InputMaybe<Scalars["String"]>;
  fromUser_?: InputMaybe<User_Filter>;
  fromUser_contains?: InputMaybe<Scalars["String"]>;
  fromUser_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_ends_with?: InputMaybe<Scalars["String"]>;
  fromUser_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_gt?: InputMaybe<Scalars["String"]>;
  fromUser_gte?: InputMaybe<Scalars["String"]>;
  fromUser_in?: InputMaybe<Array<Scalars["String"]>>;
  fromUser_lt?: InputMaybe<Scalars["String"]>;
  fromUser_lte?: InputMaybe<Scalars["String"]>;
  fromUser_not?: InputMaybe<Scalars["String"]>;
  fromUser_not_contains?: InputMaybe<Scalars["String"]>;
  fromUser_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_not_ends_with?: InputMaybe<Scalars["String"]>;
  fromUser_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_not_in?: InputMaybe<Array<Scalars["String"]>>;
  fromUser_not_starts_with?: InputMaybe<Scalars["String"]>;
  fromUser_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_starts_with?: InputMaybe<Scalars["String"]>;
  fromUser_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<StableTokenDelegatedAllowance_Filter>>>;
  toUser?: InputMaybe<Scalars["String"]>;
  toUser_?: InputMaybe<User_Filter>;
  toUser_contains?: InputMaybe<Scalars["String"]>;
  toUser_contains_nocase?: InputMaybe<Scalars["String"]>;
  toUser_ends_with?: InputMaybe<Scalars["String"]>;
  toUser_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toUser_gt?: InputMaybe<Scalars["String"]>;
  toUser_gte?: InputMaybe<Scalars["String"]>;
  toUser_in?: InputMaybe<Array<Scalars["String"]>>;
  toUser_lt?: InputMaybe<Scalars["String"]>;
  toUser_lte?: InputMaybe<Scalars["String"]>;
  toUser_not?: InputMaybe<Scalars["String"]>;
  toUser_not_contains?: InputMaybe<Scalars["String"]>;
  toUser_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  toUser_not_ends_with?: InputMaybe<Scalars["String"]>;
  toUser_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toUser_not_in?: InputMaybe<Array<Scalars["String"]>>;
  toUser_not_starts_with?: InputMaybe<Scalars["String"]>;
  toUser_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toUser_starts_with?: InputMaybe<Scalars["String"]>;
  toUser_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum StableTokenDelegatedAllowance_OrderBy {
  AmountAllowed = "amountAllowed",
  FromUser = "fromUser",
  FromUserBorrowedReservesCount = "fromUser__borrowedReservesCount",
  FromUserId = "fromUser__id",
  FromUserIncentivesLastUpdated = "fromUser__incentivesLastUpdated",
  FromUserLifetimeRewards = "fromUser__lifetimeRewards",
  FromUserUnclaimedRewards = "fromUser__unclaimedRewards",
  Id = "id",
  ToUser = "toUser",
  ToUserBorrowedReservesCount = "toUser__borrowedReservesCount",
  ToUserId = "toUser__id",
  ToUserIncentivesLastUpdated = "toUser__incentivesLastUpdated",
  ToUserLifetimeRewards = "toUser__lifetimeRewards",
  ToUserUnclaimedRewards = "toUser__unclaimedRewards",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  atoken?: Maybe<AToken>;
  atokenBalanceHistoryItem?: Maybe<ATokenBalanceHistoryItem>;
  atokenBalanceHistoryItems: Array<ATokenBalanceHistoryItem>;
  atokens: Array<AToken>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  chainlinkENS?: Maybe<ChainlinkEns>;
  chainlinkENSs: Array<ChainlinkEns>;
  claimIncentiveCall?: Maybe<ClaimIncentiveCall>;
  claimIncentiveCalls: Array<ClaimIncentiveCall>;
  contractToPoolMapping?: Maybe<ContractToPoolMapping>;
  contractToPoolMappings: Array<ContractToPoolMapping>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  incentivesController?: Maybe<IncentivesController>;
  incentivesControllers: Array<IncentivesController>;
  incentivizedAction?: Maybe<IncentivizedAction>;
  incentivizedActions: Array<IncentivizedAction>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  mapAssetPool?: Maybe<MapAssetPool>;
  mapAssetPools: Array<MapAssetPool>;
  pool?: Maybe<Pool>;
  poolConfigurationHistoryItem?: Maybe<PoolConfigurationHistoryItem>;
  poolConfigurationHistoryItems: Array<PoolConfigurationHistoryItem>;
  pools: Array<Pool>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracles: Array<PriceOracle>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  reserve?: Maybe<Reserve>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  reserves: Array<Reserve>;
  stableDebtToken?: Maybe<StableDebtToken>;
  stableDebtTokens: Array<StableDebtToken>;
  stableTokenDelegatedAllowance?: Maybe<StableTokenDelegatedAllowance>;
  stableTokenDelegatedAllowances: Array<StableTokenDelegatedAllowance>;
  stoken?: Maybe<SToken>;
  stokenBalanceHistoryItem?: Maybe<STokenBalanceHistoryItem>;
  stokenBalanceHistoryItems: Array<STokenBalanceHistoryItem>;
  stokens: Array<SToken>;
  swap?: Maybe<Swap>;
  swapHistories: Array<SwapHistory>;
  swapHistory?: Maybe<SwapHistory>;
  swaps: Array<Swap>;
  usageAsCollateral?: Maybe<UsageAsCollateral>;
  usageAsCollaterals: Array<UsageAsCollateral>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  user?: Maybe<User>;
  userReserve?: Maybe<UserReserve>;
  userReserves: Array<UserReserve>;
  userTransaction?: Maybe<UserTransaction>;
  userTransactions: Array<UserTransaction>;
  users: Array<User>;
  variableDebtToken?: Maybe<VariableDebtToken>;
  variableDebtTokens: Array<VariableDebtToken>;
  variableTokenDelegatedAllowance?: Maybe<VariableTokenDelegatedAllowance>;
  variableTokenDelegatedAllowances: Array<VariableTokenDelegatedAllowance>;
  vtoken?: Maybe<VToken>;
  vtokenBalanceHistoryItem?: Maybe<VTokenBalanceHistoryItem>;
  vtokenBalanceHistoryItems: Array<VTokenBalanceHistoryItem>;
  vtokens: Array<VToken>;
  wethreserve?: Maybe<WethReserve>;
  wethreserves: Array<WethReserve>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtokenBalanceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtokenBalanceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ATokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ATokenBalanceHistoryItem_Filter>;
};

export type SubscriptionAtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AToken_Filter>;
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

export type SubscriptionChainlinkAggregatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionChainlinkAggregatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ChainlinkAggregator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChainlinkAggregator_Filter>;
};

export type SubscriptionChainlinkEnsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionChainlinkEnSsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ChainlinkEns_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChainlinkEns_Filter>;
};

export type SubscriptionClaimIncentiveCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClaimIncentiveCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimIncentiveCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClaimIncentiveCall_Filter>;
};

export type SubscriptionContractToPoolMappingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionContractToPoolMappingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContractToPoolMapping_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractToPoolMapping_Filter>;
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

export type SubscriptionFlashLoanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFlashLoansArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FlashLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlashLoan_Filter>;
};

export type SubscriptionIncentivesControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionIncentivesControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IncentivesController_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IncentivesController_Filter>;
};

export type SubscriptionIncentivizedActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionIncentivizedActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IncentivizedAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IncentivizedAction_Filter>;
};

export type SubscriptionLiquidationCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidationCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidationCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidationCall_Filter>;
};

export type SubscriptionMapAssetPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMapAssetPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MapAssetPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MapAssetPool_Filter>;
};

export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolConfigurationHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolConfigurationHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolConfigurationHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolConfigurationHistoryItem_Filter>;
};

export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type SubscriptionPriceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceHistoryItem_Filter>;
};

export type SubscriptionPriceOracleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceOracleAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceOracleAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracleAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceOracleAsset_Filter>;
};

export type SubscriptionPriceOraclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceOracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceOracle_Filter>;
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

export type SubscriptionRebalanceStableBorrowRateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRebalanceStableBorrowRatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceStableBorrowRate_Filter>;
};

export type SubscriptionRedeemUnderlyingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRedeemUnderlyingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RedeemUnderlying_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RedeemUnderlying_Filter>;
};

export type SubscriptionReferrerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReferrersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Referrer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Referrer_Filter>;
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

export type SubscriptionReserveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReserveConfigurationHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReserveConfigurationHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveConfigurationHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReserveConfigurationHistoryItem_Filter>;
};

export type SubscriptionReserveParamsHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReserveParamsHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveParamsHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReserveParamsHistoryItem_Filter>;
};

export type SubscriptionReservesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reserve_Filter>;
};

export type SubscriptionStableDebtTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStableDebtTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StableDebtToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StableDebtToken_Filter>;
};

export type SubscriptionStableTokenDelegatedAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStableTokenDelegatedAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StableTokenDelegatedAllowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StableTokenDelegatedAllowance_Filter>;
};

export type SubscriptionStokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStokenBalanceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStokenBalanceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<STokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<STokenBalanceHistoryItem_Filter>;
};

export type SubscriptionStokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SToken_Filter>;
};

export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSwapHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SwapHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapHistory_Filter>;
};

export type SubscriptionSwapHistoryArgs = {
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

export type SubscriptionUsageAsCollateralArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsageAsCollateralsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageAsCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsageAsCollateral_Filter>;
};

export type SubscriptionUsdEthPriceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsdEthPriceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsdEthPriceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UsdEthPriceHistoryItem_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserReserveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserReservesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserReserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserReserve_Filter>;
};

export type SubscriptionUserTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserTransaction_Filter>;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SubscriptionVariableDebtTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVariableDebtTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VariableDebtToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VariableDebtToken_Filter>;
};

export type SubscriptionVariableTokenDelegatedAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVariableTokenDelegatedAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VariableTokenDelegatedAllowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VariableTokenDelegatedAllowance_Filter>;
};

export type SubscriptionVtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVtokenBalanceHistoryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVtokenBalanceHistoryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VTokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VTokenBalanceHistoryItem_Filter>;
};

export type SubscriptionVtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VToken_Filter>;
};

export type SubscriptionWethreserveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWethreservesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WethReserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WethReserve_Filter>;
};

export type Swap = UserTransaction & {
  __typename?: "Swap";
  action: Action;
  borrowRateModeFrom: BorrowRateMode;
  borrowRateModeTo: BorrowRateMode;
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  reserve: Reserve;
  stableBorrowRate: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
  variableBorrowRate: Scalars["BigInt"];
};

export type SwapHistory = {
  __typename?: "SwapHistory";
  fromAmount: Scalars["BigInt"];
  fromAsset: Scalars["String"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  receivedAmount: Scalars["BigInt"];
  swapType: Scalars["String"];
  toAsset: Scalars["String"];
};

export type SwapHistory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapHistory_Filter>>>;
  fromAmount?: InputMaybe<Scalars["BigInt"]>;
  fromAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  fromAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  fromAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fromAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  fromAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  fromAmount_not?: InputMaybe<Scalars["BigInt"]>;
  fromAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fromAsset?: InputMaybe<Scalars["String"]>;
  fromAsset_contains?: InputMaybe<Scalars["String"]>;
  fromAsset_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromAsset_ends_with?: InputMaybe<Scalars["String"]>;
  fromAsset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromAsset_gt?: InputMaybe<Scalars["String"]>;
  fromAsset_gte?: InputMaybe<Scalars["String"]>;
  fromAsset_in?: InputMaybe<Array<Scalars["String"]>>;
  fromAsset_lt?: InputMaybe<Scalars["String"]>;
  fromAsset_lte?: InputMaybe<Scalars["String"]>;
  fromAsset_not?: InputMaybe<Scalars["String"]>;
  fromAsset_not_contains?: InputMaybe<Scalars["String"]>;
  fromAsset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  fromAsset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromAsset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  fromAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  fromAsset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromAsset_starts_with?: InputMaybe<Scalars["String"]>;
  fromAsset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<SwapHistory_Filter>>>;
  receivedAmount?: InputMaybe<Scalars["BigInt"]>;
  receivedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  receivedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  receivedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  receivedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  receivedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  receivedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  receivedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapType?: InputMaybe<Scalars["String"]>;
  swapType_contains?: InputMaybe<Scalars["String"]>;
  swapType_contains_nocase?: InputMaybe<Scalars["String"]>;
  swapType_ends_with?: InputMaybe<Scalars["String"]>;
  swapType_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  swapType_gt?: InputMaybe<Scalars["String"]>;
  swapType_gte?: InputMaybe<Scalars["String"]>;
  swapType_in?: InputMaybe<Array<Scalars["String"]>>;
  swapType_lt?: InputMaybe<Scalars["String"]>;
  swapType_lte?: InputMaybe<Scalars["String"]>;
  swapType_not?: InputMaybe<Scalars["String"]>;
  swapType_not_contains?: InputMaybe<Scalars["String"]>;
  swapType_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  swapType_not_ends_with?: InputMaybe<Scalars["String"]>;
  swapType_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  swapType_not_in?: InputMaybe<Array<Scalars["String"]>>;
  swapType_not_starts_with?: InputMaybe<Scalars["String"]>;
  swapType_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  swapType_starts_with?: InputMaybe<Scalars["String"]>;
  swapType_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toAsset?: InputMaybe<Scalars["String"]>;
  toAsset_contains?: InputMaybe<Scalars["String"]>;
  toAsset_contains_nocase?: InputMaybe<Scalars["String"]>;
  toAsset_ends_with?: InputMaybe<Scalars["String"]>;
  toAsset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toAsset_gt?: InputMaybe<Scalars["String"]>;
  toAsset_gte?: InputMaybe<Scalars["String"]>;
  toAsset_in?: InputMaybe<Array<Scalars["String"]>>;
  toAsset_lt?: InputMaybe<Scalars["String"]>;
  toAsset_lte?: InputMaybe<Scalars["String"]>;
  toAsset_not?: InputMaybe<Scalars["String"]>;
  toAsset_not_contains?: InputMaybe<Scalars["String"]>;
  toAsset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  toAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  toAsset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toAsset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  toAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  toAsset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toAsset_starts_with?: InputMaybe<Scalars["String"]>;
  toAsset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum SwapHistory_OrderBy {
  FromAmount = "fromAmount",
  FromAsset = "fromAsset",
  Id = "id",
  ReceivedAmount = "receivedAmount",
  SwapType = "swapType",
  ToAsset = "toAsset",
}

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  borrowRateModeFrom?: InputMaybe<BorrowRateMode>;
  borrowRateModeFrom_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateModeFrom_not?: InputMaybe<BorrowRateMode>;
  borrowRateModeFrom_not_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateModeTo?: InputMaybe<BorrowRateMode>;
  borrowRateModeTo_in?: InputMaybe<Array<BorrowRateMode>>;
  borrowRateModeTo_not?: InputMaybe<BorrowRateMode>;
  borrowRateModeTo_not_in?: InputMaybe<Array<BorrowRateMode>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  variableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Swap_OrderBy {
  Action = "action",
  BorrowRateModeFrom = "borrowRateModeFrom",
  BorrowRateModeTo = "borrowRateModeTo",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  StableBorrowRate = "stableBorrowRate",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
  VariableBorrowRate = "variableBorrowRate",
}

export type UsageAsCollateral = UserTransaction & {
  __typename?: "UsageAsCollateral";
  action: Action;
  fromState: Scalars["Boolean"];
  /**
   * tx hash
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  reserve: Reserve;
  timestamp: Scalars["Int"];
  toState: Scalars["Boolean"];
  txHash: Scalars["Bytes"];
  user: User;
  userReserve: UserReserve;
};

export type UsageAsCollateral_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  and?: InputMaybe<Array<InputMaybe<UsageAsCollateral_Filter>>>;
  fromState?: InputMaybe<Scalars["Boolean"]>;
  fromState_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  fromState_not?: InputMaybe<Scalars["Boolean"]>;
  fromState_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<UsageAsCollateral_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  toState?: InputMaybe<Scalars["Boolean"]>;
  toState_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  toState_not?: InputMaybe<Scalars["Boolean"]>;
  toState_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum UsageAsCollateral_OrderBy {
  Action = "action",
  FromState = "fromState",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  Timestamp = "timestamp",
  ToState = "toState",
  TxHash = "txHash",
  User = "user",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type UsdEthPriceHistoryItem = {
  __typename?: "UsdEthPriceHistoryItem";
  id: Scalars["ID"];
  oracle: PriceOracle;
  price: Scalars["BigInt"];
  timestamp: Scalars["Int"];
};

export type UsdEthPriceHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsdEthPriceHistoryItem_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<UsdEthPriceHistoryItem_Filter>>>;
  oracle?: InputMaybe<Scalars["String"]>;
  oracle_?: InputMaybe<PriceOracle_Filter>;
  oracle_contains?: InputMaybe<Scalars["String"]>;
  oracle_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracle_ends_with?: InputMaybe<Scalars["String"]>;
  oracle_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_gt?: InputMaybe<Scalars["String"]>;
  oracle_gte?: InputMaybe<Scalars["String"]>;
  oracle_in?: InputMaybe<Array<Scalars["String"]>>;
  oracle_lt?: InputMaybe<Scalars["String"]>;
  oracle_lte?: InputMaybe<Scalars["String"]>;
  oracle_not?: InputMaybe<Scalars["String"]>;
  oracle_not_contains?: InputMaybe<Scalars["String"]>;
  oracle_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracle_not_ends_with?: InputMaybe<Scalars["String"]>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_not_in?: InputMaybe<Array<Scalars["String"]>>;
  oracle_not_starts_with?: InputMaybe<Scalars["String"]>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_starts_with?: InputMaybe<Scalars["String"]>;
  oracle_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["BigInt"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]>;
  price_not?: InputMaybe<Scalars["BigInt"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum UsdEthPriceHistoryItem_OrderBy {
  Id = "id",
  Oracle = "oracle",
  OracleBaseCurrency = "oracle__baseCurrency",
  OracleBaseCurrencyUnit = "oracle__baseCurrencyUnit",
  OracleFallbackPriceOracle = "oracle__fallbackPriceOracle",
  OracleId = "oracle__id",
  OracleLastUpdateTimestamp = "oracle__lastUpdateTimestamp",
  OracleProxyPriceProvider = "oracle__proxyPriceProvider",
  OracleUsdPriceEth = "oracle__usdPriceEth",
  OracleUsdPriceEthFallbackRequired = "oracle__usdPriceEthFallbackRequired",
  OracleUsdPriceEthMainSource = "oracle__usdPriceEthMainSource",
  OracleVersion = "oracle__version",
  Price = "price",
  Timestamp = "timestamp",
}

export type User = {
  __typename?: "User";
  borrowHistory: Array<Borrow>;
  borrowedReservesCount: Scalars["Int"];
  claimIncentives: Array<ClaimIncentiveCall>;
  depositHistory: Array<Deposit>;
  /**
   * user address
   *
   */
  id: Scalars["ID"];
  incentivesLastUpdated: Scalars["Int"];
  incentivizedActions: Array<IncentivizedAction>;
  lifetimeRewards: Scalars["BigInt"];
  liquidationCallHistory: Array<LiquidationCall>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  repayHistory: Array<Repay>;
  reserves: Array<UserReserve>;
  swapHistory: Array<Swap>;
  unclaimedRewards: Scalars["BigInt"];
  usageAsCollateralHistory: Array<UsageAsCollateral>;
};

export type UserBorrowHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type UserClaimIncentivesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimIncentiveCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ClaimIncentiveCall_Filter>;
};

export type UserDepositHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type UserIncentivizedActionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IncentivizedAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<IncentivizedAction_Filter>;
};

export type UserLiquidationCallHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidationCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidationCall_Filter>;
};

export type UserRebalanceStableBorrowRateHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RebalanceStableBorrowRate_Filter>;
};

export type UserRedeemUnderlyingHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RedeemUnderlying_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RedeemUnderlying_Filter>;
};

export type UserRepayHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
};

export type UserReservesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserReserve_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserReserve_Filter>;
};

export type UserSwapHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type UserUsageAsCollateralHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageAsCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageAsCollateral_Filter>;
};

export type UserReserve = {
  __typename?: "UserReserve";
  aIncentivesLastUpdateTimestamp: Scalars["Int"];
  aTokenBalanceHistory: Array<ATokenBalanceHistoryItem>;
  aTokenincentivesUserIndex: Scalars["BigInt"];
  borrowHistory: Array<Borrow>;
  currentATokenBalance: Scalars["BigInt"];
  currentStableDebt: Scalars["BigInt"];
  currentTotalDebt: Scalars["BigInt"];
  currentVariableDebt: Scalars["BigInt"];
  depositHistory: Array<Deposit>;
  /**
   * user address + reserve address
   *
   */
  id: Scalars["ID"];
  /**
   * Amount in currency units included as fee
   *
   */
  lastUpdateTimestamp: Scalars["Int"];
  liquidationCallHistory: Array<LiquidationCall>;
  liquidityRate: Scalars["BigInt"];
  oldStableBorrowRate: Scalars["BigInt"];
  pool: Pool;
  principalStableDebt: Scalars["BigInt"];
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  repayHistory: Array<Repay>;
  reserve: Reserve;
  sIncentivesLastUpdateTimestamp: Scalars["Int"];
  sTokenBalanceHistory: Array<STokenBalanceHistoryItem>;
  sTokenincentivesUserIndex: Scalars["BigInt"];
  scaledATokenBalance: Scalars["BigInt"];
  scaledVariableDebt: Scalars["BigInt"];
  stableBorrowLastUpdateTimestamp: Scalars["Int"];
  stableBorrowRate: Scalars["BigInt"];
  stableTokenDelegatedAllowances: Array<StableTokenDelegatedAllowance>;
  swapHistory: Array<Swap>;
  usageAsCollateralEnabledOnUser: Scalars["Boolean"];
  usageAsCollateralHistory: Array<UsageAsCollateral>;
  user: User;
  vIncentivesLastUpdateTimestamp: Scalars["Int"];
  vTokenBalanceHistory: Array<VTokenBalanceHistoryItem>;
  vTokenincentivesUserIndex: Scalars["BigInt"];
  variableBorrowIndex: Scalars["BigInt"];
  variableTokenDelegatedAllowances: Array<VariableTokenDelegatedAllowance>;
};

export type UserReserveATokenBalanceHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ATokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ATokenBalanceHistoryItem_Filter>;
};

export type UserReserveBorrowHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Borrow_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Borrow_Filter>;
};

export type UserReserveDepositHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type UserReserveLiquidationCallHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidationCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LiquidationCall_Filter>;
};

export type UserReserveRebalanceStableBorrowRateHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RebalanceStableBorrowRate_Filter>;
};

export type UserReserveRedeemUnderlyingHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RedeemUnderlying_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RedeemUnderlying_Filter>;
};

export type UserReserveRepayHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repay_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Repay_Filter>;
};

export type UserReserveSTokenBalanceHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<STokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<STokenBalanceHistoryItem_Filter>;
};

export type UserReserveStableTokenDelegatedAllowancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StableTokenDelegatedAllowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<StableTokenDelegatedAllowance_Filter>;
};

export type UserReserveSwapHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type UserReserveUsageAsCollateralHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsageAsCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UsageAsCollateral_Filter>;
};

export type UserReserveVTokenBalanceHistoryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VTokenBalanceHistoryItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VTokenBalanceHistoryItem_Filter>;
};

export type UserReserveVariableTokenDelegatedAllowancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VariableTokenDelegatedAllowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VariableTokenDelegatedAllowance_Filter>;
};

export type UserReserve_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aIncentivesLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  aIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  aIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  aTokenBalanceHistory_?: InputMaybe<ATokenBalanceHistoryItem_Filter>;
  aTokenincentivesUserIndex?: InputMaybe<Scalars["BigInt"]>;
  aTokenincentivesUserIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  aTokenincentivesUserIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  aTokenincentivesUserIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  aTokenincentivesUserIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  aTokenincentivesUserIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  aTokenincentivesUserIndex_not?: InputMaybe<Scalars["BigInt"]>;
  aTokenincentivesUserIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<UserReserve_Filter>>>;
  borrowHistory_?: InputMaybe<Borrow_Filter>;
  currentATokenBalance?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentATokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  currentATokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentStableDebt?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  currentStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentTotalDebt?: InputMaybe<Scalars["BigInt"]>;
  currentTotalDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  currentTotalDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  currentTotalDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentTotalDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  currentTotalDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  currentTotalDebt_not?: InputMaybe<Scalars["BigInt"]>;
  currentTotalDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositHistory_?: InputMaybe<Deposit_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_Filter>;
  liquidityRate?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityRate_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldStableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  oldStableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  oldStableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  oldStableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldStableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  oldStableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  oldStableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  oldStableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<UserReserve_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  principalStableDebt?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalStableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  principalStableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_Filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_Filter>;
  repayHistory_?: InputMaybe<Repay_Filter>;
  reserve?: InputMaybe<Scalars["String"]>;
  reserve_?: InputMaybe<Reserve_Filter>;
  reserve_contains?: InputMaybe<Scalars["String"]>;
  reserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_gt?: InputMaybe<Scalars["String"]>;
  reserve_gte?: InputMaybe<Scalars["String"]>;
  reserve_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_lt?: InputMaybe<Scalars["String"]>;
  reserve_lte?: InputMaybe<Scalars["String"]>;
  reserve_not?: InputMaybe<Scalars["String"]>;
  reserve_not_contains?: InputMaybe<Scalars["String"]>;
  reserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserve_starts_with?: InputMaybe<Scalars["String"]>;
  reserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sIncentivesLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  sIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  sIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  sTokenBalanceHistory_?: InputMaybe<STokenBalanceHistoryItem_Filter>;
  sTokenincentivesUserIndex?: InputMaybe<Scalars["BigInt"]>;
  sTokenincentivesUserIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  sTokenincentivesUserIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  sTokenincentivesUserIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sTokenincentivesUserIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  sTokenincentivesUserIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  sTokenincentivesUserIndex_not?: InputMaybe<Scalars["BigInt"]>;
  sTokenincentivesUserIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  scaledATokenBalance?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  scaledATokenBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_not?: InputMaybe<Scalars["BigInt"]>;
  scaledATokenBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  scaledVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  scaledVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableBorrowLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  stableBorrowLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  stableBorrowLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  stableBorrowLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  stableBorrowLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  stableBorrowLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  stableBorrowLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  stableBorrowLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  stableBorrowRate?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_gte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableBorrowRate_lt?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_lte?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not?: InputMaybe<Scalars["BigInt"]>;
  stableBorrowRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stableTokenDelegatedAllowances_?: InputMaybe<StableTokenDelegatedAllowance_Filter>;
  swapHistory_?: InputMaybe<Swap_Filter>;
  usageAsCollateralEnabledOnUser?: InputMaybe<Scalars["Boolean"]>;
  usageAsCollateralEnabledOnUser_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usageAsCollateralEnabledOnUser_not?: InputMaybe<Scalars["Boolean"]>;
  usageAsCollateralEnabledOnUser_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_Filter>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vIncentivesLastUpdateTimestamp?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  vIncentivesLastUpdateTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_not?: InputMaybe<Scalars["Int"]>;
  vIncentivesLastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vTokenBalanceHistory_?: InputMaybe<VTokenBalanceHistoryItem_Filter>;
  vTokenincentivesUserIndex?: InputMaybe<Scalars["BigInt"]>;
  vTokenincentivesUserIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  vTokenincentivesUserIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  vTokenincentivesUserIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vTokenincentivesUserIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  vTokenincentivesUserIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  vTokenincentivesUserIndex_not?: InputMaybe<Scalars["BigInt"]>;
  vTokenincentivesUserIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowIndex?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableBorrowIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_not?: InputMaybe<Scalars["BigInt"]>;
  variableBorrowIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  variableTokenDelegatedAllowances_?: InputMaybe<VariableTokenDelegatedAllowance_Filter>;
};

export enum UserReserve_OrderBy {
  AIncentivesLastUpdateTimestamp = "aIncentivesLastUpdateTimestamp",
  ATokenBalanceHistory = "aTokenBalanceHistory",
  ATokenincentivesUserIndex = "aTokenincentivesUserIndex",
  BorrowHistory = "borrowHistory",
  CurrentATokenBalance = "currentATokenBalance",
  CurrentStableDebt = "currentStableDebt",
  CurrentTotalDebt = "currentTotalDebt",
  CurrentVariableDebt = "currentVariableDebt",
  DepositHistory = "depositHistory",
  Id = "id",
  LastUpdateTimestamp = "lastUpdateTimestamp",
  LiquidationCallHistory = "liquidationCallHistory",
  LiquidityRate = "liquidityRate",
  OldStableBorrowRate = "oldStableBorrowRate",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  PrincipalStableDebt = "principalStableDebt",
  RebalanceStableBorrowRateHistory = "rebalanceStableBorrowRateHistory",
  RedeemUnderlyingHistory = "redeemUnderlyingHistory",
  RepayHistory = "repayHistory",
  Reserve = "reserve",
  ReserveAEmissionPerSecond = "reserve__aEmissionPerSecond",
  ReserveAIncentivesLastUpdateTimestamp = "reserve__aIncentivesLastUpdateTimestamp",
  ReserveATokenIncentivesIndex = "reserve__aTokenIncentivesIndex",
  ReserveAvailableLiquidity = "reserve__availableLiquidity",
  ReserveAverageStableRate = "reserve__averageStableRate",
  ReserveBaseLtVasCollateral = "reserve__baseLTVasCollateral",
  ReserveBaseVariableBorrowRate = "reserve__baseVariableBorrowRate",
  ReserveBorrowingEnabled = "reserve__borrowingEnabled",
  ReserveDecimals = "reserve__decimals",
  ReserveId = "reserve__id",
  ReserveIsActive = "reserve__isActive",
  ReserveIsFrozen = "reserve__isFrozen",
  ReserveLastUpdateTimestamp = "reserve__lastUpdateTimestamp",
  ReserveLifetimeBorrows = "reserve__lifetimeBorrows",
  ReserveLifetimeCurrentVariableDebt = "reserve__lifetimeCurrentVariableDebt",
  ReserveLifetimeDepositorsInterestEarned = "reserve__lifetimeDepositorsInterestEarned",
  ReserveLifetimeFlashLoanPremium = "reserve__lifetimeFlashLoanPremium",
  ReserveLifetimeFlashLoans = "reserve__lifetimeFlashLoans",
  ReserveLifetimeLiquidated = "reserve__lifetimeLiquidated",
  ReserveLifetimeLiquidity = "reserve__lifetimeLiquidity",
  ReserveLifetimePrincipalStableDebt = "reserve__lifetimePrincipalStableDebt",
  ReserveLifetimeRepayments = "reserve__lifetimeRepayments",
  ReserveLifetimeReserveFactorAccrued = "reserve__lifetimeReserveFactorAccrued",
  ReserveLifetimeScaledVariableDebt = "reserve__lifetimeScaledVariableDebt",
  ReserveLifetimeWithdrawals = "reserve__lifetimeWithdrawals",
  ReserveLiquidityIndex = "reserve__liquidityIndex",
  ReserveLiquidityRate = "reserve__liquidityRate",
  ReserveName = "reserve__name",
  ReserveOptimalUtilisationRate = "reserve__optimalUtilisationRate",
  ReserveReserveFactor = "reserve__reserveFactor",
  ReserveReserveInterestRateStrategy = "reserve__reserveInterestRateStrategy",
  ReserveReserveLiquidationBonus = "reserve__reserveLiquidationBonus",
  ReserveReserveLiquidationThreshold = "reserve__reserveLiquidationThreshold",
  ReserveSEmissionPerSecond = "reserve__sEmissionPerSecond",
  ReserveSIncentivesLastUpdateTimestamp = "reserve__sIncentivesLastUpdateTimestamp",
  ReserveSTokenIncentivesIndex = "reserve__sTokenIncentivesIndex",
  ReserveStableBorrowRate = "reserve__stableBorrowRate",
  ReserveStableBorrowRateEnabled = "reserve__stableBorrowRateEnabled",
  ReserveStableDebtLastUpdateTimestamp = "reserve__stableDebtLastUpdateTimestamp",
  ReserveStableRateSlope1 = "reserve__stableRateSlope1",
  ReserveStableRateSlope2 = "reserve__stableRateSlope2",
  ReserveSymbol = "reserve__symbol",
  ReserveTotalATokenSupply = "reserve__totalATokenSupply",
  ReserveTotalCurrentVariableDebt = "reserve__totalCurrentVariableDebt",
  ReserveTotalDeposits = "reserve__totalDeposits",
  ReserveTotalLiquidity = "reserve__totalLiquidity",
  ReserveTotalLiquidityAsCollateral = "reserve__totalLiquidityAsCollateral",
  ReserveTotalPrincipalStableDebt = "reserve__totalPrincipalStableDebt",
  ReserveTotalScaledVariableDebt = "reserve__totalScaledVariableDebt",
  ReserveUnderlyingAsset = "reserve__underlyingAsset",
  ReserveUsageAsCollateralEnabled = "reserve__usageAsCollateralEnabled",
  ReserveUtilizationRate = "reserve__utilizationRate",
  ReserveVEmissionPerSecond = "reserve__vEmissionPerSecond",
  ReserveVIncentivesLastUpdateTimestamp = "reserve__vIncentivesLastUpdateTimestamp",
  ReserveVTokenIncentivesIndex = "reserve__vTokenIncentivesIndex",
  ReserveVariableBorrowIndex = "reserve__variableBorrowIndex",
  ReserveVariableBorrowRate = "reserve__variableBorrowRate",
  ReserveVariableRateSlope1 = "reserve__variableRateSlope1",
  ReserveVariableRateSlope2 = "reserve__variableRateSlope2",
  SIncentivesLastUpdateTimestamp = "sIncentivesLastUpdateTimestamp",
  STokenBalanceHistory = "sTokenBalanceHistory",
  STokenincentivesUserIndex = "sTokenincentivesUserIndex",
  ScaledATokenBalance = "scaledATokenBalance",
  ScaledVariableDebt = "scaledVariableDebt",
  StableBorrowLastUpdateTimestamp = "stableBorrowLastUpdateTimestamp",
  StableBorrowRate = "stableBorrowRate",
  StableTokenDelegatedAllowances = "stableTokenDelegatedAllowances",
  SwapHistory = "swapHistory",
  UsageAsCollateralEnabledOnUser = "usageAsCollateralEnabledOnUser",
  UsageAsCollateralHistory = "usageAsCollateralHistory",
  User = "user",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
  VIncentivesLastUpdateTimestamp = "vIncentivesLastUpdateTimestamp",
  VTokenBalanceHistory = "vTokenBalanceHistory",
  VTokenincentivesUserIndex = "vTokenincentivesUserIndex",
  VariableBorrowIndex = "variableBorrowIndex",
  VariableTokenDelegatedAllowances = "variableTokenDelegatedAllowances",
}

export type UserTransaction = {
  action: Action;
  id: Scalars["ID"];
  pool: Pool;
  timestamp: Scalars["Int"];
  txHash: Scalars["Bytes"];
  user: User;
};

export type UserTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Action>;
  action_in?: InputMaybe<Array<Action>>;
  action_not?: InputMaybe<Action>;
  action_not_in?: InputMaybe<Array<Action>>;
  and?: InputMaybe<Array<InputMaybe<UserTransaction_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<UserTransaction_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_gt?: InputMaybe<Scalars["Bytes"]>;
  txHash_gte?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_lt?: InputMaybe<Scalars["Bytes"]>;
  txHash_lte?: InputMaybe<Scalars["Bytes"]>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum UserTransaction_OrderBy {
  Action = "action",
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  Timestamp = "timestamp",
  TxHash = "txHash",
  User = "user",
  UserBorrowedReservesCount = "user__borrowedReservesCount",
  UserId = "user__id",
  UserIncentivesLastUpdated = "user__incentivesLastUpdated",
  UserLifetimeRewards = "user__lifetimeRewards",
  UserUnclaimedRewards = "user__unclaimedRewards",
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  borrowHistory_?: InputMaybe<Borrow_Filter>;
  borrowedReservesCount?: InputMaybe<Scalars["Int"]>;
  borrowedReservesCount_gt?: InputMaybe<Scalars["Int"]>;
  borrowedReservesCount_gte?: InputMaybe<Scalars["Int"]>;
  borrowedReservesCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  borrowedReservesCount_lt?: InputMaybe<Scalars["Int"]>;
  borrowedReservesCount_lte?: InputMaybe<Scalars["Int"]>;
  borrowedReservesCount_not?: InputMaybe<Scalars["Int"]>;
  borrowedReservesCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  claimIncentives_?: InputMaybe<ClaimIncentiveCall_Filter>;
  depositHistory_?: InputMaybe<Deposit_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  incentivesLastUpdated?: InputMaybe<Scalars["Int"]>;
  incentivesLastUpdated_gt?: InputMaybe<Scalars["Int"]>;
  incentivesLastUpdated_gte?: InputMaybe<Scalars["Int"]>;
  incentivesLastUpdated_in?: InputMaybe<Array<Scalars["Int"]>>;
  incentivesLastUpdated_lt?: InputMaybe<Scalars["Int"]>;
  incentivesLastUpdated_lte?: InputMaybe<Scalars["Int"]>;
  incentivesLastUpdated_not?: InputMaybe<Scalars["Int"]>;
  incentivesLastUpdated_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  incentivizedActions_?: InputMaybe<IncentivizedAction_Filter>;
  lifetimeRewards?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRewards_gt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRewards_gte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lifetimeRewards_lt?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRewards_lte?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRewards_not?: InputMaybe<Scalars["BigInt"]>;
  lifetimeRewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationCallHistory_?: InputMaybe<LiquidationCall_Filter>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  rebalanceStableBorrowRateHistory_?: InputMaybe<RebalanceStableBorrowRate_Filter>;
  redeemUnderlyingHistory_?: InputMaybe<RedeemUnderlying_Filter>;
  repayHistory_?: InputMaybe<Repay_Filter>;
  reserves_?: InputMaybe<UserReserve_Filter>;
  swapHistory_?: InputMaybe<Swap_Filter>;
  unclaimedRewards?: InputMaybe<Scalars["BigInt"]>;
  unclaimedRewards_gt?: InputMaybe<Scalars["BigInt"]>;
  unclaimedRewards_gte?: InputMaybe<Scalars["BigInt"]>;
  unclaimedRewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  unclaimedRewards_lt?: InputMaybe<Scalars["BigInt"]>;
  unclaimedRewards_lte?: InputMaybe<Scalars["BigInt"]>;
  unclaimedRewards_not?: InputMaybe<Scalars["BigInt"]>;
  unclaimedRewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  usageAsCollateralHistory_?: InputMaybe<UsageAsCollateral_Filter>;
};

export enum User_OrderBy {
  BorrowHistory = "borrowHistory",
  BorrowedReservesCount = "borrowedReservesCount",
  ClaimIncentives = "claimIncentives",
  DepositHistory = "depositHistory",
  Id = "id",
  IncentivesLastUpdated = "incentivesLastUpdated",
  IncentivizedActions = "incentivizedActions",
  LifetimeRewards = "lifetimeRewards",
  LiquidationCallHistory = "liquidationCallHistory",
  RebalanceStableBorrowRateHistory = "rebalanceStableBorrowRateHistory",
  RedeemUnderlyingHistory = "redeemUnderlyingHistory",
  RepayHistory = "repayHistory",
  Reserves = "reserves",
  SwapHistory = "swapHistory",
  UnclaimedRewards = "unclaimedRewards",
  UsageAsCollateralHistory = "usageAsCollateralHistory",
}

export type VToken = {
  __typename?: "VToken";
  /**
   * VToken address
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  tokenContractImpl: Scalars["Bytes"];
  underlyingAssetAddress: Scalars["Bytes"];
  underlyingAssetDecimals: Scalars["Int"];
};

export type VTokenBalanceHistoryItem = {
  __typename?: "VTokenBalanceHistoryItem";
  currentVariableDebt: Scalars["BigInt"];
  /**
   * userReserve + txHash
   *
   */
  id: Scalars["ID"];
  index: Scalars["BigInt"];
  scaledVariableDebt: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  userReserve: UserReserve;
};

export type VTokenBalanceHistoryItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VTokenBalanceHistoryItem_Filter>>>;
  currentVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  currentVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<VTokenBalanceHistoryItem_Filter>>>;
  scaledVariableDebt?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  scaledVariableDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_not?: InputMaybe<Scalars["BigInt"]>;
  scaledVariableDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum VTokenBalanceHistoryItem_OrderBy {
  CurrentVariableDebt = "currentVariableDebt",
  Id = "id",
  Index = "index",
  ScaledVariableDebt = "scaledVariableDebt",
  Timestamp = "timestamp",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
}

export type VToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VToken_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<VToken_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  tokenContractImpl?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_gt?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_gte?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenContractImpl_lt?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_lte?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenContractImpl_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetDecimals?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum VToken_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  TokenContractImpl = "tokenContractImpl",
  UnderlyingAssetAddress = "underlyingAssetAddress",
  UnderlyingAssetDecimals = "underlyingAssetDecimals",
}

export type VariableDebtToken = {
  __typename?: "VariableDebtToken";
  /**
   * VariableDebtToken address
   *
   */
  id: Scalars["ID"];
  pool: Pool;
  underlyingAssetAddress: Scalars["Bytes"];
  underlyingAssetDecimals: Scalars["Int"];
};

export type VariableDebtToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VariableDebtToken_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<VariableDebtToken_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
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
  underlyingAssetAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingAssetAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingAssetDecimals?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_gte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  underlyingAssetDecimals_lt?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_lte?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not?: InputMaybe<Scalars["Int"]>;
  underlyingAssetDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum VariableDebtToken_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolActive = "pool__active",
  PoolConfigurationAdmin = "pool__configurationAdmin",
  PoolEmergencyAdmin = "pool__emergencyAdmin",
  PoolEthereumAddress = "pool__ethereumAddress",
  PoolId = "pool__id",
  PoolLastUpdateTimestamp = "pool__lastUpdateTimestamp",
  PoolLendingPool = "pool__lendingPool",
  PoolLendingPoolCollateralManager = "pool__lendingPoolCollateralManager",
  PoolLendingPoolConfigurator = "pool__lendingPoolConfigurator",
  PoolLendingPoolConfiguratorImpl = "pool__lendingPoolConfiguratorImpl",
  PoolLendingPoolImpl = "pool__lendingPoolImpl",
  PoolLendingRateOracle = "pool__lendingRateOracle",
  PoolPaused = "pool__paused",
  PoolProxyPriceProvider = "pool__proxyPriceProvider",
  UnderlyingAssetAddress = "underlyingAssetAddress",
  UnderlyingAssetDecimals = "underlyingAssetDecimals",
}

export type VariableTokenDelegatedAllowance = {
  __typename?: "VariableTokenDelegatedAllowance";
  amountAllowed: Scalars["BigInt"];
  fromUser: User;
  /**
   * variable + fromuser address + touser address+ reserve address
   *
   */
  id: Scalars["ID"];
  toUser: User;
  userReserve: UserReserve;
};

export type VariableTokenDelegatedAllowance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountAllowed?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_gt?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_gte?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amountAllowed_lt?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_lte?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_not?: InputMaybe<Scalars["BigInt"]>;
  amountAllowed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<VariableTokenDelegatedAllowance_Filter>>>;
  fromUser?: InputMaybe<Scalars["String"]>;
  fromUser_?: InputMaybe<User_Filter>;
  fromUser_contains?: InputMaybe<Scalars["String"]>;
  fromUser_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_ends_with?: InputMaybe<Scalars["String"]>;
  fromUser_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_gt?: InputMaybe<Scalars["String"]>;
  fromUser_gte?: InputMaybe<Scalars["String"]>;
  fromUser_in?: InputMaybe<Array<Scalars["String"]>>;
  fromUser_lt?: InputMaybe<Scalars["String"]>;
  fromUser_lte?: InputMaybe<Scalars["String"]>;
  fromUser_not?: InputMaybe<Scalars["String"]>;
  fromUser_not_contains?: InputMaybe<Scalars["String"]>;
  fromUser_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_not_ends_with?: InputMaybe<Scalars["String"]>;
  fromUser_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_not_in?: InputMaybe<Array<Scalars["String"]>>;
  fromUser_not_starts_with?: InputMaybe<Scalars["String"]>;
  fromUser_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromUser_starts_with?: InputMaybe<Scalars["String"]>;
  fromUser_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<VariableTokenDelegatedAllowance_Filter>>>;
  toUser?: InputMaybe<Scalars["String"]>;
  toUser_?: InputMaybe<User_Filter>;
  toUser_contains?: InputMaybe<Scalars["String"]>;
  toUser_contains_nocase?: InputMaybe<Scalars["String"]>;
  toUser_ends_with?: InputMaybe<Scalars["String"]>;
  toUser_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toUser_gt?: InputMaybe<Scalars["String"]>;
  toUser_gte?: InputMaybe<Scalars["String"]>;
  toUser_in?: InputMaybe<Array<Scalars["String"]>>;
  toUser_lt?: InputMaybe<Scalars["String"]>;
  toUser_lte?: InputMaybe<Scalars["String"]>;
  toUser_not?: InputMaybe<Scalars["String"]>;
  toUser_not_contains?: InputMaybe<Scalars["String"]>;
  toUser_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  toUser_not_ends_with?: InputMaybe<Scalars["String"]>;
  toUser_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  toUser_not_in?: InputMaybe<Array<Scalars["String"]>>;
  toUser_not_starts_with?: InputMaybe<Scalars["String"]>;
  toUser_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  toUser_starts_with?: InputMaybe<Scalars["String"]>;
  toUser_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve?: InputMaybe<Scalars["String"]>;
  userReserve_?: InputMaybe<UserReserve_Filter>;
  userReserve_contains?: InputMaybe<Scalars["String"]>;
  userReserve_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_gt?: InputMaybe<Scalars["String"]>;
  userReserve_gte?: InputMaybe<Scalars["String"]>;
  userReserve_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_lt?: InputMaybe<Scalars["String"]>;
  userReserve_lte?: InputMaybe<Scalars["String"]>;
  userReserve_not?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains?: InputMaybe<Scalars["String"]>;
  userReserve_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userReserve_not_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with?: InputMaybe<Scalars["String"]>;
  userReserve_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum VariableTokenDelegatedAllowance_OrderBy {
  AmountAllowed = "amountAllowed",
  FromUser = "fromUser",
  FromUserBorrowedReservesCount = "fromUser__borrowedReservesCount",
  FromUserId = "fromUser__id",
  FromUserIncentivesLastUpdated = "fromUser__incentivesLastUpdated",
  FromUserLifetimeRewards = "fromUser__lifetimeRewards",
  FromUserUnclaimedRewards = "fromUser__unclaimedRewards",
  Id = "id",
  ToUser = "toUser",
  ToUserBorrowedReservesCount = "toUser__borrowedReservesCount",
  ToUserId = "toUser__id",
  ToUserIncentivesLastUpdated = "toUser__incentivesLastUpdated",
  ToUserLifetimeRewards = "toUser__lifetimeRewards",
  ToUserUnclaimedRewards = "toUser__unclaimedRewards",
  UserReserve = "userReserve",
  UserReserveAIncentivesLastUpdateTimestamp = "userReserve__aIncentivesLastUpdateTimestamp",
  UserReserveATokenincentivesUserIndex = "userReserve__aTokenincentivesUserIndex",
  UserReserveCurrentATokenBalance = "userReserve__currentATokenBalance",
  UserReserveCurrentStableDebt = "userReserve__currentStableDebt",
  UserReserveCurrentTotalDebt = "userReserve__currentTotalDebt",
  UserReserveCurrentVariableDebt = "userReserve__currentVariableDebt",
  UserReserveId = "userReserve__id",
  UserReserveLastUpdateTimestamp = "userReserve__lastUpdateTimestamp",
  UserReserveLiquidityRate = "userReserve__liquidityRate",
  UserReserveOldStableBorrowRate = "userReserve__oldStableBorrowRate",
  UserReservePrincipalStableDebt = "userReserve__principalStableDebt",
  UserReserveSIncentivesLastUpdateTimestamp = "userReserve__sIncentivesLastUpdateTimestamp",
  UserReserveSTokenincentivesUserIndex = "userReserve__sTokenincentivesUserIndex",
  UserReserveScaledATokenBalance = "userReserve__scaledATokenBalance",
  UserReserveScaledVariableDebt = "userReserve__scaledVariableDebt",
  UserReserveStableBorrowLastUpdateTimestamp = "userReserve__stableBorrowLastUpdateTimestamp",
  UserReserveStableBorrowRate = "userReserve__stableBorrowRate",
  UserReserveUsageAsCollateralEnabledOnUser = "userReserve__usageAsCollateralEnabledOnUser",
  UserReserveVIncentivesLastUpdateTimestamp = "userReserve__vIncentivesLastUpdateTimestamp",
  UserReserveVTokenincentivesUserIndex = "userReserve__vTokenincentivesUserIndex",
  UserReserveVariableBorrowIndex = "userReserve__variableBorrowIndex",
}

export type WethReserve = {
  __typename?: "WETHReserve";
  address: Scalars["Bytes"];
  decimals: Scalars["Int"];
  /**
   * weth address
   *
   */
  id: Scalars["ID"];
  name: Scalars["String"];
  symbol: Scalars["String"];
  updatedBlockNumber: Scalars["BigInt"];
  updatedTimestamp: Scalars["Int"];
};

export type WethReserve_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<WethReserve_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<WethReserve_Filter>>>;
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
  updatedBlockNumber?: InputMaybe<Scalars["BigInt"]>;
  updatedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  updatedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  updatedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  updatedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  updatedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  updatedBlockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  updatedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  updatedTimestamp?: InputMaybe<Scalars["Int"]>;
  updatedTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  updatedTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  updatedTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  updatedTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  updatedTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  updatedTimestamp_not?: InputMaybe<Scalars["Int"]>;
  updatedTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum WethReserve_OrderBy {
  Address = "address",
  Decimals = "decimals",
  Id = "id",
  Name = "name",
  Symbol = "symbol",
  UpdatedBlockNumber = "updatedBlockNumber",
  UpdatedTimestamp = "updatedTimestamp",
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
    amount: any;
    action: Action;
    txHash: any;
    user: { __typename?: "User"; id: string };
    reserve: {
      __typename?: "Reserve";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      aToken: {
        __typename?: "AToken";
        id: string;
        underlyingAssetAddress: any;
        underlyingAssetDecimals: number;
      };
    };
  }>;
};

export type RedeemUnderlyingQueryVariables = Exact<{
  user?: InputMaybe<Scalars["String"]>;
}>;

export type RedeemUnderlyingQuery = {
  __typename?: "Query";
  redeemUnderlyings: Array<{
    __typename?: "RedeemUnderlying";
    id: string;
    action: Action;
    amount: any;
    assetPriceUSD: any;
    txHash: any;
    user: { __typename?: "User"; id: string };
    reserve: {
      __typename?: "Reserve";
      symbol: string;
      name: string;
      decimals: number;
      aToken: {
        __typename?: "AToken";
        id: string;
        underlyingAssetAddress: any;
        underlyingAssetDecimals: number;
      };
    };
  }>;
};

export const DepositsDocument = `
    query deposits($user: String) {
  deposits(orderBy: id, where: {user: $user}) {
    id
    amount
    action
    txHash
    user {
      id
    }
    reserve {
      id
      symbol
      name
      decimals
      aToken {
        id
        underlyingAssetAddress
        underlyingAssetDecimals
      }
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
export const RedeemUnderlyingDocument = `
    query redeemUnderlying($user: String) {
  redeemUnderlyings(orderBy: id, where: {user: $user}) {
    id
    action
    amount
    assetPriceUSD
    txHash
    user {
      id
    }
    reserve {
      symbol
      name
      decimals
      aToken {
        id
        underlyingAssetAddress
        underlyingAssetDecimals
      }
    }
  }
}
    `;
export const useRedeemUnderlyingQuery = <
  TData = RedeemUnderlyingQuery,
  TError = unknown
>(
  variables?: RedeemUnderlyingQueryVariables,
  options?: UseQueryOptions<RedeemUnderlyingQuery, TError, TData>
) =>
  useQuery<RedeemUnderlyingQuery, TError, TData>(
    variables === undefined
      ? ["redeemUnderlying"]
      : ["redeemUnderlying", variables],
    fetcher<RedeemUnderlyingQuery, RedeemUnderlyingQueryVariables>(
      RedeemUnderlyingDocument,
      variables
    ),
    options
  );

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    UserTransaction: [
      "Borrow",
      "Deposit",
      "LiquidationCall",
      "RebalanceStableBorrowRate",
      "RedeemUnderlying",
      "Repay",
      "Swap",
      "UsageAsCollateral",
    ],
  },
};
export default result;
