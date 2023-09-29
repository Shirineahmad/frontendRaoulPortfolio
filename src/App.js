
import './App.css';
import RaoulPortfolio from './components/RaoulPortfolio';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<RaoulPortfolio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    
    </div>
  );
}

export default App;