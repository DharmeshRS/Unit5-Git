import { useParams,Navigate } from "react-router-dom";
import {useContext, useEffect,useState} from 'react';
import { AuthContext } from "../context/AuthContext";
export const UserDetails=()=>{
    const {id}=useParams();
    console.log(id)
    const [user,setUser]=useState(" ")
    // const {token}=useContext(AuthContext)
    console.log("user",user)
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(d=>d.json())
        .then(d=>{setUser(d.data)})
    },[id])
    // if(!token){
    //     return <Navigate to={"/login"} />
    // }
    return (<div>
        <h2>User Details</h2>
        
               <img src={user.avatar} alt="not available"/>
               <h2>{user.first_name}{user.last_name}</h2>
               <h3>Contact :{user.email}</h3>
    </div>)
}