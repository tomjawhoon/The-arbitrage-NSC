import React, { ReactElement } from 'react'
import App from "next/app";
import Head from "next/head";
import type { AppProps /*, AppContext */ } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from '../components/Header';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

interface Props {

}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
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
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>

        </>
    )
}

export default CMApp