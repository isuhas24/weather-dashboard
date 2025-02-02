import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
  }

  .container {
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #007bff;
  }
`;