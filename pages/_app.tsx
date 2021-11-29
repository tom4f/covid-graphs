import type { AppProps } from 'next/app'
import './css/main.css';
import { Layout } from '../components/Layout'

function MyApp( { Component, pageProps }: AppProps) {

  return(
    <Layout { ...pageProps } >
      <Component { ...pageProps } />
    </Layout>
  )
}

export default MyApp