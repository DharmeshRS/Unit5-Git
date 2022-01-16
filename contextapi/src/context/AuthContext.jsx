import {createContext, useState} from 'react';

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [Login,setLogin]=useState("false");
    const toggleLogin=()=>{
        setLogin(Login==='false' ? "true" : "false")
    }
    return (<AuthContext.Provider value={{Login,toggleLogin}}>
        {children}
    </AuthContext.Provider>)
}