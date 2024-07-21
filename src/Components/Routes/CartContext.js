import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); // Novo estado para contar os itens

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cartCount + 1); // Incrementa o contador
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    setCartCount(cartCount - 1); // Decrementa o contador
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


