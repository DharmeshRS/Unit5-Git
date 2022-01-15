import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Home=()=>{
    const [product,setProduct]=useState([])
    console.log("user",product)
    useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then(d=>d.json())
        .then(d=>{setProduct(d)})
    },[])
    console.log(product)
    return(
        <div style={{display:"flex",flexWrap: "wrap"}}>
        {product.map((re)=>{
          return <span style={{margin:"10px","border":"1px solid black"}}>
                        <Link to={`/products/${re.id}`} key={re.id}>
                            <div>
                            <div style={{width:"50%"}}>
                                <img src={re.pimg} style={{width:"300px"}}/>
                            </div>
                            <div><h2>{re.pname}</h2> </div>
                            <div> <h3>Rs.{re.price}</h3></div>
                            </div>
                            </Link>
                            </span>
        })}
        </div>
    )
    
        
        
                //     return (
                //         {product.map((re)=>{
                //       <div style={{border:"1px solid black"}} className='innerdiv'>
                //         <div className='innerSpan1'>
                //             {re.pname}
                //         </div>
                     
                       
                //     <div className='innerSpan3'>
                //             <img src={re.pimg} style={{width:"150px"}}/>
                //     </div>
                //      <div className='innerSpan2'>
                //             {re.price}
                //     </div>
                //       </div>
                // })})
}
           
