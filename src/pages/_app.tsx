import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import Header from "../components/common/Header";
import NewSideBar from "../components/common/NewSideBar";
import { chainId } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false, // default: true,
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  return (
    <>
      <ThirdwebProvider desiredChainId={chainId}>
        <QueryClientProvider client={queryClient}>
          <NewSideBar>
            <Component {...pageProps} />
          </NewSideBar>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </QueryClientProvider>
      </ThirdwebProvider>
    </>
  );
}
