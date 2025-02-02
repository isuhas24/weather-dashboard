import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import styled from 'styled-components';

const ErrorDisplayContainer = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ErrorDisplay: React.FC = () => {
  const { error } = useContext(WeatherContext)!;

  if (!error) return null;

  return <ErrorDisplayContainer>{error}</ErrorDisplayContainer>;
};

export default ErrorDisplay;