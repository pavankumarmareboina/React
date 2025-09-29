import "./App.css";
import React, { useEffect, useState } from "react";
import Json from "./DataRender/data1";
import D2 from "./r2/d2";
import Navbar from "./components/navbar";
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import More from "./pages/more";

const App = () => {
  return (
   <>
   <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/Cont" element={<Contact />}/>
    <Route path="/more" element={<More />}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}
export default App;
