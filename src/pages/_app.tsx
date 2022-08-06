import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "../../node_modules/next/app";

function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;