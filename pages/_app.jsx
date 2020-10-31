/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { strapiUrl } from '../config.json';

import getGlobals from '../adapters/strapi.adapter';

const MyApp = ({ Component, pageProps }) => {
    const { global } = pageProps;
    const { defaultSeo } = global;
    const AppContext = createContext({});

    return (
        <>
            <Head>
                <title>{defaultSeo.metaTitle}</title>
                <meta name="description" content={defaultSeo.metaDescription} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppContext.Provider value={global}>
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    );
};

MyApp.getInitialProps = async () => {
    const global = await getGlobals(`${strapiUrl}/global`);
    return { pageProps: { global } };
};

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default MyApp;
