import React from 'react';

import {Wrapper , Email  , Submit , TitleHeader , Password} from './LoginPageStyled';




const LoginPage = ()=>{


  return(

      <Wrapper>
      

    <TitleHeader title="JavaScript ty śmieciu "/>
    <Email  placeholder="emial"/>
    <Password  placeholder="password"/>
    <Submit type="submit" buttonText="submit"/>




</Wrapper>
)

};
export default LoginPage;