import React from 'react';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <article className={`${size} menu-item`}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span>Shop Now</span>
            </div>
        </article>
    );
};

export default MenuItem;
