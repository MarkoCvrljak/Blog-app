import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = ({ categories }) => {
    return (
        <nav className={styles.mainNav} data-uk-navbar>
            <Link href="/">
                <a className={styles.logo}>DEVS Blog</a>
            </Link>
            <ul>
                {categories.map((category) => {
                    return (
                        <li key={category.id}>
                            <Link as={`/category/${category.slug}`} href="/category/[id]">
                                <a className={styles.mainNavItemLink}>{category.name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    categories: PropTypes.array,
};

export default Navigation;
