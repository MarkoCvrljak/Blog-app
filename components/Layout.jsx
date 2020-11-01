import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, categories }) => (
    <>
        {categories.map(cat => cat.name)}
        {children}
    </>
);

Layout.propTypes = {
    categories: PropTypes.array,
};

export default Layout;
