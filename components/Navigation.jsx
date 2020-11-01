import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Nav = ({ categories }) => {
    return (
        <div>
            <nav className="" data-uk-navbar>
                <Link href="/">
                    <a>Strapi Blog</a>
                </Link>
                <div className="">
                    <ul className="">
                        {categories.map((category) => {
                            return (
                                <li key={category.id}>
                                    <Link as={`/category/${category.slug}`} href="/category/[id]">
                                        <a className="">{category.name}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

Nav.propTypes = {
    categories: PropTypes.array,
};

export default Nav;
