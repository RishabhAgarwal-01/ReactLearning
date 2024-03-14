import React, { useState } from "react" 
import ReactDOM from 'react-dom/client'
import Bar from "./Components/Bar";

function App() {
  const [color, setColor]= useState("olive");
 
  const handleBackgroundColor=(newColor)=>{
    setColor(newColor);
  }
  
  return (
      <div className="flex justify-center w-full h-screen duration-200 bg-white 
      items-center" style={{backgroundColor: color}}>
      <Bar onChangeColor={handleBackgroundColor}/>
      </div>
  )
}

export default App
