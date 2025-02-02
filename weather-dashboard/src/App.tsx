import React from 'react';
import SearchInput from './components/SearchInput';
import WeatherInfo from './components/WeatherInfo';
import ErrorDisplay from './components/ErrorDisplay';
import { WeatherProvider } from './context/WeatherContext';
import { GlobalStyle } from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <div className="container">
        <h1>Weather Dashboard</h1>
        <SearchInput />
        <ErrorDisplay />
        <WeatherInfo />
      </div>
    </WeatherProvider>
  );
};

export default App;


