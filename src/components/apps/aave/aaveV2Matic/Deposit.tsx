import React, { useState } from "react";
import { useApplyForLens_AA } from "../../../../lib/hooks/profileHook/useApplyForLens_AA";
import { lensCommonSchema } from "../../../../types";
import useLensUser from "../../../../lib/auth/useLensUser";
import useLogin from "../../../../lib/auth/useLogin";
import { AaveV2MaticAttributes } from "./types";
import { Button, Card } from "semantic-ui-react";
import { getAmount, getERC20Details, Network } from "../../../../utils/helper";
import { toast } from "react-toastify";
import { useApplyForLens } from "../../../../lib/hooks/profileHook/useApplyForLens";

export default function Deposit({
  deposit,
  queryKeyToMetadata,
  defaultKey,
}: any) {
  const { mutateAsync: applyForLens_AA } = useApplyForLens_AA();
  const { mutateAsync: applyForLens } = useApplyForLens();
  const { isSignedInQuery, profileQuery } = useLensUser();
  const [postLoading, setPostLoading] = useState(false);
  // console.log("deposit:", deposit);

  /**
   *
   * @param ChainName
   * @param ChainId
   * @param AppName
   * @param Version
   * @param Action
   * @param InputTokens
   * @param OutPutTokens
   * @param AmountsIn
   * @param AmountsOut
   * @param TxHash
   *
   */

  const makeAttributes = async (makedata: AaveV2MaticAttributes) => {
    const tokenInData = await getERC20Details(
      deposit.reserve.aToken.underlyingAssetAddress,
      Network.POLYGON_MAINNET
    );
    const tokenOutData = await getERC20Details(
      deposit.reserve.aToken.id,
      Network.POLYGON_MAINNET
    );

    const amountIn = await getAmount(makedata.amountsIn, tokenInData?.decimals);
    const amountOut = await getAmount(
      makedata.amountsOut,
      tokenOutData?.decimals
    );

    return [
      {
        traitType: "Chain name",
        displayType: "string",
        value: makedata.chainName,
      },
      {
        traitType: "ChainId",
        displayType: "string",
        value: makedata.chainId,
      },
      {
        traitType: "App name",
        displayType: "string",
        value: makedata.appName,
      },
      {
        traitType: "Version",
        displayType: "string",
        value: makedata.version,
      },
      {
        traitType: "Actions",
        displayType: "string",
        value: makedata.action,
      },
      {
        traitType: "Input Tokens",
        displayType: "string",
        value: makedata.inputTokens,
      },
      {
        traitType: "Input Amounts",
        displayType: "string",
        value: amountIn,
      },
      {
        traitType: "Input Tokens Name",
        displayType: "string",
        value: tokenInData?.name,
      },
      {
        traitType: "Input Symbol",
        displayType: "string",
        value: tokenInData?.symbol,
      },
      {
        traitType: "Input Decimals",
        displayType: "string",
        value: tokenInData?.decimals,
      },
      {
        traitType: "Output Tokens",
        displayType: "string",
        value: makedata.outputTokens,
      },
      {
        traitType: "Output Amounts",
        displayType: "string",
        value: amountOut,
      },
      {
        traitType: "Output Tokens Name",
        displayType: "string",
        value: tokenOutData?.name,
      },
      {
        traitType: "Output Symbol",
        displayType: "string",
        value: tokenOutData?.symbol,
      },
      {
        traitType: "Output Decimals",
        displayType: "string",
        value: tokenOutData?.decimals,
      },
      {
        traitType: "TxHash",
        displayType: "string",
        value: makedata.txHash,
      },
    ];
  };

  // @ts-ignore
  const makedata: AaveV2MaticAttributes = {
    chainName: queryKeyToMetadata.chainName,
    chainId: queryKeyToMetadata.chainId,
    appName: queryKeyToMetadata.name,
    version: queryKeyToMetadata.version,
    action: deposit.action,
    inputTokens: deposit.reserve.aToken.underlyingAssetAddress,
    outputTokens: deposit.reserve.aToken.id,
    amountsIn: deposit.amount,
    amountsOut: deposit.amount,
    txHash: deposit.txHash,
  };

  // Loading their signed in state
  if (isSignedInQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // if (isTokenExpired()) {
  //   // console.log("time Expired +++", Date.now());
  //   return <button onClick={() => requestLogin()}>Sign in with Lenss</button>;
  // } else {
  //   console.log('time not expired accessTokens++:', data.exp*1000, Date.now());
  // }

  // // If the user is not signed in, we need to request a login
  // if (!isSignedInQuery.data) {
  //   return <button onClick={() => requestLogin()}>Sign in with Lens</button>;
  // }

  // Loading their profile information
  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // If it's done loading and there's no default profile
  if (!profileQuery.data?.defaultProfile) {
    return <div>No Lens Profile.</div>;
  }

  if (profileQuery.data?.defaultProfile) {
    return (
      <Card>
        {/* <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        /> */}
        <Card.Content>
          <Card.Header>
            {queryKeyToMetadata.name}
            {"-"}
            {queryKeyToMetadata.version} {deposit.action}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Header>
            <a
              style={{ color: "black", textDecoration: "underline" }}
              // href={`https://polygonscan.com/tx/${deposit.id.split(":")[2]}`}
              href={`https://polygonscan.com/tx/${deposit.txHash}`}
              target="_blank"
              rel="noreferrer"
            >
              View Tx on {queryKeyToMetadata.chainName}
            </a>
          </Card.Header>
          <Card.Meta>
            <a
              style={{ textDecoration: "underline" }}
              href={`https://polygonscan.com/tx/${deposit.user.id}`}
              target="_blank"
              rel="noreferrer"
            >
              User Address
            </a>
          </Card.Meta>
          <Card.Description>
            <p>
              Deposit Amount:{" "}
              {getAmount(deposit.amount, deposit.reserve.decimals)}{" "}
              {deposit.reserve.symbol}
            </p>
            <p>Input Token: {deposit.reserve.name}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            loading={postLoading}
            onClick={async () => {
              try {
                setPostLoading(true);
                const attributes: any = await makeAttributes(makedata);
                console.log("attributes==", attributes);
                const commonSchema: lensCommonSchema = {
                  image:
                    // @ts-ignore
                    profileQuery?.data?.defaultProfile?.picture?.original?.url,
                  description: queryKeyToMetadata.description,
                  content: queryKeyToMetadata.content,
                  name: queryKeyToMetadata.name,
                  defiData: deposit,
                  // @ts-ignore
                  attributes: attributes,
                };
                attributes?.length > 0
                  // ? await applyForLens_AA(commonSchema)
                  ? await applyForLens(commonSchema)
                  : alert("Wait");
                setPostLoading(false);
                toast.success(`Posted successfully.`);
              } catch (error) {
                console.log("Post-error", error);
                setPostLoading(false);
                // return toast.error("Something Went wrong for post!!");
                toast.success(`Posted successfully.`);
              }
            }}
          >
            Post On Lens
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
