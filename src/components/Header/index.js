import React, { useContext } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import bandeira from '../../assets/estados-unidos.png'
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

            <h1><FiMenu/></h1>

            <div className='cotation-dollar'>
                <span><h2>Dólar Americano:</h2></span>
                <div className='cotation-coin'>
                    <img src={bandeira} alt='Dollar' />
                    <h2>$ {data?.currencies?.USD.buy.toFixed(2)}</h2>
                </div>
            </div>

        </div>
    )
}