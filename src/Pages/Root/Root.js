
//tytuł
//2 button z róznymi napisami i jedne ma byc submit
//2 inputy i różnymi place holderami jeden ma miec kolor czerwony
//div 100px x 100px tło zielone

import React from 'react';
import Button from '../../RootPageComponents/Button/Button';
import Input from '../../RootPageComponents/Input/Input';
import Title from '../../RootPageComponents/Title/Title';

const Root = () => {
    return (
        <>
        <Button buttonText="ala ma kota"/>
        <Button buttonText="ala" type="submit"/>
        <Input placholder="Ala ma kota"/>
        <Input placholder="Michał co patyka wpychał"/>
        </>
);
}
export default Root;