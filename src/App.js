import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Error from './Error.js';
import Menu from './Menu.js';
import Service from './Service';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home name="Homes"/>}/>
      <Route path='/services' element={<Service name="Services"/>}/>
      <Route path='/about' element={<About name="About"/>}/>
      <Route path='' element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
