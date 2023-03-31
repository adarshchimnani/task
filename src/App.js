import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import { Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
