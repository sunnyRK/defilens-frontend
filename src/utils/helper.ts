import { ethers } from "ethers";
import erc20abi from "../abis/erc20.json";
import date from "date-and-time";
import BigNumber from "bignumber.js";

export enum Network {
  ETHEREUM_MAINNET = "ethereum",
  POLYGON_MAINNET = "polygon",
  OPTIMISM_MAINNET = "optimism",
  GNOSIS_MAINNET = "gnosis",
  BINANCE_SMART_CHAIN_MAINNET = "binance-smart-chain",
  FANTOM_OPERA_MAINNET = "fantom",
  AVALANCHE_MAINNET = "avalanche",
  ARBITRUM_MAINNET = "arbitrum",
  CELO_MAINNET = "celo",
  HARMONY_MAINNET = "harmony",
  MOONRIVER_MAINNET = "moonriver",
  BITCOIN_MAINNET = "bitcoin",
  CRONOS_MAINNET = "cronos",
  AURORA_MAINNET = "aurora",
  EVMOS_MAINNET = "evmos",
}

export const NETWORK_IDS: Record<Network, number | null> = {
  [Network.ETHEREUM_MAINNET]: 1,
  [Network.BINANCE_SMART_CHAIN_MAINNET]: 56,
  [Network.GNOSIS_MAINNET]: 100,
  [Network.POLYGON_MAINNET]: 137,
  [Network.OPTIMISM_MAINNET]: 10,
  [Network.FANTOM_OPERA_MAINNET]: 250,
  [Network.AVALANCHE_MAINNET]: 43114,
  [Network.ARBITRUM_MAINNET]: 42161,
  [Network.CELO_MAINNET]: 42220,
  [Network.HARMONY_MAINNET]: 1666600000,
  [Network.MOONRIVER_MAINNET]: 1285,
  [Network.CRONOS_MAINNET]: 25,
  [Network.AURORA_MAINNET]: 1313161554,
  [Network.BITCOIN_MAINNET]: 1285,
  [Network.EVMOS_MAINNET]: 9001,
};

export const DEFAULT_REGISTRY: Record<
  Exclude<Network, Network.BITCOIN_MAINNET>,
  string
> = {
  [Network.ARBITRUM_MAINNET]: "https://arb1.arbitrum.io/rpc",
  [Network.AVALANCHE_MAINNET]: "https://avalanche.public-rpc.com",
  [Network.BINANCE_SMART_CHAIN_MAINNET]: "https://bsc-dataseed.binance.org/",
  [Network.CELO_MAINNET]: "https://forno.celo.org",
  [Network.ETHEREUM_MAINNET]: "https://cloudflare-eth.com",
  [Network.FANTOM_OPERA_MAINNET]: "https://rpc.ftm.tools/",
  [Network.GNOSIS_MAINNET]: "https://rpc.gnosischain.com/",
  [Network.HARMONY_MAINNET]: "https://harmony.public-rpc.com",
  [Network.MOONRIVER_MAINNET]: "https://rpc.moonriver.moonbeam.network",
  [Network.OPTIMISM_MAINNET]: "https://mainnet.optimism.io",
  [Network.POLYGON_MAINNET]: "https://polygon-rpc.com ",
  [Network.CRONOS_MAINNET]: "https://evm-cronos.crypto.org",
  [Network.AURORA_MAINNET]: "https://mainnet.aurora.dev",
  [Network.EVMOS_MAINNET]: "https://eth.bd.evmos.org:8545",
};

export type ContractData = {
  name: string;
  symbol: string;
  decimals: string;
  totalSupply: string;
};

export const getERC20Details = async (
  contractAddress: string,
  network: Network
): Promise<ContractData | void> => {
  try {
    const provider = await getProvider(
      DEFAULT_REGISTRY[
        network as keyof Record<
          Exclude<Network, Network.BITCOIN_MAINNET>,
          string
        >
      ]
    );
    const contract = new ethers.Contract(contractAddress, erc20abi, provider);
    const totalSupply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const symbol = await contract.symbol();
    const name = await contract.name();

    console.log("getERC20Details-data-: ", totalSupply.toString());
    console.log("getERC20Details-data: ", decimals.toString());
    console.log("getERC20Details-data: ", symbol.toString());
    console.log("getERC20Details-data: ", name.toString());

    return {
      name,
      symbol,
      decimals,
      totalSupply,
    };
  } catch (error) {
    console.log("getERC20Details-error", error);
  }
};

export const getProvider = (network: any) => {
  return new ethers.providers.StaticJsonRpcProvider(network);
};

export const formatDate = (dates: string) => {
  var d = new Date(dates);
  return date.format(d, "ddd, MMM DD YYYY"); // => 'Fri, Jan 02 2015'
};

export function getAmount(amount: any, decimals: any) {
  return BigNumber(amount).dividedBy(BigNumber(10).pow(decimals)).toString();
}

export const formatUrl = (url: string) => {
  return url.split("//");
};
