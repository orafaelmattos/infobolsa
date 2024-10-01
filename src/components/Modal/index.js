import './modal.css'

export default function Modal({ isOpen, setIsOpen }){
    return(
        <div className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-closed'}`}>
            <div className='modal'>
            <h2>Menu Modal</h2>
                <p>Conteúdo do menu</p>
                <button>Fechar Modal</button>
            </div>
        </div>
    )
}