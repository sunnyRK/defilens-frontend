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

export type BadDebtSettled = {
  __typename?: "BadDebtSettled";
  /** bad debt amount */
  amount: Scalars["BigDecimal"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** caller */
  caller: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader */
  trader: Scalars["Bytes"];
};

export type BadDebtSettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["Bytes"]>;
  caller_contains?: InputMaybe<Scalars["Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  caller_not?: InputMaybe<Scalars["Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["Bytes"]>;
  caller_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum BadDebtSettled_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Caller = "caller",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type CollateralAdded = {
  __typename?: "CollateralAdded";
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** collateral ratio */
  collateralRatio: Scalars["BigDecimal"];
  /** deposit cap */
  depositCap: Scalars["BigDecimal"];
  /** discount ratio */
  discountRatio: Scalars["BigDecimal"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** priceFeed address */
  priceFeed: Scalars["Bytes"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** collateral token address */
  token: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type CollateralAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralRatio?: InputMaybe<Scalars["BigDecimal"]>;
  collateralRatio_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralRatio_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralRatio_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralRatio_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralRatio_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralRatio_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateralRatio_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  depositCap?: InputMaybe<Scalars["BigDecimal"]>;
  depositCap_gt?: InputMaybe<Scalars["BigDecimal"]>;
  depositCap_gte?: InputMaybe<Scalars["BigDecimal"]>;
  depositCap_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  depositCap_lt?: InputMaybe<Scalars["BigDecimal"]>;
  depositCap_lte?: InputMaybe<Scalars["BigDecimal"]>;
  depositCap_not?: InputMaybe<Scalars["BigDecimal"]>;
  depositCap_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  discountRatio?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_gt?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_gte?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  discountRatio_lt?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_lte?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_not?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  priceFeed?: InputMaybe<Scalars["Bytes"]>;
  priceFeed_contains?: InputMaybe<Scalars["Bytes"]>;
  priceFeed_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  priceFeed_not?: InputMaybe<Scalars["Bytes"]>;
  priceFeed_not_contains?: InputMaybe<Scalars["Bytes"]>;
  priceFeed_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["Bytes"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  token_not?: InputMaybe<Scalars["Bytes"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum CollateralAdded_OrderBy {
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  CollateralRatio = "collateralRatio",
  DepositCap = "depositCap",
  DiscountRatio = "discountRatio",
  Id = "id",
  PriceFeed = "priceFeed",
  Timestamp = "timestamp",
  Token = "token",
  TxHash = "txHash",
}

export type CollateralLiquidated = {
  __typename?: "CollateralLiquidated";
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** amount of collateral token liquidated */
  collateral: Scalars["BigDecimal"];
  /** collateralToken address */
  collateralToken: Scalars["Bytes"];
  /** discount ratio */
  discountRatio: Scalars["BigDecimal"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** insuranceFund fee */
  insuranceFundFee: Scalars["BigDecimal"];
  /** liquidator address */
  liquidator: Scalars["Bytes"];
  /** repaidSettlementWithoutInsuranceFundFee */
  repaidSettlementWithoutInsuranceFundFee: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type CollateralLiquidated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateral?: InputMaybe<Scalars["BigDecimal"]>;
  collateralToken?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_not?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateral_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateral_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  discountRatio?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_gt?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_gte?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  discountRatio_lt?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_lte?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_not?: InputMaybe<Scalars["BigDecimal"]>;
  discountRatio_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  insuranceFundFee?: InputMaybe<Scalars["BigDecimal"]>;
  insuranceFundFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  insuranceFundFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  insuranceFundFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  insuranceFundFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  insuranceFundFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  insuranceFundFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  insuranceFundFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidator?: InputMaybe<Scalars["Bytes"]>;
  liquidator_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidator_not?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  repaidSettlementWithoutInsuranceFundFee?: InputMaybe<Scalars["BigDecimal"]>;
  repaidSettlementWithoutInsuranceFundFee_gt?: InputMaybe<
    Scalars["BigDecimal"]
  >;
  repaidSettlementWithoutInsuranceFundFee_gte?: InputMaybe<
    Scalars["BigDecimal"]
  >;
  repaidSettlementWithoutInsuranceFundFee_in?: InputMaybe<
    Array<Scalars["BigDecimal"]>
  >;
  repaidSettlementWithoutInsuranceFundFee_lt?: InputMaybe<
    Scalars["BigDecimal"]
  >;
  repaidSettlementWithoutInsuranceFundFee_lte?: InputMaybe<
    Scalars["BigDecimal"]
  >;
  repaidSettlementWithoutInsuranceFundFee_not?: InputMaybe<
    Scalars["BigDecimal"]
  >;
  repaidSettlementWithoutInsuranceFundFee_not_in?: InputMaybe<
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
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum CollateralLiquidated_OrderBy {
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Collateral = "collateral",
  CollateralToken = "collateralToken",
  DiscountRatio = "discountRatio",
  Id = "id",
  InsuranceFundFee = "insuranceFundFee",
  Liquidator = "liquidator",
  RepaidSettlementWithoutInsuranceFundFee = "repaidSettlementWithoutInsuranceFundFee",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type DelegationApproved = {
  __typename?: "DelegationApproved";
  /** approved actions */
  actions: Scalars["BigInt"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** delegate address */
  delegate: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type DelegationApproved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actions?: InputMaybe<Scalars["BigInt"]>;
  actions_gt?: InputMaybe<Scalars["BigInt"]>;
  actions_gte?: InputMaybe<Scalars["BigInt"]>;
  actions_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  actions_lt?: InputMaybe<Scalars["BigInt"]>;
  actions_lte?: InputMaybe<Scalars["BigInt"]>;
  actions_not?: InputMaybe<Scalars["BigInt"]>;
  actions_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  delegate?: InputMaybe<Scalars["Bytes"]>;
  delegate_contains?: InputMaybe<Scalars["Bytes"]>;
  delegate_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegate_not?: InputMaybe<Scalars["Bytes"]>;
  delegate_not_contains?: InputMaybe<Scalars["Bytes"]>;
  delegate_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum DelegationApproved_OrderBy {
  Actions = "actions",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Delegate = "delegate",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type DelegationRevoked = {
  __typename?: "DelegationRevoked";
  /** revoked actions */
  actions: Scalars["BigInt"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** delegate address */
  delegate: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type DelegationRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actions?: InputMaybe<Scalars["BigInt"]>;
  actions_gt?: InputMaybe<Scalars["BigInt"]>;
  actions_gte?: InputMaybe<Scalars["BigInt"]>;
  actions_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  actions_lt?: InputMaybe<Scalars["BigInt"]>;
  actions_lte?: InputMaybe<Scalars["BigInt"]>;
  actions_not?: InputMaybe<Scalars["BigInt"]>;
  actions_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  delegate?: InputMaybe<Scalars["Bytes"]>;
  delegate_contains?: InputMaybe<Scalars["Bytes"]>;
  delegate_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegate_not?: InputMaybe<Scalars["Bytes"]>;
  delegate_not_contains?: InputMaybe<Scalars["Bytes"]>;
  delegate_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum DelegationRevoked_OrderBy {
  Actions = "actions",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Delegate = "delegate",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type Deposited = {
  __typename?: "Deposited";
  /** amount */
  amount: Scalars["BigDecimal"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** collateralToken address */
  collateralToken: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type Deposited_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralToken?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_not?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum Deposited_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  CollateralToken = "collateralToken",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type Disbursed = {
  __typename?: "Disbursed";
  /** amount of keeper reward */
  amount: Scalars["BigDecimal"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** format: orderHash */
  id: Scalars["ID"];
  /** address of keeper */
  keeper: Scalars["Bytes"];
  /** hash of the filled limit order */
  orderHash: Scalars["Bytes"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** address of rewardToken */
  token: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type Disbursed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  keeper?: InputMaybe<Scalars["Bytes"]>;
  keeper_contains?: InputMaybe<Scalars["Bytes"]>;
  keeper_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  keeper_not?: InputMaybe<Scalars["Bytes"]>;
  keeper_not_contains?: InputMaybe<Scalars["Bytes"]>;
  keeper_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderHash?: InputMaybe<Scalars["Bytes"]>;
  orderHash_contains?: InputMaybe<Scalars["Bytes"]>;
  orderHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderHash_not?: InputMaybe<Scalars["Bytes"]>;
  orderHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  orderHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["Bytes"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  token_not?: InputMaybe<Scalars["Bytes"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum Disbursed_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Id = "id",
  Keeper = "keeper",
  OrderHash = "orderHash",
  Timestamp = "timestamp",
  Token = "token",
  TxHash = "txHash",
}

export type FundingPaymentSettled = {
  __typename?: "FundingPaymentSettled";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** amount of funding payment */
  fundingPayment: Scalars["BigDecimal"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type FundingPaymentSettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum FundingPaymentSettled_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  FundingPayment = "fundingPayment",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type FundingUpdated = {
  __typename?: "FundingUpdated";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** daily funding rate */
  dailyFundingRate: Scalars["BigDecimal"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** index price twap */
  indexTwap: Scalars["BigDecimal"];
  /** mark price twap */
  markTwap: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type FundingUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dailyFundingRate?: InputMaybe<Scalars["BigDecimal"]>;
  dailyFundingRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyFundingRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyFundingRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dailyFundingRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dailyFundingRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dailyFundingRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  dailyFundingRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  indexTwap?: InputMaybe<Scalars["BigDecimal"]>;
  indexTwap_gt?: InputMaybe<Scalars["BigDecimal"]>;
  indexTwap_gte?: InputMaybe<Scalars["BigDecimal"]>;
  indexTwap_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  indexTwap_lt?: InputMaybe<Scalars["BigDecimal"]>;
  indexTwap_lte?: InputMaybe<Scalars["BigDecimal"]>;
  indexTwap_not?: InputMaybe<Scalars["BigDecimal"]>;
  indexTwap_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  markTwap?: InputMaybe<Scalars["BigDecimal"]>;
  markTwap_gt?: InputMaybe<Scalars["BigDecimal"]>;
  markTwap_gte?: InputMaybe<Scalars["BigDecimal"]>;
  markTwap_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  markTwap_lt?: InputMaybe<Scalars["BigDecimal"]>;
  markTwap_lte?: InputMaybe<Scalars["BigDecimal"]>;
  markTwap_not?: InputMaybe<Scalars["BigDecimal"]>;
  markTwap_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum FundingUpdated_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  DailyFundingRate = "dailyFundingRate",
  Id = "id",
  IndexTwap = "indexTwap",
  MarkTwap = "markTwap",
  Timestamp = "timestamp",
  TxHash = "txHash",
}

export type LimitOrderCancelled = {
  __typename?: "LimitOrderCancelled";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** limit price */
  limitPrice: Scalars["BigDecimal"];
  /** hash of the cancelled limit order */
  orderHash: Scalars["Bytes"];
  /** limit order type: 0 is LimitOrder, 1 is StopLossLimitOrder, 2 is TakeProfitLimitOrder */
  orderType: Scalars["BigInt"];
  /** position notional: - is long and + is short */
  positionNotional: Scalars["BigDecimal"];
  /** position size: + is long and - is short */
  positionSize: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type LimitOrderCancelled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  limitPrice?: InputMaybe<Scalars["BigDecimal"]>;
  limitPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  limitPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  limitPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  limitPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  limitPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  limitPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  limitPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  orderHash?: InputMaybe<Scalars["Bytes"]>;
  orderHash_contains?: InputMaybe<Scalars["Bytes"]>;
  orderHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderHash_not?: InputMaybe<Scalars["Bytes"]>;
  orderHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  orderHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderType?: InputMaybe<Scalars["BigInt"]>;
  orderType_gt?: InputMaybe<Scalars["BigInt"]>;
  orderType_gte?: InputMaybe<Scalars["BigInt"]>;
  orderType_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  orderType_lt?: InputMaybe<Scalars["BigInt"]>;
  orderType_lte?: InputMaybe<Scalars["BigInt"]>;
  orderType_not?: InputMaybe<Scalars["BigInt"]>;
  orderType_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  positionNotional?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionSize?: InputMaybe<Scalars["BigDecimal"]>;
  positionSize_gt?: InputMaybe<Scalars["BigDecimal"]>;
  positionSize_gte?: InputMaybe<Scalars["BigDecimal"]>;
  positionSize_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionSize_lt?: InputMaybe<Scalars["BigDecimal"]>;
  positionSize_lte?: InputMaybe<Scalars["BigDecimal"]>;
  positionSize_not?: InputMaybe<Scalars["BigDecimal"]>;
  positionSize_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum LimitOrderCancelled_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Id = "id",
  LimitPrice = "limitPrice",
  OrderHash = "orderHash",
  OrderType = "orderType",
  PositionNotional = "positionNotional",
  PositionSize = "positionSize",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type LimitOrderFilled = {
  __typename?: "LimitOrderFilled";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** exchanged position notional: - is long and + is short */
  exchangedPositionNotional: Scalars["BigDecimal"];
  /** exchanged position size: + is long and - is short */
  exchangedPositionSize: Scalars["BigDecimal"];
  /** trading fee */
  fee: Scalars["BigDecimal"];
  /** fill price */
  filledPrice: Scalars["BigDecimal"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** address of keeper */
  keeper: Scalars["Bytes"];
  /** hash of the filled limit order */
  orderHash: Scalars["Bytes"];
  /** limit order type: 0 is LimitOrder, 1 is StopLossLimitOrder, 2 is TakeProfitLimitOrder */
  orderType: Scalars["BigInt"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type LimitOrderFilled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  exchangedPositionNotional?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionSize?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionSize_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fee?: InputMaybe<Scalars["BigDecimal"]>;
  fee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fee_not?: InputMaybe<Scalars["BigDecimal"]>;
  fee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  filledPrice?: InputMaybe<Scalars["BigDecimal"]>;
  filledPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  filledPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  filledPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  filledPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  filledPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  filledPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  filledPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  keeper?: InputMaybe<Scalars["Bytes"]>;
  keeper_contains?: InputMaybe<Scalars["Bytes"]>;
  keeper_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  keeper_not?: InputMaybe<Scalars["Bytes"]>;
  keeper_not_contains?: InputMaybe<Scalars["Bytes"]>;
  keeper_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderHash?: InputMaybe<Scalars["Bytes"]>;
  orderHash_contains?: InputMaybe<Scalars["Bytes"]>;
  orderHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderHash_not?: InputMaybe<Scalars["Bytes"]>;
  orderHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  orderHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  orderType?: InputMaybe<Scalars["BigInt"]>;
  orderType_gt?: InputMaybe<Scalars["BigInt"]>;
  orderType_gte?: InputMaybe<Scalars["BigInt"]>;
  orderType_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  orderType_lt?: InputMaybe<Scalars["BigInt"]>;
  orderType_lte?: InputMaybe<Scalars["BigInt"]>;
  orderType_not?: InputMaybe<Scalars["BigInt"]>;
  orderType_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum LimitOrderFilled_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  ExchangedPositionNotional = "exchangedPositionNotional",
  ExchangedPositionSize = "exchangedPositionSize",
  Fee = "fee",
  FilledPrice = "filledPrice",
  Id = "id",
  Keeper = "keeper",
  OrderHash = "orderHash",
  OrderType = "orderType",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type LiquidityChanged = {
  __typename?: "LiquidityChanged";
  /** amount of base token added to the liquidity, exclude fee (+: add liquidity, -: remove liquidity) */
  base: Scalars["BigDecimal"];
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** from function signature */
  fromFunctionSignature: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** amount of liquidity unit added (+: add liquidity, -: remove liquidity) */
  liquidity: Scalars["BigInt"];
  /** lower tick */
  lowerTick: Scalars["BigInt"];
  /** maker address */
  maker: Scalars["Bytes"];
  /** amount of quote token added to the liquidity, exclude fee (+: add liquidity, -: remove liquidity) */
  quote: Scalars["BigDecimal"];
  /** amount of quote token the maker received as fee */
  quoteFee: Scalars["BigDecimal"];
  /** quoteToken address */
  quoteToken: Scalars["Bytes"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
  /** upper tick */
  upperTick: Scalars["BigInt"];
};

export type LiquidityChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  base?: InputMaybe<Scalars["BigDecimal"]>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  base_gt?: InputMaybe<Scalars["BigDecimal"]>;
  base_gte?: InputMaybe<Scalars["BigDecimal"]>;
  base_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  base_lt?: InputMaybe<Scalars["BigDecimal"]>;
  base_lte?: InputMaybe<Scalars["BigDecimal"]>;
  base_not?: InputMaybe<Scalars["BigDecimal"]>;
  base_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fromFunctionSignature?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_contains?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  fromFunctionSignature_not?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_not_contains?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowerTick?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_gt?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_gte?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowerTick_lt?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_lte?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_not?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maker?: InputMaybe<Scalars["Bytes"]>;
  maker_contains?: InputMaybe<Scalars["Bytes"]>;
  maker_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  maker_not?: InputMaybe<Scalars["Bytes"]>;
  maker_not_contains?: InputMaybe<Scalars["Bytes"]>;
  maker_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quote?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  quoteFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  quoteFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  quoteToken?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken_not?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quote_gt?: InputMaybe<Scalars["BigDecimal"]>;
  quote_gte?: InputMaybe<Scalars["BigDecimal"]>;
  quote_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  quote_lt?: InputMaybe<Scalars["BigDecimal"]>;
  quote_lte?: InputMaybe<Scalars["BigDecimal"]>;
  quote_not?: InputMaybe<Scalars["BigDecimal"]>;
  quote_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  upperTick?: InputMaybe<Scalars["BigInt"]>;
  upperTick_gt?: InputMaybe<Scalars["BigInt"]>;
  upperTick_gte?: InputMaybe<Scalars["BigInt"]>;
  upperTick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  upperTick_lt?: InputMaybe<Scalars["BigInt"]>;
  upperTick_lte?: InputMaybe<Scalars["BigInt"]>;
  upperTick_not?: InputMaybe<Scalars["BigInt"]>;
  upperTick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum LiquidityChanged_OrderBy {
  Base = "base",
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  FromFunctionSignature = "fromFunctionSignature",
  Id = "id",
  Liquidity = "liquidity",
  LowerTick = "lowerTick",
  Maker = "maker",
  Quote = "quote",
  QuoteFee = "quoteFee",
  QuoteToken = "quoteToken",
  Timestamp = "timestamp",
  TxHash = "txHash",
  UpperTick = "upperTick",
}

export type Maker = {
  __typename?: "Maker";
  /** last updated block number */
  blockNumber: Scalars["BigInt"];
  /** total collected maker fee across all openOrders */
  collectedFee: Scalars["BigDecimal"];
  /** format: makerAddress */
  id: Scalars["ID"];
  /** open orders */
  openOrders: Array<OpenOrder>;
  /** last updated block timestamp */
  timestamp: Scalars["BigInt"];
};

export type MakerOpenOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OpenOrder_Filter>;
};

export type Maker_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collectedFee?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  openOrders_?: InputMaybe<OpenOrder_Filter>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Maker_OrderBy {
  BlockNumber = "blockNumber",
  CollectedFee = "collectedFee",
  Id = "id",
  OpenOrders = "openOrders",
  Timestamp = "timestamp",
}

export type Market = {
  __typename?: "Market";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** last updated block number */
  blockNumber: Scalars["BigInt"];
  /** block number the pool was added to ClearingHouse */
  blockNumberAdded: Scalars["BigInt"];
  /** trading fee ratio */
  feeRatio: Scalars["BigDecimal"];
  /** format: baseTokenAddress */
  id: Scalars["ID"];
  /** pool address */
  pool: Scalars["Bytes"];
  /** quoteToken address */
  quoteToken: Scalars["Bytes"];
  /** last updated block timestamp */
  timestamp: Scalars["BigInt"];
  /** block timestamp the pool was added to ClearingHouse */
  timestampAdded: Scalars["BigInt"];
  /** cumulative trading fee */
  tradingFee: Scalars["BigDecimal"];
  /** cumulative trading volume */
  tradingVolume: Scalars["BigDecimal"];
};

export type Market_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberAdded_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberAdded_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  feeRatio?: InputMaybe<Scalars["BigDecimal"]>;
  feeRatio_gt?: InputMaybe<Scalars["BigDecimal"]>;
  feeRatio_gte?: InputMaybe<Scalars["BigDecimal"]>;
  feeRatio_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  feeRatio_lt?: InputMaybe<Scalars["BigDecimal"]>;
  feeRatio_lte?: InputMaybe<Scalars["BigDecimal"]>;
  feeRatio_not?: InputMaybe<Scalars["BigDecimal"]>;
  feeRatio_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["Bytes"]>;
  pool_contains?: InputMaybe<Scalars["Bytes"]>;
  pool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pool_not?: InputMaybe<Scalars["Bytes"]>;
  pool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken_not?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded_gt?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded_gte?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestampAdded_lt?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded_lte?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded_not?: InputMaybe<Scalars["BigInt"]>;
  timestampAdded_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFee?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Market_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberAdded = "blockNumberAdded",
  FeeRatio = "feeRatio",
  Id = "id",
  Pool = "pool",
  QuoteToken = "quoteToken",
  Timestamp = "timestamp",
  TimestampAdded = "timestampAdded",
  TradingFee = "tradingFee",
  TradingVolume = "tradingVolume",
}

export type OpenOrder = {
  __typename?: "OpenOrder";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** last updated block number */
  blockNumber: Scalars["BigInt"];
  /** total collected maker fee */
  collectedFee: Scalars["BigDecimal"];
  /** collected maker fee in this lifecycle */
  collectedFeeInThisLifecycle: Scalars["BigDecimal"];
  /** format: makerAddress-baseTokenAddress-lowerTick-upperTick */
  id: Scalars["ID"];
  /** current liquidity */
  liquidity: Scalars["BigInt"];
  /** lower tick */
  lowerTick: Scalars["BigInt"];
  /** maker address */
  maker: Scalars["Bytes"];
  /** foreign key to Maker */
  makerRef: Maker;
  /** last updated block timestamp */
  timestamp: Scalars["BigInt"];
  /** upper tick */
  upperTick: Scalars["BigInt"];
};

export type OpenOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collectedFee?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedFeeInThisLifecycle_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFeeInThisLifecycle_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collectedFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  collectedFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidity?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidity_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not?: InputMaybe<Scalars["BigInt"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowerTick?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_gt?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_gte?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowerTick_lt?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_lte?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_not?: InputMaybe<Scalars["BigInt"]>;
  lowerTick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maker?: InputMaybe<Scalars["Bytes"]>;
  makerRef?: InputMaybe<Scalars["String"]>;
  makerRef_?: InputMaybe<Maker_Filter>;
  makerRef_contains?: InputMaybe<Scalars["String"]>;
  makerRef_contains_nocase?: InputMaybe<Scalars["String"]>;
  makerRef_ends_with?: InputMaybe<Scalars["String"]>;
  makerRef_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  makerRef_gt?: InputMaybe<Scalars["String"]>;
  makerRef_gte?: InputMaybe<Scalars["String"]>;
  makerRef_in?: InputMaybe<Array<Scalars["String"]>>;
  makerRef_lt?: InputMaybe<Scalars["String"]>;
  makerRef_lte?: InputMaybe<Scalars["String"]>;
  makerRef_not?: InputMaybe<Scalars["String"]>;
  makerRef_not_contains?: InputMaybe<Scalars["String"]>;
  makerRef_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  makerRef_not_ends_with?: InputMaybe<Scalars["String"]>;
  makerRef_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  makerRef_not_in?: InputMaybe<Array<Scalars["String"]>>;
  makerRef_not_starts_with?: InputMaybe<Scalars["String"]>;
  makerRef_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  makerRef_starts_with?: InputMaybe<Scalars["String"]>;
  makerRef_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  maker_contains?: InputMaybe<Scalars["Bytes"]>;
  maker_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  maker_not?: InputMaybe<Scalars["Bytes"]>;
  maker_not_contains?: InputMaybe<Scalars["Bytes"]>;
  maker_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  upperTick?: InputMaybe<Scalars["BigInt"]>;
  upperTick_gt?: InputMaybe<Scalars["BigInt"]>;
  upperTick_gte?: InputMaybe<Scalars["BigInt"]>;
  upperTick_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  upperTick_lt?: InputMaybe<Scalars["BigInt"]>;
  upperTick_lte?: InputMaybe<Scalars["BigInt"]>;
  upperTick_not?: InputMaybe<Scalars["BigInt"]>;
  upperTick_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum OpenOrder_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  CollectedFee = "collectedFee",
  CollectedFeeInThisLifecycle = "collectedFeeInThisLifecycle",
  Id = "id",
  Liquidity = "liquidity",
  LowerTick = "lowerTick",
  Maker = "maker",
  MakerRef = "makerRef",
  Timestamp = "timestamp",
  UpperTick = "upperTick",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PnlRealized = {
  __typename?: "PnlRealized";
  /** amount */
  amount: Scalars["BigDecimal"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type PnlRealized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum PnlRealized_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type PositionChanged = {
  __typename?: "PositionChanged";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** average entry price after this tx = abs(position.openNotional / position.positionSize) */
  entryPriceAfter: Scalars["BigDecimal"];
  /** exchanged position notional: - is long and + is short */
  exchangedPositionNotional: Scalars["BigDecimal"];
  /** exchanged position size: + is long and - is short */
  exchangedPositionSize: Scalars["BigDecimal"];
  /** trading fee */
  fee: Scalars["BigDecimal"];
  /** from function signature */
  fromFunctionSignature: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** market price after this tx */
  marketPriceAfter: Scalars["BigDecimal"];
  /** average open notional after this tx */
  openNotional: Scalars["BigDecimal"];
  /** position size after this tx */
  positionSizeAfter: Scalars["BigDecimal"];
  /** realized pnl of this tx */
  realizedPnl: Scalars["BigDecimal"];
  /** referrer code as passed in to the contract, this is automatically provided when interacting with perp front end */
  referralCode?: Maybe<ReferralCode>;
  /** swapped price (does not include fee) of this tx = abs(exchangedPositionNotional / exchangedPositionSize) */
  swappedPrice: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type PositionChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryPriceAfter?: InputMaybe<Scalars["BigDecimal"]>;
  entryPriceAfter_gt?: InputMaybe<Scalars["BigDecimal"]>;
  entryPriceAfter_gte?: InputMaybe<Scalars["BigDecimal"]>;
  entryPriceAfter_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  entryPriceAfter_lt?: InputMaybe<Scalars["BigDecimal"]>;
  entryPriceAfter_lte?: InputMaybe<Scalars["BigDecimal"]>;
  entryPriceAfter_not?: InputMaybe<Scalars["BigDecimal"]>;
  entryPriceAfter_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionNotional?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionSize?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_gt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_gte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  exchangedPositionSize_lt?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_lte?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_not?: InputMaybe<Scalars["BigDecimal"]>;
  exchangedPositionSize_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fee?: InputMaybe<Scalars["BigDecimal"]>;
  fee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fee_not?: InputMaybe<Scalars["BigDecimal"]>;
  fee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fromFunctionSignature?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_contains?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  fromFunctionSignature_not?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_not_contains?: InputMaybe<Scalars["Bytes"]>;
  fromFunctionSignature_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  marketPriceAfter?: InputMaybe<Scalars["BigDecimal"]>;
  marketPriceAfter_gt?: InputMaybe<Scalars["BigDecimal"]>;
  marketPriceAfter_gte?: InputMaybe<Scalars["BigDecimal"]>;
  marketPriceAfter_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  marketPriceAfter_lt?: InputMaybe<Scalars["BigDecimal"]>;
  marketPriceAfter_lte?: InputMaybe<Scalars["BigDecimal"]>;
  marketPriceAfter_not?: InputMaybe<Scalars["BigDecimal"]>;
  marketPriceAfter_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  openNotional?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  openNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionSizeAfter?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAfter_gt?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAfter_gte?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAfter_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionSizeAfter_lt?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAfter_lte?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAfter_not?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAfter_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl_lt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_lte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  referralCode?: InputMaybe<Scalars["String"]>;
  referralCode_?: InputMaybe<ReferralCode_Filter>;
  referralCode_contains?: InputMaybe<Scalars["String"]>;
  referralCode_contains_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_ends_with?: InputMaybe<Scalars["String"]>;
  referralCode_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_gt?: InputMaybe<Scalars["String"]>;
  referralCode_gte?: InputMaybe<Scalars["String"]>;
  referralCode_in?: InputMaybe<Array<Scalars["String"]>>;
  referralCode_lt?: InputMaybe<Scalars["String"]>;
  referralCode_lte?: InputMaybe<Scalars["String"]>;
  referralCode_not?: InputMaybe<Scalars["String"]>;
  referralCode_not_contains?: InputMaybe<Scalars["String"]>;
  referralCode_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_not_ends_with?: InputMaybe<Scalars["String"]>;
  referralCode_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_not_in?: InputMaybe<Array<Scalars["String"]>>;
  referralCode_not_starts_with?: InputMaybe<Scalars["String"]>;
  referralCode_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_starts_with?: InputMaybe<Scalars["String"]>;
  referralCode_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  swappedPrice?: InputMaybe<Scalars["BigDecimal"]>;
  swappedPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  swappedPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  swappedPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swappedPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  swappedPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  swappedPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  swappedPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum PositionChanged_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  EntryPriceAfter = "entryPriceAfter",
  ExchangedPositionNotional = "exchangedPositionNotional",
  ExchangedPositionSize = "exchangedPositionSize",
  Fee = "fee",
  FromFunctionSignature = "fromFunctionSignature",
  Id = "id",
  MarketPriceAfter = "marketPriceAfter",
  OpenNotional = "openNotional",
  PositionSizeAfter = "positionSizeAfter",
  RealizedPnl = "realizedPnl",
  ReferralCode = "referralCode",
  SwappedPrice = "swappedPrice",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type PositionClosed = {
  __typename?: "PositionClosed";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** closed position notional: - is long and + is short */
  closedPositionNotional: Scalars["BigDecimal"];
  /** closed position size: + is long and - is short */
  closedPositionSize: Scalars["BigDecimal"];
  /** closed price of this tx */
  closedPrice: Scalars["BigDecimal"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** average open notional before closing position */
  openNotionalBeforeClose: Scalars["BigDecimal"];
  /** realized pnl of this tx */
  realizedPnl: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type PositionClosed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closedPositionNotional?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  closedPositionNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  closedPositionSize?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionSize_gt?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionSize_gte?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionSize_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  closedPositionSize_lt?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionSize_lte?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionSize_not?: InputMaybe<Scalars["BigDecimal"]>;
  closedPositionSize_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  closedPrice?: InputMaybe<Scalars["BigDecimal"]>;
  closedPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  closedPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  closedPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  closedPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  closedPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  closedPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  closedPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  openNotionalBeforeClose?: InputMaybe<Scalars["BigDecimal"]>;
  openNotionalBeforeClose_gt?: InputMaybe<Scalars["BigDecimal"]>;
  openNotionalBeforeClose_gte?: InputMaybe<Scalars["BigDecimal"]>;
  openNotionalBeforeClose_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  openNotionalBeforeClose_lt?: InputMaybe<Scalars["BigDecimal"]>;
  openNotionalBeforeClose_lte?: InputMaybe<Scalars["BigDecimal"]>;
  openNotionalBeforeClose_not?: InputMaybe<Scalars["BigDecimal"]>;
  openNotionalBeforeClose_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl_lt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_lte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum PositionClosed_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  ClosedPositionNotional = "closedPositionNotional",
  ClosedPositionSize = "closedPositionSize",
  ClosedPrice = "closedPrice",
  Id = "id",
  OpenNotionalBeforeClose = "openNotionalBeforeClose",
  RealizedPnl = "realizedPnl",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type PositionLiquidated = {
  __typename?: "PositionLiquidated";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** liquidation penalty */
  liquidationFee: Scalars["BigDecimal"];
  /** liquidator address */
  liquidator: Scalars["Bytes"];
  /** liquidated position notional abs */
  positionNotionalAbs: Scalars["BigDecimal"];
  /** liquidated position size abs */
  positionSizeAbs: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type PositionLiquidated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidationFee?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidationFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidator?: InputMaybe<Scalars["Bytes"]>;
  liquidator_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  liquidator_not?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  positionNotionalAbs?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotionalAbs_gt?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotionalAbs_gte?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotionalAbs_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionNotionalAbs_lt?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotionalAbs_lte?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotionalAbs_not?: InputMaybe<Scalars["BigDecimal"]>;
  positionNotionalAbs_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionSizeAbs?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAbs_gt?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAbs_gte?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAbs_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  positionSizeAbs_lt?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAbs_lte?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAbs_not?: InputMaybe<Scalars["BigDecimal"]>;
  positionSizeAbs_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum PositionLiquidated_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Id = "id",
  LiquidationFee = "liquidationFee",
  Liquidator = "liquidator",
  PositionNotionalAbs = "positionNotionalAbs",
  PositionSizeAbs = "positionSizeAbs",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
}

export type Protocol = {
  __typename?: "Protocol";
  /** last updated block number */
  blockNumber: Scalars["BigInt"];
  /** chain id */
  chainId: Scalars["String"];
  /** contract version */
  contractVersion: Scalars["String"];
  /** hardcoded as 'perpetual-protocol' */
  id: Scalars["ID"];
  /** network name */
  network: Scalars["String"];
  /** number of public markets */
  publicMarketCount: Scalars["BigInt"];
  /** last updated block timestamp */
  timestamp: Scalars["BigInt"];
  /** total non settlement tokens */
  totalNonSettlementTokenBalances?: Maybe<Array<ProtocolTokenBalance>>;
  /** total repaid */
  totalRepaid?: Maybe<Scalars["BigDecimal"]>;
  /** total bad debt settled */
  totalSettledBadDebt?: Maybe<Scalars["BigDecimal"]>;
  /** total settlement token */
  totalSettlementTokenBalance: Scalars["BigDecimal"];
  /** cumulative trading fee */
  tradingFee: Scalars["BigDecimal"];
  /** cumulative trading volume */
  tradingVolume: Scalars["BigDecimal"];
};

export type ProtocolTotalNonSettlementTokenBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProtocolTokenBalance_Filter>;
};

export type ProtocolEventInfo = {
  __typename?: "ProtocolEventInfo";
  /** hardcoded as 'protocol-event-info' */
  id: Scalars["ID"];
  /** last process event name */
  lastProcessedEventName: Scalars["String"];
  /** total count of all events */
  totalEventCount: Scalars["BigInt"];
};

export type ProtocolEventInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastProcessedEventName?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_contains?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_ends_with?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_gt?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_gte?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_in?: InputMaybe<Array<Scalars["String"]>>;
  lastProcessedEventName_lt?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_lte?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not_contains?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastProcessedEventName_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_starts_with?: InputMaybe<Scalars["String"]>;
  lastProcessedEventName_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalEventCount?: InputMaybe<Scalars["BigInt"]>;
  totalEventCount_gt?: InputMaybe<Scalars["BigInt"]>;
  totalEventCount_gte?: InputMaybe<Scalars["BigInt"]>;
  totalEventCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalEventCount_lt?: InputMaybe<Scalars["BigInt"]>;
  totalEventCount_lte?: InputMaybe<Scalars["BigInt"]>;
  totalEventCount_not?: InputMaybe<Scalars["BigInt"]>;
  totalEventCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum ProtocolEventInfo_OrderBy {
  Id = "id",
  LastProcessedEventName = "lastProcessedEventName",
  TotalEventCount = "totalEventCount",
}

export type ProtocolTokenBalance = {
  __typename?: "ProtocolTokenBalance";
  /** amount */
  amount: Scalars["BigDecimal"];
  /** format: collateralTokenAddress */
  id: Scalars["ID"];
  /** foreign key to Protocol */
  protocol: Protocol;
  /** collateral token */
  token: Token;
};

export type ProtocolTokenBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
};

export enum ProtocolTokenBalance_OrderBy {
  Amount = "amount",
  Id = "id",
  Protocol = "protocol",
  Token = "token",
}

export type Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  chainId?: InputMaybe<Scalars["String"]>;
  chainId_contains?: InputMaybe<Scalars["String"]>;
  chainId_contains_nocase?: InputMaybe<Scalars["String"]>;
  chainId_ends_with?: InputMaybe<Scalars["String"]>;
  chainId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  chainId_gt?: InputMaybe<Scalars["String"]>;
  chainId_gte?: InputMaybe<Scalars["String"]>;
  chainId_in?: InputMaybe<Array<Scalars["String"]>>;
  chainId_lt?: InputMaybe<Scalars["String"]>;
  chainId_lte?: InputMaybe<Scalars["String"]>;
  chainId_not?: InputMaybe<Scalars["String"]>;
  chainId_not_contains?: InputMaybe<Scalars["String"]>;
  chainId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  chainId_not_ends_with?: InputMaybe<Scalars["String"]>;
  chainId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  chainId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  chainId_not_starts_with?: InputMaybe<Scalars["String"]>;
  chainId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  chainId_starts_with?: InputMaybe<Scalars["String"]>;
  chainId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractVersion?: InputMaybe<Scalars["String"]>;
  contractVersion_contains?: InputMaybe<Scalars["String"]>;
  contractVersion_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractVersion_ends_with?: InputMaybe<Scalars["String"]>;
  contractVersion_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractVersion_gt?: InputMaybe<Scalars["String"]>;
  contractVersion_gte?: InputMaybe<Scalars["String"]>;
  contractVersion_in?: InputMaybe<Array<Scalars["String"]>>;
  contractVersion_lt?: InputMaybe<Scalars["String"]>;
  contractVersion_lte?: InputMaybe<Scalars["String"]>;
  contractVersion_not?: InputMaybe<Scalars["String"]>;
  contractVersion_not_contains?: InputMaybe<Scalars["String"]>;
  contractVersion_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractVersion_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractVersion_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractVersion_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractVersion_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractVersion_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractVersion_starts_with?: InputMaybe<Scalars["String"]>;
  contractVersion_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  network?: InputMaybe<Scalars["String"]>;
  network_contains?: InputMaybe<Scalars["String"]>;
  network_contains_nocase?: InputMaybe<Scalars["String"]>;
  network_ends_with?: InputMaybe<Scalars["String"]>;
  network_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  network_gt?: InputMaybe<Scalars["String"]>;
  network_gte?: InputMaybe<Scalars["String"]>;
  network_in?: InputMaybe<Array<Scalars["String"]>>;
  network_lt?: InputMaybe<Scalars["String"]>;
  network_lte?: InputMaybe<Scalars["String"]>;
  network_not?: InputMaybe<Scalars["String"]>;
  network_not_contains?: InputMaybe<Scalars["String"]>;
  network_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  network_not_ends_with?: InputMaybe<Scalars["String"]>;
  network_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  network_not_in?: InputMaybe<Array<Scalars["String"]>>;
  network_not_starts_with?: InputMaybe<Scalars["String"]>;
  network_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  network_starts_with?: InputMaybe<Scalars["String"]>;
  network_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  publicMarketCount?: InputMaybe<Scalars["BigInt"]>;
  publicMarketCount_gt?: InputMaybe<Scalars["BigInt"]>;
  publicMarketCount_gte?: InputMaybe<Scalars["BigInt"]>;
  publicMarketCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  publicMarketCount_lt?: InputMaybe<Scalars["BigInt"]>;
  publicMarketCount_lte?: InputMaybe<Scalars["BigInt"]>;
  publicMarketCount_not?: InputMaybe<Scalars["BigInt"]>;
  publicMarketCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalNonSettlementTokenBalances_?: InputMaybe<ProtocolTokenBalance_Filter>;
  totalRepaid?: InputMaybe<Scalars["BigDecimal"]>;
  totalRepaid_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalRepaid_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalRepaid_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalRepaid_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalRepaid_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalRepaid_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalRepaid_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSettledBadDebt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettledBadDebt_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettledBadDebt_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettledBadDebt_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSettledBadDebt_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettledBadDebt_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettledBadDebt_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettledBadDebt_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSettlementTokenBalance?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettlementTokenBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettlementTokenBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettlementTokenBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSettlementTokenBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettlementTokenBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettlementTokenBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSettlementTokenBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Protocol_OrderBy {
  BlockNumber = "blockNumber",
  ChainId = "chainId",
  ContractVersion = "contractVersion",
  Id = "id",
  Network = "network",
  PublicMarketCount = "publicMarketCount",
  Timestamp = "timestamp",
  TotalNonSettlementTokenBalances = "totalNonSettlementTokenBalances",
  TotalRepaid = "totalRepaid",
  TotalSettledBadDebt = "totalSettledBadDebt",
  TotalSettlementTokenBalance = "totalSettlementTokenBalance",
  TradingFee = "tradingFee",
  TradingVolume = "tradingVolume",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  badDebtSettled?: Maybe<BadDebtSettled>;
  badDebtSettleds: Array<BadDebtSettled>;
  collateralAdded?: Maybe<CollateralAdded>;
  collateralAddeds: Array<CollateralAdded>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  collateralLiquidateds: Array<CollateralLiquidated>;
  delegationApproved?: Maybe<DelegationApproved>;
  delegationApproveds: Array<DelegationApproved>;
  delegationRevoked?: Maybe<DelegationRevoked>;
  delegationRevokeds: Array<DelegationRevoked>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  disbursed?: Maybe<Disbursed>;
  disburseds: Array<Disbursed>;
  fundingPaymentSettled?: Maybe<FundingPaymentSettled>;
  fundingPaymentSettleds: Array<FundingPaymentSettled>;
  fundingUpdated?: Maybe<FundingUpdated>;
  fundingUpdateds: Array<FundingUpdated>;
  limitOrderCancelled?: Maybe<LimitOrderCancelled>;
  limitOrderCancelleds: Array<LimitOrderCancelled>;
  limitOrderFilled?: Maybe<LimitOrderFilled>;
  limitOrderFilleds: Array<LimitOrderFilled>;
  liquidityChanged?: Maybe<LiquidityChanged>;
  liquidityChangeds: Array<LiquidityChanged>;
  maker?: Maybe<Maker>;
  makers: Array<Maker>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  openOrder?: Maybe<OpenOrder>;
  openOrders: Array<OpenOrder>;
  pnlRealized?: Maybe<PnlRealized>;
  pnlRealizeds: Array<PnlRealized>;
  positionChanged?: Maybe<PositionChanged>;
  positionChangeds: Array<PositionChanged>;
  positionClosed?: Maybe<PositionClosed>;
  positionCloseds: Array<PositionClosed>;
  positionLiquidated?: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  protocol?: Maybe<Protocol>;
  protocolEventInfo?: Maybe<ProtocolEventInfo>;
  protocolEventInfos: Array<ProtocolEventInfo>;
  protocolTokenBalance?: Maybe<ProtocolTokenBalance>;
  protocolTokenBalances: Array<ProtocolTokenBalance>;
  protocols: Array<Protocol>;
  referralCode?: Maybe<ReferralCode>;
  referralCodeDayData?: Maybe<ReferralCodeDayData>;
  referralCodeDayDatas: Array<ReferralCodeDayData>;
  referralCodes: Array<ReferralCode>;
  repaid?: Maybe<Repaid>;
  repaids: Array<Repaid>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  trader?: Maybe<Trader>;
  traderDayData?: Maybe<TraderDayData>;
  traderDayDatas: Array<TraderDayData>;
  traderMarket?: Maybe<TraderMarket>;
  traderMarkets: Array<TraderMarket>;
  traderTokenBalance?: Maybe<TraderTokenBalance>;
  traderTokenBalances: Array<TraderTokenBalance>;
  traders: Array<Trader>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBadDebtSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBadDebtSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BadDebtSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadDebtSettled_Filter>;
};

export type QueryCollateralAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCollateralAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralAdded_Filter>;
};

export type QueryCollateralLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCollateralLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralLiquidated_Filter>;
};

export type QueryDelegationApprovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDelegationApprovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegationApproved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationApproved_Filter>;
};

export type QueryDelegationRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDelegationRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegationRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationRevoked_Filter>;
};

export type QueryDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposited_Filter>;
};

export type QueryDisbursedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDisbursedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Disbursed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Disbursed_Filter>;
};

export type QueryFundingPaymentSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFundingPaymentSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingPaymentSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingPaymentSettled_Filter>;
};

export type QueryFundingUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFundingUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingUpdated_Filter>;
};

export type QueryLimitOrderCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLimitOrderCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LimitOrderCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LimitOrderCancelled_Filter>;
};

export type QueryLimitOrderFilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLimitOrderFilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LimitOrderFilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LimitOrderFilled_Filter>;
};

export type QueryLiquidityChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityChanged_Filter>;
};

export type QueryMakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Maker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Maker_Filter>;
};

export type QueryMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
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

export type QueryOpenOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOpenOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenOrder_Filter>;
};

export type QueryPnlRealizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPnlRealizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PnlRealized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PnlRealized_Filter>;
};

export type QueryPositionChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionChanged_Filter>;
};

export type QueryPositionClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionClosed_Filter>;
};

export type QueryPositionLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPositionLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionLiquidated_Filter>;
};

export type QueryProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolEventInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolEventInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolEventInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolEventInfo_Filter>;
};

export type QueryProtocolTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolTokenBalance_Filter>;
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

export type QueryReferralCodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReferralCodeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReferralCodeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReferralCodeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCodeDayData_Filter>;
};

export type QueryReferralCodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReferralCode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCode_Filter>;
};

export type QueryRepaidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRepaidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repaid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Repaid_Filter>;
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

export type QueryTraderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTraderDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTraderDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderDayData_Filter>;
};

export type QueryTraderMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTraderMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderMarket_Filter>;
};

export type QueryTraderTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTraderTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderTokenBalance_Filter>;
};

export type QueryTradersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trader_Filter>;
};

export type QueryWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawn_Filter>;
};

export type ReferralCode = {
  __typename?: "ReferralCode";
  /** date created at */
  createdAt: Scalars["BigInt"];
  /** day data link */
  dayData?: Maybe<Array<ReferralCodeDayData>>;
  id: Scalars["ID"];
  /** total number of registered referees */
  numReferees: Scalars["BigInt"];
  /** list of registered referees */
  referees: Array<Trader>;
  /** referrer/partner address */
  referrer: Trader;
  /** whether or not the referral code exists in the referral contract */
  registeredOnChain?: Maybe<Scalars["Boolean"]>;
  /** how long user has been vip since */
  vipSince?: Maybe<Scalars["BigInt"]>;
  /** if user is vip tier */
  vipTier?: Maybe<Scalars["String"]>;
};

export type ReferralCodeDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReferralCodeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReferralCodeDayData_Filter>;
};

export type ReferralCodeRefereesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Trader_Filter>;
};

export type ReferralCodeDayData = {
  __typename?: "ReferralCodeDayData";
  /** a list of referees which have traded on the day */
  activeReferees: Array<Trader>;
  /** timestamp */
  date: Scalars["BigInt"];
  /** format: <referral code>-<day id> */
  id: Scalars["ID"];
  /** a list of new referees added today */
  newReferees: Array<Trader>;
  /** referral code */
  referralCode: ReferralCode;
  /** total fees paid during day */
  tradingFee: Scalars["BigDecimal"];
  /** total trading volume in notional value */
  tradingVolume: Scalars["BigDecimal"];
};

export type ReferralCodeDayDataActiveRefereesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Trader_Filter>;
};

export type ReferralCodeDayDataNewRefereesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Trader_Filter>;
};

export type ReferralCodeDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeReferees?: InputMaybe<Array<Scalars["String"]>>;
  activeReferees_?: InputMaybe<Trader_Filter>;
  activeReferees_contains?: InputMaybe<Array<Scalars["String"]>>;
  activeReferees_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  activeReferees_not?: InputMaybe<Array<Scalars["String"]>>;
  activeReferees_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  activeReferees_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  date?: InputMaybe<Scalars["BigInt"]>;
  date_gt?: InputMaybe<Scalars["BigInt"]>;
  date_gte?: InputMaybe<Scalars["BigInt"]>;
  date_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date_lt?: InputMaybe<Scalars["BigInt"]>;
  date_lte?: InputMaybe<Scalars["BigInt"]>;
  date_not?: InputMaybe<Scalars["BigInt"]>;
  date_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  newReferees?: InputMaybe<Array<Scalars["String"]>>;
  newReferees_?: InputMaybe<Trader_Filter>;
  newReferees_contains?: InputMaybe<Array<Scalars["String"]>>;
  newReferees_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  newReferees_not?: InputMaybe<Array<Scalars["String"]>>;
  newReferees_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  newReferees_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  referralCode?: InputMaybe<Scalars["String"]>;
  referralCode_?: InputMaybe<ReferralCode_Filter>;
  referralCode_contains?: InputMaybe<Scalars["String"]>;
  referralCode_contains_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_ends_with?: InputMaybe<Scalars["String"]>;
  referralCode_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_gt?: InputMaybe<Scalars["String"]>;
  referralCode_gte?: InputMaybe<Scalars["String"]>;
  referralCode_in?: InputMaybe<Array<Scalars["String"]>>;
  referralCode_lt?: InputMaybe<Scalars["String"]>;
  referralCode_lte?: InputMaybe<Scalars["String"]>;
  referralCode_not?: InputMaybe<Scalars["String"]>;
  referralCode_not_contains?: InputMaybe<Scalars["String"]>;
  referralCode_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_not_ends_with?: InputMaybe<Scalars["String"]>;
  referralCode_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_not_in?: InputMaybe<Array<Scalars["String"]>>;
  referralCode_not_starts_with?: InputMaybe<Scalars["String"]>;
  referralCode_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  referralCode_starts_with?: InputMaybe<Scalars["String"]>;
  referralCode_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tradingFee?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum ReferralCodeDayData_OrderBy {
  ActiveReferees = "activeReferees",
  Date = "date",
  Id = "id",
  NewReferees = "newReferees",
  ReferralCode = "referralCode",
  TradingFee = "tradingFee",
  TradingVolume = "tradingVolume",
}

export type ReferralCode_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dayData_?: InputMaybe<ReferralCodeDayData_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  numReferees?: InputMaybe<Scalars["BigInt"]>;
  numReferees_gt?: InputMaybe<Scalars["BigInt"]>;
  numReferees_gte?: InputMaybe<Scalars["BigInt"]>;
  numReferees_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  numReferees_lt?: InputMaybe<Scalars["BigInt"]>;
  numReferees_lte?: InputMaybe<Scalars["BigInt"]>;
  numReferees_not?: InputMaybe<Scalars["BigInt"]>;
  numReferees_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  referees_?: InputMaybe<Trader_Filter>;
  referrer?: InputMaybe<Scalars["String"]>;
  referrer_?: InputMaybe<Trader_Filter>;
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
  registeredOnChain?: InputMaybe<Scalars["Boolean"]>;
  registeredOnChain_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  registeredOnChain_not?: InputMaybe<Scalars["Boolean"]>;
  registeredOnChain_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  vipSince?: InputMaybe<Scalars["BigInt"]>;
  vipSince_gt?: InputMaybe<Scalars["BigInt"]>;
  vipSince_gte?: InputMaybe<Scalars["BigInt"]>;
  vipSince_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vipSince_lt?: InputMaybe<Scalars["BigInt"]>;
  vipSince_lte?: InputMaybe<Scalars["BigInt"]>;
  vipSince_not?: InputMaybe<Scalars["BigInt"]>;
  vipSince_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vipTier?: InputMaybe<Scalars["String"]>;
  vipTier_contains?: InputMaybe<Scalars["String"]>;
  vipTier_contains_nocase?: InputMaybe<Scalars["String"]>;
  vipTier_ends_with?: InputMaybe<Scalars["String"]>;
  vipTier_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vipTier_gt?: InputMaybe<Scalars["String"]>;
  vipTier_gte?: InputMaybe<Scalars["String"]>;
  vipTier_in?: InputMaybe<Array<Scalars["String"]>>;
  vipTier_lt?: InputMaybe<Scalars["String"]>;
  vipTier_lte?: InputMaybe<Scalars["String"]>;
  vipTier_not?: InputMaybe<Scalars["String"]>;
  vipTier_not_contains?: InputMaybe<Scalars["String"]>;
  vipTier_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vipTier_not_ends_with?: InputMaybe<Scalars["String"]>;
  vipTier_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vipTier_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vipTier_not_starts_with?: InputMaybe<Scalars["String"]>;
  vipTier_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vipTier_starts_with?: InputMaybe<Scalars["String"]>;
  vipTier_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum ReferralCode_OrderBy {
  CreatedAt = "createdAt",
  DayData = "dayData",
  Id = "id",
  NumReferees = "numReferees",
  Referees = "referees",
  Referrer = "referrer",
  RegisteredOnChain = "registeredOnChain",
  VipSince = "vipSince",
  VipTier = "vipTier",
}

export type Repaid = {
  __typename?: "Repaid";
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** caller address */
  caller: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** repaid amount */
  repaidAmount: Scalars["BigDecimal"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** insurance fund balance after repaid */
  tokenBalanceAfterRepaid: Scalars["BigDecimal"];
};

export type Repaid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  caller?: InputMaybe<Scalars["Bytes"]>;
  caller_contains?: InputMaybe<Scalars["Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  caller_not?: InputMaybe<Scalars["Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["Bytes"]>;
  caller_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  repaidAmount?: InputMaybe<Scalars["BigDecimal"]>;
  repaidAmount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  repaidAmount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  repaidAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  repaidAmount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  repaidAmount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  repaidAmount_not?: InputMaybe<Scalars["BigDecimal"]>;
  repaidAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenBalanceAfterRepaid?: InputMaybe<Scalars["BigDecimal"]>;
  tokenBalanceAfterRepaid_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenBalanceAfterRepaid_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenBalanceAfterRepaid_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenBalanceAfterRepaid_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenBalanceAfterRepaid_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenBalanceAfterRepaid_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenBalanceAfterRepaid_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Repaid_OrderBy {
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  Caller = "caller",
  Id = "id",
  RepaidAmount = "repaidAmount",
  Timestamp = "timestamp",
  TokenBalanceAfterRepaid = "tokenBalanceAfterRepaid",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  badDebtSettled?: Maybe<BadDebtSettled>;
  badDebtSettleds: Array<BadDebtSettled>;
  collateralAdded?: Maybe<CollateralAdded>;
  collateralAddeds: Array<CollateralAdded>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  collateralLiquidateds: Array<CollateralLiquidated>;
  delegationApproved?: Maybe<DelegationApproved>;
  delegationApproveds: Array<DelegationApproved>;
  delegationRevoked?: Maybe<DelegationRevoked>;
  delegationRevokeds: Array<DelegationRevoked>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  disbursed?: Maybe<Disbursed>;
  disburseds: Array<Disbursed>;
  fundingPaymentSettled?: Maybe<FundingPaymentSettled>;
  fundingPaymentSettleds: Array<FundingPaymentSettled>;
  fundingUpdated?: Maybe<FundingUpdated>;
  fundingUpdateds: Array<FundingUpdated>;
  limitOrderCancelled?: Maybe<LimitOrderCancelled>;
  limitOrderCancelleds: Array<LimitOrderCancelled>;
  limitOrderFilled?: Maybe<LimitOrderFilled>;
  limitOrderFilleds: Array<LimitOrderFilled>;
  liquidityChanged?: Maybe<LiquidityChanged>;
  liquidityChangeds: Array<LiquidityChanged>;
  maker?: Maybe<Maker>;
  makers: Array<Maker>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  openOrder?: Maybe<OpenOrder>;
  openOrders: Array<OpenOrder>;
  pnlRealized?: Maybe<PnlRealized>;
  pnlRealizeds: Array<PnlRealized>;
  positionChanged?: Maybe<PositionChanged>;
  positionChangeds: Array<PositionChanged>;
  positionClosed?: Maybe<PositionClosed>;
  positionCloseds: Array<PositionClosed>;
  positionLiquidated?: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  protocol?: Maybe<Protocol>;
  protocolEventInfo?: Maybe<ProtocolEventInfo>;
  protocolEventInfos: Array<ProtocolEventInfo>;
  protocolTokenBalance?: Maybe<ProtocolTokenBalance>;
  protocolTokenBalances: Array<ProtocolTokenBalance>;
  protocols: Array<Protocol>;
  referralCode?: Maybe<ReferralCode>;
  referralCodeDayData?: Maybe<ReferralCodeDayData>;
  referralCodeDayDatas: Array<ReferralCodeDayData>;
  referralCodes: Array<ReferralCode>;
  repaid?: Maybe<Repaid>;
  repaids: Array<Repaid>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  trader?: Maybe<Trader>;
  traderDayData?: Maybe<TraderDayData>;
  traderDayDatas: Array<TraderDayData>;
  traderMarket?: Maybe<TraderMarket>;
  traderMarkets: Array<TraderMarket>;
  traderTokenBalance?: Maybe<TraderTokenBalance>;
  traderTokenBalances: Array<TraderTokenBalance>;
  traders: Array<Trader>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionBadDebtSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBadDebtSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BadDebtSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadDebtSettled_Filter>;
};

export type SubscriptionCollateralAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCollateralAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralAdded_Filter>;
};

export type SubscriptionCollateralLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCollateralLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralLiquidated_Filter>;
};

export type SubscriptionDelegationApprovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDelegationApprovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegationApproved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationApproved_Filter>;
};

export type SubscriptionDelegationRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDelegationRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DelegationRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationRevoked_Filter>;
};

export type SubscriptionDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposited_Filter>;
};

