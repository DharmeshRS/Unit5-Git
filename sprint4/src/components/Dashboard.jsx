import {useState} from  'react'
export const Dashboard=()=>{
    const [allData,setAllData]=useState({})
    const changeData=(event)=>{
        const {name,value}=event.target
        setAllData({...allData,[name]:value})
     }
     const onsubmits=((event)=>{
        event.preventDefault();
        console.log(allData)
        fetch("http://localhost:8000/data",{
          method:"POST",
          body:JSON.stringify(allData),
          headers:{
            "content-type":"application/json",
          },
        }).then(()=>{
          setAllData("");
          alert("job uploaded")
        })
     })
   
    return (
        <div>
        <form onSubmit={onsubmits}>
                <div>
                    <label>Company Name</label>
                    <input type="text" onChange={changeData} name="companyname"/>
                </div>
                <div>
                    <label>job-Title</label>
                    <input type="text" onChange={changeData} name="jobtitle" />
                </div>
                <div>
                    <label>salary</label>
                    <input type="text" onChange={changeData} name="salary" />
                </div>
                <div>
                    <label>Job Description</label>
                    <input type="text" onChange={changeData} name="jobdesc" />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" onChange={changeData} name="location" />
                </div>
                <div>
                    <label>job Type</label>
                    <input type="text" onChange={changeData} name="jobtype" />
                </div>
                <div>
                   
                <button type="submit">submit</button>
                </div>
                </form>
        </div>
    )
}