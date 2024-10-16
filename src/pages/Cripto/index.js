
import Header from "../../components/Header";
import { ApiContext } from '../../contexts/contextApi';
import { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import './cripto.css'

export default function Bolsa(){

    const { data } = useContext(ApiContext);
    
    const currencies = data?.bitcoin;


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    

    return(
        <div>
            <Header/>
            <div className='cripto-container'>
                <div className='cripto-title cssanimation fadeIn'>
                    <h1>Fique de Olho nas Cripto!</h1>
                </div>
                    {currencies && 
                    Object.keys(currencies).map((currencyKey) => {
                    const currency = currencies[currencyKey];
                    
                    return (
                        <div className="cripto-card-border cssanimation fadeIn">
                            <div key={currencyKey} className="cripto-card">
                                    <div className='cripto-name'>
                                        <h2>{currency.name} ({currencyKey})</h2>
                                    </div>
                                <div className='cripto-information'>
                                    <p>Valor: <span>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(currency.last)}</span></p>
                                    <p>Variação: <span style={{ color: currency.variation < 0 ? '#e61919' : 'green'}} >{currency.variation}%</span></p>
                                </div>
                            </div>
                        </div>
                    );
                    })
                }
                
            </div>
            <Footer/>
        </div>
    )
}