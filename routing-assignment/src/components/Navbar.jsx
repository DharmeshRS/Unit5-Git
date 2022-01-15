import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (<div style={{display:"flex","justifyContent":"center","backgroundColor":"gray","height":"50px"}}>
        <div>
            <h3><Link to="/">Home</Link></h3>
        </div>
        <div style={{marginLeft:"50px",marginRight:"50px"}}>
        <h3><Link to="/about">About</Link></h3>
        </div>
        <div>
        <h3><Link to="/contact">Contact</Link></h3>
        </div>
        <div style={{marginLeft:"50px",marginRight:"50px"}}>
        <h3><Link to="/users">Users</Link></h3>
        </div>
        </div> 
    )
}