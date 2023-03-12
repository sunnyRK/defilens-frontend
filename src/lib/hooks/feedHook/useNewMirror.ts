import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload } from "@thirdweb-dev/react";
import {
  useCreateMirrorTypedDataMutation,
  useBroadcastMutation,
} from "../../../query/graphql/generated";
import useLensUser from "../../auth/useLensUser";
import { signTypedDataWithOmmittedTypename } from "../../helpers";
import useLogin from "../../auth/useLogin";
import { pollUntilIndexed } from "../../indexing/tx_index";

export function useNewMirror() {
  const { mutateAsync: requestTypedData } = useCreateMirrorTypedDataMutation();
  const { mutateAsync: requestBroadCastTypedData } = useBroadcastMutation();
  const { mutateAsync: uploadToIpfs } = useStorageUpload();
  const { profileQuery } = useLensUser();
  const sdk = useSDK();
  const { mutateAsync: loginUser } = useLogin();

  async function createMirror(pubId: string) {
    console.log("create mirror: PubId: ", pubId);
    // 0. Login
    await loginUser();

    const result = await requestTypedData({
      request: {
        profileId: profileQuery.data?.defaultProfile?.id,
        // remember it has to be indexed and follow metadata standards to be traceable!
        publicationId: pubId,
        referenceModule: {
          followerOnlyReferenceModule: false,
        },
      },
    });
    console.log("create mirror: createMirrorTypedData", result);

    const typedData = result.createMirrorTypedData.typedData;
    console.log("create mirror: typedData", typedData);

    const { domain, types, value } = result.createMirrorTypedData.typedData;

    if (!sdk) return;

    // 2. Sign the typed data
    const signature = await signTypedDataWithOmmittedTypename(
      sdk,
      domain,
      types,
      value
    );
    console.log("create mirror: signature", signature);

    const broadcastResult = await requestBroadCastTypedData({
      request: {
        id: result.createMirrorTypedData.id,
        signature: signature.signature,
      },
    });
    console.log(
      "create mirror: broadcastResult",
      broadcastResult,
      broadcastResult.broadcast.__typename
    );

    if (broadcastResult.broadcast.__typename === "RelayError") {
      console.error("create mirror via broadcast: failed", broadcastResult);
      throw new Error("create mirror via broadcast: failed");
    }

    console.log(
      "create mirror via broadcast: broadcastResult",
      broadcastResult
    );
    // const indexedResult = await pollUntilIndexed({
    //   txHash: broadcastResult.broadcast.txHash,
    // });

    // return {
    //   txHash: broadcastResult.broadcast.txHash,
    //   txId: broadcastResult.broadcast.txId,
    // };
  }

  return useMutation(createMirror);
}
