import React from 'react';

import {Wrapper ,
   Email  ,
    Submit,
     TitleHeader,
     Password,
     Container ,
     P,
     A,
     SignUp,
     Forgot,
     InputsWrapper ,
     TextWrapper,
     LinkWrapper,
     SignUpButton } from './LoginPageStyled';

//https://lh3.googleusercontent.com/proxy/9ZQT9vtW3nkd5sAWCjJgtGuBE2X8bAEMEd6XUSkIOFX_almVmOO6J3Wv3cZ3VgGiBctaO_o5Wdmvki_n8p3qbGvwybxqYeYFkm--9w
//https://www.searchpng.com/wp-content/uploads/2019/02/Gift-Icon-PNG-715x715.png
//https://library.kissclipart.com/20191119/hqe/kissclipart-gift-icon-26ca4a144d5b1dee.png
//#F27D88
//#FF9671
//#A36AAA
const LoginPage = ()=>{


  return(
    <Container>
    <SignUpButton buttonText="Sign Up" /> 
      <Wrapper>
      
        <TitleHeader title="SuitGift"/>
        <P>No more problem with gifts,<br/> Let's suit it up!</P>
        
        <InputsWrapper>
        <Email  placeholder="Your email"/>
        <Password type="password"  placeholder="Your password"/>
        <Submit type="submit" buttonText="Sign in"/>
        </InputsWrapper>
        <LinkWrapper>
        <A>No have account yet?<SignUp> Sign up!</SignUp> </A>
        <Forgot>Forgot your password?</Forgot>
        </LinkWrapper>
      </Wrapper>
    </Container>
)

};
export default LoginPage;