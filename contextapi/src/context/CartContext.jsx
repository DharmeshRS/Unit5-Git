import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartContextProvider=({children})=>{
    const [cart,setCart]=useState(100)
    const handleCartUpdate=(value)=>{
                setCart(cart+value)
    }
    return (<CartContext.Provider value={{cart,handleCartUpdate}} >
                {children}
    </CartContext.Provider>)
}