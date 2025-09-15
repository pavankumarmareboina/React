import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route, Link, Router } from "react-router-dom";
import { data } from "react-router-dom";
import Navbar from "./components/navbar";
import Cik from "./components/clickEvents";
import Contact from "./pages/contact";
import About from "./pages/about";
import More from "./pages/more";


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
       <Route path="/about"  element={<Contact/>}/>
        <Route path="/contact"  element={<About/>}/>
         <Route path="/more"  element={<More/>}/>
    </Routes>
   </BrowserRouter>
   {/* <Cik/> */}
   </>
  );
}

export default App;
