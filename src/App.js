import React from "react";
import "./css/Testimonials.css";

import "./App.css";
import RaoulPortfolio from "./components/RaoulPortfolio";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RaoulPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
