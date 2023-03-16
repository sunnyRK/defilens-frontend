import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload, useSigner } from "@thirdweb-dev/react";
import {
  PublicationMainFocus,
  useCreatePostTypedDataMutation,
  useCreateSetDefaultProfileTypedDataMutation,
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
import { ethers } from "ethers";
import { pollUntilIndexed } from "../../indexing/tx_index";
import { lensCommonSchema } from "../../../types";
import { toast } from "react-toastify";

export function useSetProfile() {
  const { mutateAsync: requestTypedData } =
    useCreateSetDefaultProfileTypedDataMutation();
  const { mutateAsync: uploadToIpfs } = useStorageUpload();
  const { profileQuery } = useLensUser();
  const { mutateAsync: loginUser } = useLogin();
  const sdk = useSDK();
  const signer = useSigner();

  async function setProfile(): Promise<void> {
    try {
      // console.log("applyforlens", commonData);
      // 0. Login
      await loginUser();

      // let imageIpfsUrl = commonData.image;
      // if (commonData.image) {
      //   imageIpfsUrl = (await uploadToIpfs({ data: [commonData.image] }))[0];
      // }

      // const postMetadata = {
      //   version: "2.0.0",
      //   mainContentFocus: PublicationMainFocus.TextOnly,
      //   metadata_id: uuidv4(),
      //   description: commonData.description,
      //   locale: "en-US",
      //   content: commonData.content,
      //   external_url: null,
      //   image: imageIpfsUrl,
      //   imageMimeType: null,
      //   name: commonData.name,
      //   attributes: commonData.attributes,
      //   tags: [],
      //   appId: "defilens-demo-3",
      //   createdOn: new Date(),
      //   media: [],
      // };

      // const postMetadataIpfsUrl = (
      //   await uploadToIpfs({ data: [postMetadata] })
      // )[0];
      // console.log("postMetadata", postMetadata);
      // console.log("postMetadataIpfsUrl", postMetadataIpfsUrl);

      // 1. Ask Lens to give us the typed data
      const typedData = await requestTypedData({
        request: {
          profileId: "0x59c8",
        },
      });

      const { domain, types, value } =
        typedData.createSetDefaultProfileTypedData.typedData;

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
      const { deadline, profileId, wallet } =
        typedData.createSetDefaultProfileTypedData.typedData.value;

      const tx = await lensHubContract.setDefaultProfileWithSig({
        profileId: profileId,
        wallet: wallet,
        sig: {
          v,
          r,
          s,
          deadline: deadline,
        },
      });
      console.log("create post: tx hash", tx, tx.hash);
      await tx.wait();
      console.log("create post: poll until indexed");
      const indexedResult = await pollUntilIndexed({ txHash: tx.hash });

      console.log("create post: profile has been indexed", indexedResult);
    } catch (error) {
      console.log("applyForLens-Error", error);
      toast.error("Something Went wrong!!");
    }
  }

  return useMutation(setProfile);
}
