import React from 'react';
import {Wrapper,SelectInput,Option,P} from './SelectStyled'
const Select = () => {
    const days = [];
    const months = [ "January","February", "March", "April", "May","June", "July", "August","September","October", "November", "December"]
    const year =[];

    for(let i=1; i <=31; i++)   //generator dni
    {
        days.push(i);
    }
    for(let i =1930 ; i<=2020 ; i++) //generator lat
    {
        year.push(i);
    }
    return (
        <Wrapper>
        <P>Enter yout birthday date</P>
<SelectInput>
<Option value="years" disabled  selected>years </Option>
    {year.map((item , key)=><Option key={key} value={item}>{item}</Option>)}
</SelectInput>

<SelectInput>
<Option value="months" disabled  selected>months </Option>
    {months.map((item, key)=><Option key={key} value={item}>{item}</Option>)}
</SelectInput>

<SelectInput>
<Option value="days" disabled  selected>days </Option>
    {days.map((item, key)=><Option key={key} value={item}>{item}</Option>)}
</SelectInput>
        </Wrapper>
     );
}

export default Select;