import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  width: 200%;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
  width: 250px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    color: #555;
    font-size: 0.9rem;
  }
`;
