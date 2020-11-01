import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';

import styles from './Layout.module.scss';

const Layout = ({ children, categories }) => (
    <div className={styles.contentWrapper}>
        <Navigation categories={categories} />
        {children}
    </div>
);

Layout.propTypes = {
    categories: PropTypes.array,
};

export default Layout;
