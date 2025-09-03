import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";



function App() {
  return (
   <>
   <Home name ="alias"/>
   <Home />
   <Home />
   <Home />
   </>
  );
}

export default App;
