import React, { useContext } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { FiMenu } from "react-icons/fi";
import { ApiContext } from '../../contexts/contextApi';

export default function Header(){

    const { data } = useContext(ApiContext);

    console.log(data);
    

    return(
        <div className='container-area'>
           <img src={logo} alt='logo' />

            <div className='information'>
                <h2>Início</h2>
                <h2>Cotações</h2>
                <h2>Bolsa</h2>
                <h2>Criptomoedas</h2>
            </div>

            <h1><FiMenu /></h1>

        </div>
    )
}