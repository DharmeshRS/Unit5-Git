import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (<>
        <div style={{display:"flex","justifyContent":"center","backgroundColor":"gray"}}>
            <div  style={{margin:"30px"}}>
                <h3><Link to="/">Home</Link></h3>
            </div>
            <div  style={{margin:"30px"}}>
                <h3><Link to="/searchjob">search Job</Link></h3>
            </div>
            <div  style={{margin:"30px"}}>
                <h3><Link to="/admin">Admin</Link></h3>
            </div>
            <div  style={{margin:"30px"}}>
                <h3><Link to="/login">Login</Link></h3>
            </div>
            <div  style={{margin:"30px"}}>
                <h3><Link to="/register">Register</Link></h3>
            </div>
        </div>
    </>)
}