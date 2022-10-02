import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Isle Of The Blessed</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Isle Of The Blessed" />
            <meta name="description"
                content="Harm Reduction and Peer Support" />
            <meta name="author" content="CloudsOfMana" />
            <meta name="keywords"
                content="IOTBl, Isle Of The Blessed" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Isle Of The Blessed" />
            <meta itemProp="description"
                content="Harm Reduction and Peer Support" />
            <meta itemProp="image" content="images/logos/fevicon.png" />
                content="Isle Of The Blessed" />
            <meta name="og:title" content="Isle Of The Blessed" />
            <meta name="og:description"
                content="Isle Of The Blessed" />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://isleoftheblessed.org/" />
            <meta name="og:site_name" content="Isle Of The Blessed " />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
