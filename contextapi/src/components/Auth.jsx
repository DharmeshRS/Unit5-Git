import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export const Auth=()=>{
    const {auth}=useContext(AuthContext)
    return (
        <div>
            login:{auth}
        </div>
    )
}