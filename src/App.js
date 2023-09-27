
import './App.css';
import RaoulPortfolio from './components/RaoulPortfolio';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path="/" element={<RaoulPortfolio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
      
    
    </div>
  );
}

export default App;