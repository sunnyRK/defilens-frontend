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
import {
  callSocialTrade,
  getMethodDataFromTx2,
  sendAlternateSocialTrade,
} from "./doTrade";

export function useSocialTrade() {
  const { mutateAsync: loginUser } = useLogin();
  const signer = useSigner();

  async function doSocialTrade(data: any): Promise<void> {
    try {
      console.log("data", data);
      // 0. Login
      await loginUser();
      // await sendAlternateSocialTrade(signer, txHash);
      await callSocialTrade(signer, data);
    } catch (error) {
      console.log("applyForLens-Error", error);
      toast.error("Something Went wrong!!");
    }
  }

  return useMutation(doSocialTrade);
}
