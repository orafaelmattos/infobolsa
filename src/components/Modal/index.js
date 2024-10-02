import './modal.css';
import { IoMdClose } from "react-icons/io";

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
                    <p>Início</p>
                    <p>Cotações</p>
                    <p>Bolsa</p>
                    <p>Criptomoedas</p>
                </div>
            </div>
        </div>
    )
}