export type SubscriptionDisbursedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDisbursedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Disbursed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Disbursed_Filter>;
};

export type SubscriptionFundingPaymentSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFundingPaymentSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingPaymentSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingPaymentSettled_Filter>;
};

export type SubscriptionFundingUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFundingUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingUpdated_Filter>;
};

export type SubscriptionLimitOrderCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLimitOrderCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LimitOrderCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LimitOrderCancelled_Filter>;
};

export type SubscriptionLimitOrderFilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLimitOrderFilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LimitOrderFilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LimitOrderFilled_Filter>;
};

export type SubscriptionLiquidityChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LiquidityChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityChanged_Filter>;
};

export type SubscriptionMakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Maker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Maker_Filter>;
};

export type SubscriptionMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
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

export type SubscriptionOpenOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOpenOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenOrder_Filter>;
};

export type SubscriptionPnlRealizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPnlRealizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PnlRealized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PnlRealized_Filter>;
};

export type SubscriptionPositionChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionChanged_Filter>;
};

export type SubscriptionPositionClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionClosed_Filter>;
};

export type SubscriptionPositionLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPositionLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionLiquidated_Filter>;
};

export type SubscriptionProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolEventInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolEventInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolEventInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolEventInfo_Filter>;
};

