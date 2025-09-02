import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import About from './pages/aboutUs'; 
import Products from './pages/products';
import More from './pages/more';
import Home from "./components/navbar";

function App() {
  return (
   <BrowserRouter>
   <Home/>
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/more' element={<More />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
