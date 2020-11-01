import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

import { getBlogData } from '../adapters/strapi.adapter';

import { strapiBaseUrl } from '../config.json';

const Home = ({ homepage, categories }) => {
    console.log('home', homepage);
    return (
        <Layout categories={categories}>
            <div className="">
                <div className="">
                    <h1>{homepage.main.title}</h1>
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const homepage = await getBlogData(`${strapiBaseUrl}/homepage`);
    const articles = await getBlogData(`${strapiBaseUrl}/articles?status=published`);
    const categories = await getBlogData(`${strapiBaseUrl}/categories`);

    return {
        props: { homepage, articles, categories },
    };
};

Home.propTypes = {
    homepage: PropTypes.object,
    categories: PropTypes.array,
};

export default Home;
