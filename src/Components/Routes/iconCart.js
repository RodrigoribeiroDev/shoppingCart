import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Home.css';
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from './CartContext'; 

const IconCart = () => {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart'); // Redireciona para a página do carrinho quando o ícone é clicado
  };

  return (
    <div>
      <span className='replace'>{cartCount}</span>
      <FaCartArrowDown className='iconCart' onClick={handleCartClick} />
    </div>
  );
};

export default IconCart;
