import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { strapiBaseUrl } from '../config.json';

import { getBlogData } from '../adapters/strapi.adapter';

import '../globalStyle.css';

const Blog = ({ Component, pageProps }) => {
    console.log('_app', pageProps);

    const { global } = pageProps;
    const { defaultSeo } = global;

    const AppContext = createContext({});

    return (
        <>
            <Head>
                <link rel="favicon" type="image/png" href={`${strapiBaseUrl}${global.favicon.url}`} />
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
    const global = await getBlogData(`${strapiBaseUrl}/global`);
    return { pageProps: { global } };
};

Blog.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default Blog;
