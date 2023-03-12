import React, { useEffect, useState } from "react";
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
import { protocolOptions, queryKeyToMetadata } from "./utils";
import Withdraw from "../../components/apps/aave/aaveV2Matic/Withdraw";
import { lensCommonSchema } from "../../types";
import useLensUser from "../../lib/auth/useLensUser";
import BigNumber from "bignumber.js";
import UniV2 from "../../components/apps/uniswap/Univ2";

type Props = {};

export default function MyProfilePage({}: Props) {
  const [defaultKey, setDefaultKey] = useState("aave_deposit_matic_v2");
  const [defaultURL, setDefaultURL] = useState(AAVE_V2_MATIC_SUBGRAPH);
  const [schema, setLensSchema] = useState<lensCommonSchema[]>([]);
  const [queryDocuments, setQueryDocuments] = useState(DepositsDocument);
  const { isSignedInQuery, profileQuery } = useLensUser();
  const router = useRouter();
  const address = useAddress();
  const { id } = router.query;

  useEffect(() => {

  }, [])

  const {
    isLoading,
    isError,
    data: useQueryData,
    error,
  } = 
  defaultKey == "uni_swap_v3_eth"
    ? useQueryHookForUniV3({
        query: queryDocuments,
        queryKey: defaultKey,
        apiUrl: defaultURL,
        user: address?.toString(),
      })
    : 
    useQueryHook({
        query: queryDocuments,
        queryKey: defaultKey,
        apiUrl: defaultURL,
        user: address?.toString(),
      });

  console.log(
    "useQueryData-: ",
    useQueryData,
    BigNumber(profileQuery.data?.defaultProfile?.id).toNumber()
  );

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
  console.log("profileQuery", profileQuery);

  if (loadingProfile) {
    return <div>Loading profile...</div>;
  }

  const handleChange = (e: any, value: any) => {
    setDefaultKey(value.value);
    setDefaultURL(queryKeyToMetadata[value.value].apiUrl);
    setQueryDocuments(queryKeyToMetadata[value.value].query);
  };

  const getComponent = (data: any, index: any) => {
    console.log("queryKeyToMetadata[defaultKey].key1==");
    console.log(
      "queryKeyToMetadata[defaultKey].key==",
      queryKeyToMetadata[defaultKey].key
    );
    console.log("queryKeyToMetadata[defaultKey].key==data", data);

    if (queryKeyToMetadata[defaultKey].key == "AAVE_V2_DEPOSIT_MATIC") {
      return (
        <>
          <Grid.Column>
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
        </>
      );
    } else if (queryKeyToMetadata[defaultKey].key == "AAVE_V2_WITHDRAW_MATIC") {
      return (
        <>
          {/* @ts-ignore */}
          <Grid.Column>
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
        </>
      );
    } else if (
      queryKeyToMetadata[defaultKey].key == "UNISWAP_V3_SWAP_ETHEREUM"
    ) {
      return (
        <>
          {/* @ts-ignore */}
          <Grid.Column>
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
        </>
      );
    }
  };

  return (
    <>
      {/* {!defaultURL && (
        <>
          <Dropdown
            onChange={handleChange}
            placeholder="Skills"
            fluid
            selection
            options={protocolOptions}
          />
          <>HIIIIIII</>
        </>
      )}
      {defaultURL && ( */}
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
            // <>
            //   { 
            //     useQueryData &&useQueryData[Object.keys(useQueryData)[0]].map(
            //         (data: any, index: any) => getComponent(data, index)
            //     )
            //   }
            // </>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
}
