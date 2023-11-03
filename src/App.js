import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import products from './productsData';
import {
  AppContainer,
  FilterContainer,
  FilterButton,
  SortButton,
  Navbar, // Add Navbar component
} from './FilterStyles';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('asc');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleCategoryFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setCategoryFilter(category);
  };

  const handleSort = (attribute) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (attribute === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });
    setFilteredProducts(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="App">
      <Navbar> {/* Use Navbar for the heading */}
        <h1 style={{ color: '#fff', fontSize: '50px' }}>Product List</h1>
      </Navbar>
      <AppContainer>
        <FilterContainer>
          <label style={{ color: '#fff', marginBottom: '10px' }}>Filter by Category:</label>
          <FilterButton onClick={() => handleCategoryFilter('Electronics')}>Electronics</FilterButton>
          <FilterButton onClick={() => handleCategoryFilter('Clothing')}>Clothing</FilterButton>
		  <FilterButton onClick={() => handleCategoryFilter('Grocery')}>Grocery</FilterButton>
		  <FilterButton onClick={() => handleCategoryFilter('Furniture')}>Furniture</FilterButton>
          <FilterButton onClick={() => handleCategoryFilter('all')}>All</FilterButton>
          <label style={{ color: '#fff', marginBottom: '10px', marginTop: '20px' }}>Sort by:</label>
          <SortButton onClick={() => handleSort('price')}>Price</SortButton>
        </FilterContainer>
        <ProductList products={filteredProducts} />
      </AppContainer>
    </div>
  );
}

export default App;
