import { ethers } from "ethers";
import abi from "../abis/abi.json";
import { ProjectId_2 } from "../utils/constants";

export const getEvent = async () => {
  const provider = new ethers.providers.InfuraProvider("mainnet", ProjectId_2);
  const receipt = await provider.getTransactionReceipt(
    "0xad0c0b67d02ac0dfca430ad1e2b8545384a208f3800a2e8f8ccde89eb81d20ef"
  );
  console.log("events=1: ", receipt, receipt.transactionHash);

  const contract = new ethers.Contract(
    "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
    abi,
    provider
  );
  // const events = await contract.queryFilter(contract.filters.allEvents(), receipt.blockNumber);
  console.log("events=2: ", contract.filters);

  const filter = contract.filters.Transfer(null, null, null);

  const reaults = await contract.queryFilter(filter, receipt.blockHash);
  console.log("events=3: ", reaults);

  for (const event of reaults.filter(
    (e) => e.transactionHash == receipt.transactionHash
  )) {
    console.log("events=4: ", event.args);
    return event;
  }
};

export const getContractByTxHash = async (txHash: any, network: any) => {
  const provider = new ethers.providers.InfuraProvider(network, ProjectId_2);
  const receipt = await provider.getTransactionReceipt(txHash);
  console.log("events=1: ", receipt, receipt.transactionHash);

  // const contract = new ethers.Contract(
  //   receipt.to,
  //   fetchedAbi,
  //   provider
  // );
  return receipt.to;
  // // const events = await contract.queryFilter(contract.filters.allEvents(), receipt.blockNumber);
  // console.log("events=2: ", contract.filters);

  // const filter = contract.filters.Transfer(null, null, null);

  // const reaults = await contract.queryFilter(filter, receipt.blockHash);
  // console.log("events=3: ", reaults);

  // for (const event of reaults.filter(
  //   (e) => e.transactionHash == receipt.transactionHash
  // )) {
  //   console.log("events=4: ", event.args);
  //   return event;
  // }
};
