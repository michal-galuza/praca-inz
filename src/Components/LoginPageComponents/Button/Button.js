import React from 'react';

const Button = ({buttonText , type}) => {
    
    
    return(
    type ? <button type={type}>{buttonText}</button> : <button type="button">{buttonText}</button>

);
}
export default Button;