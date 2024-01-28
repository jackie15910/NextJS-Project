import React from 'react'
import AddToCart from './AddToCart'

//This is all server side except for addtocart

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      <AddToCart /> 
    </div>
  )
};

export default ProductCard;