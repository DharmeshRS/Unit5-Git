import React from 'react';
import {useState} from 'react'

const App=()=>{
  const [Input, setInput] = useState("")
  const [items,setItems]= useState([])
  const itemEvent=(event)=>{
    event.preventDefault()
    console.log("clicked")
    setInput(event.target.value)
  }

  const listOfItems=(event)=>{
    event.preventDefault()
    setItems((oldItems)=>{
      return [...oldItems,Input]
    });
    setInput("");
  };

  const deleteItem=(event)=>{
      console.log("delete")
  }


    return (
      <>
      <div className='App'>
        <div><h1>ToDo List</h1></div>
        <form className='App'>
        <div>
          <input type="text" placeholder='Add ToDo' onChange={itemEvent}/>
          <button type='submit' onClick={listOfItems}>Add</button>
        </div>

        </form>
      </div>
      <div>
        <ol>
          {items.map((itemValue,i)=>{
              return(
                <li><span id={i} text={itemValue} onSelect={deleteItem} >{itemValue} key={i} </span><span><button onClick={deleteItem}>Delete</button></span></li>
              )
          })}
        </ol>
      </div>
      </>
    )
}

export default App;
