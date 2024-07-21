import '../Style/Cart.css'
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../Style/prod.css'
import ButtonRemove from './buttonRemove';
import { formatCurrency } from '../../utils/formatCurrency.js';



const Cart = () => {
  const { cart } = useContext(CartContext);



  const total = cart.reduce((acumulador, item) => {
    return item.price + acumulador;
}, 0);

  return (
    <div className='containerCart'>
      
      <ul className='containerProduct'>
        {cart.map((item, index) => (
          <span className='product' key={index}>
             <p>Descrição: {item.description}</p> <br /> <br />
             <img src={item.image}  /> <br /> <br />
              <h1> ${item.price}</h1>
              <ButtonRemove itemId={item.id}/>
             </span>
        ))}
      </ul>
            <div>
              <span>
                <h2>Total:{formatCurrency(total, 'BRL')}</h2>
              </span>
             </div> <br /> <br />
    </div>
  );
};

export default Cart;