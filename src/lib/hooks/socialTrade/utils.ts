// export const name = "sunny";
import { BigNumber, ethers } from "ethers";
import abi from "../../../abis/abi.json";
import {
  ETHERSCAN_API_KEY,
  POLYGON_ETHERSCAN_API_KEY,
  ProjectId_2,
} from "../../../utils/constants";
import { AbiFetcher } from "@instadapp/utils";
const abiFetcher = new AbiFetcher();
import web3 from "web3";
import axios from "axios";
import InputDataDecoder from "ethereum-input-data-decoder";
import { parseEther } from "ethers/lib/utils";

const proxy_contract_abi = [
  {
    inputs: [{ internalType: "address", name: "admin", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_logic", type: "address" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
const aaveDepositAbi = [
  "function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode)",
];

export const getCurrentProvider = async () => {
  try {
    let provider = new ethers.providers.Web3Provider(web3.givenProvider);
    return provider;
  } catch (error) {
    console.log("getCurrentProvider-error", error);
    return;
  }
};

export const getAbiURL = async (network: any, toAddress: any) => {
  try {
    if (network === "polygon") {
      const URL = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${toAddress}&apikey=${POLYGON_ETHERSCAN_API_KEY}`;
      const resABI = await axios.get(URL);
      return JSON.parse(resABI.data.result);
    }
  } catch (error) {
    console.log("getAbiURL-error", error);
    return;
  }
};

export const getOldInputs = async (network: any, txHash: any, signer: any) => {
  try {
    if (network === "polygon") {
      console.log("txHash", txHash);
      const reciept = await getReciept("polygon", txHash);

      const txIndex = await BigNumber.from(
        reciept.transactionIndex
      ).toHexString();
      const zeroX = "0x";
      const txBlockNumber = await zeroX.concat(
        reciept.blockNumber.toString(16)
      );

      const URL = `https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByBlockNumberAndIndex&tag=${txBlockNumber}&index=${txIndex}&apikey=${POLYGON_ETHERSCAN_API_KEY}`;
      const resDATA = await axios.get(URL);
      console.log("getMethodDataFromTx=resDATA", resDATA);
      const input = resDATA.data.result.input; // getInput bytesData

      const ABI = await getAbiURL("polygon", reciept.to);
      console.log("getMethodDataFromTx=ABI", ABI, reciept.to);

      const isProxy = await isProxyContract(reciept.to, ABI, signer);
      console.log("getMethodDataFromTx=isProxy", isProxy);

      // const decoder = new InputDataDecoder(ABI);
      // const result = decoder.decodeData(input);
      // console.log('getMethodDataFromTx=result', result, result.inputs[0], result.inputs[1]);

      // return result.inputs;
    }
  } catch (error) {
    console.log("getOldInputs-error", error);
    return;
  }
};

export const isProxyContract = async (
  contractAddress: any,
  ABI: any,
  signer: any
) => {
  try {
    let provider: any = await getCurrentProvider();
    if (!provider) throw "provider not fetched";
    const iface = new ethers.utils.Interface(ABI);
    const contract = new ethers.Contract(
      contractAddress,
      proxy_contract_abi,
      signer
    );

    console.log("contract", contract);
    const implementation_contract_address = await contract
      .connect(signer)
      .implementation.call();
    console.log(
      "implementation_contract_address",
      implementation_contract_address
    );
    if (!implementation_contract_address) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("isProxyContract-error", error);
    return;
  }
};

export const getReciept = async (network: any, txHash: any) => {
  try {
    if (network === "polygon") {
      let provider: any = await getCurrentProvider();
      if (!provider) throw "provider not fetched";
      const receipt = await provider.getTransactionReceipt(txHash);
      return receipt;
    }
  } catch (error) {
    console.log("getReciept-error", error);
    return;
  }
};

export const makeCallData = async (abi: any, methodName: any, params: any) => {
  try {
    const aaveIFace = new ethers.utils.Interface(abi);
    const data = aaveIFace.encodeFunctionData(methodName, params);
    return data;
  } catch (error) {
    console.log("makeCallData-error", error);
    return;
  }
};

export const sendTx = async (signer: any, toAddress: any, data: any) => {
  try {
    const tx = await signer.sendTransaction({
      to: toAddress,
      data: data,
    });
    return tx;
  } catch (error) {
    console.log("sendTx-error", error);
    return;
  }
};

export const checkAllowance = async (
  erc20Address: any,
  from: any,
  spender: any,
  amount: any
) => {
  try {
    let provider: any = await getCurrentProvider();
    if (!provider) throw "provider not fetched";
    const contract = new ethers.Contract(erc20Address, abi, provider);
    const allowance = await contract.allowance(from, spender);
    if (BigNumber.from(allowance).gte(amount)) {
      return true; // allowance is given
    }
    return false; // // allowance is not given
  } catch (error) {
    console.log("checkAllowance-error", error);
    return;
  }
};

export const approve = async (
  erc20Address: any,
  signer: any,
  spender: any,
  amount: any
) => {
  try {
    if (BigNumber.from(amount).lte(0)) return;
    let provider: any = await getCurrentProvider();
    if (!provider) throw "provider not fetched";
    const contract = new ethers.Contract(erc20Address, abi, provider);
    await contract.connect(signer).approve(spender, amount);
  } catch (error) {
    console.log("approve-error", error);
    return;
  }
};