export type SubscriptionProtocolTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolTokenBalance_Filter>;
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

export type SubscriptionReferralCodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReferralCodeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReferralCodeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReferralCodeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCodeDayData_Filter>;
};

export type SubscriptionReferralCodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReferralCode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCode_Filter>;
};

export type SubscriptionRepaidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRepaidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Repaid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Repaid_Filter>;
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

export type SubscriptionTraderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTraderDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTraderDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderDayData_Filter>;
};

export type SubscriptionTraderMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTraderMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderMarket_Filter>;
};

export type SubscriptionTraderTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTraderTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderTokenBalance_Filter>;
};

export type SubscriptionTradersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trader_Filter>;
};

export type SubscriptionWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawn_Filter>;
};

export type Token = {
  __typename?: "Token";
  /** token decimals */
  decimals: Scalars["BigInt"];
  /** format: tokenAddress */
  id: Scalars["ID"];
  /** token name */
  name: Scalars["String"];
  /** token symbol */
  symbol: Scalars["String"];
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  decimals?: InputMaybe<Scalars["BigInt"]>;
  decimals_gt?: InputMaybe<Scalars["BigInt"]>;
  decimals_gte?: InputMaybe<Scalars["BigInt"]>;
  decimals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  decimals_lt?: InputMaybe<Scalars["BigInt"]>;
  decimals_lte?: InputMaybe<Scalars["BigInt"]>;
  decimals_not?: InputMaybe<Scalars["BigInt"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  Name = "name",
  Symbol = "symbol",
}

export type Trader = {
  __typename?: "Trader";
  /** last updated block number */
  blockNumber: Scalars["BigInt"];
  /** trader day data */
  dayData?: Maybe<Array<TraderDayData>>;
  /** cumulative funding payment: - is received and + is sent */
  fundingPayment: Scalars["BigDecimal"];
  /** format: traderAddress */
  id: Scalars["ID"];
  /** cumulative liquidation fee */
  liquidationFee: Scalars["BigDecimal"];
  /** cumulative maker fee */
  makerFee: Scalars["BigDecimal"];
  /** total deposited non-settlement collateral */
  nonSettlementTokenBalances?: Maybe<Array<TraderTokenBalance>>;
  /** cumulative realize pnl */
  realizedPnl: Scalars["BigDecimal"];
  /** the referral code the trader has registered to themselves */
  refereeCode?: Maybe<ReferralCode>;
  /** the referral code the trader owns and provides to other traders */
  referrerCode?: Maybe<ReferralCode>;
  /** total deposited settlement collateral + cumulative total pnl */
  settlementTokenBalance: Scalars["BigDecimal"];
  /** last updated block timestamp */
  timestamp: Scalars["BigInt"];
  /** cumulative total pnl = realizedPnl (fee included) - fundingPayment - liquidationFee + makerFee */
  totalPnl: Scalars["BigDecimal"];
  /** A list of markets that the traders have traded on */
  traderMarkets: Array<TraderMarket>;
  /** cumulative trading fee */
  tradingFee: Scalars["BigDecimal"];
  /** cumulative trading volume */
  tradingVolume: Scalars["BigDecimal"];
};

export type TraderDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TraderDayData_Filter>;
};

export type TraderNonSettlementTokenBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TraderTokenBalance_Filter>;
};

export type TraderTraderMarketsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TraderMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TraderMarket_Filter>;
};

export type TraderDayData = {
  __typename?: "TraderDayData";
  /** timestamp */
  date: Scalars["BigInt"];
  /** format: <trader id>-<day id> */
  id: Scalars["ID"];
  /** trader address */
  trader: Trader;
  /** trading fee aggregated per day for trader */
  tradingFee: Scalars["BigDecimal"];
  /** trading volume aggregated per day for trader */
  tradingVolume: Scalars["BigDecimal"];
};

export type TraderDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  date?: InputMaybe<Scalars["BigInt"]>;
  date_gt?: InputMaybe<Scalars["BigInt"]>;
  date_gte?: InputMaybe<Scalars["BigInt"]>;
  date_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date_lt?: InputMaybe<Scalars["BigInt"]>;
  date_lte?: InputMaybe<Scalars["BigInt"]>;
  date_not?: InputMaybe<Scalars["BigInt"]>;
  date_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  trader?: InputMaybe<Scalars["String"]>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars["String"]>;
  trader_contains_nocase?: InputMaybe<Scalars["String"]>;
  trader_ends_with?: InputMaybe<Scalars["String"]>;
  trader_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_gt?: InputMaybe<Scalars["String"]>;
  trader_gte?: InputMaybe<Scalars["String"]>;
  trader_in?: InputMaybe<Array<Scalars["String"]>>;
  trader_lt?: InputMaybe<Scalars["String"]>;
  trader_lte?: InputMaybe<Scalars["String"]>;
  trader_not?: InputMaybe<Scalars["String"]>;
  trader_not_contains?: InputMaybe<Scalars["String"]>;
  trader_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  trader_not_ends_with?: InputMaybe<Scalars["String"]>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_not_in?: InputMaybe<Array<Scalars["String"]>>;
  trader_not_starts_with?: InputMaybe<Scalars["String"]>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_starts_with?: InputMaybe<Scalars["String"]>;
  trader_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tradingFee?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TraderDayData_OrderBy {
  Date = "date",
  Id = "id",
  Trader = "trader",
  TradingFee = "tradingFee",
  TradingVolume = "tradingVolume",
}

