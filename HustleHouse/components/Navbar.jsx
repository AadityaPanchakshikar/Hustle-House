import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <img src="" alt="Hustle House logo" />
      <p className="tagline"> # Stop Being a bewakoof.</p>
  
        <a className='e' href="#women">| Women</a>
        <a className='e' href="#men">| Men</a>
        <a className='e' href="#acce">| Accessories</a>

        <p className='help'>help?</p>
      
{/* cart buttom below */}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar