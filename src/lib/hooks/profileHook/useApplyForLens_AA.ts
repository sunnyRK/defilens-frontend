import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload, useSigner } from "@thirdweb-dev/react";
import {
  PublicationMainFocus,
  useCreatePostTypedDataMutation,
} from "../../../query/graphql/generated";
import useLensUser from "../../auth/useLensUser";
import { v4 as uuidv4 } from "uuid";
import {
  LENS_CONTRACT_ABI,
  LENS_CONTRACT_ADDRESS,
} from "../../../utils/contracts";
import useLogin from "../../auth/useLogin";
import { ethers } from "ethers";
import web3 from "web3";
import { lensCommonSchema } from "../../../types";
import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { toast } from "react-toastify";

export function useApplyForLens_AA() {
  const { mutateAsync: requestTypedData } = useCreatePostTypedDataMutation();
  const { mutateAsync: uploadToIpfs } = useStorageUpload();
  const { profileQuery } = useLensUser();
  const { mutateAsync: loginUser } = useLogin();
  const sdk = useSDK();
  const signer = useSigner();

  async function applyForLens_AA(commonData: lensCommonSchema): Promise<void> {
    // try {
    let provider = new ethers.providers.Web3Provider(web3.givenProvider);
    let options = {
      activeNetworkId: ChainId.POLYGON_MUMBAI,
      supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
    };

    let smartAccount = new SmartAccount(provider, options);
    smartAccount = await smartAccount.init();

    console.log("applyforlens", commonData);
    // 0. Login
    await loginUser();

    let imageIpfsUrl = commonData.image;
    // if (commonData.image) {
    //   imageIpfsUrl = (await uploadToIpfs({ data: [commonData.image] }))[0];
    // }

    const postMetadata = {
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TextOnly,
      metadata_id: uuidv4(),
      description: commonData.description,
      locale: "en-US",
      content: commonData.content,
      external_url: null,
      image: imageIpfsUrl,
      imageMimeType: null,
      name: commonData.name,
      attributes: commonData.attributes,
      tags: [],
      appId: "defilens-demo-3",
      createdOn: new Date(),
      media: [],
    };

    const postMetadataIpfsUrl = (
      await uploadToIpfs({ data: [postMetadata] })
    )[0];
    console.log("postMetadata", postMetadata);
    console.log("postMetadataIpfsUrl", postMetadataIpfsUrl);

    // 1. Ask Lens to give us the typed data
    const typedData = await requestTypedData({
      request: {
        collectModule: {
          freeCollectModule: {
            followerOnly: false,
          },
        },
        referenceModule: {
          followerOnlyReferenceModule: false,
        },
        contentURI: postMetadataIpfsUrl,
        profileId: profileQuery.data?.defaultProfile?.id,
      },
    });

    if (!sdk) return;

    const lensHubContract = new ethers.Contract(
      LENS_CONTRACT_ADDRESS,
      LENS_CONTRACT_ABI,
      signer
    );

    // Destructure the stuff we need out of the typedData.value field
    const {
      collectModule,
      collectModuleInitData,
      contentURI,
      deadline,
      profileId,
      referenceModule,
      referenceModuleInitData,
    } = typedData.createPostTypedData.typedData.value;

    // create an array of txs
    const txs = [];

    console.info("smartAccount==contentURI", contentURI);

    const data = await lensHubContract.populateTransaction.post({
      profileId: profileId,
      contentURI: contentURI,
      collectModule,
      collectModuleInitData,
      referenceModule,
      referenceModuleInitData,
    });

    const tx1 = {
      to: LENS_CONTRACT_ADDRESS,
      data: data?.data,
    };
    txs.push(tx1);

    let response = await smartAccount.sendGaslessTransactionBatch({
      transactions: txs,
    });
    console.log("smartAccount==response", response);

    const feeQuotes = await smartAccount.prepareRefundTransactionBatch({
      transactions: txs,
    });
    console.log("smartAccount==feeQuotes", feeQuotes);

    // Choose a fee quote of your choice provided by the relayer
    const transaction = await smartAccount.createRefundTransactionBatch({
      transactions: txs,
      feeQuote: feeQuotes[1],
    });
    console.log("smartAccount==transaction", transaction);

    // optional
    let gasLimit = {
      hex: "0x1E8480",
      type: "hex",
    };

    // send transaction internally calls signTransaction and sends it to connected relayer
    const txHash = await smartAccount.sendTransaction({
      tx: transaction,
      gasLimit,
    });
    console.log("smartAccount==txHash", txHash);
    toast.success(`Tx Submitted successfully.`);

    // console.log("create post: poll until indexed");
    // const indexedResult = await pollUntilIndexed({ txHash: txHash });
    // console.log("create post: profile has been indexed", indexedResult);
    // } catch (error) {
    //   console.log("applyForLens-Error", error);
    //   toast.error("Something Went wrong!!");
    // }
  }

  return useMutation(applyForLens_AA);
}
