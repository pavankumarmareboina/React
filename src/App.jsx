import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import More from "./pages/more";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cont" element={<Contact />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
