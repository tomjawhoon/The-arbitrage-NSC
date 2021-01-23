import React, { ReactElement } from 'react'
import App from "next/app";
import Head from "next/head";
import type { AppProps /*, AppContext */ } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
interface Props {

}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
}


function CMApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>CMApp Stock</title>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" type="image/x-icon" href="/static/img/icontest.png"></link>
                <meta
                    name="viewport"
                    content="initial-scale=1.0,width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>

        </>
    )
}

export default CMApp