export type TraderMarket = {
  __typename?: "TraderMarket";
  /** baseToken address */
  baseToken: Scalars["Bytes"];
  /** last updated block number */
  blockNumber: Scalars["BigInt"];
  /** average entry price of the current position = abs(openNotional / positionSize) */
  entryPrice: Scalars["BigDecimal"];
  /** cumulative funding payment: - is received and + is sent */
  fundingPayment: Scalars["BigDecimal"];
  /** format: traderAddress-baseTokenAddress> */
  id: Scalars["ID"];
  /** cumulative liquidation fee */
  liquidationFee: Scalars["BigDecimal"];
  /** cumulative maker fee */
  makerFee: Scalars["BigDecimal"];
  /** foreign key to Market */
  marketRef: Market;
  /** average open notional of the current position */
  openNotional: Scalars["BigDecimal"];
  /** cumulative realize pnl */
  realizedPnl: Scalars["BigDecimal"];
  /** current taker position size */
  takerPositionSize: Scalars["BigDecimal"];
  /** last updated block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** foreign key to Trader */
  traderRef: Trader;
  /** cumulative trading fee */
  tradingFee: Scalars["BigDecimal"];
  /** cumulative trading volume */
  tradingVolume: Scalars["BigDecimal"];
};

export type TraderMarket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryPrice?: InputMaybe<Scalars["BigDecimal"]>;
  entryPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  entryPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  entryPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  entryPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  entryPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  entryPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  entryPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fundingPayment?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidationFee?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidationFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  makerFee?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  makerFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  marketRef?: InputMaybe<Scalars["String"]>;
  marketRef_?: InputMaybe<Market_Filter>;
  marketRef_contains?: InputMaybe<Scalars["String"]>;
  marketRef_contains_nocase?: InputMaybe<Scalars["String"]>;
  marketRef_ends_with?: InputMaybe<Scalars["String"]>;
  marketRef_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  marketRef_gt?: InputMaybe<Scalars["String"]>;
  marketRef_gte?: InputMaybe<Scalars["String"]>;
  marketRef_in?: InputMaybe<Array<Scalars["String"]>>;
  marketRef_lt?: InputMaybe<Scalars["String"]>;
  marketRef_lte?: InputMaybe<Scalars["String"]>;
  marketRef_not?: InputMaybe<Scalars["String"]>;
  marketRef_not_contains?: InputMaybe<Scalars["String"]>;
  marketRef_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  marketRef_not_ends_with?: InputMaybe<Scalars["String"]>;
  marketRef_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  marketRef_not_in?: InputMaybe<Array<Scalars["String"]>>;
  marketRef_not_starts_with?: InputMaybe<Scalars["String"]>;
  marketRef_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  marketRef_starts_with?: InputMaybe<Scalars["String"]>;
  marketRef_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openNotional?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  openNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  openNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl_lt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_lte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  takerPositionSize?: InputMaybe<Scalars["BigDecimal"]>;
  takerPositionSize_gt?: InputMaybe<Scalars["BigDecimal"]>;
  takerPositionSize_gte?: InputMaybe<Scalars["BigDecimal"]>;
  takerPositionSize_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  takerPositionSize_lt?: InputMaybe<Scalars["BigDecimal"]>;
  takerPositionSize_lte?: InputMaybe<Scalars["BigDecimal"]>;
  takerPositionSize_not?: InputMaybe<Scalars["BigDecimal"]>;
  takerPositionSize_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  traderRef?: InputMaybe<Scalars["String"]>;
  traderRef_?: InputMaybe<Trader_Filter>;
  traderRef_contains?: InputMaybe<Scalars["String"]>;
  traderRef_contains_nocase?: InputMaybe<Scalars["String"]>;
  traderRef_ends_with?: InputMaybe<Scalars["String"]>;
  traderRef_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  traderRef_gt?: InputMaybe<Scalars["String"]>;
  traderRef_gte?: InputMaybe<Scalars["String"]>;
  traderRef_in?: InputMaybe<Array<Scalars["String"]>>;
  traderRef_lt?: InputMaybe<Scalars["String"]>;
  traderRef_lte?: InputMaybe<Scalars["String"]>;
  traderRef_not?: InputMaybe<Scalars["String"]>;
  traderRef_not_contains?: InputMaybe<Scalars["String"]>;
  traderRef_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  traderRef_not_ends_with?: InputMaybe<Scalars["String"]>;
  traderRef_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  traderRef_not_in?: InputMaybe<Array<Scalars["String"]>>;
  traderRef_not_starts_with?: InputMaybe<Scalars["String"]>;
  traderRef_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  traderRef_starts_with?: InputMaybe<Scalars["String"]>;
  traderRef_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tradingFee?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TraderMarket_OrderBy {
  BaseToken = "baseToken",
  BlockNumber = "blockNumber",
  EntryPrice = "entryPrice",
  FundingPayment = "fundingPayment",
  Id = "id",
  LiquidationFee = "liquidationFee",
  MakerFee = "makerFee",
  MarketRef = "marketRef",
  OpenNotional = "openNotional",
  RealizedPnl = "realizedPnl",
  TakerPositionSize = "takerPositionSize",
  Timestamp = "timestamp",
  Trader = "trader",
  TraderRef = "traderRef",
  TradingFee = "tradingFee",
  TradingVolume = "tradingVolume",
}

