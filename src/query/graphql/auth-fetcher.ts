import { isTokenExpired, readAccessToken } from "../../lib/auth/helpers";
import refreshAccessToken from "../../lib/auth/refreshAccessToken";
import { API_URL } from "../../utils/constants";

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit["headers"]
): (() => Promise<TData>) => {
  async function getAccessToken() {
    // 1. Check the local storage for the access token
    const token = readAccessToken();

    // 2. If there isn't a token, then return null (not signed in)
    if (!token) return null;

    let accessToken = token.accessToken;
    // 3. If there is a token, then check it's expiration
    if (isTokenExpired()) {
      // 4. If it's expired, update it using the refresh token
      const newToken = await refreshAccessToken(token.address);
      if (!newToken) return null;
      accessToken = newToken;
    }

    // Finally, return the token
    return accessToken;
  }

  return async () => {
    const token = typeof window !== "undefined" ? await getAccessToken() : null;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options,
        "x-access-token": token ? token : "",
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
  };
};
