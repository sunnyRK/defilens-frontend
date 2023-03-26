import { CodegenConfig } from "@graphql-codegen/cli";
import { client } from "./src/query/lensquery";
import { API_URL } from "./src/utils/constants";

const config: CodegenConfig = {
  hooks: { afterAllFileWrite: ["prettier --write"] },
  generates: {
    // "src/query/graphql_testnetonly/generated.ts": {
    //   schema: API_URL,
    //   plugins: [
    //     "typescript",
    //     "typescript-operations",
    //     "typescript-react-query",
    //     "fragment-matcher",
    //   ],
    //   documents: "src/query/graphql_testnetonly/*.graphql",
    //   config: {
    //     dedupeFragments: true,
    //     fetcher: { func: "./auth-fetcher#fetcher", isReactHook: false },
    //   },
    // },
    "src/query/graphql/generated.ts": {
      schema: API_URL,
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "fragment-matcher",
      ],
      documents: "src/query/graphql/*.graphql",
      config: {
        dedupeFragments: true,
        fetcher: { func: "./auth-fetcher#fetcher", isReactHook: false },
      },
    },
    "src/query/thegraph/aaveV2Matic/generated.ts": {
      // preset: 'client',
      schema: "https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "fragment-matcher",
      ],
      documents: "src/query/thegraph/aaveV2Matic/*.graphql",
      config: {
        dedupeFragments: true,
        fetcher: { func: "./auth-defi-fetcher#fetcher", isReactHook: false },
      },
    },
    "src/query/thegraph/aaveV2Eth/generated.ts": {
      // preset: 'client',
      schema:
        "https://api.thegraph.com/subgraphs/name/messari/aave-v2-ethereum",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "fragment-matcher",
      ],
      documents: "src/query/thegraph/aaveV2Eth/*.graphql",
      config: {
        dedupeFragments: true,
        fetcher: { func: "./auth-defi-fetcher#fetcher", isReactHook: false },
      },
    },
    "src/query/thegraph/UniV3Eth/generated.ts": {
      // preset: 'client',
      schema:
        "https://api.thegraph.com/subgraphs/name/messari/uniswap-v3-ethereum",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "fragment-matcher",
      ],
      documents: "src/query/thegraph/UniV3Eth/*.graphql",
      config: {
        dedupeFragments: true,
        fetcher: { func: "./auth-defi-fetcher#fetcher", isReactHook: false },
      },
    },
    // Perp
    "src/query/thegraph/perpOp/generated.ts": {
      // preset: 'client',
      schema:
        "https://thegraph-api.perp.fi/subgraphs/name/perpetual-protocol/perpetual-v2-optimism",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "fragment-matcher",
      ],
      documents: "src/query/thegraph/perpOp/*.graphql",
      config: {
        dedupeFragments: true,
        fetcher: { func: "./auth-defi-fetcher#fetcher", isReactHook: false },
      },
    },
  },
};

export default config;
