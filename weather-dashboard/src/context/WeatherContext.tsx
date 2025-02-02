
import weatherApi, { WeatherData } from "../api/weatherApi"
import React, { Children, createContext, ReactNode, useEffect, useState } from "react";

interface WeatherContextType {
    data : WeatherData | null;
    error : string;
    city: string;
    setCity: (city: string) => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderPropType {
    children : ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderPropType> =  ({children}) => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');
    const [city, setCity] = useState<string>(localStorage.getItem('lastSearchedCity') || '');

    const fetchData = async () => {
        try{
            const response = await weatherApi(city);
            setData(response);
            console.log(response);
            setError('');
        }
        catch(err: any){
            setError(err.message);
        }
    }

    useEffect(() => {
        if(city){
            fetchData();
            const interval = setInterval(fetchData, 5000);
            return () => clearInterval(interval);
        }
    }, [city]);

    return(
        <WeatherContext.Provider value={{data, error, city, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}