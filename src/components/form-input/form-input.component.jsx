import React from 'react';

import './form-input.styles.scss';

// Functional component, because we don't want it to store any state.

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?     // if we pass in a label, then we create a label. Otherwise, do nothing.
            // When the user types something, we add the shrink property.
            (<label className = {`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;