import React from 'react';
import {H1} from './TitleStyled';


const Title= ({title , className}) => (
<H1 className={className}>{title}</H1>
);

export default Title;