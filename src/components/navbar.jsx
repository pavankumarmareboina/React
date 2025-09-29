import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="bg-blue-300 h-[100px] content-center">
      <ul className="flex justify-end-safe text-[20px] gap-[32px] p-12">
        <Link to='/about'>About Page</Link>
        <Link to='/Cont'>Contact Page</Link>
        <Link to='/more'>More Page</Link>
      </ul>
    </nav>
  )
}
export default Navbar
