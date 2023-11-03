// src/FilterStyles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  margin: 20px auto;
  max-width: 1200px;
`;

export const Navbar = styled.div`
  background-color: #282c34;
  position: sticky;
  top: 0;
  padding: 1px 0;
`;

export const FilterContainer = styled.div`
  position: sticky;
  top: 30vh; /* Adjust the top position for the filter options */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 550px;
  max-height: calc(70vh); /* Adjust the max height for scrolling */
  overflow-y: auto;
`;

export const FilterButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 8vw;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f57c00;
  }
`;

export const SortButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 8vw;
  &:hover {
    background-color: #f57c00;
  }
`;
