import React from 'react';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => {
    return (
        <div>
            {articles.map(a => a.title)}
            Hello
        </div>
    );
};

Articles.propTypes = {
    articles: PropTypes.array,
};

export default Articles;
