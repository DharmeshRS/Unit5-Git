import { Link } from "react-router-dom"

export const Users=()=>{
    
    return (
        <div>
            {[1,2,3,4].map((e)=>(
                <div key={e}>
                <Link to={`/user/${e}`}>User {e}</Link>
                </div>
            ))}
        </div>
    )
}