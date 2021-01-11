import React from 'react'

import './base-button.styles.scss'

const BaseButton = ({ children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default BaseButton