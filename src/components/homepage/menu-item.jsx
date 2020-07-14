import React from 'react'

const MenuItem = ({ title }) => {
    return (
        <article className='menu-item'>
            <div className='content'>
                <h1 className='title'>{ title }</h1>
                <span>Shop Now</span>
            </div>
        </article>
    )
}

export default MenuItem