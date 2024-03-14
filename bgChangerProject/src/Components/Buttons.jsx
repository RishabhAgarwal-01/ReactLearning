import React from 'react'

function Buttons({ color, aFunction}) {
    return (
        <>
            <button className="bg-black text-white rounded flex 
    justify-center shadow-lg h-10 items-center min-w-20" style={{ backgroundColor: color }}
                onClick={() => aFunction(color)}  //this callback passes the color to the bar component
            >{color}</button>
        </>
    )
}

export default Buttons