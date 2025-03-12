import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Burgers from "./components/Burgers"; 

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Burgers />  
      <Footer />
    </>
  );
}

export default App;
