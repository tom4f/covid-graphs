
// all bellow is optionall : Custom 'Document'
// Document is only rendered in the server, event handlers like onClick won't work.

import Document, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument