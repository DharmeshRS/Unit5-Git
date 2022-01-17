import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContext} from '../context/AuthContext'
export const Login=()=>{
    const Navigate1=useNavigate()
    const {handleToken}=useContext(AuthContext)
    const submitForm=(e)=>{
        e.preventDefault()
       Navigate1('/searchjob')
            handleToken("abcdef")
    }
    return (<div>
        <div><h2>User Page</h2></div>
        <form>
        <div>
            <label  style={{margin:"35px"}}>Email</label>
            <input type="text" name="email"></input>
        </div>
        <div>
            <label  style={{margin:"21px"}}>Password</label>
            <input type="password" name="password"></input>
        </div>
        <div>
            <button onClick={submitForm}>Login</button>
        </div>
        </form>
    </div>)
}