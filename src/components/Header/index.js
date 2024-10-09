import React, { useContext, useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import bandeira from '../../assets/estados-unidos.png';
import { FiMenu } from "react-icons/fi";
import { ApiContext } from '../../contexts/contextApi';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

export default function Header() {
    const { data } = useContext(ApiContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800); 

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); 
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container-area'>
            <img src={logo} alt='logo' />

            <div className='information'>
                <Link to='/'><h2>Início</h2></Link>
                <Link to='/cotacao'><h2>Cotações</h2></Link>
                <Link to='/bolsa'><h2>Bolsa</h2></Link>
                <Link to='/cripto'><h2>Criptomoedas</h2></Link>
            </div>

            <button onClick={openModal} style={{ display: isOpen ? 'none' : (isMobile ? 'flex' : 'none') }}>
                <h1><FiMenu /></h1>
            </button>

            <div className='cotation-dollar'>
                <span><h2>Dólar Americano:</h2></span>
                <div className='cotation-coin'>
                    <img src={bandeira} alt='Dollar'/>
                    <h2>$ {data?.currencies?.USD.buy.toFixed(2)}</h2>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
