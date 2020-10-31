import React from 'react';
import PropTypes from 'prop-types';

import { strapiBaseUrl } from '../config.json';

import { getData } from '../adapters/strapi.adapter';

const Home = ({ homepage }) => {
    console.log('home', homepage);
    return (
        <div className="">
            <div className="">
                <h1>{homepage.main.title}</h1>
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const homepage = await getData(`${strapiBaseUrl}/homepage`);
    const articles = await getData(`${strapiBaseUrl}/articles?status=published`);

    return {
        props: { homepage, articles },
    };
};

Home.propTypes = {
    homepage: PropTypes.object,
};

export default Home;
