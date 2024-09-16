import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Secret from './components/Secrets'
import './App.css';




const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Secret />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/secrets" element={<Secret />} />
       
      </Routes>
    </div>
  );
};

export default App;
