import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css';

//This is all server side except for addtocart

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart /> 
    </div>
  )
};

export default ProductCard;