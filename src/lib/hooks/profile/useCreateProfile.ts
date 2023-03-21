import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload, useSigner } from "@thirdweb-dev/react";
import {
  useCreateProfileMutation,
} from "../../../query/graphql_testnetonly/generated";
import {
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
import { ethers, utils, BigNumber } from "ethers";
import { pollUntilIndexed } from "../../indexing/tx_index";
import { lensCommonSchema } from "../../../types";
import { toast } from "react-toastify";
import Web3 from "web3";

type props = {
  handleName: string;
  profilePictureUri: any;
};

export function useCreateProfile() {
  const { mutateAsync: requestTypedData } = useCreateProfileMutation();
  const { mutateAsync: requestTypedData2 } =
    useCreateSetDefaultProfileTypedDataMutation();
  const { mutateAsync: uploadToIpfs } = useStorageUpload();
  const { profileQuery } = useLensUser();
  const { mutateAsync: loginUser } = useLogin();
  const sdk = useSDK();
  const signer = useSigner();

  async function createProfile({
    handleName,
    profilePictureUri,
  }: props): Promise<void> {
    try {
      // console.log("createProfile-handle", handleName);
      // 0. Login
      await loginUser();

      let imageIpfsUrl = (await uploadToIpfs({ data: [profilePictureUri] }))[0];
      // console.log(
      //   "createProfile-imageIpfsUrl",
      //   imageIpfsUrl,
      //   profilePictureUri
      // );

      const typedData = await requestTypedData({
        request: {
          handle: handleName,
          profilePictureUri: imageIpfsUrl,
          //   followNFTURI: null,
          //   followModule: null,
        },
      });

      console.log("create profile: result", typedData);

      if (typedData.createProfile.__typename === "RelayError") {
        console.error("create profile: failed");
        return;
      }

      console.log("create profile: poll until indexed");
      const result = await pollUntilIndexed({
        txHash: typedData.createProfile.txHash,
      });

      console.log("create profile: profile has been indexed", result);

      const provider = new ethers.providers.Web3Provider(Web3.givenProvider);

      const receipt = await provider.getTransactionReceipt(
        typedData.createProfile.txHash
      );
      console.log("create profile: receipt", receipt);
      const logs = receipt!.logs;

      console.log("create profile: logs", logs);

      const topicId = utils.id(
        "ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)"
      );
      console.log("topicid we care about", topicId);

      const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
      console.log("profile created log", profileCreatedLog);

      let profileCreatedEventLog = profileCreatedLog!.topics;
      console.log("profile created event logs", profileCreatedEventLog);

      const newprofileId = utils.defaultAbiCoder.decode(
        ["uint256"],
        profileCreatedEventLog[1]
      )[0];

      console.log("profile id", BigNumber.from(newprofileId).toHexString());

      await loginUser();

      // 1. Ask Lens to give us the typed data
      const typedData2 = await requestTypedData2({
        request: {
          profileId: BigNumber.from(newprofileId).toHexString(),
        },
      });

      const { domain, types, value } =
        typedData2.createSetDefaultProfileTypedData.typedData;

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
        typedData2.createSetDefaultProfileTypedData.typedData.value;

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

      // const lensHubContract = new ethers.Contract(
      //     LENS_CONTRACT_ADDRESS,
      //     LENS_CONTRACT_ABI,
      //     signer
      //   );

      //   const profileId = await lensHubContract.getProfileIdByHandle(handleName.concat(".test"));
      //   console.log('profileId1: ', profileId, profileId.toHexString(), profileId.toString());
      //   console.log('profileId2: ', profileId, profileId.toString());
    } catch (error) {
      console.log("applyForLens-Error", error);
      toast.error("Something Went wrong!!");
    }
  }

  return useMutation(createProfile);
}
