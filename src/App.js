import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Menu from './Menu.js';
import Service from './Service';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path='SearchAnything-React/' element={<Home name="Home"/>}/>
      <Route path='SearchAnything-React/services' element={<Service name="Services"/>}/>
      <Route path='SearchAnything-React/about' element={<About name="About"/>}/>
      <Route path='SearchAnything-React/index' element={<Home name="Homes"/>}/>
    </Routes>
    </>
  );
}

export default App;
