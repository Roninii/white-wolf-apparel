import React from 'react'

import MenuItem from './menu-item'

import './hompage.scss'

const directories = [
    'hats',
    'jackets',
    'sneakers',
    'womens',
    'mens'
]

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                {
                    directories.map((dir, i) => <MenuItem title={dir} key={i}/>)

                }
            </div>
        </div>
        )
}

export default Homepage