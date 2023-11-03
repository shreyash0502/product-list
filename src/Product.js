import React from 'react';
import { ProductCard } from './styles';

const Product = ({ product }) => {
  const { title, description, price, image } = product;

  return (
    <ProductCard>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </ProductCard>
  );
};

export default Product;
