import { useNavigate } from "react-router-dom"

export const Admin=()=>{
    const Navigate1=useNavigate()
    const submitForm=(e)=>{
        e.preventDefault()
       Navigate1('/dashboard')
    }
    return (<div>
        <div><h2>Admin Page</h2></div>
        <form onSubmit={submitForm}>
        
        <div>
            <label>Email</label>
            <input type="text" name="email"></input>
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password"></input>
        </div>
        <div>
            <button>Login</button>
        </div>
        </form>
    </div>)
}