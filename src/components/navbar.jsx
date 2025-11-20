import React from "react";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [theme , setTheme] = useState(true)
  const  toogleTheme = () =>{
     setTheme((prev) => !prev);
  }
  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add('modeli')
    }
    else{
      document.documentElement.classList.remove('modeli')
    }
  })
  return(
    <nav className="bg-blue-300 h-[100px] content-center">
      <ul className="flex justify-end-safe text-[20px] gap-[32px] p-12">
        <Link to='/about'>About Page</Link>
        <Link to='/Cont'>Contact Page</Link>
        <Link to='/more'>More Page</Link>
        <p onClick={toogleTheme}><MdLightMode /></p>
      </ul>
    </nav>
  )
}
export default Navbar
