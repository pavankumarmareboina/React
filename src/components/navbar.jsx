import React from "react";
import { Link, useLocation } from "react-router-dom";
function Home() {
  return (
    <>
      <nav className=" text-[25px] flex justify-evenly h-30 items-center bg-emerald-600 sticky top-0">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/more">Moren</Link>
      </nav>
    </>
  );
}
export default Home;
