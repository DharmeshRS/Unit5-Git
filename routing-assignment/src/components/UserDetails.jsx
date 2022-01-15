import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
export const UserDetails=()=>{
    const {id}=useParams();
    const [user,setUser]=useState(" ")
    console.log("user",user)
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(d=>d.json())
        .then(d=>{setUser(d.data)})
    },[id])
    // console.log("userdetails:",id)
    // console.log("next",user)
    return (<div>
        <h2>User Details</h2>
        
               <img src={user.avatar} alt="not available"/>
               <h2>{user.first_name}{user.last_name}</h2>
               <h3>Contact :{user.email}</h3>
    </div>)
}