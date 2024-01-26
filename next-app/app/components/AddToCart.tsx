'use client';
import React from 'react'

//This is all client side for interactivity with the button

const AddToCart = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart