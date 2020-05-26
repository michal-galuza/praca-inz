import styled from 'styled-components';


export const Wrapper = styled.div`
width:100vw;
height:100vh;
display: grid;
grid-template-areas:
"title"
"email"
"password"
"submit";
grid-template-rows: 100px 1fr 1fr 1fr; 
`;
