import Script from 'next/script'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '../common/components/Layout'

import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Script id='dark-mode' strategy='beforeInteractive' src='/scripts/darkMode.js'/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
