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
// import abiDecoder from "abi-decoder";
import InputDataDecoder from "ethereum-input-data-decoder";
import { parseEther } from "ethers/lib/utils";
import {
  getAbiURL,
  getOldInputs,
  getReciept,
  makeCallData,
  sendTx,
} from "./utils";
import { feedKeyData } from "../../../utils/utils";

const CONTRACT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const URL = `https://api.etherscan.io/api?module=contract&action=getabi&address=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`;
const URL2 = `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByBlockNumberAndIndex&tag=0xC6331D&index=0x11A&apikey=${ETHERSCAN_API_KEY}`;
const methodName = "tranefer";

// bytes4 private constant FUNC_SELECTOR = bytes4(keccak256("someFunc(address,uint256)"));

export const sendAlternateSocialTrade = async (signer: any, txHash: any) => {
  // take txHash
  // check Network of Txhash

  // take receipts
  const reciept = await getReciept("polygon", txHash);
  console.log("reciept", reciept);

  // const oldInputs: any =
  await getOldInputs("polygon", txHash, signer);
  // console.log('oldInputs', oldInputs);

  // const socialTradeData = await feedKeyData['AAVE_V2_DEPOSIT_MATIC'];
  // console.log('socialTradeData', socialTradeData);

  // const txdata = await makeCallData(
  //   socialTradeData.alternate_abi,
  //   socialTradeData.alternate_methodName,
  //   [
  //     oldInputs[0],
  //     oldInputs[1],
  //     // parseEther('10'),
  //     signer._address,
  //     0
  //   ]
  // );
  // console.log('txdata', txdata);

  // const tx = await sendTx(signer, socialTradeData.alternate_contractAddress, txdata);
  // console.log('tx', tx);

  // check Key of protocol txHash
  // if key's var isAlternate true
};

export const getMethodDataFromTx2 = async (
  signer: any,
  txHash: any,
  reciept: any
) => {
  console.log(
    "event-toHex",
    reciept,
    BigNumber.from(reciept.transactionIndex).toHexString()
  );

  // const URL = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${reciept.to}&apikey=${POLYGON_ETHERSCAN_API_KEY}`;
  // const resABI = await axios.get(URL);
  // const ABI = JSON.parse(resABI.data.result);
  // console.log("event-getMethodDataFromTx=1: ", ABI, ABI.length); // getABI

  const ABI = await getAbiURL("polygon", reciept.to);
  console.log("event-ABI: ", ABI); // getABI

  const txIndex = BigNumber.from(reciept.transactionIndex).toHexString();
  const zeroX = "0x";
  const txBlockNumber = zeroX.concat(reciept.blockNumber.toString(16));

  console.log("event-txIndex", txIndex);
  console.log("event-txBlockNumber", txBlockNumber);

  // const URL4 = `https://api.polygonscan.com/api
  // ?module=proxy
  // &action=eth_getTransactionByHash
  // &txhash=0x7fb7401e99b8a164df6667f8ec5042fc00cafa8213d31987aad8cf129c94e9ff
  // &apikey=${POLYGON_ETHERSCAN_API_KEY}`;
  // const URL3 = `https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByBlockNumberAndIndex&tag=0x16370b2&index=0x37&apikey=${POLYGON_ETHERSCAN_API_KEY}`
  const URL2 = `https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByBlockNumberAndIndex&tag=${txBlockNumber}&index=${txIndex}&apikey=${POLYGON_ETHERSCAN_API_KEY}`;
  const resDATA = await axios.get(URL2);
  const input = resDATA.data.result.input; // getInput bytesData
  console.log("event-getMethodDataFromTx=22: ", input);

  const decoder = new InputDataDecoder(ABI);
  const result = decoder.decodeData(input);
  console.log("getMethodDataFromTx=result", result.inputs[0], result.inputs[1]);

  const iface = new ethers.utils.Interface(ABI);

  let inputType1: any;
  let inputType2: any;

  // params Type
  ABI.findIndex((x: any, index: any) => {
    if (x.name === "ZapIn" && x.inputs.length > 0) {
      console.log("getMethodDataFromTx=340", x);
      console.log(
        "getMethodDataFromTx=341",
        x.inputs[0].type,
        x.inputs[1].type
      );
      inputType1 = x.inputs[0].type;
      inputType2 = x.inputs[1].type;
    }
    // console.log("x.index", index);
    // return x.index;
  });

  const functionCall = `${methodName}(${inputType1},${inputType2})`;
  console.log("getMethodDataFromTx=functionCall", functionCall, signer);

  const aaveIFace = new ethers.utils.Interface(aaveDepositAbi);

  const datas = aaveIFace.encodeFunctionData("deposit", [
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    parseEther("10"),
    signer._address,
    0,
  ]);

  const tx = await signer.sendTransaction({
    to: "0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf",
    data: datas,
  });

  // console.log("getMethodDataFromTx=tx", tx);
};

export const callSocialTrade = async (signer: any, data: any) => {
  const aaveIFace = new ethers.utils.Interface(data.calldata[2]);
  console.log("calldata", data);
  // const deposit = "deposit";
  const datas = aaveIFace.encodeFunctionData(
    data.calldata[1],
    data.calldata[0]
  );
  const tx = await signer.sendTransaction({
    to: data.to,
    data: datas,
  });
  console.log("callSocialTrade=tx", tx);
};
