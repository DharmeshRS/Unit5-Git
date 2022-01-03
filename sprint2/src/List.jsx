import { useState } from 'react'
// import recipe from '../data/db.json'
export const List=({})=>{
    const [list,setList]=useState([])
    fetch('http://localhost:8000/recipe')
    .then((res)=>res.json())
    .then((data)=>setList(data))
    return (
        <div>
            {list.map((re)=>{
                <div>
                    <div>
                        {re.title}
                    </div>
                   
                    <div>
                        {re.time}
                    </div>
                   </div>
            })}
        </div>
    )
}

export default List;