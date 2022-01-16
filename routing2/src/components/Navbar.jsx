import { Link } from "react-router-dom"

export const Navbar=()=>{
           return (<div style={{display:"flex","justifyContent":"center","backgroundColor":"gray"}}>
                <div>
                    <h3><Link to="/">Home</Link></h3>
                </div>
                
                <div style={{marginLeft:"50px",marginRight:"50px",marginTop:"-10px"}}>
                <h1>Private Routing Assignment</h1>
                </div><div style={{marginLeft:"50px",marginRight:"50px"}}>
                <h3><Link to="/login">Login</Link></h3>
                </div>
                <div>
                <h3><Link to="/dashboard">Dashboard</Link></h3>
                </div>
                <div style={{marginLeft:"50px",marginRight:"50px"}}>
                <h3><Link to="/user">Users</Link></h3>
                </div>
                <div style={{marginLeft:"50px",marginRight:"50px"}}>
                <h3><Link to="/setting">Setting</Link></h3>
                </div>
                </div> 
            )
            
}