import Header from "../../components/Header";
import './money.css';
import { useContext, useEffect } from "react";
import { ApiContext } from "../../contexts/contextApi";
import Footer from "../../components/Footer";

export default function Cotacao(){

    const { data } = useContext(ApiContext);
    const currencies = data?.currencies;
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Header/>
            <div className="money-container">

                <div className="money-title cssanimation fadeIn">
                        <p>Moeda</p>

                        <p>Informações</p>
                </div>

                <div>
                    {currencies && 
                    Object.keys(currencies).map((currencyKey) => {
                    const currency = currencies[currencyKey];

                if(currencyKey === 'source')return null
                if(currencyKey === 'BTC')return null
                
                return (
                    <div className="money-card-border cssanimation fadeIn">
                        <div key={currencyKey} className="money-card">
                                <h3>{currency.name} ({currencyKey})</h3>
                            <div>
                                <p>Compra: <span>{new Intl.NumberFormat('pt-BR', { 
                                        style: 'currency', 
                                        currency: 'BRL' 
                                    }).format(currency.buy)}</span></p>
                                <p>Variação: <span style={{ color: currency.variation < 0 ? '#e61919' : 'green'}} >{currency.variation}%</span></p>
                            </div>
                        </div>
                    </div>
                );
                })
            }
                </div>

            </div>
            <Footer/>
        </div>
    )
}