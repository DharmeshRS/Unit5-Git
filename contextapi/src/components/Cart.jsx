import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart=()=>{
    const {cart}=useContext(CartContext)
    return (
        <div>
            Cart:{cart}
        </div>
    )
}