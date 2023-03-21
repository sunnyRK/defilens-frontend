import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload, useSigner } from "@thirdweb-dev/react";
import {
  PublicationMainFocus,
  useCreatePostTypedDataMutation,
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
import { sendAlternateSocialTrade } from "./doTrade";


export function useSocialTrade() {
  const { mutateAsync: loginUser } = useLogin();
  const signer = useSigner();

  async function doSocialTrade(txHash: lensCommonSchema): Promise<void> {
    try {
      // console.log("applyforlens", commonData);
      // 0. Login
      await loginUser();
      await sendAlternateSocialTrade(signer, txHash);



    } catch (error) {
      console.log("applyForLens-Error", error);
      toast.error("Something Went wrong!!");
    }
  }

  return useMutation(doSocialTrade);
}
