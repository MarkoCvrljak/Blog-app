/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { strapiBaseUrl } from '../config.json';

import { getData as getGlobalData } from '../adapters/strapi.adapter';

const Blog = ({ Component, pageProps }) => {
    console.log('_app', pageProps);
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

Blog.getInitialProps = async () => {
    const global = await getGlobalData(`${strapiBaseUrl}/global`);
    return { pageProps: { global } };
};

Blog.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default Blog;
