import Header from "../../components/Header";
import './money.css';
import { useContext } from "react";
import { ApiContext } from "../../contexts/contextApi";
import Footer from "../../components/Footer";

export default function Cotacao(){

    const { data } = useContext(ApiContext);
    const currencies = data?.currencies;
    console.log(currencies);
    
    

    return(
        <div>
            <Header/>
            <div className="money-container">

                <div className="money-title">
                    <div className="money-title-border">
                        <p>Moeda</p>
                    </div>
                    <div className="money-title-border">
                        <p>Informações</p>
                    </div>
                </div>

                <div>
                    {currencies && 
                    Object.keys(currencies).map((currencyKey) => {
                    const currency = currencies[currencyKey];

                if(currencyKey === 'source')return null
                if(currencyKey === 'BTC')return null
                
                return (
                    <div className="money-card-border">
                        <div key={currencyKey} className="money-card">
                                <h3>{currency.name} ({currencyKey})</h3>
                            <div>
                                <p>Compra: {new Intl.NumberFormat('pt-BR', { 
                                        style: 'currency', 
                                        currency: 'BRL' 
                                    }).format(currency.buy)}</p>
                                <p>Variação: <span>{currency.variation}%</span></p>
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