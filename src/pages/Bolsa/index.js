import './bolsa.css';
import Header from "../../components/Header";
import { ApiContext } from '../../contexts/contextApi';
import { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';

export default function Bolsa(){

    const { data } = useContext(ApiContext);
    const currencies = data?.stocks;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    

    return(
        <div>
            <Header/>
            <div className='bolsa-container'>
                <div className='bolsa-title'>
                    <h1>De olho na Bolsa!</h1>
                </div>
                    {currencies && 
                    Object.keys(currencies).map((currencyKey) => {
                    const currency = currencies[currencyKey];
                    
                    return (
                        <div className="bolsa-card-border">
                            <div key={currencyKey} className="bolsa-card">
                                    <div className='bolsa-name'>
                                        <h2>{currency.name} ({currencyKey})</h2>
                                        <h3>{currency.location}</h3>
                                    </div>
                                <div className='bolsa-information'>
                                    <p>Points: <span>{currency.points}</span></p>
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