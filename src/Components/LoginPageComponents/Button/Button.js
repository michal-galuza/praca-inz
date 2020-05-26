import React from 'react';

const Button = ({buttonText , type , className}) => {


    return(
    type ?
     <button className={className} type={type}>{buttonText}</button> 
     : 
    <button className={className} type="button">{buttonText}</button>

);
}
export default Button;