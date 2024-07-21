import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './Components/Routes/CartContext';
import Nav from './Components/Routes/nav';
import Cart from './Components/Routes/cart';
import Home from './Components/Routes/Home';
import IconCart from './Components/Routes/iconCart';


function App() {
  return (
    <div className="containerApp">
      <div className='nav'>
        <CartProvider>
                       <Router>
                               <Link to='/cart'>
                               <IconCart />
                                </Link>
                                <Nav />
                       <Routes>
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/" element={<Home />} />
                                <Route path="/app" element={<App />} />
                       </Routes>
                       </Router>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;

