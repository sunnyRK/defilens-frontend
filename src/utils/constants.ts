import { ChainId } from "@thirdweb-dev/react";

// export const chainId = ChainId.Mumbai;
// export const API_URL = "https://api-mumbai.lens.dev/";
// // process.env.NEXT_PUBLIC_LENS_API_URL || "https://api-mumbai.lens.dev/";

// // Lens Constants Mumbai polygon
// export const CONTRACT_ADDRESS = "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82";
// export const Collect_Module = "0x0BE6bD7092ee83D44a6eC1D949626FeE48caB30c";
// export const Reference_Module = "0x0000000000000000000000000000000000000000";

export const chainId = ChainId.Polygon;
export const API_URL = "https://api.lens.dev/";

// Lens Constants Ethmainnet Mainnet polygon
export const CONTRACT_ADDRESS = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"; // mainnet polygon
export const Collect_Module = "0x23b9467334bEb345aAa6fd1545538F3d54436e96";
export const Reference_Module = "0x081a84ABF515302a276D98Dc551E69f3CC33A833";

export const ReferenceModuleInitData =
  "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002";

// ZERO_BYTES Constants
export const ZERO_BYTES =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

// Biconomy SCW for DefiLens Constants
export const Smart_Contract_Wallet =
  "0x2333d2a01526265e4608b8c598BF9a9b65c66F19";

// All Global url, rpc Constants
export const IPFS_URL =
  "https://media.lenster.xyz/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/";
// export const IPFS_INFURA_URL = "https://ipfs.infura.io:5001";
export const IPFS_INFURA_URL = "https://ipfs.infura.io:5001";
export const POLYGONSCAN_MAINNET = "https://polygonscan.com/tx/";
export const ARWEAVE_URI = "http://arweave.net/";

// All TheGraph Api url Constants
export const AAVE_V2_MATIC_SUBGRAPH =
  "https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic";
export const AAVE_V2_ETHEREUM_SUBGRAPH =
  "https://api.thegraph.com/subgraphs/name/messari/aave-v2-ethereum";
export const UNISWAP_V3_ETHEREUM_SUBGRAPH =
  "https://api.thegraph.com/subgraphs/name/messari/uniswap-v3-ethereum";
// All Secrets Constants
export const ProjectId = process.env.NEXT_PUBLIC_PROJECT_ID;
export const ProjectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;
export const Authorization = "Basic " + btoa(ProjectId + ":" + ProjectSecret);
export const ProjectId_2 = process.env.NEXT_PUBLIC_PROJECT_ID_2;
export const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
export const POLYGON_ETHERSCAN_API_KEY =
  process.env.NEXT_PUBLIC_POLYGON_ETHERSCAN_API_KEY;

// https://lens.infura-ipfs.io/ipfs/QmbzvmZm29afpMMwcoNFXt6EFa7E387hFvBYEnFHtcjCb2/LPERP.png
// https://ipfs.io/ipfs/QmbzvmZm29afpMMwcoNFXt6EFa7E387hFvBYEnFHtcjCb2/LPERP.png
