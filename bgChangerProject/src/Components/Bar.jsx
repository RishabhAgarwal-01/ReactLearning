import React, { useState } from 'react'
import Buttons from './Buttons'

function Bar({onChangeColor}) {
    const [currentColor, setCurrentColor]= useState('');
    
    const handleChangeColor = (newColor) => {
        setCurrentColor(newColor);
        onChangeColor(newColor); // Pass the new color to the parent component
      };
    //   console.log(onChangeColor)

  return (
    <div className="fixed rounded-xl bg-white flex justify-center
    bottom-12 px-2 py-4 my-20 gap-5 w-1/2 shadow-lg">
    <Buttons color="red" aFunction={handleChangeColor}/>
    <Buttons color="blue" aFunction={handleChangeColor}/>
    <Buttons color="orange" aFunction={handleChangeColor}/>
    <Buttons color="green" aFunction={handleChangeColor}/>
    <Buttons color="black" aFunction={handleChangeColor}/>
    </div>
  )
}

export default Bar