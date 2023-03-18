import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK, useSigner, useStorageUpload } from "@thirdweb-dev/react";
import {
  useBroadcastMutation,
  useCreateCollectTypedDataMutation,
} from "../../../query/graphql/generated";
import useLensUser from "../../auth/useLensUser";
import {
  signTypedDataWithOmmittedTypename,
  splitSignature,
} from "../../helpers";
import {
  LENS_CONTRACT_ABI,
  LENS_CONTRACT_ADDRESS,
} from "../../../utils/contracts";
import useLogin from "../../auth/useLogin";
import { pollUntilIndexed } from "../../indexing/tx_index";
import { ethers } from "ethers";

export function useCollect() {
  const { mutateAsync: requestTypedData } = useCreateCollectTypedDataMutation();
  const { mutateAsync: requestBroadCastTypedData } = useBroadcastMutation();
  const { mutateAsync: uploadToIpfs } = useStorageUpload();
  const { profileQuery } = useLensUser();
  const address = useAddress();
  const signer = useSigner();
  const sdk = useSDK();
  const { mutateAsync: loginUser } = useLogin();

  async function createCollect(pubId: string) {
    console.log(
      "create collect address",
      address,
      profileQuery.data?.defaultProfile?.id
    );

    console.log("create collect: PubId: ", pubId);
    // 0. Login
    await loginUser();

    const collectResult = await requestTypedData({
      request: {
        publicationId: pubId,
      },
    });
    console.log("create collect: createCollectTypedData", collectResult);

    const { domain, types, value } =
      collectResult.createCollectTypedData.typedData;
    const typedData = collectResult.createCollectTypedData.typedData;
    console.log("create collect: typedData", typedData);

    if (!sdk) return;

    // 2. Sign the typed data
    const signature = await signTypedDataWithOmmittedTypename(
      sdk,
      domain,
      types,
      value
    );
    console.log("create collect: signature", signature);

    const { v, r, s } = splitSignature(signature.signature);

    const lensHubContract = new ethers.Contract(
      LENS_CONTRACT_ADDRESS,
      LENS_CONTRACT_ABI,
      signer
    );

    const tx = await lensHubContract.collectWithSig({
      collector: address,
      profileId: profileQuery.data?.defaultProfile?.id,
      pubId: typedData.value.pubId,
      data: typedData.value.data,
      sig: {
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      },
    });

    console.log("create post: tx hash", tx, tx.hash);
    await tx.wait();
    console.log("create post: poll until indexed");
    const indexedResult = await pollUntilIndexed({ txHash: tx.hash });

    console.log("create post: profile has been indexed", indexedResult);

    // const lensHubContract = await sdk.getContractFromAbi(
    //   LENS_CONTRACT_ADDRESS,
    //   LENS_CONTRACT_ABI,
    // );
    // console.log("create collect: profileQuery", profileQuery);

    // const tx = await lensHubContract.call("collectWithSig", {
    //   collector: address,
    //   profileId: profileQuery.data?.defaultProfile?.id,
    //   pubId: typedData.value.pubId,
    //   data: typedData.value.data,
    //   sig: {
    //     v,
    //     r,
    //     s,
    //     deadline: typedData.value.deadline,
    //   },
    // });
    // console.log("create collect: tx hash", tx, tx.receipt.transactionHash);
    // const indexedResult = await pollUntilIndexed({
    //   txHash: tx.receipt.transactionHash,
    // });
    // console.log("create collect: indexedResult", indexedResult);
  }

  return useMutation(createCollect);
}
