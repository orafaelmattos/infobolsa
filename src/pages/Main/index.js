import './main.css';
import Header from '../../components/Header/index';
import Image from '../../assets/bolsa de valores.jpg';
import Logo from '../../assets/logo.png';
import QuemSomos from '../../components/QuemSomos';
import { TbZoomMoney } from "react-icons/tb";
import { PiMoney } from "react-icons/pi";
import { useContext } from 'react';
import { ApiContext } from '../../contexts/contextApi';
import { RiBitCoinLine } from "react-icons/ri";


export default function Main(){

    const { data } = useContext(ApiContext);

    return(
        <div className='container'>
            <Header/>
            <section className='image-container'>
                <img src={Image} alt='image-background' className='image-background'/>
                <div className='content'>
                    <img src={Logo} alt='logo'/>
                    <div className='title'>
                        <h1 className='cssanimation typing'>Seu lugar na bolsa</h1>
                        <p>Explore as oportunidades do mercado financeiro.</p>
                    </div>
                </div>
            </section>
            
            <div className="card-container">
                <h1>Indicadores Econômicos</h1>
                <h2>Fique por dentro de todas as informações da economia mundial.</h2>

                <div className='cards'>
                    <div className='card-border'>
                        <div className='card'>
                            <div className='card-image'>
                                <h1><TbZoomMoney/></h1>
                            </div>

                            <div className='card-info'>
                                <p className='card-title'>{data?.stocks?.IBOVESPA.name}</p>
                                <div className='card-variation'>
                                    <p>{data?.stocks?.IBOVESPA.points.toFixed(2)}</p>
                                    <p style={{ color: data?.stocks?.IBOVESPA.variation < 0 ? '#FF033E' : 'green', fontSize: '12px' }} >{data?.stocks?.IBOVESPA.variation.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card-border'>
                        <div className='card'>
                            <div className='card-image'>
                                <h1><PiMoney /></h1>
                            </div>

                            <div className='card-info'>
                                <p className='card-title'>{data?.currencies?.USD.name}</p>
                                <div className='card-variation'>
                                    <p>USD ${data?.currencies?.USD.buy.toFixed(2)}</p>
                                    <p style={{ color: data?.currencies?.USD.variation < 0 ? '#FF033E' : 'green', fontSize: '12px' }} >{data?.currencies?.USD.variation.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card-border'>
                        <div className='card'>
                            <div className='card-image'>
                                <h1><RiBitCoinLine/></h1>
                            </div>

                            <div className='card-info'>
                                <p className='card-title'>{data?.bitcoin?.mercadobitcoin.name}</p>
                                <div className='card-variation'>
                                    <p>
                                    {new Intl.NumberFormat('pt-BR', { 
                                        style: 'currency', 
                                        currency: 'BRL' 
                                    }).format(data?.bitcoin?.mercadobitcoin.buy)}
                                    </p>
                                    <p style={{ color: data?.bitcoin?.mercadobitcoin.variation < 0 ? '#FF033E' : 'green', fontSize: '12px' }} >{data?.bitcoin?.mercadobitcoin.variation.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
           
            <QuemSomos/>

        </div>
    )
}