export type TraderTokenBalance = {
  __typename?: "TraderTokenBalance";
  /** amount */
  amount: Scalars["BigDecimal"];
  /** format: traderAddress-collateralTokenAddress */
  id: Scalars["ID"];
  /** collateral token */
  token: Token;
  /** foreign key to Trader */
  trader: Trader;
};

export type TraderTokenBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  trader?: InputMaybe<Scalars["String"]>;
  trader_?: InputMaybe<Trader_Filter>;
  trader_contains?: InputMaybe<Scalars["String"]>;
  trader_contains_nocase?: InputMaybe<Scalars["String"]>;
  trader_ends_with?: InputMaybe<Scalars["String"]>;
  trader_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_gt?: InputMaybe<Scalars["String"]>;
  trader_gte?: InputMaybe<Scalars["String"]>;
  trader_in?: InputMaybe<Array<Scalars["String"]>>;
  trader_lt?: InputMaybe<Scalars["String"]>;
  trader_lte?: InputMaybe<Scalars["String"]>;
  trader_not?: InputMaybe<Scalars["String"]>;
  trader_not_contains?: InputMaybe<Scalars["String"]>;
  trader_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  trader_not_ends_with?: InputMaybe<Scalars["String"]>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_not_in?: InputMaybe<Array<Scalars["String"]>>;
  trader_not_starts_with?: InputMaybe<Scalars["String"]>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  trader_starts_with?: InputMaybe<Scalars["String"]>;
  trader_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TraderTokenBalance_OrderBy {
  Amount = "amount",
  Id = "id",
  Token = "token",
  Trader = "trader",
}

