import React, { useState } from "react";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";
import { Card, Dropdown, Grid } from "semantic-ui-react";
import { useProfileQuery } from "../../query/graphql/generated";
import { DepositsDocument } from "../../query/thegraph/aaveV2Matic/generated";
import { AAVE_V2_MATIC_SUBGRAPH } from "../../utils/constants";
import {
  useQueryHook,
  useQueryHookForUniV3,
} from "../../lib/hooks/commonQueryHook/useQueryHook";
import Deposit from "../../components/apps/aave/aaveV2Matic/Deposit";
import { protocolOptions, queryKeyToMetadata } from "../../utils/utils";
import Withdraw from "../../components/apps/aave/aaveV2Matic/Withdraw";
import { lensCommonSchema } from "../../types";
import UniV2 from "../../components/apps/uniswap/Univ2";

type Props = {};

export default function MyProfilePage({}: Props) {
  const [defaultKey, setDefaultKey] = useState("aave_deposit_matic_v2");
  const [defaultURL, setDefaultURL] = useState(AAVE_V2_MATIC_SUBGRAPH);
  const [schema, setLensSchema] = useState<lensCommonSchema[]>([]);
  const [queryDocuments, setQueryDocuments] = useState(DepositsDocument);
  const router = useRouter();
  const address = useAddress();
  const { id } = router.query;

  const {
    isLoading,
    isError,
    data: useQueryData,
    error,
  } = defaultKey == "uni_swap_v3_eth"
    ? useQueryHookForUniV3({
        query: queryDocuments,
        queryKey: defaultKey,
        apiUrl: defaultURL,
        user: address?.toString(),
      })
    : useQueryHook({
        query: queryDocuments,
        queryKey: defaultKey,
        apiUrl: defaultURL,
        user: address?.toString(),
      });
  console.log("useQueryData: ", useQueryData);

  const {
    isLoading: loadingProfile,
    data: profileData,
    error: profileError,
  } = useProfileQuery(
    {
      request: {
        handle: id,
      },
    },
    {
      enabled: !!id,
    }
  );

  if (loadingProfile) {
    return <div>Loading profile...</div>;
  }

  const handleChange = (e: any, value: any) => {
    setDefaultKey(value.value);
    setDefaultURL(queryKeyToMetadata[value.value].apiUrl);
    setQueryDocuments(queryKeyToMetadata[value.value].query);
  };

  const getComponent = (data: any, index: any) => {
    // console.log("queryKeyToMetadata[defaultKey].key1==");
    // console.log(
    //   "queryKeyToMetadata[defaultKey].key==",
    //   queryKeyToMetadata[defaultKey].key
    // );
    // console.log("queryKeyToMetadata[defaultKey].key==data", data);

    if (queryKeyToMetadata[defaultKey].key == "AAVE_V2_DEPOSIT_MATIC") {
      return (
        <Grid.Column key={index}>
          <Card.Group doubling stackable centered>
            {/* @ts-ignore */}
            <Deposit
              deposit={data}
              queryKeyToMetadata={queryKeyToMetadata[defaultKey]}
              defaultKey={defaultKey}
              key={data.id}
            />
          </Card.Group>
        </Grid.Column>
      );
    } else if (queryKeyToMetadata[defaultKey].key == "AAVE_V2_WITHDRAW_MATIC") {
      return (
        <Grid.Column key={index}>
          <Card.Group doubling stackable centered>
            {/* @ts-ignore */}
            <Withdraw
              withdraw={data}
              queryKeyToMetadata={queryKeyToMetadata[defaultKey]}
              defaultKey={defaultKey}
              key={data.id}
            />
          </Card.Group>
        </Grid.Column>
      );
    } else if (
      queryKeyToMetadata[defaultKey].key == "UNISWAP_V3_SWAP_ETHEREUM"
    ) {
      return (
        <Grid.Column key={index}>
          <Card.Group doubling stackable centered>
            {/* @ts-ignore */}

            <UniV2
              swap={data}
              queryKeyToMetadata={queryKeyToMetadata[defaultKey]}
              defaultKey={defaultKey}
              key={data.id}
            />
          </Card.Group>
        </Grid.Column>
      );
    }
  };

  return (
    <>
      <div className={styles.profileContainer}>
        <Dropdown
          onChange={handleChange}
          placeholder="Skills"
          selection
          fluid
          options={protocolOptions}
        />
        <hr style={{ margin: "20px" }}></hr>
        <div>
          {isLoading ? (
            <div>Loading Publications...</div>
          ) : (
            <Grid container columns={3}>
              {
                // Iterate over the items in the publications array
                // @ts-ignore
                useQueryData && useQueryData[Object.keys(useQueryData)[0]].map(
                    (data: any, index: any) => getComponent(data, index)
                  )
              }
            </Grid>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

// {
//   "data": {
//     "openOrders": [
//       {
//         "id": "0xb50685c25485ca8c520f5286bbbf1d3f216d6989-0x8c835dfaa34e2ae61775e80ee29e2c724c6ae2bb-73020-75240",
//         "liquidity": "0",
//         "blockNumber": "11227102",
//         "timestamp": "1654938331",
//         "collectedFee": "0.304782120715738613"
//       }
//     ]
//   }
// }
