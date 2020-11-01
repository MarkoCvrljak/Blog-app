import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';

const Layout = ({ children, categories }) => (
    <>
        <Navigation categories={categories} />
        {children}
    </>
);

Layout.propTypes = {
    categories: PropTypes.array,
};

export default Layout;
