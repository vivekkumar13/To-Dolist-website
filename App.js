import React, { useState } from "react";
import Todolist from "./Todolist";
const App = () => {
   const [inputList,setinputList]=useState("");
   const [Item,setItem]=useState([]);

   const itemEvent=(event)=>{
    setinputList(event.target.value)
   }
   const listofitem=()=>{
    setItem((olditem)=>{
        return [...olditem,inputList]
       
    });
    setinputList("");
   }
    return (
        <>
            <div className="main_div">
                <div className="centre_div">
                    <br />
                    <h1>Todo-list</h1>
                    <br />
                     <input type="text" placeholder="Enter the item" onChange={itemEvent} value={inputList}/>
                     <button onClick={listofitem}>+</button>
                <ol>
                    {/* <li>{inputList}</li> */}
                       { Item.map((itemvalue)=>{
                         return   <Todolist text={itemvalue} />
                       })}                
                </ol>
                </div>
            </div>            
        </>
    )
}
export default App;