export type Trader_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dayData_?: InputMaybe<TraderDayData_Filter>;
  fundingPayment?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigDecimal"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidationFee?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidationFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  makerFee?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  makerFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  makerFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nonSettlementTokenBalances_?: InputMaybe<TraderTokenBalance_Filter>;
  realizedPnl?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_gte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  realizedPnl_lt?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_lte?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not?: InputMaybe<Scalars["BigDecimal"]>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  refereeCode?: InputMaybe<Scalars["String"]>;
  refereeCode_?: InputMaybe<ReferralCode_Filter>;
  refereeCode_contains?: InputMaybe<Scalars["String"]>;
  refereeCode_contains_nocase?: InputMaybe<Scalars["String"]>;
  refereeCode_ends_with?: InputMaybe<Scalars["String"]>;
  refereeCode_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  refereeCode_gt?: InputMaybe<Scalars["String"]>;
  refereeCode_gte?: InputMaybe<Scalars["String"]>;
  refereeCode_in?: InputMaybe<Array<Scalars["String"]>>;
  refereeCode_lt?: InputMaybe<Scalars["String"]>;
  refereeCode_lte?: InputMaybe<Scalars["String"]>;
  refereeCode_not?: InputMaybe<Scalars["String"]>;
  refereeCode_not_contains?: InputMaybe<Scalars["String"]>;
  refereeCode_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  refereeCode_not_ends_with?: InputMaybe<Scalars["String"]>;
  refereeCode_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  refereeCode_not_in?: InputMaybe<Array<Scalars["String"]>>;
  refereeCode_not_starts_with?: InputMaybe<Scalars["String"]>;
  refereeCode_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  refereeCode_starts_with?: InputMaybe<Scalars["String"]>;
  refereeCode_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  referrerCode?: InputMaybe<Scalars["String"]>;
  referrerCode_?: InputMaybe<ReferralCode_Filter>;
  referrerCode_contains?: InputMaybe<Scalars["String"]>;
  referrerCode_contains_nocase?: InputMaybe<Scalars["String"]>;
  referrerCode_ends_with?: InputMaybe<Scalars["String"]>;
  referrerCode_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referrerCode_gt?: InputMaybe<Scalars["String"]>;
  referrerCode_gte?: InputMaybe<Scalars["String"]>;
  referrerCode_in?: InputMaybe<Array<Scalars["String"]>>;
  referrerCode_lt?: InputMaybe<Scalars["String"]>;
  referrerCode_lte?: InputMaybe<Scalars["String"]>;
  referrerCode_not?: InputMaybe<Scalars["String"]>;
  referrerCode_not_contains?: InputMaybe<Scalars["String"]>;
  referrerCode_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  referrerCode_not_ends_with?: InputMaybe<Scalars["String"]>;
  referrerCode_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  referrerCode_not_in?: InputMaybe<Array<Scalars["String"]>>;
  referrerCode_not_starts_with?: InputMaybe<Scalars["String"]>;
  referrerCode_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  referrerCode_starts_with?: InputMaybe<Scalars["String"]>;
  referrerCode_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  settlementTokenBalance?: InputMaybe<Scalars["BigDecimal"]>;
  settlementTokenBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  settlementTokenBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  settlementTokenBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  settlementTokenBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  settlementTokenBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  settlementTokenBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  settlementTokenBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalPnl?: InputMaybe<Scalars["BigDecimal"]>;
  totalPnl_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalPnl_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalPnl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalPnl_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalPnl_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalPnl_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalPnl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  traderMarkets_?: InputMaybe<TraderMarket_Filter>;
  tradingFee?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Trader_OrderBy {
  BlockNumber = "blockNumber",
  DayData = "dayData",
  FundingPayment = "fundingPayment",
  Id = "id",
  LiquidationFee = "liquidationFee",
  MakerFee = "makerFee",
  NonSettlementTokenBalances = "nonSettlementTokenBalances",
  RealizedPnl = "realizedPnl",
  RefereeCode = "refereeCode",
  ReferrerCode = "referrerCode",
  SettlementTokenBalance = "settlementTokenBalance",
  Timestamp = "timestamp",
  TotalPnl = "totalPnl",
  TraderMarkets = "traderMarkets",
  TradingFee = "tradingFee",
  TradingVolume = "tradingVolume",
}

