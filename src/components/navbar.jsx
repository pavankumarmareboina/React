import Content from "./content";
import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="bg-emerald-700 center pt-[40px] pb-[40px] justify-center flex ">
      <ul className="flex gap-12 text-[19px] tracking-[2px] ">
        <li><a href=""></a>Home</li>
        <li><a href=""></a>Products</li>
        <li><a href=""></a>Call Us</li>
        <li><a href=""></a>Details</li>
        <li><a href=""></a>More</li>
      </ul>
    </nav>
    <Content/>
    </>
  );
};
export default Navbar;
