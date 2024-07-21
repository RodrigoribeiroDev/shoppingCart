import React, { useState, useEffect } from 'react';
import { baseURL } from '../Api/baseURL';
import '../Style/prod.css';
import ButtonSend from './buttonSend';

const Products = ({ busca }) => {
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({});

  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Erro ao buscar a lista de produtos:', error);
        setProducts([]);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title && product.title.toLowerCase().includes(busca?.toLowerCase())
  );

  const handleMouseOver = (produto) => {
    setShowDetails(true);
    setCurrentDetails(produto);
  };

  const handleMouseOut = () => {
    setShowDetails(false);
    setCurrentDetails({});
  };

  return (
    <div className='containerProduct'>

      {filteredProducts.map((produto) => (
        <span 
          key={produto.id} 
          className='product'
          onMouseOver={() => handleMouseOver(produto)}
          onMouseOut={handleMouseOut}
        >
          <img src={produto.image} 
          alt={produto.title} /> <br />

          {produto.title} <br />

          <h4>Price:</h4> <h2>U${produto.price}</h2>

          <span><ButtonSend item={produto} /></span>

          {showDetails && currentDetails.id === produto.id && (
            <div className="details">
              <p>Marca: {produto.brand}</p>
              
              
            </div>
          )}
        </span>
      ))}
    </div>
  );
};

export default Products;

