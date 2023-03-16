import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useAddress } from "@thirdweb-dev/react";
import { QueryProps } from "../../../types";

const handleRequest = async (props: QueryProps, _address: any) => {
  if (props.queryKey == "uni_swap_v3_eth") {
    request(props.apiUrl, props.query, {
      account: _address?.toLowerCase(),
    });
  } else {
    request(props.apiUrl, props.query, {
      user: _address?.toLowerCase(),
    });
  }
};

export const useQueryHook = (props: QueryProps) => {
  const _address = useAddress();
  return useQuery({
    queryKey: [props.queryKey],
    queryFn: async () =>
      request(props.apiUrl, props.query, {
        user: _address?.toLowerCase(),
      }),
    enabled: !!_address,
  });
};

export const useQueryHookForUniV3 = (props: QueryProps) => {
  const _address = useAddress();
  return useQuery({
    queryKey: [props.queryKey],
    queryFn: async () =>
      request(props.apiUrl, props.query, {
        account: _address?.toLowerCase(),
      }),
    enabled: !!_address,
  });
};
