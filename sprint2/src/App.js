// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [allData,setAllData]=useState({
    title:"",
    ingredient:"",
    time:"",
    // image:""
    instruction:""
  })

  const changeData=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setAllData((prev)=>{
        return{
          ...prev,
          [name]:value,
        }
      })
  }

  const onsubmits=(event)=>{
    event.preventDefault();
    alert("Data Saved")
  }
  return (
    <div className="App" onSubmit={onsubmits}>
            <div className='Div1'>
              <div>
                  <h1>Add recipe</h1>
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
                  {/* <div>
                  <label>Image</label>
                      <input type="file" />
                  </div> */}
                  <div>
                  <label>Instructions</label>
                      <input type="text" placeholder='Instructions' name='instruction' onChange={changeData}/>
                  </div>
                  <div>
                    <button type="submit">submit</button>
                  </div>
                      
                  </form>
              </div>
            </div>




            <div className='Div2'>
              <h1>Description</h1>
            </div>
            
    </div>
  );
}

export default App;
