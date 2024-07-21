import React, { useContext } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { CartContext } from './CartContext';

const ButtonRemove = ({ itemId }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(itemId);
  };

  return (
    <div>
      <button className='btnRemove' onClick={handleRemove}>
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default ButtonRemove;
