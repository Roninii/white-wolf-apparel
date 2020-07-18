import React from 'react';

import './directory.scss';

import MenuItem from '../menu-item/menu-item';

const Directory = ({ directories }) => (
    <div className='directory-menu'>
        {directories.map(({ id, title, image, linkUrl }) => (
            <MenuItem key={id} title={title} image={image} link={linkUrl} />
        ))}
    </div>
);

export default Directory;
