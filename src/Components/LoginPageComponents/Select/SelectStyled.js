import styled from 'styled-components';

//max 4 const w stylach bez propsów

//!!!!!!!!!!!!!!!!!!
//  ZAPISYWAĆ KURWA MAĆ
//!!!!!!!!!!!!!!!!!!!!!!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ZAPAMIĘTAJ KURDE
//stworzyć zmienną exportowaną
//zaimporotwać
//WYKORZYSTAĆ
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    height: 14%;
    width: 55%;
    border-radius: 10px;

`;
export const P = styled.p`
color: white;
width:100%;
text-align: center;
`;
export const SelectInput = styled.select`
    height: 50%;
    width: 32%;
    border-radius: 10px;
    border: none;
    color: gray;
    
`;
export const Option = styled.option`
background: #4B597A;
color: white;
border: 4px solid #7D6592;
cursor: pointer;
`;