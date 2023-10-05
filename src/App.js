import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import RaoulPortfolio from "./components/RaoulPortfolio";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";




function App() {
  const navigate = useNavigate();

  

  useEffect(() => {
    
    if (window.location.pathname.startsWith('/dashboard')) {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
    
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RaoulPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
