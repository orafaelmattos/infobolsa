import Imagem from '../../assets/banner.png'
import './index.css';

export default function QuemSomos(){ 
    return(
        <div className='container-banner'>
            <div className='container-title'>
                <h1>Monitoramento de Investimentos</h1>
                <h2>Acompanhe a evolução do mercado e proteja seu capital.</h2>
            </div>

                <img src={Imagem} alt='imagem' className='container-image'/>
            
        </div>
    )
}