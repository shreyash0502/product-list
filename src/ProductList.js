import React from 'react';
import { ProductsContainer } from './styles';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default ProductList;
