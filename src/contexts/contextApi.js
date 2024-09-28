import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();


export default function ContextApi({ children }) {
    const [data, setData] = useState({});  

    useEffect(() => {
        const apiKEY = '04f6ca94';

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.hgbrasil.com/finance?format=json-cors&key=${apiKEY}`);
                setData(response.data.results); 
                
            } catch (error) {
                console.log(error);
            }

        };
        
        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ data }}>
            {children}
        </ApiContext.Provider>
    );
}
