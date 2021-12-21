import Head from 'next/head';
import { AppProps } from 'next/app';

import { GlobalStyles } from 'styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href='/img/icon-512.png' />
        <link rel="apple-touch-icon" href='/img/icon-512.png' />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description"
          content="A simple project starter to work with Typescript, React, 
          NextJs and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}