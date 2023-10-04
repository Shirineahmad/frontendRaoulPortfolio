import React from "react";
import "./App.css";
import RaoulPortfolio from "./components/RaoulPortfolio";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RaoulPortfolio />} />
        <Route path="/login" element={<Login />} />
        {localStorage.getItem('isLoggedIn') ? (
        <Route path="/dashboard/*" element={<Dashboard />}/>) : (
          console.log("hello")  
        )}
      </Routes>
    </div>
  );
}

export default App;
