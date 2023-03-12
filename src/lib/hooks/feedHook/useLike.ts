import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import {
  LENS_CONTRACT_ABI,
  LENS_CONTRACT_ADDRESS,
} from "../../../utils/contracts";
import {
  AddReactionDocument,
  useAddReactionMutation,
  ReactionRequest,
  ReactionTypes,
} from "../../../query/graphql/generated";
import useLogin from "../../auth/useLogin";
import {
  signTypedDataWithOmmittedTypename,
  splitSignature,
} from "../../helpers";
import useLensUser from "../../auth/useLensUser";
import { client } from "../../../query/lensquery";
import { gql } from "@apollo/client";

export function useLike() {
  const { mutateAsync: requestTypedData } = useAddReactionMutation();
  const sdk = useSDK();
  const address = useAddress();
  const { mutateAsync: loginUser } = useLogin();
  const { profileQuery } = useLensUser();

  async function like(pubId: string) {
    // 0. Login
    await loginUser();

    const typedData = await requestTypedData({
      request: {
        profileId: profileQuery.data?.defaultProfile?.id,
        reaction: ReactionTypes.Upvote,
        publicationId: pubId,
      },
    });

    console.log("like-typedData: ", typedData);
  }

  return useMutation(like);
}
