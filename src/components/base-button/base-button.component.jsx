import React from 'react'

import './base-button.styles.scss'

const BaseButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}
        {...otherProps}
    >
        { children }
    </button>
)

export default BaseButton