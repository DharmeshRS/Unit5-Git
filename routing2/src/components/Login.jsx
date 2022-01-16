import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import {useNavigate,useLocation} from 'react-router-dom'
export const Login = () => {
    const [form, setForm] = useState({})
    const {handleToken}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                </div>
                <div>
                    <button onClick={()=>{
                        //fetch here
                        handleToken("123261")
                    }}>SignIn</button>
                </div>
            </div>
        </div>
    )
}