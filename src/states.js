import React, { useState } from 'react'

export default function States() {

    const [x, setX] = useState(10)  
    function double(){
        setX(x*2)
    }

    return (
        <>
             <h1>value = {x}</h1>
             <button onClick={double}>Double</button>
        </>
    )
}