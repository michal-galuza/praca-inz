import React from 'react';
import {InputStyled} from './InputStyled';



const Input=({placeholder , className , type , fn})=>(
    <InputStyled onChange={fn}  name={placeholder} id={placeholder} type={type?"password": "text"} className={className} placeholder={placeholder}/>



);

export default Input;