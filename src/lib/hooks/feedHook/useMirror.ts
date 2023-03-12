import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload } from "@thirdweb-dev/react";
import {
  PublicationMainFocus,
  useCreateMirrorTypedDataMutation,
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

export function useMirror() {
  const { mutateAsync: requestTypedData } = useCreateMirrorTypedDataMutation();
  const { profileQuery } = useLensUser();
  const sdk = useSDK();
  const { mutateAsync: loginUser } = useLogin();

  async function createMirror(pubId: string) {
    // 0. Login
    await loginUser();

    // 0. Upload the image to IPFS
    // let imageIpfsUrl =
    //   "https://ipfs.io/ipfs/" +
    //   (await uploadToIpfs({ data: [commentData.image] }))[0].split("//")[1];
    // console.log("imageIpfsUrl: ", imageIpfsUrl);

    // 0B) Upload the actual content to IPFS
    // This is going to be a Object which contains the image field as well
    // const postMetadata = {
    //   version: "2.0.0",
    //   mainContentFocus: PublicationMainFocus.TextOnly,
    //   metadata_id: uuidv4(),
    //   description: "Comment description",
    //   locale: "en-US",
    //   content: commentData.comment,
    //   external_url: null,
    //   image: imageIpfsUrl,
    //   imageMimeType: null,
    //   name: profileQuery.data?.defaultProfile?.handle,
    //   attributes: [],
    //   tags: [],
    //   appId: "DefiLens",
    //   createdOn: new Date().getTime(),
    //   media: [],
    // };

    // const postMetadataIpfsUrl = (
    //   await uploadToIpfs({ data: [postMetadata] })
    // )[0];

    const typedData = await requestTypedData({
      request: {
        profileId: profileQuery.data?.defaultProfile?.id,
        publicationId: pubId,
        // contentURI: postMetadataIpfsUrl,
        // collectModule: {
        //   freeCollectModule: {
        //     followerOnly: false,
        //   },
        // },
        referenceModule: {
          followerOnlyReferenceModule: false,
          degreesOfSeparationReferenceModule: {
            commentsRestricted: true,
            mirrorsRestricted: true,
            degreesOfSeparation: 2,
          },
        },
      },
    });
    const { domain, types, value } = typedData.createMirrorTypedData.typedData;

    if (!sdk) return;

    // 2. Sign the typed data
    const signature = await signTypedDataWithOmmittedTypename(
      sdk,
      domain,
      types,
      value
    );
    const { v, r, s } = splitSignature(signature.signature);
    // // 3. Use the signed typed data to send the transaction to the smart contract
    const lensHubContract = await sdk.getContractFromAbi(
      LENS_CONTRACT_ADDRESS,
      LENS_CONTRACT_ABI
    );
    // Destructure the stuff we need out of the typedData.value field
    const {
      // collectModule,
      // collectModuleInitData,
      // contentURI,
      profileIdPointed,
      pubIdPointed,
      referenceModuleData,
      deadline,
      profileId,
      referenceModule,
      referenceModuleInitData,
    } = typedData.createMirrorTypedData.typedData.value;

    const result = await lensHubContract.call("mirrorWithSig", {
      profileId,
      // contentURI,
      profileIdPointed,
      pubIdPointed,
      referenceModuleData,
      // collectModule,
      // collectModuleInitData,
      referenceModule,
      referenceModuleInitData,
      sig: {
        v,
        r,
        s,
        deadline,
      },
    });
    console.log(result);
  }

  return useMutation(createMirror);
}
