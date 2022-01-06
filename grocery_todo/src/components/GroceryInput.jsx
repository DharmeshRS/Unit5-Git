import { useState } from "react";

export const GroceryInput=({getData})=>{
    const [text,setText]=useState("")
    const handleChange=(e)=>{
            setText(e.target.value)
            console.log(e.target.value)
    }

    const handleClick=()=>{
        getData(text)
        setText("")
    }
    return (
        <>
            <input type='text' placeholder="Enter Grocery" onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
};