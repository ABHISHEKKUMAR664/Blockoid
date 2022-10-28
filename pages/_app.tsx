// import type { AppProps } from 'next/app'
// // import Navbar from '../component/Navbar'
// import Layout from '../component/Layout'
// import { useState } from 'react';
// import '../styles/globals.css'


// function MyApp({ Component, pageProps }: AppProps) {

//   return <>
  // <Layout>
     
  //     <Component {...pageProps} />
  // </Layout>
 
//   </>
// }

// export default MyApp
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../component/config/theme';
import createEmotionCache from '../component/config/createEmotionCache';
import Layout from '../component/Layout';
import ResponsiveAppBar from '../component/account-navbar/account-navbar';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ResponsiveAppBar />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
