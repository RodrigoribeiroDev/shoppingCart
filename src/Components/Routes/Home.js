import { useState } from 'react';
import Products from './Products';
import { IoSearchCircle } from "react-icons/io5";
import '../Style/Home.css'


const Home = () => {

  const [busca, setBusca] = useState('');

  return (
    <div className='containerHome'>
      <div>

        <input type='text' 
        className='ipt' 
        placeholder='Search products:'
        value={busca}
        onChange={(e) => setBusca(e.target.value)}/> 
        </div>

          <Products busca={busca} />

        <button className='btnSearch'> 
          <IoSearchCircle className='iconSearch'/>
        </button>

    </div>
  );
};

export default Home;
