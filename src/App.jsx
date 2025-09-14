import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import { data } from "react-router-dom";
import Navbar from "./components/navbar";
import Cik from "./components/clickEvents";


function App() {
  return (
   <>
   {/* <Navbar/> */}
   <Cik/>
   </>
  );
}

export default App;
