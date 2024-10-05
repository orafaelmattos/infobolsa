import LogoBovespa from '../../assets/logo-bovespa.png';
import USA from '../../assets/estados-unidos.png';
import Bitcoin from '../../assets/bitcoin.png'
import './information.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ApiContext } from '../../contexts/contextApi';

export default function InformacaoAdicional(){

    const { data } = useContext(ApiContext);

    return(
        <div className='information-container'>

            <div className='information-border'>
                <div className='information-card'>
                    <div className='information-img'>
                        <img src={LogoBovespa} alt='logo-bovespa'/>
                    </div>

                    <div>
                        <h1>{data?.stocks?.IBOVESPA.name}</h1>
                        <h2>{new Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(data?.stocks?.IBOVESPA.points.toFixed(2))}</h2>
                        <p style={{ color: data?.stocks?.IBOVESPA.variation < 0 ? '#FF033E' : 'green', fontSize: '18px', fontWeight: 'bold' }}>{data?.stocks?.IBOVESPA.variation.toFixed(2)}</p>
                        <Link to='/bolsa'>Saiba Mais</Link>
                    </div>
                </div>
            </div>


            <div className='dollar-border'>
                <div className='dollar-card'>

                    <div className='dollar-text'>
                        <h1>{data?.currencies?.USD.name}</h1>
                        <h2>{new Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'USD' 
                        }).format(data?.currencies?.USD.buy.toFixed(2))}</h2>
                        <p style={{ color: data?.currencies?.USD.variation < 0 ? '#FF033E' : 'green', fontSize: '18px', fontWeight: 'bold' }}>{data?.currencies?.USD.variation.toFixed(2)}</p>
                        <Link to='/cotacao'>Saiba Mais</Link>
                    </div>
                    <div className='dollar-img'>
                        <img src={USA} alt='dollar'/>
                    </div>
                </div>
            </div>

            <div className='information-border'>
                <div className='information-card'>

                    <div className='information-img'>
                        <img src={Bitcoin} alt='bitcoin'/>
                    </div>
                    <div>
                        <h1>{data?.bitcoin?.mercadobitcoin.name}</h1>
                        <h2>{new Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(data?.bitcoin?.mercadobitcoin.buy)}</h2>
                        <p style={{ color: data?.bitcoin?.mercadobitcoin.variation < 0 ? '#FF033E' : 'green', fontSize: '18px', fontWeight: 'bold' }}>{data?.bitcoin?.mercadobitcoin.variation.toFixed(2)}</p>
                        <Link to='/cripto'>Saiba Mais</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}