import React, { useState } from "react";
import { useApplyForLens_AA } from "../../../lib/hooks/profileHook/useApplyForLens_AA";
import { lensCommonSchema } from "../../../types";
import useLensUser from "../../../lib/auth/useLensUser";
import useLogin from "../../../lib/auth/useLogin";
import { UniV3Swap } from "./types";
import { Button, Card } from "semantic-ui-react";
import { getAmount, getERC20Details, Network } from "../../../utils/helper";
import { toast } from "react-toastify";

export default function UniV2({ swap, queryKeyToMetadata, defaultKey }: any) {
  const { mutateAsync: applyForLens_AA } = useApplyForLens_AA();
  const { isSignedInQuery, profileQuery } = useLensUser();
  const { mutate: requestLogin } = useLogin();
  const [postLoading, setPostLoading] = useState(false);
  console.log("swap:", swap);

  // Loading their signed in state
  if (isSignedInQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // If the user is not signed in, we need to request a login
  if (!isSignedInQuery.data) {
    return <button onClick={() => requestLogin()}>Sign in with Lens</button>;
  }

  // Loading their profile information
  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // If it's done loading and there's no default profile
  if (!profileQuery.data?.defaultProfile) {
    return <div>No Lens Profile.</div>;
  }

  /**
   *
   * @param id
   * @param account
   * @param metaData
   * @param amountIn
   * @param amountInUSD
   * @param amountOut
   * @param amountOutUSD
   * @param hash
   * @param blockNumber
   * @param timestamp
   * @param logIndex
   * @param tokenIn
   * @param tokenOut
   *
   */

  /**
   * metaData
   *
   * @param chainName
   * @param chainId
   * @param appName
   * @param version
   * @param action
   *
   */

  /**
   * tokenIn & tokenOut
   *
   * @param id
   * @param name
   * @param symbol
   * @param decimals
   * @param lastPriceUSD
   * @param lastPriceBlockNumber
   *
   */

  const makeAttributes = async (makedata: UniV3Swap) => {
    const tokenInData = await getERC20Details(
      makedata.tokenIn.id,
      Network.ETHEREUM_MAINNET
    );
    const tokenOutData = await getERC20Details(
      makedata.tokenOut.id,
      Network.ETHEREUM_MAINNET
    );

    const amountIn = await getAmount(makedata.amountIn, tokenInData?.decimals);
    const amountOut = await getAmount(
      makedata.amountOut,
      tokenOutData?.decimals
    );

    return [
      {
        traitType: "Chain name",
        displayType: "string",
        value: makedata.metaData.chainName,
      },
      {
        traitType: "ChainId",
        displayType: "string",
        value: makedata.metaData.chainId,
      },
      {
        traitType: "App name",
        displayType: "string",
        value: makedata.metaData.appName,
      },
      {
        traitType: "Version",
        displayType: "string",
        value: makedata.metaData.version,
      },
      {
        traitType: "Actions",
        displayType: "string",
        value: makedata.metaData.action,
      },
      {
        traitType: "Input Tokens",
        displayType: "string",
        value: makedata.tokenIn.id,
      },
      {
        traitType: "Input Amounts",
        displayType: "string",
        value: amountIn,
      },
      {
        traitType: "Input AmountsUSD",
        displayType: "string",
        value: makedata.amountInUSD,
      },
      {
        traitType: "Input Tokens Name",
        displayType: "string",
        value: makedata.tokenIn.name,
      },
      {
        traitType: "Input Symbol",
        displayType: "string",
        value: makedata.tokenIn.symbol,
      },
      {
        traitType: "Input Decimals",
        displayType: "string",
        value: makedata.tokenIn.decimals,
      },
      {
        traitType: "Input LastPriceUSD",
        displayType: "string",
        value: makedata.tokenIn.lastPriceUSD,
      },
      {
        traitType: "Input LastPriceBlockNumber",
        displayType: "string",
        value: makedata.tokenIn.lastPriceBlockNumber,
      },
      {
        traitType: "Output Tokens",
        displayType: "string",
        value: makedata.tokenOut.id,
      },
      {
        traitType: "Output Amounts",
        displayType: "string",
        value: amountOut,
      },
      {
        traitType: "Output AmountsUSD",
        displayType: "string",
        value: makedata.amountOutUSD,
      },
      {
        traitType: "Output Tokens Name",
        displayType: "string",
        value: makedata.tokenOut.name,
      },
      {
        traitType: "Output Symbol",
        displayType: "string",
        value: makedata.tokenOut.symbol,
      },
      {
        traitType: "Output Decimals",
        displayType: "string",
        value: makedata.tokenOut.decimals,
      },
      {
        traitType: "Output LastPriceUSD",
        displayType: "string",
        value: makedata.tokenOut.lastPriceUSD,
      },
      {
        traitType: "Output LastPriceBlockNumber",
        displayType: "string",
        value: makedata.tokenOut.lastPriceBlockNumber,
      },
      {
        traitType: "TxHash",
        displayType: "string",
        value: makedata.hash,
      },
    ];
  };

  // @ts-ignore
  const makedata: UniV3Swap = {
    account: {
      id: swap.account.id,
    },
    metaData: {
      chainName: queryKeyToMetadata.chainName,
      chainId: queryKeyToMetadata.chainId,
      appName: queryKeyToMetadata.name,
      version: queryKeyToMetadata.version,
      action: queryKeyToMetadata.action,
    },
    amountIn: swap.amountIn,
    amountInUSD: swap.amountInUSD,
    amountOut: swap.amountOut,
    amountOutUSD: swap.amountOutUSD,
    hash: swap.hash,
    blockNumber: swap.blockNumber,
    timestamp: swap.timestamp,
    logIndex: swap.logIndex,
    tokenIn: {
      id: swap.tokenIn.id,
      name: swap.tokenIn.name,
      symbol: swap.tokenIn.symbol,
      decimals: swap.tokenIn.decimals,
      lastPriceUSD: swap.tokenIn.lastPriceUSD,
      lastPriceBlockNumber: swap.tokenIn.lastPriceBlockNumber,
    },
    tokenOut: {
      id: swap.tokenOut.id,
      name: swap.tokenOut.name,
      symbol: swap.tokenOut.symbol,
      decimals: swap.tokenOut.decimals,
      lastPriceUSD: swap.tokenOut.lastPriceUSD,
      lastPriceBlockNumber: swap.tokenOut.lastPriceBlockNumber,
    },
  };

  if (profileQuery.data?.defaultProfile) {
    return (
      // <>Hii</>
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
            {queryKeyToMetadata.version} {queryKeyToMetadata.action}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Header>
            <a
              style={{ color: "black", textDecoration: "underline" }}
              // href={`https://polygonscan.com/tx/${deposit.id.split(":")[2]}`}
              href={`https://polygonscan.com/tx/${swap.hash}`}
              target="_blank"
              rel="noreferrer"
            >
              View Tx on {queryKeyToMetadata.chainName}
            </a>
          </Card.Header>
          <Card.Meta>
            <a
              style={{ textDecoration: "underline" }}
              href={`https://polygonscan.com/tx/${swap.account.id}`}
              target="_blank"
              rel="noreferrer"
            >
              User Address
            </a>
          </Card.Meta>
          <Card.Description>
            <p>
              Swap Amount: {getAmount(swap.amountIn, swap.tokenIn.decimals)}{" "}
              {swap.tokenIn.symbol}
            </p>
            <p>Input Token: {swap.tokenIn.name}</p>
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
                  defiData: swap,
                  // @ts-ignore
                  attributes: attributes,
                };
                attributes?.length > 0
                  ? await applyForLens_AA(commonSchema)
                  : alert("Wait");
                setPostLoading(false);
                toast.success(`Posted successfully.`);
              } catch (error) {
                console.log("Post-error", error);
                setPostLoading(false);
                return toast.error("Something Went wrong for post!!");
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
