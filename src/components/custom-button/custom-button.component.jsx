import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    // conditional formatting based on Google Sign in or not.
    <button className ={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
    {...otherProps}>
        {children}
    </button>
)

export default CustomButton;