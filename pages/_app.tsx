import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable.css';

import theme from '../theme';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { SessionProvider } from 'next-auth/react';

function Ultraresume({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SessionProvider session={session}>
        <SWRConfig
          value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default Ultraresume;
