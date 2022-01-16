import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [counter,setCounter]=useState(5)
  useEffect(() => {
    const int=setInterval(()=>{
      setCounter((prev)=>{
        if(prev===0){
          alert("limit Exceed")
          clearInterval(int)
          return 0
        }
        return prev-1})
      },1000)
    },[])
  return (
    <div className="App">
     <h1>{counter}</h1>
    </div>
  );
}

export default App;
