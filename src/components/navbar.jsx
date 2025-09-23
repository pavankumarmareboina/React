import React from "react";
import Content from "./content";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="bg-emerald-700 center pt-[40px] pb-[40px] justify-center flex ">
      <ul className="flex gap-12 text-[19px] tracking-[2px] ">
        <li><Link to='/home'>home</Link></li>
       <li> <Link to='/about'>about</Link></li>
        <li><Link to='/contact'>contact</Link></li>
        <li><Link to='/more'>more</Link></li>
      </ul>
    </nav>
    <Content/>
    <h1>Home page</h1>
    </>
  );
};
export default Navbar;
