import React, { ReactElement } from 'react'
import App from "next/app";
import Head from "next/head";
import type { AppProps /*, AppContext */ } from 'next/app'
interface Props {

}

function CMApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>CMApp Stock</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default CMApp