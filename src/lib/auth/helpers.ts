export function isTokenExpired() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken || accessToken === "undefined") {
    return true;
  }
  console.log("isTokenExpired-Date.now()", Date.now());
  console.log("isTokenExpired-exp * 1000", parseJwt(accessToken)?.exp * 1000);
  console.log("isTokenExpired-diffff+++",
    parseJwt(accessToken)?.exp * 1000 - Date.now(),
    (parseJwt(accessToken)?.exp * 1000 - Date.now())/60000
  );
  if (Date.now() <= parseJwt(accessToken)?.exp * 1000) {
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
  const accessToken: any = localStorage.getItem("accessToken");
  const refreshToken: any = localStorage.getItem("refreshToken");
  const exp: any = parseJwt(accessToken)?.exp * 1000;
  const data = JSON.stringify({ accessToken, refreshToken, exp });
  return JSON.parse(data) as {
    accessToken: string;
    refreshToken: string;
    exp: number;
  };
}

// 2. Setting the  access token in storage
export function setAccessToken(accessToken: string, refreshToken: string) {
  const ls = localStorage || window.localStorage;
  if (!ls) {
    throw new Error("LocalStorage is not available");
  }
  ls.setItem("accessToken", accessToken);
  ls.setItem("refreshToken", refreshToken);
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
