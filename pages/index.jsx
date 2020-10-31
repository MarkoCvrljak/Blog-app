import React from 'react';
import PropTypes from 'prop-types';

import { strapiBaseUrl } from '../config.json';

import { getData as getHomePageData } from '../adapters/strapi.adapter';

const Home = ({ homepage }) => {
    return (
        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <h1>{homepage.main.title}</h1>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const homepage = await getHomePageData(`${strapiBaseUrl}/homepage`);

    return {
        props: { homepage },
    };
}

Home.propTypes = {
    homepage: PropTypes.object,
};

export default Home;
