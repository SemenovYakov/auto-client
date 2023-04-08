import { colors } from "@/src/colors";
import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import { ContextProvider } from "@/src/context";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body {
  padding: 0;
  margin: 0;
  font-family: Verdana;
  background-color: ${colors.bg};
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}
