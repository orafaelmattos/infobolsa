import './modal.css';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Modal({ isOpen, setIsOpen }){

    function closeModal(){
        setIsOpen(false)
        console.log('');
        
    }

    return(
        <div className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-closed'}`}>
            <div className='modal'>
                <button onClick={closeModal}><IoMdClose /></button>
                <div className='modal-item'>
                    <Link to='/'><p>Início</p></Link>
                    <Link to='/cotacao'><p>Cotações</p></Link>
                    <Link to='/bolsa'><p>Bolsa</p></Link>
                    <Link to='/cripto'><p>Criptomoedas</p></Link>
                </div>
            </div>
        </div>
    )
}