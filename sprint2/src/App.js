// import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [allData,setAllData]=useState({})
 
  const changeData=(event)=>{
     const {name,value}=event.target
     setAllData({...allData,[name]:value})
  }
  
  const onsubmits=(event)=>{
    event.preventDefault();
    console.log(allData)
    fetch("http://localhost:8000/recipe",{
      method:"POST",
      body:JSON.stringify(allData),
      headers:{
        "content-type":"application/json",
      },
    }).then(()=>{
      setAllData("");
      alert("recipe Uploaded...")
    })

  }

    const [list,setList]=useState([])
    
    fetch('http://localhost:8000/recipe')
    .then((res)=>res.json())
    .then((data)=>setList(data))
    
      const [details,setDetails]=useState({})
      
      const showData=(ddata)=>{
        ddata.preventDefault();
        setDetails(ddata)
        console.log(ddata)
      }


  return (
    <div className="App" onSubmit={onsubmits}>
    <div>
        <div className='Div1'>
                  <div>
                      <h1>Add recipe </h1>
                  </div>
                  <div>
                      <form>
                      <div>
                          <label>Title</label>
                          <input type="text" placeholder="Enter Title Of recipe" name='title' onChange={changeData}/>
                      </div>
                      <div>
                          <label>Ingredients</label>
                          <input type="text" placeholder="Ingredients" name="ingredient" onChange={changeData} />
                      </div>
                      <div>
                          <label>Time to cook</label>
                          <input type="text" placeholder="Time To cook" name='time' onChange={changeData} />
                      </div>
                      <div>
                      <label>Image</label>
                          <input type="text" placeholder="enter url" name='img' onChange={changeData} />
                      </div>
                      <div>
                      <label>Instructions</label>
                          <textarea rows={6} type="text" placeholder='Instructions' name='instruction' onChange={changeData}/>
                      </div>
                      <div>
                        <button type="submit">submit</button>
                      </div>
                          
                      </form>
                  </div>
                </div>
                <div className='Div2'>
                  <h1>Description <button>sort</button></h1>
                
                <div>
                {list.map((re)=>{
                    return (
                      <div style={{border:"1px solid black"}} className='innerdiv'  onClick={showData} details={details}>
                        <div className='innerSpan1'>
                            {re.title}
                        </div>
                     
                        <div className='innerSpan2'>
                            {re.time}
                    </div>
                    <div className='innerSpan3'>
                            <img src={re.img} style={{width:"150px"}}/>
                    </div>
                      </div>)
                })}
            </div>
        </div>
    </div>            
    <div>
      All Information
    </div>
    </div>



           
   
  );
}

export default App;
