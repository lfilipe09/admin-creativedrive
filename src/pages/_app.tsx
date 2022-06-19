import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import GlobalStyles from 'styles/global'
import { UserProvider } from 'hooks/useUser'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Head>
          <title>Dashboard - Creative Drive</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to manage users by Creative Drive"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
