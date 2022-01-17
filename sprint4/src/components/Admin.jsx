import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Admin=()=>{
    const Navigate1=useNavigate()
    const {handleToken}=useContext(AuthContext)
    const submitForm=(e)=>{
        e.preventDefault()
       Navigate1('/dashboard')
       handleToken("abcdef")
    }
    return (<div className="">
        <div><h2>Admin Page</h2></div>
        <form onSubmit={submitForm}>
        
        <div>
            <label style={{margin:"35px"}}>Email</label>
            <input type="text" name="email"></input>
        </div>
        <div>
            <label style={{margin:"20px"}}>Password</label>
            <input type="password" name="password"></input>
        </div>
        <div>
            <button>Login</button>
        </div>
        </form>
    </div>)
}