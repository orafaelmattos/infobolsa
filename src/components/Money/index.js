import './money.css';
import { ApiContext } from '../../contexts/contextApi';
import { useContext } from 'react';
import { IoIosClose } from "react-icons/io";
import { useState, useEffect } from 'react';

export default function Money({ moneyOpen, setMoneyOpen }){

    const { data } = useContext(ApiContext);
    const currencies = data?.currencies;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    function closeMoney(){
        setMoneyOpen(false);
    }

    useEffect(() => {
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); 
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) {
        return null;
    }

    return(
        <div className={`${moneyOpen ? 'money-open' : 'money-closed'}`}>
            <div className='cash-close' >
             <p><IoIosClose onClick={closeMoney} /></p>
            </div>
            {currencies && 
                    Object.keys(currencies).map((currencyKey) => {
                    const currency = currencies[currencyKey];

                if(currencyKey === 'source')return null
                if(currencyKey === 'BTC')return null
                if(currencyKey === 'USD')return null
                
                return (
                        <div key={currencyKey} className="cash-card">
                            <div className='cash-card-border'>
                                <h3>{currency.name} ({currencyKey})</h3>
                                <p>{new Intl.NumberFormat('pt-BR', { 
                                        style: 'currency', 
                                        currency: 'BRL' 
                                    }).format(currency.buy)}</p>
                            </div>
                        </div>
                );
                })
            }
        </div>
    )
}