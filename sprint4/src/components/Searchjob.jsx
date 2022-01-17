import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

export const SearchJob=()=>{
    const [job,setjob]=useState([])
    useEffect(() => {
        fetch("http://localhost:8000/data")
        .then((res)=>res.json())
        .then((data)=>{setjob(data)})
    }, [])
    return (<div>
                    <div>SearchJob Page</div>
                    <div style={{display:"flex"}}>
                   {job.map((re)=>{
                       return(
                           <span style={{margin:"10px",textDecoration:"None"}}>
                           <Link to={`/job/${re.id}`} key={re.id}>
                           <div style={{backgroundColor:"gray"}}>
                                <div><h1>Company : {re.companyname}</h1></div>
                                <div><h5>Job-Title:{re.jobtitle}</h5></div>
                                <div><h5>Salary :{re.salary}</h5></div>
                                <div><h5>{re.location}</h5></div>
                           </div>
                           </Link>
                           </span>
                       )
                   })}
                   </div>
            </div>)
}