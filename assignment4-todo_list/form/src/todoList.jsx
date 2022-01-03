import React from 'react';


const todoList=(props)=>{
    return (<li><span>{props.text}</span><span><button>Delete</button></span></li>)
}

export default todoList;