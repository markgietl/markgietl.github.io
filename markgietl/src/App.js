import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
