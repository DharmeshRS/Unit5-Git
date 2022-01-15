// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import {useEffect,useState} from 'react';
// export const ProductDetails=()=>{
    
//     const {id}=useParams();
//     console.log(id)
//     const [proddetail,setproddetail]=useState({})
//         console.log("user",proddetail)
//         useEffect(()=>{
//                 fetch(`http://localhost:3000/data/${id}`)
//                 .then(d=>d.json())
//                 .then(d=>{setproddetail(d.data)})
//             },[])
//             console.log("Dharmesh",proddetail)
//             return (<div key={proddetail.id}>
//                         <h2>Product Details</h2>
                        
//                         <img src={proddetail[id].pimg} alt="not available"/>
//                               <h2>{proddetail[id].pname}</h2>
//                               <h3>Contact :{proddetail[id].price}</h3>
//                   </div>)
//                 }

// //    
// //     
// //     // console.log("userdetails:",id)
// //     // console.log("next",user)
// //     