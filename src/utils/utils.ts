import { DepositsDocument as DepositsDocumentEth } from "../query/thegraph/aaveV2Eth/generated";
import {
  DepositsDocument as DepositsDocumentMatic,
  RedeemUnderlyingDocument,
} from "../query/thegraph/aaveV2Matic/generated";
import { SwapsDocument } from "../query/thegraph/UniV3Eth/generated";
import {
  AAVE_V2_ETHEREUM_SUBGRAPH,
  AAVE_V2_MATIC_SUBGRAPH,
  UNISWAP_V3_ETHEREUM_SUBGRAPH,
} from "./constants";
import { Network } from "./helper";

export const protocolOptions = [
  {
    key: "aaveV2MaticDeposit",
    text: "Aave-V2-Matic-Deposit",
    value: "aave_deposit_matic_v2",
  },
  {
    key: "aaveV2MaticWithdraw",
    text: "Aave-V2-Matic-Withdraw",
    value: "aave_withdraw_matic_v2",
  },
  {
    key: "uniSwapV3Eth",
    text: "Uni-Swap-V3-ETH",
    value: "uni_swap_v3_eth",
  },
  {
    key: "aaveV2Eth",
    text: "Aave-V2-ETH",
    value: "aave_deposit_eth_v2",
  },
];

export const queryKeyToMetadata: any = {
  aave_deposit_matic_v2: {
    apiUrl: AAVE_V2_MATIC_SUBGRAPH,
    query: DepositsDocumentMatic,
    key: "AAVE_V2_DEPOSIT_MATIC", // to match with frontend component
    chainId: "137",
    chainName: Network.POLYGON_MAINNET,
    version: "V2",
    name: "AAVE",
    action: "Deposit",
    content: "Lended Asset on Aave V2 protocol-testMumbai.",
    description:
      "Lended Asset using Deposit/Mint method of Aave V2 protocol-testMumbai.",
  },
  aave_withdraw_matic_v2: {
    apiUrl: AAVE_V2_MATIC_SUBGRAPH,
    query: RedeemUnderlyingDocument,
    key: "AAVE_V2_WITHDRAW_MATIC", // to match with frontend component
    chainId: "137",
    chainName: Network.POLYGON_MAINNET,
    version: "V2",
    name: "AAVE",
    action: "Withdraw",
    content: "Withdraw the Lended Asset on Aave V2 protocol-testMumbai.",
    description:
      "Lended Asset using Withdraw/Burn method of Aave V2 protocol-testMumbai.",
  },
  aave_deposit_eth_v2: {
    apiUrl: AAVE_V2_ETHEREUM_SUBGRAPH,
    query: DepositsDocumentEth,
    key: "AAVE_V2_DEPOSIT_ETHEREUM", // to match with frontend component
    chainId: "1",
    chainName: Network.ETHEREUM_MAINNET,
    version: "V2",
    name: "AAVE",
    action: "Deposit",
    content: "Lended Asset on Aave V2 protocol.",
    description: "Lended Asset using Deposit/Mint method of Aave V2 protocol.",
  },
  uni_swap_v3_eth: {
    apiUrl: UNISWAP_V3_ETHEREUM_SUBGRAPH,
    query: SwapsDocument,
    key: "UNISWAP_V3_SWAP_ETHEREUM", // to match with frontend component
    chainId: "1",
    chainName: Network.ETHEREUM_MAINNET,
    version: "V3",
    name: "Uniswap",
    action: "Swap",
    content: "Decentralized Exchange",
    description:
      "Decentralized Exchange - a protocol for trading and automated liquidity provision on Ethereum..",
  },
};

export const feedKeyData: any = {
  AAVE_V2_DEPOSIT_MATIC: {
    methodName: "ZapIn",
    contractAddress: "0x8DfDea6A4818d2AA7463edB9A8841cB0c04255aF",
    abi: "",
    isAlternate: true,
    alternate_methodName: "deposit",
    alternate_contractAddress: "0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf",
    alternate_abi: [
      "function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode)",
    ],
    // params: 'deposit(address,uint256,address,uint16)'
  },
};
