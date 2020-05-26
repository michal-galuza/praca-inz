import styled from 'styled-components';

import Input from '../Components/LoginPageComponents/Input/Input';
import Button from '../Components/LoginPageComponents/Button/Button';
import Title from '../Components/LoginPageComponents/Title/Title';
export const Wrapper = styled.div`
position: absolute;   /*wyśrodkowałem 
to za pomocą absolute bo wtedy odnosi
 się do rodzica z pozycją inną niz stacic 
 czyli window*/
background: yellow;
top:50%;
left:50%;

transform: translate(-50%   , -50%);
padding: 100px;
width:40%;
height:80%;
display: grid;
grid-template-areas:
"title"
"email"
"password"
"submit";
grid-template-rows: 100px 1fr 1fr 1fr; 
justify-items: center;
align-items: center;
`;
export const TitleHeader=styled(Title)`
width:100%;
height:100%;
grid-area: title;
text-align:center;
`
export const Email = styled(Input)`
grid-area: email;
width: 80%;
height: 50%;
border: none;
border-radius: 15px ;

`;
export const Password = styled(Input)`
grid-area: password;
width: 80%;
height: 50%;
border: none;;
border-radius: 15px ;

`;
export const Submit=styled(Button)`
grid-area: submit;
width: 60%;
height: 30%;
`;