import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { WiDaySunny, WiRain, WiCloudy } from 'react-icons/wi';
import styled from 'styled-components';

const WeatherInfoContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
`;

const WeatherIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const WeatherInfo: React.FC = () => {
  const { data } = useContext(WeatherContext)!;

  if (!data) return null;

  const { name, main, weather, wind } = data;
  const weatherIcon = weather[0].main;

  const getWeatherIcon = () => {
    switch (weatherIcon) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Rain':
        return <WiRain />;
      case 'Clouds':
        return <WiCloudy />;
      default:
        return null;
    }
  };

  return (
    <WeatherInfoContainer>
      <h2>{name}</h2>
      <WeatherIcon>{getWeatherIcon()}</WeatherIcon>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Condition: {weather[0].description}</p>
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;