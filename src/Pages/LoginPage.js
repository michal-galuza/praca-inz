import React from 'react';
import Input from '../Components/LoginPageComponents/Input/Input';
import Button from '../Components/LoginPageComponents/Button/Button';
import Title from '../Components/LoginPageComponents/Title/Title';
import {Wrapper , Email} from './LoginPageStyled';
const LoginPage = ()=>{
  
  
  return(
      <Wrapper>

    <Title title="JavaScript ty śmieciu "/>
    <Email placeholder="emial"/>
    <Input placeholder="password"/>
    <Button type="submit" buttonText="submit"/>
  
    
    

</Wrapper>
)

};
export default LoginPage;