export type Withdrawn = {
  __typename?: "Withdrawn";
  /** amount */
  amount: Scalars["BigDecimal"];
  /** block number */
  blockNumber: Scalars["BigInt"];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars["BigInt"];
  /** collateralToken address */
  collateralToken: Scalars["Bytes"];
  /** format: txHash-eventLogIndex */
  id: Scalars["ID"];
  /** block timestamp */
  timestamp: Scalars["BigInt"];
  /** trader address */
  trader: Scalars["Bytes"];
  /** transaction hash */
  txHash: Scalars["Bytes"];
};

export type Withdrawn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralToken?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_not?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trader?: InputMaybe<Scalars["Bytes"]>;
  trader_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trader_not?: InputMaybe<Scalars["Bytes"]>;
  trader_not_contains?: InputMaybe<Scalars["Bytes"]>;
  trader_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash?: InputMaybe<Scalars["Bytes"]>;
  txHash_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  txHash_not?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  txHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum Withdrawn_OrderBy {
  Amount = "amount",
  BlockNumber = "blockNumber",
  BlockNumberLogIndex = "blockNumberLogIndex",
  CollateralToken = "collateralToken",
  Id = "id",
  Timestamp = "timestamp",
  Trader = "trader",
  TxHash = "txHash",
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

export type DepositedsQueryVariables = Exact<{
  trader: Scalars["Bytes"];
}>;

export type DepositedsQuery = {
  __typename?: "Query";
  depositeds: Array<{
    __typename?: "Deposited";
    id: string;
    trader: any;
    amount: any;
    collateralToken: any;
    txHash: any;
    blockNumber: any;
    blockNumberLogIndex: any;
  }>;
};

export const DepositedsDocument = `
    query depositeds($trader: Bytes!) {
  depositeds(where: {trader: $trader}) {
    id
    trader
    amount
    collateralToken
    txHash
    blockNumber
    blockNumberLogIndex
  }
}
    `;
export const useDepositedsQuery = <TData = DepositedsQuery, TError = unknown>(
  variables: DepositedsQueryVariables,
  options?: UseQueryOptions<DepositedsQuery, TError, TData>
) =>
  useQuery<DepositedsQuery, TError, TData>(
    ["depositeds", variables],
    fetcher<DepositedsQuery, DepositedsQueryVariables>(
      DepositedsDocument,
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
  possibleTypes: {},
};
export default result;
