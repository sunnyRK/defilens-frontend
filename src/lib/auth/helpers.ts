const STORAGE_KEY = "LH_STORAGE_KEY";

export function isTokenExpired() {
  const ls = localStorage || window.localStorage;
  if (!ls) {
    throw new Error("LocalStorage is not available");
  }
  const authenticationData = ls.getItem(STORAGE_KEY);
  if (!authenticationData) return true;
  const parseAuthenticationData = JSON.parse(authenticationData) as {
    accessToken: string;
    refreshToken: string;
    address: string;
    exp: number;
  };
  // console.log("isTokenExpired-Date.now()", Date.now(), parseAuthenticationData.exp);
  // console.log("isTokenExpired-exp * 1000", parseJwt(parseAuthenticationData.accessToken)?.exp * 1000);
  // console.log("isTokenExpired-diffff+++",
  //     parseJwt(parseAuthenticationData.accessToken)?.exp * 1000 - Date.now(),
  //     (parseJwt(parseAuthenticationData.accessToken)?.exp * 1000 - Date.now())/60000
  // );

  if (!parseJwt(parseAuthenticationData.accessToken)?.exp) {
    return true;
  }

  if (Date.now() <= parseJwt(parseAuthenticationData.accessToken)?.exp * 1000) {
    return false;
  }
  return true;
}

// 1. Reading the access token from storage
export function readAccessToken() {
  if (typeof window === "undefined") return null;
  const ls = localStorage || window.localStorage;
  if (!ls) {
    throw new Error("LocalStorage is not available");
  }
  const authenticationData = ls.getItem(STORAGE_KEY);
  if (!authenticationData) return null;

  return JSON.parse(authenticationData) as {
    accessToken: string;
    refreshToken: string;
    address: string;
    exp: number;
  };
}

// 2. Setting the  access token in storage
export function setAccessToken(accessToken: string, refreshToken: string, address: string) {
  const ls = localStorage || window.localStorage;
  if (!ls) {
    throw new Error("LocalStorage is not available");
  }
  ls.setItem("accessToken", accessToken);
  ls.setItem("refreshToken", refreshToken);
  ls.setItem("address", address);
  const exp: any = parseJwt(accessToken)?.exp;
  ls.setItem(STORAGE_KEY, JSON.stringify({ accessToken, refreshToken, address, exp }));

}

// 3. Parse the JWT token that comes back and extract the exp date field
function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
