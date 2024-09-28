import './header.css';
import logo from '../../assets/logo.png';
import { FiMenu } from "react-icons/fi";

export default function Header(){
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