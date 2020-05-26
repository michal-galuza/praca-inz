import React from 'react';
import Input from '../Components/LoginPageComponents/Input/Input';
import Button from '../Components/LoginPageComponents/Button/Button';
import Title from '../Components/LoginPageComponents/Title/Title';
import {Wrapper } from './LoginPageStyled';
import styled, { ThemeProvider } from 'styled-components';

const Email = styled(Input)`
grid-area: submit;
`;

const LoginPage = ()=>{


  return(

      <Wrapper>

    <Title title="JavaScript ty śmieciu "/>
    <Email   placeholder="emial"/>
    <Input  placeholder="password"/>
    <Button type="submit" buttonText="submit"/>




</Wrapper>
)

};
export default LoginPage;