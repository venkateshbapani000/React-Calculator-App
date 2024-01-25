import React from "react"
import Keypad from "./user"
import "./App.css"
import { useState } from "react"
function App(){
   let [input,setInput]=useState("")
       function handleClick(value){
        setInput(input + value)
       }
       
       
       function calculate(value){
        let outputval=eval(input)
        setInput(outputval)
       }
       function handleClear(value){
        setInput("")
       }
       


  return(
       
       <div className="container">
        <h1>calculator App using React</h1>
        <div className="calculator">
          <input type="text" value={input} className="output" readOnly/>
          <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear}></Keypad>
        
        </div>
      </div>
      

  )
}
export default App