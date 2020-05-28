import React from 'react';
import {InputStyled} from './InputStyled';



const Input=({placeholder , className , type})=>(
    <InputStyled type={type?"password": "text"} className={className} placeholder={placeholder}/>



);

export default Input;