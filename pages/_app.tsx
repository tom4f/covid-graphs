import type { AppProps } from 'next/app'
import './css/main.css';
import Layout from '../components/Layout'

function MyApp( { Component, pageProps }: AppProps) {

  const navName = pageProps.graphsData[0].common.navName

  console.log( navName )

  return(
    <Layout allPaths={ pageProps.allPaths } >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
