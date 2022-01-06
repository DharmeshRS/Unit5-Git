import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import {GroceryList}  from './GroceryList'

export const Grocery =()=>{
    const [list,setList]=useState([])
    const handleClick=(data)=>{
        setList([...list,data])
    }

    const handleDelete=(id)=>{
        // alert("Delete It")
        setList((list)=>{
            return list.filter((el,index)=>{
                    return index !== id
            })
        })
    }
    return (
        <div className="innerDiv">
            <GroceryInput getData={handleClick }/>
            {list.map((e,index)=>(
                <div className="grocerylist">
                    <GroceryList title={e} key={index} id={index} onSelect={handleDelete} />
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </div>
                ))} 
        </div>
    )
}