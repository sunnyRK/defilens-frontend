import { useMutation } from "@tanstack/react-query";
import { useSDK, useSigner, useStorageUpload } from "@thirdweb-dev/react";
import {
  PublicationMainFocus,
  useCreateCommentTypedDataMutation,
} from "../../../query/graphql/generated";
import useLensUser from "../../auth/useLensUser";
import {
  signTypedDataWithOmmittedTypename,
  splitSignature,
} from "../../helpers";
import { v4 as uuidv4 } from "uuid";
import {
  LENS_CONTRACT_ABI,
  LENS_CONTRACT_ADDRESS,
} from "../../../utils/contracts";
import useLogin from "../../auth/useLogin";
import { CreateComment } from "../../../types";
import { pollUntilIndexed } from "../../indexing/tx_index";
import { ethers } from "ethers";

export function useCreateComment() {
  const { mutateAsync: requestTypedData } = useCreateCommentTypedDataMutation();
  const { mutateAsync: uploadToIpfs } = useStorageUpload();
  const { profileQuery } = useLensUser();
  const sdk = useSDK();
  const signer = useSigner();
  const { mutateAsync: loginUser } = useLogin();

  async function createComment(commentData: CreateComment) {
    // 0. Login
    await loginUser();

    // 0. Upload the image to IPFS
    let imageIpfsUrl =
      "https://ipfs.io/ipfs/" +
      (await uploadToIpfs({ data: [commentData.image] }))[0].split("//")[1];
    console.log("imageIpfsUrl: ", imageIpfsUrl);

    // 0B) Upload the actual content to IPFS
    // This is going to be a Object which contains the image field as well
    const postMetadata = {
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TextOnly,
      metadata_id: uuidv4(),
      description: "Comment description",
      locale: "en-US",
      content: commentData.comment,
      external_url: null,
      image: imageIpfsUrl,
      imageMimeType: null,
      name: profileQuery.data?.defaultProfile?.handle,
      attributes: [],
      tags: [],
      appId: "DefiLens",
      createdOn: new Date().getTime(),
      media: [],
    };

    const postMetadataIpfsUrl = (
      await uploadToIpfs({ data: [postMetadata] })
    )[0];

    const typedData = await requestTypedData({
      request: {
        profileId: profileQuery.data?.defaultProfile?.id,
        publicationId: commentData.pubId,
        contentURI: postMetadataIpfsUrl,
        collectModule: {
          freeCollectModule: {
            followerOnly: false,
          },
        },
        referenceModule: {
          degreesOfSeparationReferenceModule: {
            commentsRestricted: true,
            mirrorsRestricted: true,
            degreesOfSeparation: 2,
          },
        },
      },
    });
    const { domain, types, value } = typedData.createCommentTypedData.typedData;

    if (!sdk) return;

    // 2. Sign the typed data
    const signature = await signTypedDataWithOmmittedTypename(
      sdk,
      domain,
      types,
      value
    );
    const { v, r, s } = splitSignature(signature.signature);

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
      profileIdPointed,
      pubIdPointed,
      referenceModuleData,
      deadline,
      profileId,
      referenceModule,
      referenceModuleInitData,
    } = typedData.createCommentTypedData.typedData.value;

    const tx = await lensHubContract.commentWithSig({
      profileId,
      contentURI,
      profileIdPointed,
      pubIdPointed,
      referenceModuleData,
      collectModule,
      collectModuleInitData,
      referenceModule,
      referenceModuleInitData,
      sig: {
        v,
        r,
        s,
        deadline,
      },
    });
    console.log("create post: tx hash", tx, tx.hash);
    await tx.wait();
    console.log("create post: poll until indexed");
    const indexedResult = await pollUntilIndexed({ txHash: tx.hash });

    console.log("create post: profile has been indexed", indexedResult);

    // // // 3. Use the signed typed data to send the transaction to the smart contract
    // const lensHubContract = await sdk.getContractFromAbi(
    //   LENS_CONTRACT_ADDRESS,
    //   LENS_CONTRACT_ABI
    // );
    // // Destructure the stuff we need out of the typedData.value field
    // const {
    //   collectModule,
    //   collectModuleInitData,
    //   contentURI,
    //   profileIdPointed,
    //   pubIdPointed,
    //   referenceModuleData,
    //   deadline,
    //   profileId,
    //   referenceModule,
    //   referenceModuleInitData,
    // } = typedData.createCommentTypedData.typedData.value;

    // const tx = await lensHubContract.call("commentWithSig", {
    // profileId,
    // contentURI,
    // profileIdPointed,
    // pubIdPointed,
    // referenceModuleData,
    // collectModule,
    // collectModuleInitData,
    // referenceModule,
    // referenceModuleInitData,
    // sig: {
    //   v,
    //   r,
    //   s,
    //   deadline,
    // },
    // });
    // console.log("create Comment: tx hash", tx, tx.receipt.transactionHash);
    // const indexedResult = await pollUntilIndexed({
    //   txHash: tx.receipt.transactionHash,
    // });
  }

  return useMutation(createComment);
}
