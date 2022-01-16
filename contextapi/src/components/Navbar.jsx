import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import { Auth } from './Auth';

import { Cart } from './Cart';

export const Navbar=()=>{
    const {Login}=useContext(AuthContext)
    return (
        <div>
            Navbar 
            Login:{Login}
            <Cart />
        </div>
    )
}