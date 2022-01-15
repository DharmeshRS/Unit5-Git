import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
export const Products=()=>{
    const {id}=useParams()
    console.log(id)
    const [proddetail,setproddetail]=useState([])
    console.log("user",proddetail)
    useEffect(()=>{
        fetch(`http://localhost:3000/data/${id}`)
        .then((res)=>res.json())
        .then((data)=>setproddetail(data))
        },[id])
        console.log("Dharmesh",id)
        console.log("Dharmesh",proddetail)
        return (<div key={proddetail.id}>
                    <h2>Product Details</h2>
                    
                    <img src={proddetail.pimg} alt="not available"/>
                          <h2>{proddetail.pname}</h2>
                          <h3>{proddetail.price}</h3>
                          <span><button>Add to Cart</button><button>Buy Now</button></span>
              </div>)
    // return (<div>Products {id}</div>)
}