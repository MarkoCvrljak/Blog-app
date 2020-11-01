import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = ({ categories }) => {
    return (
        <nav className={styles.mainNavigation} data-uk-navbar>
            <Link href="/">
                <a className={styles.logo}>Strapi Blog</a>
            </Link>
            <div className="main-navigation-items-container">
                <ul className="main-navigation-items">
                    {categories.map((category) => {
                        return (
                            <li key={category.id} className="main-navigation-item">
                                <Link as={`/category/${category.slug}`} href="/category/[id]">
                                    <a className="main-navigation-item-link">{category.name}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

Navigation.propTypes = {
    categories: PropTypes.array,
};

export default Navigation;
