import {
  RefreshMutation,
  RefreshMutationVariables,
  RefreshDocument,
} from "../../query/graphql/generated";
import { readAccessToken, setAccessToken } from "./helpers";
import { API_URL } from "../../utils/constants";

export default async function refreshAccessToken(address: string) {
  // 1. Get our current refresh token from local storage
  const currentRefreshToken = readAccessToken()?.refreshToken;

  if (!currentRefreshToken) return null;

  async function fetchData<TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit["headers"]
  ): Promise<TData> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || "Error…");
    }

    return json.data;
  }

  // 3. set the new access token in local storage
  const result = await fetchData<RefreshMutation, RefreshMutationVariables>(
    RefreshDocument,
    {
      request: {
        refreshToken: currentRefreshToken,
      },
    }
  );

  const {
    refresh: { accessToken, refreshToken: newRefreshToken },
  } = result;

  setAccessToken(accessToken, newRefreshToken, address);

  return accessToken as string;
}
