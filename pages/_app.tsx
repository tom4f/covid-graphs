import type { AppProps } from 'next/app'
import './css/main.css';
import './css/meteo.css';

function MyApp( { Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
