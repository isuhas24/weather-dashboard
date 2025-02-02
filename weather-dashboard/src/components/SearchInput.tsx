import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import styled from 'styled-components';

const SearchForm = styled.form`
  margin-bottom: 20px;
`;

const SearchInputField = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchInput: React.FC = () => {
  const { setCity } = useContext(WeatherContext)!;
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(inputValue);
    localStorage.setItem('lastSearchedCity', inputValue);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInputField
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default SearchInput;