import type { AppProps } from 'next/app'
// import Navbar from '../component/Navbar'
import Layout from '../component/Layout'
import { useState } from 'react';
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {

  return <>
  <Layout>
     
      <Component {...pageProps} />
  </Layout>
 
  </>
}

export default MyApp
