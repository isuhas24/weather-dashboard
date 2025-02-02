import axios from "axios";

export interface WeatherData {
    name: string;
    main: {
        temp: number,
        humidity: number
    };
    weather: {
        main: string,
        description: string
    }[];
    wind: {
        speed: number
    }
}

const API_KEY = '49b94b1cdb1ab02fb92004ef46556fb4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const weatherApi = async (city : string): Promise<WeatherData> => {
    try{
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    }
    catch(err){
        throw new Error('Failed to fetch weather data');
    }
}

export default weatherApi;