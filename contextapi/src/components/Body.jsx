import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
// import { Cart } from './Cart';
// import { Navbar } from './navbar';

export const Body=()=>{
    const {handleCartUpdate} =useContext(CartContext)
    const {toggleLogin} =useContext(AuthContext)
    return (
        <div>
        <button onClick={()=>{toggleLogin(true)}}>
              Login
          </button>
          <button onClick={()=>{handleCartUpdate(1)}}>
              Buy Now
          </button>

        </div>
    )
}