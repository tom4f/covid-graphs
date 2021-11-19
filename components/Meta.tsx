import Head from 'next/head'
import { MetaType } from './TypeDefinition'

export const Meta = ({
  title       = 'Tomáš Kučera - Covid Graphs Czech Republic',
  keywords    = 'covid COVID-19 SARS-CoV-2 sars coronavirus',
  description = 'Covid Graphs - My Web Development Project'
}: MetaType ) => {
    return (
        <Head>
            <meta name = 'viewport' content = 'width=device-width, initial-scale=1' />
            <meta name = 'keywords' content = { keywords } />
            <meta name = 'description' content = { description } />
            <meta charSet = 'utf-8' />
            <link rel = 'icon' href = '/favicon.ico' />
            <title>{ title }</title>
        </Head>
    )
}