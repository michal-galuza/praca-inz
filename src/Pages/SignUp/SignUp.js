import { Link } from 'react-router-dom';
import Select from '../../Components/LoginPageComponents/Select/Select';
import React from 'react';
import {Wrapper ,
     InputStyled,
     Submit,
     TitleHeader,
     Container ,
     P,
     A,
     SignUp,
     InputsWrapper ,
     LinkWrapper,
     SignInButton,
     InputsWrapperName } from './SignUpStyled';
//Inputy  imie nazwisko
//2 x password
//mail
//data urodzenia
//nazwa uzytkownika
//zmian sing in na singup
//kasujemy forgot jor pasłord
//do you have acconut? Sing In
const SignUpPage =()=>{
    const date = new Date();
    console.log(date);
    return (
        <Container>
            <SignInButton buttonText="Sign in" />

                <Wrapper>

                    <TitleHeader title="SuitGift"/>
                    <P>No more problem with gifts,<br/> Let's suit it up!</P>

            <InputsWrapper>
                <InputsWrapperName>
                <InputStyled name placeholder="Name"/>
                <InputStyled name placeholder="Surname"/>
                </InputsWrapperName>
                <Select/>
                <InputStyled  placeholder="Your email"/>
                <InputStyled type="password"  placeholder="Your password"/>
                <InputStyled type="password"  placeholder="Repeat  password"/>
                <Submit type="submit" buttonText="Sign up"/>
            </InputsWrapper>

            <LinkWrapper>
                <A>Already got an account?<SignUp> Sign in!</SignUp></A>

            </LinkWrapper>

                </Wrapper>

        </Container> );
}

export default SignUpPage;
