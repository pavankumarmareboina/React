import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route, Link, Router } from "react-router-dom";
import Json from "./DataRender/data1";
import D2 from "./r2/d2";
import Navbar from "./components/navbar";
// import { data } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Cik from "./components/clickEvents";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import More from "./pages/more";


const App = () => {
  return (
   <>
   <Navbar />
   <Json />
   <D2 />
   {/* <BrowserRouter>
   <Navbar/>
    <Routes>
       <Route path="/about"  element={<Contact/>}/>
        <Route path="/contact"  element={<About/>}/>
         <Route path="/more"  element={<More/>}/>
    </Routes>
   </BrowserRouter> */}
   {/* <Cik/> */}
   </>
  );
}

export default App;
