import styled from 'styled-components';
import Input from '../../Components/LoginPageComponents/Input/Input';
import Button from '../../Components/LoginPageComponents/Button/Button';
import Title from '../../Components/LoginPageComponents/Title/Title';


//Root container
export const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(to right top,
 #f27d88, #f68183, #f9857f, #fc8a7a, #fe8f76, #fc8a7a, #fa867e, #f78282, #ea778f, #d7709b, #bf6ca4, #a36aaa);
`;


//Wrappery//
export const Wrapper = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
display: grid;
grid-template-rows: 30% 350px 1fr;
grid-template-columns: 40% 60%;
grid-template-areas:
"logo text "
"loginPanel text"
"links text";
justify-content: center;
align-content: flex-start;
justify-items:center;
align-items:center;
`;

export const InputsWrapper= styled.div`
width: 100%;
height: 100%;
grid-area: loginPanel;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
flex-wrap: wrap-reverse;
`;
//Name wrapper //
export const InputsWrapperName=styled.div`
height: 14%;
width: 55% ;
display:flex;
justify-content: space-between;
align-items:center;
background:transparent;
`;

export const LinkWrapper=styled.div`
grid-area: links;
padding:10px ;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
`;

//Childrens//

export const TitleHeader=styled(Title)`
grid-area:logo;
display: flex;
justify-content:center;
align-items:flex-start;
font-family: 'Dancing Script', cursive;
font-size: 6em;
width:100%;
height:30%;
`;
export const P = styled.p`
grid-area:text;
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
font-family: 'Fredoka One', cursive;
color: white;
font-size: 5em;
padding: 0 10px 0 0;
`;
export const InputStyled = styled(Input)`
height: ${(props)=> props.name ? `100%` : `14%`};
width: ${(props)=> props.name ? `49%` : `55%`} ;
border-radius: 10px;
border: none;
::placeholder{
text-align: center;
}
display:flex;
justify-content: center;
:focus{
    border: 2px solid gray;
}
`;

export const Submit=styled(Button)`
height: 14%;
width:  55%;
border-radius: 10px;
border: none;
background: #4B597A;
color: white;
font-size: 1.2em;
border: 5px solid #7D6592;
transition: transform .2s ease-in-out ;
cursor: pointer;
:hover{
    transform: scale(1.1);
}
`;
export const SignInButton=styled(Button)`
top: 20px;
right:20px;
position:absolute;
width: 170px;
height: 40px;
border-radius: 10px;
border: none;
background: #4B597A;
color: white;
font-size: 1.2em;
border: 4px solid #7D6592;
transition: transform .2s ease-in-out ;
cursor: pointer;
:hover{
    transform: scale(1.1);
}
`;
export const A =styled.a`
color: white;
border-radius: 10px;
`;
export const SignUp =styled.a`
font-size: 1.1em;
color: #4B597A;
cursor: pointer;
:hover{
    color: black;
    text-decoration: underline;
}
`;


