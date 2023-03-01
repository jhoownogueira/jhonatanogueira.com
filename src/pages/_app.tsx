import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "@/styles/themes/default";
import {GlobalStyles} from "@/styles/global";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyles />
          <Header />
        <Component {...pageProps} />
          <Footer />
      </ThemeProvider>
  )
}
