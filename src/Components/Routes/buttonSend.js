import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 

const ButtonSend = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button onClick={handleAddToCart} className='btnSend'>+</button>
  );
};

export default ButtonSend;
