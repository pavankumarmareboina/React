import React from "react";
import { useState } from "react";

const Cik = ()=>{
    const [name , setName] = useState('')
    const set = ()=>{{
        setName('use useState in')
    }}
    return(
        <>
        <p >Name : {name}</p>
        <button onClick={set}>Click me </button>
        </>
    )
}
export default Cik;